import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { products } from "../src/data/products";
import { formatCurrency } from "../src/utils/formatCurrency.js";

test("entrada del hero y preferencia de movimiento reducido", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  const response = await page.goto("/");
  const html = await response!.text();
  // Framer renders the initial transforms, then animates them to identity.
  expect(html).toContain("translateY(18px)");
  expect(html).toContain("translateY(32px) rotate(-3deg)");
  expect(html).toContain("scale(0.9)");
  const elements = page.locator(".hero-eyebrow-entrance, .hero-title-entrance, .hero-bottle-entrance, .hero-circle-entrance");
  await expect(elements).toHaveCount(4);
  for (const element of await elements.all()) {
    await expect(element).toHaveCSS("animation-name", "none");
    await expect.poll(() => element.evaluate(el => {
      const transform = getComputedStyle(el).transform;
      return transform === "none" || new DOMMatrix(transform).isIdentity;
    })).toBe(true);
    await expect(element).toHaveCSS("opacity", "1");
  }

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  for (const element of await elements.all()) {
    await expect(element).toHaveCSS("transform", "none");
    await expect(element).toBeVisible();
  }
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`UpToTop: scroll, teclado y movimiento ${reducedMotion}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion });
    await page.goto("/");
    const button = page.getByRole("button", { name: "Volver arriba" });
    await expect(button).toHaveCount(0);
    await page.evaluate(() => window.scrollTo({ top: 480, behavior: "instant" }));
    await expect(button).toHaveCount(0);
    await page.evaluate(() => window.scrollTo({ top: 700, behavior: "instant" }));
    await expect(button).toBeVisible();
    const bounds = await button.boundingBox();
    expect(bounds).not.toBeNull();
    expect(bounds!.width).toBeGreaterThanOrEqual(44);
    expect(bounds!.height).toBeGreaterThanOrEqual(44);
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(390);
    expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(844);
    await button.focus();
    await page.keyboard.press("Enter");
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect(button).toHaveCount(0);
    await expect(page.locator("#contenido")).toBeFocused();

    // Also handle an initial anchor / restored scroll position after hydration.
    await page.goto("/#shop");
    await expect(button).toBeVisible();
    await page.reload();
    await expect(button).toBeVisible();
  });
}

test("formateador de pesos chilenos", () => {
  expect(formatCurrency(0)).toBe("$0");
  expect(formatCurrency(24990)).toBe("$24.990");
  expect(formatCurrency(24990.5)).toBe("$24.991");
  expect(formatCurrency(-1000)).toBe("$-1.000");
  expect(() => formatCurrency(Number.NaN)).toThrow(TypeError);
  expect(() => formatCurrency(Number.POSITIVE_INFINITY)).toThrow(TypeError);
});

test("precios CLP e iconos de navegación", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#products-currency")).toHaveText("Precios en pesos chilenos (CLP).");
  await expect(page.locator('p[aria-describedby="products-currency"]')).toHaveText(
    products.map(product => formatCurrency(product.price)),
  );
  await expect(page.getByRole("button", { name: "Vinos anteriores" }).locator("svg")).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Vinos siguientes" }).locator("svg")).toHaveCount(1);
  await expect(page.locator("#home a svg")).toHaveAttribute("aria-hidden", "true");
  await expect(page.locator("#historia a svg")).toHaveAttribute("aria-hidden", "true");
});

for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
  test(`responsive y accesibilidad a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("main")).toHaveCount(1);
    // Exercise lazy-loaded content rather than inspecting only the first viewport.
    for (const section of await page.locator("main section").all()) {
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible();
      expect(await section.evaluate(el => el.getBoundingClientRect().right)).toBeLessThanOrEqual(width + 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    const broken = await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute("href")!).filter(href => href === "#" || !document.getElementById(href.slice(1))));
    expect(broken).toEqual([]);
    const duplicateIds = await page.locator("[id]").evaluateAll(elements => {
      const ids = elements.map(el => el.id);
      return ids.filter((id, i) => ids.indexOf(id) !== i);
    });
    expect(duplicateIds).toEqual([]);
    const scan = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(scan.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("menú móvil: foco, Escape, enlace y cambio a escritorio", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menú" });
  const menu = page.getByRole("dialog");
  await trigger.click();
  await expect(menu).toBeVisible();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  expect(await menu.evaluate(el => el.contains(document.activeElement))).toBe(true);
  await menu.click({ position: { x: 10, y: 80 } });
  await expect(menu).toBeVisible();
  await page.mouse.click(8, 150);
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  const scan = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(scan.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await menu.getByRole("link", { name: "Vinos", exact: true }).click();
  await expect(menu).not.toBeVisible();
  await expect(page).toHaveURL(/#shop$/);
  await expect(page.locator("#shop")).toBeFocused();
  await expect.poll(() => page.locator("#shop").evaluate(el => Math.round(el.getBoundingClientRect().top))).toBeLessThan(240);
  await trigger.click();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(menu).not.toBeVisible();
  expect(await page.locator("body").evaluate(el => el.style.overflow)).not.toBe("hidden");
});

test("carrusel, acordeón, eventos y galería con teclado", async ({ page }) => {
  await page.goto("/");
  const next = page.getByRole("button", { name: "Vinos siguientes" });
  await next.click();
  await expect(page.getByRole("button", { name: /^Ir a la posición 2 de/ })).toHaveAttribute("aria-current", "true");
  const carousel = page.locator("#products-slides");
  await carousel.focus();
  await page.keyboard.press("Home");
  await expect(page.getByRole("button", { name: /^Ir a la posición 1 de/ })).toHaveAttribute("aria-current", "true");
  const accordion = page.locator("#conocenos details").last();
  await accordion.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(accordion).toHaveAttribute("open", "");
  const event = page.locator("#events details").first();
  await event.locator("summary").click();
  await expect(event).toHaveAttribute("open", "");
  await expect(event).toContainText("Valle del Maipo");
  const photo = page.getByRole("button", { name: /^Ver imagen 1/ });
  await photo.focus();
  await page.keyboard.press("Enter");
  const close = page.getByRole("button", { name: "Cerrar visor" });
  await expect(close).toBeVisible();
  const scan = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(scan.violations).toEqual([]);
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("Escape");
  await expect(close).not.toBeVisible();
  await expect(photo).toBeFocused();
});

test("el enlace de historia no abre la galería", async ({ page }) => {
  await page.goto("/");
  const history = page.locator("#gallery").getByRole("link", { name: "Conoce nuestra historia" });
  await expect(history).toHaveAttribute("href", "#historia");
  await history.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#historia$/);
  await expect(page.locator("#historia")).toBeInViewport();
  await expect(page.getByRole("button", { name: "Cerrar visor" })).toHaveCount(0);
});

test("SEO, imágenes, cabeceras y rutas", async ({ page, request }) => {
  const response = await page.goto("/");
  expect(response?.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response?.headers()["x-frame-options"]).toBe("DENY");
  await expect(page).toHaveTitle(/Vin Rouge/);
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Vin Rouge/);
  const sitemapResponse = await request.get("/sitemap.xml");
  const sitemap = await sitemapResponse.text();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    process.env.SITE_NOINDEX === "true" ? "noindex, follow" : "index, follow",
  );
  if (process.env.SITE_NOINDEX === "true") expect(sitemap).not.toContain("<loc>");
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(el => el instanceof HTMLImageElement && el.complete && el.naturalWidth > 0)).toBe(true);
  }
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Allow: /");
  expect(await robots.text()).not.toContain("Disallow: /");
  expect(sitemapResponse.status()).toBe(200);
  const og = await request.get("/opengraph-image");
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/pagina-inexistente")).status()).toBe(404);
});

test("contenido visible sin JavaScript y movimiento reducido", async ({ browser, page }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const noJs = await context.newPage();
  await noJs.goto("http://127.0.0.1:3100");
  for (const heading of await noJs.locator("main h1, main h2").all()) await expect(heading).toBeVisible();
  await context.close();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.locator("html").evaluate(el => getComputedStyle(el).scrollBehavior)).toBe("auto");
});