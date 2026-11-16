# Auditoría integral de Vin Rouge

Fecha: 16 de noviembre de 2026. Revisión de código, implementación y QA local de producción.

## 1. Estado general y alcance

Se inspeccionaron todos los archivos originales de aplicación, componentes, datos y configuración, las once secciones, cabecera, pie, imágenes y dependencias. La única página comercial es la landing. También se validaron respuestas 404 y las nuevas rutas de metadatos.

La base técnica quedó sustancialmente mejorada y verificada. **No se considera autorizado el lanzamiento comercial**: faltan dominio oficial, contactos, moneda, revisión de afirmaciones comerciales y una decisión real sobre captación de leads. No se han inventado datos, testimonios, reservas ni confirmaciones de envío.

Se preservan orden de secciones, fotografías, ilustraciones, selección de productos, equipo, historia y paleta editorial. Se conserva Libre Baskerville; Oswald estaba descargándose sin uso y se retiró. No se implantó un rediseño ajeno a la marca.

## 2. Diagnóstico inicial: criticidad, causa y resolución

| Criticidad | Problema y causa | Solución implementada / estado |
|---|---|---|
| Crítica | Next.js 16.2.4 aparecía afectado por avisos de seguridad; dependencias transitivas sin actualizar | Next.js 16.4.6, React/React DOM 19.3.1 y dependencias actualizadas. Auditoría de producción: 0 vulnerabilidades conocidas |
| Alta | CTA del hero e historia sin acción | Enlaces reales a contenido relacionado, con compensación de cabecera |
| Alta | Newsletter con «Enviar», pero sin campo, proveedor ni procesamiento | Sección editorial honesta, aviso de suscripción no disponible y enlace real al archivo. No se simula backend |
| Alta | Menú móvil sin nombre, foco, Escape, estado expandido ni aislamiento | `dialog` nativo modal, nombres y estado accesible, bloqueo de fondo, restauración de foco y cierre por breakpoint |
| Alta | Foco restaurado al disparador incluso al seguir un ancla | Navegación distingue destino de cancelación; enfoca y muestra la sección de destino. Prueba específica |
| Alta | Galería solo clicable mediante elementos no interactivos | Botones nativos, etiquetas consistentes con el texto visible, visor con teclado y foco restaurado |
| Alta | Contenido inicialmente invisible, condicionado por JS y umbrales de intersección de secciones largas | Eliminadas animaciones de entrada y dependencia de hidratación para leer el contenido |
| Alta | Direcciones, teléfono y perfiles de apariencia provisional e incoherente | No se anuncian como canales operativos; pendiente confirmar con el negocio. Procedencia conservada en este informe |
| Media | Eventos de junio de 2026 presentados como actuales | Archivo claramente fechado; detalles reales mediante `details`, sin reservas aparentes |
| Media | Carrusel mezclaba slides porcentuales, tarjetas rígidas y botellas desplazadas fuera de su caja | Un único sistema de tamaños fluidos, imágenes contenidas y controles sincronizados con snaps reales |
| Media | Galería, categorías, propietarios y novedades con grids o posicionamiento frágil | Grids adaptativos, alturas intrínsecas y regiones separadas para imágenes y texto |
| Media | Contraste débil de texto ocre claro, foco eliminado y movimiento continuo | Texto marrón/ocre oscuro, foco visible y reducción de movimiento en CSS y Embla |
| Media | `lang=en`, doce usos de `h1`, cabecera y pie dentro de `main` | Español, un `h1` en la landing, niveles coherentes, landmarks separados y enlace de salto |
| Media | Título y descripción de Create Next App; sin sitemap/canonical/social propio | Metadata editorial, robots, sitemap, imagen social y JSON-LD configurables con origen verificado |
| Media | Doce fronteras cliente y Framer Motion para contenido estático | Secciones en servidor; cinco archivos cliente contando fallback de error y visor diferido |
| Media | Fondo del pie precargado y múltiples señales de prioridad en hero | Pie lazy; prioridad explícita al recurso principal y `sizes` adaptados |
| Baja | Navegación móvil/escritorio diferente; enlaces `#` y blog inexistente | Datos de navegación únicos; todos los destinos internos comprobados |
| Baja | Componentes reutilizables sin uso y documentación de plantilla | Eliminados wrappers sin consumidores, redes genéricas y dependencias asociadas; README y QA reales |

