# Vin Rouge

Landing editorial en español sobre vinos y experiencias de viñedo. Next.js App Router, React, TypeScript y Tailwind CSS. La identidad conserva Libre Baskerville, ilustraciones originales y paleta crema, marrón y ocre.

## Desarrollo y validación

- Node.js 20.9 o posterior compatible con Next.js; instalar dependencias con `npm ci`.
- `npm run dev`: desarrollo en el puerto 3000.
- `npm run lint`: ESLint.
- `npm run typecheck`: generar tipos de rutas y comprobar TypeScript.
- `npm run build`: compilación de producción.
- `npm run start`: servir la compilación.
- `npm test`: pruebas de navegador y del formateador CLP contra producción en el puerto 3100. Requiere un build previo y Google Chrome instalado. En entornos sin Chrome, instalar Chromium de Playwright y ajustar `channel` en [playwright.config.ts](playwright.config.ts).
- `npm run test:ui`: interfaz de Playwright.
- `npm audit --omit=dev`: vulnerabilidades de dependencias de producción.

La tarea de VS Code «QA: producción local» sirve el build en http://127.0.0.1:3100. No recompilar con un servidor de producción antiguo en ejecución: reiniciarlo después del build para no mezclar manifiestos y chunks. Playwright lo inicia automáticamente si el puerto está libre.

## Configuración de despliegue

Consultar [.env.example](.env.example). Definir `SITE_URL` con el **origen HTTPS oficial** antes de compilar. No admite rutas, credenciales, parámetros ni fragmentos.

Sin origen confirmado se mantienen `noindex`, bloqueo de rastreo y sitemap vacío, deliberadamente. Next.js puede advertir que resuelve la imagen social automática contra localhost en esa situación: **no publicar así**. Con `SITE_URL`, el build genera canonical, URLs sociales absolutas, sitemap, robots indexable y JSON-LD `WebSite`. Volver a compilar cuando cambie el origen.

No existen proveedor de newsletter, endpoint de contacto, pagos ni reservas. La interfaz no simula envíos ni compras. Antes del lanzamiento, confirmar contacto, perfiles oficiales, moneda, historia, equipo, uso de logos y calendario. El informe detalla los datos originales pendientes.

## Arquitectura

- [app/(public)/layout.tsx](app/%28public%29/layout.tsx): cabecera, enlace de salto, contenido principal y pie.
- [app/(public)/page.tsx](app/%28public%29/page.tsx): composición de las once secciones y datos estructurados cuando existe origen.
- [src/components/sections/home](src/components/sections/home): contenido estático en servidor; componentes cliente para menú, Embla, galería y animaciones del hero con Framer Motion.
- [src/data/navigation.ts](src/data/navigation.ts): navegación única para móvil y escritorio.
- [src/components/ui/UpToTop.tsx](src/components/ui/UpToTop.tsx): botón flotante desde 480 px de scroll, animado con Framer Motion; al pulsarlo vuelve al inicio y devuelve el foco al contenido. Respeta movimiento reducido y el área segura del móvil.
- [src/data/products.ts](src/data/products.ts): selección y precios originales, expresados en CLP por indicación del proyecto.
- [src/utils/formatCurrency.js](src/utils/formatCurrency.js): formato `es-CL` sin decimales mediante `Intl.NumberFormat`; no convierte ni modifica importes.
- [src/data/site.ts](src/data/site.ts): identidad editorial y validación de origen.
- [tests/landing.spec.ts](tests/landing.spec.ts): responsive, accesibilidad automatizada, teclado, navegación, recursos y SEO.

El acordeón y los detalles de eventos usan HTML nativo; el contenido sigue visible sin JavaScript. Las fotos ampliadas se cargan al abrir el visor. El hero utiliza `motion` y `useReducedMotion` de Framer Motion para entradas de títulos, botella y círculo, sin ocultar el contenido ni usar keyframes CSS.

## Seguridad y mantenimiento

Se configuran headers contra sniffing y framing, política de referrer, permisos y restricciones CSP de objetos, base y formularios. Es una CSP parcial: no debe presentarse como protección completa contra XSS. Evaluar una CSP de scripts compatible con la estrategia de renderizado y HSTS en el despliegue HTTPS real. No se necesita SSR dinámico ni caché personalizada para el contenido estático actual.

Los informes Lighthouse, capturas y resultados Playwright quedan en carpetas ignoradas. Consultar [docs/AUDITORIA.md](docs/AUDITORIA.md) para resultados, alcance, pendientes y lista de archivos.
