// Encuentra una foto de src/assets/fotos/ por su nombre o ruta.
// Acepta "modelaje-01", "modelaje-01.jpg" o "/src/assets/fotos/modelaje-01.jpg"
// (este último es el formato que guarda el panel al subir una foto).
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/fotos/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', { eager: true });

const base = (p: string) => (p.split('/').pop() || '').replace(/\.[^.]+$/, '').toLowerCase();

const index = new Map<string, ImageMetadata>();
for (const [k, v] of Object.entries(files)) index.set(base(k), v.default);

export function findImage(name?: string): ImageMetadata | undefined {
  if (!name) return undefined;
  return index.get(base(name));
}

// Proporción alto/ancho de una foto (para el mosaico del portafolio)
export function ratioOf(name?: string, fallback = 1.2): number {
  const img = findImage(name);
  return img ? img.height / img.width : fallback;
}