La susceptibilidad inicial de la galería a permanecer invisible y varios solapamientos se dedujeron del código; no se presentan como incidentes visuales reproducidos sobre un build original.

## 3. Arquitectura y mantenibilidad

- Layout público responsable de cabecera, `main`, salto al contenido y pie; la página solo compone secciones y datos estructurados.
- Las once secciones se renderizan desde servidor. Interacción aislada en menú, carrusel y contexto/visor de galería.
- Acordeón y detalles de eventos sin estado React ni JavaScript obligatorio.
- Navegación compartida, datos de productos tipados y configuración editorial centralizada.
- Framer Motion y clsx retirados al desaparecer sus consumidores. Embla y el visor se mantienen por funcionalidad real.
- Sin memoización indiscriminada, CMS, formularios ficticios, APIs innecesarias ni Suspense decorativo.
- La landing, robots, sitemap e imagen social se prerenderizan estáticamente; no se introdujo SSR dinámico ni una caché manual innecesaria.

## 4. UI/UX, responsive y conversión

Se unificaron gutters, ancho máximo, espaciado vertical, contraste y jerarquía. El hero mantiene botella, círculo y paisaje; el fondo respeta ahora su proporción panorámica en lugar de deformar el recorte móvil. Las categorías ya no aparentan ser botones. Los retratos usan una columna en móvil estrecho, dos en tablet y cuatro en escritorio. Eventos y novedades crecen con el contenido, sin CTA absoluto ni logo superpuesto.

La ruta comercial verificable es explorar la selección y conocer la marca. Los CTA ya conducen a un destino útil y no a una compra, contacto o reserva inexistentes. **No se ha medido un aumento de conversiones**, ni puede afirmarse que haya captación de leads sin un canal operativo.

Verificación automática en **320, 375, 390, 430, 768, 1024, 1280, 1440 y 1920 px**, con altura de 900 px: sin desbordamiento horizontal de documento o secciones. Menú adicional a 390 × 844 px. Inspección visual de las once secciones y el pie mediante capturas completas a 390 y 1440 px, además de revisión del hero y navegación en el navegador integrado.

No se verificó visualmente cada sección en cada uno de los nueve anchos: en los restantes se ejecutaron las comprobaciones automáticas. Las capturas largas pueden incluir la cabecera sticky al ser compuestas por el navegador; ese efecto de captura no se confundió con un solapamiento real de contenido.

## 5. SEO y semántica

- Título y descripción propios, idioma español, Open Graph y Twitter Card.
- Imagen social generada a 1200 × 630; icono de marca configurado.
- Un único `h1` en la landing; títulos de secciones y tarjetas con niveles adecuados.
- Textos alternativos más específicos y `alt` vacío en decoración.
- Enlaces internos sin destinos vacíos ni identificadores duplicados.
- Canonical, sitemap, URL social y JSON-LD `WebSite` se generan con `SITE_URL`.
- Se excluyen datos estructurados de negocio local, productos con moneda, valoraciones o eventos futuros porque no existen datos suficientes verificados.

**Bloqueo intencional de publicación:** `SITE_URL` no está definido. La preview usa `noindex`, robots bloqueado y sitemap vacío. Lighthouse SEO obtiene **66**, cuyo único fallo de SEO es la indexabilidad. Next.js avisa que resuelve la imagen social automática contra localhost sin `metadataBase`. No se ha ocultado este aviso ni inventado un dominio para elevar la puntuación. Configurar el origen HTTPS oficial y recompilar antes del despliegue; comprobar canonical, enlaces sociales y rastreo de nuevo en ese entorno.

Se validaron siete entradas del parser de origen: vacío y dos variantes HTTPS válidas; HTTP, ruta, credenciales y parámetros rechazados. El dominio reservado usado para esa prueba no se publicó en el código ni en el build.

## 6. Accesibilidad y funcionalidad

