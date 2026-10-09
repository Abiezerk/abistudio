import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia esta URL por tu dominio real antes de publicar.
// Se usa para el sitemap, las URLs canónicas y las vistas previas al compartir.
export default defineConfig({
  site: 'https://abistudio.mx',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
