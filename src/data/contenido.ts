// ─────────────────────────────────────────────────────────────
//  Lee el contenido que editas desde el panel (archivos .json de
//  esta carpeta) y lo prepara para las páginas.
//  No necesitas tocar este archivo para publicar contenido.
// ─────────────────────────────────────────────────────────────
import portafolio from './portafolio.json';
import servicios from './servicios.json';
import casos from './casos.json';
import testimonios from './testimonios.json';
import preguntas from './preguntas.json';

export type Linea = 'foto' | 'aire';

export const TEMAS: Record<Linea, { label: string; titulo: string; acento: string; desc: string; temas: string[] }> = {
  foto: {
    label: 'Fotografía', titulo: 'Fotografía', acento: 'de autor',
    desc: 'Modelaje, producto, paisajes y mascotas, en estudio o en exteriores.',
    temas: ['Modelaje', 'Comercial', 'Paisajes', 'Mascotas'],
  },
  aire: {
    label: 'Aéreo y FPV', titulo: 'Desde el', acento: 'aire',
    desc: 'Tomas aéreas y recorridos FPV sin cortes para negocios, propiedades y marcas.',
    temas: ['Bienes raíces', 'Recorridos FPV', 'Acción FPV', 'Paisajes aéreos'],
  },
};

const toLinea = (v: string): Linea => (/a[ée]reo|fpv|aire/i.test(v || '') ? 'aire' : 'foto');

// Extrae el ID de YouTube aunque peguen la URL completa (watch?v=, youtu.be/, shorts/)
export function youtubeId(v?: string): string {
  if (!v) return '';
  const s = v.trim();
  const m = s.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : /^[\w-]{11}$/.test(s) ? s : '';
}

export interface Pieza {
  foto: string; alt: string; linea: Linea; tema: string; youtube: string; video: string; inicio: boolean; esVideo: boolean;
}

export const PORTAFOLIO: Pieza[] = portafolio.map((p: any) => {
  const yt = youtubeId(p.youtube);
  return {
    foto: p.foto || '', alt: p.descripcion || '', linea: toLinea(p.linea), tema: p.tema || '',
    youtube: yt, video: p.video || '', inicio: !!p.inicio, esVideo: !!(yt || p.video),
  };
});

// Selección del inicio: las marcadas "Mostrar en el inicio" (máximo 4 por línea)
const pickInicio = (l: Linea) => {
  const marked = PORTAFOLIO.filter((p) => p.linea === l && p.inicio);
  return (marked.length ? marked : PORTAFOLIO.filter((p) => p.linea === l)).slice(0, 4);
};
export const INICIO = { foto: pickInicio('foto'), aire: pickInicio('aire') };

const slug = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const SERVICIOS = servicios.map((s: any, i: number) => ({
  id: slug(s.nombre) || `servicio-${i + 1}`,
  n: String(i + 1).padStart(2, '0'),
  nombre: s.nombre,
  corto: s.resumen || '',
  desc: s.descripcion || '',
  para: s.ideal_para || '',
  incluye: (s.incluye || []).filter(Boolean) as string[],
  precio: s.precio || '',
  foto: s.foto || '',
  video: s.video || '',
  linea: toLinea(s.linea),
  destacado: !!s.destacado,
  wa: s.mensaje_whatsapp || `Hola, me interesa el servicio de ${s.nombre}.`,
}));

export const CASOS = casos.map((c: any, i: number) => ({
  n: String(i + 1).padStart(2, '0'),
  titulo: c.titulo || '',
  cliente: c.cliente || '',
  ciudad: c.ciudad || '',
  tipo: c.tipo || '',
  foto: c.foto || '',
  detalles: ([] as string[]).concat(c.detalles || []).filter(Boolean).slice(0, 2),
  youtube: youtubeId(c.youtube),
  video: !!youtubeId(c.youtube),
  reto: c.reto || '',
  hice: c.lo_que_hice || '',
  resultado: c.resultado || '',
  inicio: !!c.destacar_en_inicio,
}));
export const CASO_INICIO = CASOS.find((c) => c.inicio) ?? CASOS[0];

export const TESTIMONIOS = testimonios.map((t: any) => ({ texto: t.testimonio || '', autor: t.nombre || '', empresa: t.empresa || '' })).filter((t) => t.texto);

export const PREGUNTAS = preguntas.map((p: any) => ({ q: p.pregunta, a: p.respuesta })).filter((p) => p.q);

export const PASOS = [
  { n: '01', t: 'Platicamos', d: 'Me cuentas tu idea por WhatsApp o llamada y te envío una propuesta en menos de 24 horas.' },
  { n: '02', t: 'Planeamos', d: 'Definimos lugar, horario, estilo y la lista de tomas. En FPV trazamos la ruta antes de volar.' },
  { n: '03', t: 'Sesión o vuelo', d: 'Hago la sesión o el vuelo el día acordado, cuidando cada detalle del encuadre y la luz.' },
  { n: '04', t: 'Entrega', d: 'Recibes tus fotos y videos editados en una galería privada, listos para web y redes.' },
];
