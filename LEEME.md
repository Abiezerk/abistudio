# Portafolio — Fotografía, Drone y FPV

Sitio hecho con **Astro**. Es rápido, está optimizado para Google y se publica gratis en **Cloudflare Pages**. El único costo es tu dominio.

---

## 1. Verlo en tu computadora

1. Instala **Node.js** (versión 22 o más nueva) desde https://nodejs.org
2. Abre una terminal dentro de esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

3. Abre http://localhost:4321 en tu navegador. Cada cambio que guardes se ve al instante.

---

## 2. Edita todo desde el panel (sin tocar código)

Tu contenido se edita con **Pages CMS**, un panel gratuito con formularios:

1. Entra a **https://app.pagescms.org** y da clic en **Sign in with GitHub**.
2. La primera vez, autoriza e instala la app de Pages CMS en tu cuenta de GitHub, y elige el repositorio **abistudio**.
3. En el menú de la izquierda verás:
   - **Portafolio (fotos y vuelos):** agrega fotos y videos, elige el tipo (Fotografía o Aéreo y FPV) y la categoría, y marca **Mostrar en el inicio** para las que quieras en la portada.
   - **Servicios:** nombre, descripción, qué incluye, precio, foto o video corto.
   - **Casos (proyectos reales):** el reto, lo que hiciste, el resultado, fotos y video de YouTube. *"Casos" aparece en el menú de la web en cuanto publicas el primero.*
   - **Testimonios:** el primero de la lista sale en el inicio. Si está vacío, la sección no aparece.
   - **Blog:** crea artículos con portada, video de YouTube y texto. Marca **Borrador** para guardarlo sin publicar.
   - **Datos del sitio:** WhatsApp, correo, redes, zona de trabajo, clave de Web3Forms y la foto o video de portada.
   - **Preguntas frecuentes.**
4. Edita y da **Save**. En 1 o 2 minutos el cambio aparece en abistudio.mx.

**Fotos:** súbelas desde el formulario, del tamaño que sean. La web las convierte sola a formatos ligeros y en varios tamaños.

**Videos:**
- Largos (recorridos completos, reels): súbelos a **YouTube** y pega el enlace en el campo "Video de YouTube".
- Cortos para servicios o portada: archivo **.mp4 de menos de 25 MB**, sin audio. Es el límite de Cloudflare por archivo.

> **Consejo SEO:** en "Descripción" de cada foto escribe qué es y dónde, por ejemplo "Recorrido FPV por restaurante en Tijuana". Así tus fotos aparecen en Google Imágenes.

---

## 3. Lo que sí se edita en el código (muy de vez en cuando)

- Textos fijos de las pantallas (títulos, frases): `src/pages/*.astro`
- Pasos de "Cómo trabajo": `src/data/contenido.ts`
- Mensaje de WhatsApp general: `src/config.ts`

En VS Code usa **Ctrl + Shift + F** para buscar cualquier texto que veas en la web.

---

## 4. Cómo se guardan las cosas

- Datos y listas: `src/data/*.json`
- Artículos del blog: `src/content/blog/*.md`
- Fotos: `src/assets/fotos/` · Videos: `public/videos/`
- Configuración del panel: `.pages.yml`

> Si editas en el panel **y** también en tu computadora, antes de trabajar en VS Code abre GitHub Desktop y da **Fetch / Pull origin**, para traer los cambios que hiciste en el panel.

---

## 5. Publícalo gratis en Cloudflare Pages

1. Crea una cuenta en https://github.com y sube esta carpeta como repositorio (puedes usar GitHub Desktop si no usas terminal).
2. Entra a https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** y elige tu repositorio.
3. Configuración de compilación:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Clic en **Save and Deploy**. En un par de minutos tienes tu sitio en `tu-proyecto.pages.dev`.
5. En **Custom domains** conecta tu dominio. Si lo compras en Cloudflare Registrar, sale a precio de costo y la conexión es automática.

Cada vez que subas cambios a GitHub, el sitio se actualiza solo.

---

## 6. Después de publicar (SEO)

1. **Google Search Console** (https://search.google.com/search-console): agrega tu dominio y envía `https://tudominio.com/sitemap-index.xml`.
2. **Perfil de Negocio de Google** (https://business.google.com): créalo con tu categoría ("Fotógrafo" o "Servicio de fotografía aérea"), fotos y el enlace a tu web. Es lo que más ayuda en búsquedas locales.
3. **Cloudflare Web Analytics**: actívalo gratis desde el panel de Cloudflare para ver tus visitas.
4. Publica uno o dos artículos al mes y pide a tus clientes que te enlacen desde sus sitios.

---

## Qué incluye

- 6 páginas: Inicio, Portafolio, Servicios, Casos, Blog y Contacto, más 6 artículos iniciales y página 404.
- Diseño responsivo con versiones pensadas para celular: menú a pantalla completa, servicios desplegables y barra fija de contacto.
- SEO: títulos y descripciones por página, URLs canónicas, sitemap automático, datos estructurados (negocio local, servicios, preguntas frecuentes y artículos) y vista previa para redes sociales.
- Animaciones: aparición al deslizar, título que se revela, zoom lento en la portada, cortinilla en los casos y transición suave entre páginas. Se desactivan solas si el visitante tiene activado "reducir movimiento".
- Formulario de contacto con Web3Forms (gratis) y botones de WhatsApp con mensaje prellenado.