La suite automatizada cubre WCAG 2/2.1/2.2 A/AA aplicables mediante axe, landmarks, un `h1`, ausencia de IDs duplicados, anclas reales y errores de página. Se verificaron:

- Menú: abrir, foco dentro del modal, Escape, cierre al navegar, foco en destino y cierre al pasar a escritorio.
- Carrusel: flechas, posición activa, sincronización de snaps, Inicio/Fin y controles táctiles de 44 px.
- Acordeón por teclado y detalles de eventos con ubicación visible.
- Galería por Enter, siguiente imagen, Escape y restauración de foco.
- Contenido y encabezados visibles sin JS; scroll reducido cuando se solicita.
- Todas las imágenes de la página cargadas; robots, sitemap e imagen social responden 200; ruta desconocida responde 404.

No quedan formularios de captación que puedan probarse: el original no tenía formulario real. No hay pruebas de entrega de correo, proveedores, pagos o reservas porque esas integraciones no existen. No se declara certificación WCAG completa ni se sustituye una auditoría manual con NVDA, VoiceOver, zoom de texto y dispositivos reales.

## 7. Rendimiento medido

Última medición local Lighthouse 13.6.0, Chrome headless 154, build de producción, presets móvil y escritorio. Son **métricas de laboratorio**, no datos de campo ni percentiles de usuarios reales.

| Métrica | Móvil | Escritorio |
|---|---:|---:|
| Rendimiento | 92 | 100 |
| Accesibilidad Lighthouse | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO — preview noindex | 66 | 66 |
| FCP | 0,9 s | 0,2 s |
| LCP | 3,4 s | 0,7 s |
| TBT | 30 ms | 0 ms |
| CLS | 0 | 0 |
| Speed Index | 1,1 s | 0,3 s |

Transferencia de JavaScript observada: aproximadamente **163 KiB** en la navegación Lighthouse. Incluye runtime de React/Next; no equivale al tamaño total de chunks en disco. El lightbox no se descarga hasta abrirlo. Lighthouse aún detecta unos 52 KiB de JS potencialmente no utilizado y ahorro de entrega de imágenes; no se eliminó código necesario del framework para mejorar artificialmente la puntuación.

**Pendiente real:** LCP móvil simulado por encima del objetivo de 2,5 s. El recurso principal tiene carga inmediata, prioridad alta y tamaño responsive; aun así debe volver a medirse en el hosting/CDN real y estudiar variantes de imagen adicionales. No se afirma que los Core Web Vitals estén todos en verde. INP no se ha medido en campo y TBT no debe presentarse como INP.

No existen métricas iniciales fiables del build original: no se calculan porcentajes de mejora ni se compara una medición de desarrollo con producción. Las mediciones intermedias durante el trabajo oscilaron entre 90 y 94 en móvil, lo que evidencia variabilidad local; se informa la última medición, no la puntuación más favorable.

## 8. Seguridad

- Auditoría npm inicial de producción: seis vulnerabilidades, incluida una crítica. Final: **cero conocidas en producción**.
- Auditoría completa: **ocho avisos moderados de desarrollo**, asociados a minimatch y la cadena TypeScript/ESLint. Se mantienen documentados; no se aplicó `audit fix --force` que proponía bajar a otra versión mayor del tooling. No afectan al bundle servido, pero requieren seguimiento.
- Headers verificados: `nosniff`, `DENY`, referrer, permisos y CSP parcial de base, objetos, framing y formularios. Cabecera `X-Powered-By` retirada.
- La CSP no restringe scripts y no es una defensa XSS completa. HSTS y una política de scripts más estricta deben decidirse con el despliegue HTTPS real.
- No se encontraron secretos necesarios en el cliente ni se añadieron servicios externos. JSON-LD serializado escapando `<`.
- No se reciben datos de formularios: no se afirma tener validación servidor, protección anti-spam o entrega de emails inexistentes. Son requisitos del futuro canal de captación.

## 9. Decisiones de contenido y procedencia

Para evitar pérdidas silenciosas, estos elementos se retiraron de las acciones públicas o cambiaron de contexto con justificación:

