import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
  test(`404 editorial: responsive y accesibilidad a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const response = await page.goto("/pagina-que-no-existe");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Nos salimos del viñedo.");
    await expect(page.getByRole("link", { name: "Volver al inicio", exact: true })).toHaveAttribute("href", "/");
    await expect(page.getByRole("link", { name: "Explorar nuestros vinos" })).toHaveAttribute("href", "/#shop");
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    const image = page.getByRole("img", { name: /Una persona recorre un sendero/ });
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(el => el instanceof HTMLImageElement && el.complete && el.naturalWidth > 0)).toBe(true);
    const scan = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(scan.violations).toEqual([]);
  });
}

test("404: retorno al inicio mediante teclado", async ({ page }) => {
  await page.goto("/pagina-que-no-existe");
  const home = page.getByRole("link", { name: "Volver al inicio", exact: true });
  await home.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Viñedos de todo el mundo");
});