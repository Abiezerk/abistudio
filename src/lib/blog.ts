import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Artículos publicados (sin borradores), del más nuevo al más viejo
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', (p) => !p.data.borrador);
  return all.sort((a, b) => +b.data.fecha - +a.data.fecha);
}

// Minutos de lectura aproximados (200 palabras por minuto)
export function minutos(p: Post): number {
  const words = (p.body || '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