| Original | Decisión y motivo |
|---|---|
| «123 Calle del Vino», «Valle del Vino, Chile», teléfono +52 123 456 7890, info@viñedos.com | Datos de ejemplo o incoherentes entre país y prefijo; confirmar antes de volver a publicarlos como operativos |
| WhatsApp 56900000000, portadas genéricas de Instagram/Facebook | No acreditan un canal oficial del negocio; no se desvían consultas a un destino provisional |
| Doce enlaces sociales del equipo a `#` | Sin perfiles reales, se eliminaron controles engañosos; nombres, roles, descripciones y retratos conservados |
| «Enviar» sin formulario | Sustituido por CTA editorial y estado explícito de suscripción no disponible |
| Eventos 12, 18 y 25 de junio de 2026 | Todos conservados y etiquetados como archivo; detalle accesible sin simular reserva |
| Noticias del pie: «Nueva cosecha disponible» (15 abril), «Evento de degustación» (2 abril), «Festival del Vino 2026» (20 marzo) | No hay artículos ni destinos verificables; sustituidas por navegación a contenido existente |
| Identidades Vin Rouge / Winery / Viñedos | Marca visible unificada como Vin Rouge; no se inventó una razón social |

Se mantienen, **sin presentarlas como verificadas por esta auditoría**, la fecha histórica 1945, nombres/roles/retratos del equipo, afirmaciones del acordeón, logos de clientes y contenido del catálogo. El negocio debe validar autenticidad, permisos de imágenes/logos, correspondencia de etiquetas de botellas con nombres y moneda. No se generaron testimonios ni estadísticas.

## 10. Archivos modificados y añadidos

**Shell, SEO y configuración:** [.gitignore](../.gitignore), [.env.example](../.env.example), [README.md](../README.md), [.vscode/tasks.json](../.vscode/tasks.json), [package.json](../package.json), [package-lock.json](../package-lock.json), [next.config.ts](../next.config.ts), [app/layout.tsx](../app/layout.tsx), [app/globals.css](../app/globals.css), [layout público](../app/%28public%29/layout.tsx), [página](../app/%28public%29/page.tsx), [app/error.tsx](../app/error.tsx), [app/not-found.tsx](../app/not-found.tsx), [app/robots.ts](../app/robots.ts), [app/sitemap.ts](../app/sitemap.ts), [app/opengraph-image.tsx](../app/opengraph-image.tsx).

**Componentes compartidos:** [Header](../src/components/layout/Header.tsx), [Footer](../src/components/layout/Footer.tsx), [Navbar](../src/components/ui/Navbar.tsx), [NavMobile](../src/components/ui/NavMobile.tsx), [Accordion](../src/components/ui/Accordion.tsx).

**Once secciones:** [Hero](../src/components/sections/home/Hero.tsx), [Step](../src/components/sections/home/Step.tsx), [OurHistory](../src/components/sections/home/OurHistory.tsx), [Categories](../src/components/sections/home/Categories.tsx), [Products](../src/components/sections/home/Products.tsx), [Gallery](../src/components/sections/home/Gallery.tsx), [Owners](../src/components/sections/home/Owners.tsx), [GetToKnowUs](../src/components/sections/home/GetToKnowUs.tsx), [Events](../src/components/sections/home/Events.tsx), [NewsLetter](../src/components/sections/home/NewsLetter.tsx), [Clients](../src/components/sections/home/Clients.tsx).

**Islas y datos nuevos:** [ProductCarousel](../src/components/sections/home/ProductCarousel.tsx), [GalleryViewer](../src/components/sections/home/GalleryViewer.tsx), [GalleryLightbox](../src/components/sections/home/GalleryLightbox.tsx), [datos de galería](../src/components/sections/home/gallery-data.ts), [navegación](../src/data/navigation.ts), [configuración editorial](../src/data/site.ts).

**QA:** [playwright.config.ts](../playwright.config.ts), [tests/landing.spec.ts](../tests/landing.spec.ts) y este informe. Se retiraron los tres componentes antiguos sin consumidores de sección genérica, tipografía y redes provisionales. No se modificaron fotografías originales ni datos de productos. El lockfile ya contenía cambios del usuario al inicio y no se revirtió; se actualizó mediante npm durante la instalación de versiones seguras.

