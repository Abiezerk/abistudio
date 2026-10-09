import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Artículos del blog: un archivo .md por artículo en src/content/blog/
// (se crean y editan desde el panel → "Blog").
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().default(''),
    categoria: z.string().default('Fotografía'),
    fecha: z.coerce.date(),
    portada: z.string().nullish().transform((v) => v ?? ''),
    youtube: z.string().nullish().transform((v) => v ?? ''),
    destacado: z.boolean().nullish().transform((v) => !!v),
    borrador: z.boolean().nullish().transform((v) => !!v),
  }),
});

export const collections = { blog };