## 11. Pruebas y evidencias

| Comprobación | Resultado |
|---|---|
| `npm run lint` | Correcto |
| `npm run typecheck` | Correcto |
| `npm run build` | Correcto, rutas estáticas; aviso de origen ausente documentado |
| `npm test` | 13 pruebas superadas en Chrome |
| `npm audit --omit=dev` | 0 vulnerabilidades |
| Auditoría npm incluyendo desarrollo | 8 moderadas, ninguna alta/crítica |
| `git diff --check` | Correcto |
| Diagnósticos del editor | Sin errores al comprobar |
| Lighthouse móvil/escritorio | Informes HTML y JSON generados |
| Inspección visual | Once secciones y footer en 390/1440 px; hero y menú en navegador |

Los informes y capturas se guardan localmente en la carpeta de artefactos ignorada, y Playwright genera su informe HTML y trazas de fallos. No se agregan métricas sintéticas iniciales ni capturas como sustituto de una revisión del resultado real.

## 12. Tabla de evaluación

| Área | Estado inicial | Mejoras realizadas | Estado final |
|---|---|---|---|
| Arquitectura | Mucho cliente para contenido estático y código sin uso | Server Components e islas pequeñas; datos compartidos | Más simple, tipada y verificada |
| UI/UX | Jerarquía, contraste y composición inconsistentes | Identidad conservada, tipografía y espaciado coherentes | Revisada visualmente en móvil/escritorio |
| Responsive | Tarjetas rígidas y riesgo de recorte/solapamiento | Grids fluidos, proporciones y alturas intrínsecas | Nueve anchos sin overflow detectado |
| Rendimiento | Sin baseline fiable; animaciones y precargas innecesarias | Menos JS propio, visor diferido, imágenes y fuente ajustadas | 92 móvil / 100 escritorio; LCP móvil pendiente |
| SEO | Plantilla, idioma incorrecto y ausencia de configuración | Metadata, semántica, social, sitemap y canonical configurable | Técnico mejorado; dominio/indexación pendientes |
| Accesibilidad | Menú, galería, foco, movimiento y títulos defectuosos | Modal nativo, botones, teclado y semántica | Axe sin infracciones en casos probados; no certificación manual |
| Funcionalidad | CTA inertes y destinos ficticios | Destinos reales, visor/carrusel/detalles probados | Interacciones existentes operativas; integraciones no inventadas |
| Seguridad | Avisos críticos y headers ausentes | Runtime actualizado y headers defensivos | 0 avisos runtime; 8 moderados de tooling pendientes |
| Conversión | Promesas sin acción y contacto no fiable | Menos fricción, CTA claros y estados honestos | Exploración mejorada; captación real pendiente |

## 13. Pendientes priorizados antes/después del lanzamiento

1. **Bloqueante:** confirmar dominio HTTPS, definir `SITE_URL`, recompilar y comprobar URLs sociales/canonical, sitemap e indexación en producción.
2. **Bloqueante comercial:** confirmar contactos oficiales, moneda y vía de consulta/compra. Integrar el canal real y sus requisitos de privacidad, validación servidor y anti-spam antes de ofrecer envíos.
3. **Contenido:** verificar 1945, equipo, roles, fotos, logos/clientes, afirmaciones de calidad/sostenibilidad y correspondencia de catálogo. Actualizar calendario sin inventar fechas futuras.
4. **Rendimiento:** mejorar y medir LCP móvil con CDN/hosting real; considerar variantes adicionales de imágenes y datos de campo para INP/LCP/CLS.
5. **Accesibilidad:** revisión manual con lectores de pantalla, zoom de texto y dispositivos reales; navegadores Firefox/Safari no cubiertos por esta suite de Chrome.
6. **Mantenimiento:** seguir los ocho avisos moderados de tooling y revisar CSP/HSTS en el entorno final. No hay garantía de ausencia futura de vulnerabilidades.

No se realizaron despliegue, envío de datos personales, altas comerciales, cambios de DNS ni commits.