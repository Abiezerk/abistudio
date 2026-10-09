// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN DEL SITIO
//  Tus datos (marca, WhatsApp, correo, redes…) ahora viven en
//  src/data/sitio.json y se editan desde el panel (Pages CMS →
//  "Datos del sitio"). Este archivo solo los prepara para la web.
// ─────────────────────────────────────────────────────────────
import sitio from './data/sitio.json';
import casos from './data/casos.json';

export const SITE = {
  brand: sitio.marca,
  description: sitio.descripcion,
  city: sitio.ciudad,
  zone: sitio.zona || sitio.ciudad,
  region: sitio.estado,
  country: 'MX',
  whatsapp: String(sitio.whatsapp).replace(/\D/g, ''),
  phone: sitio.telefono,
  email: sitio.correo,
  social: { instagram: sitio.instagram, youtube: sitio.youtube, tiktok: sitio.tiktok },
  web3formsKey: sitio.web3forms,
  heroImage: sitio.portada_foto,
  heroVideo: sitio.portada_video,
};

// Solo las redes que tengan enlace
export const SOCIALS = [
  { label: 'Instagram', href: SITE.social.instagram },
  { label: 'YouTube', href: SITE.social.youtube },
  { label: 'TikTok', href: SITE.social.tiktok },
].filter((s) => s.href);

// Mensajes de WhatsApp prellenados (los de cada servicio se editan en el panel).
export const WA_MSG = {
  general: 'Hola, vi tu portafolio y me interesa cotizar un proyecto.',
  caso: 'Hola, vi tus casos y quiero algo parecido para mi proyecto.',
};

export function waLink(message: string = WA_MSG.general) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

// "Casos" solo aparece en el menú cuando ya publicaste al menos uno.
export const HAS_CASES = casos.length > 0;

export const NAV = [
  { href: '/portafolio/', label: 'Portafolio' },
  { href: '/servicios/', label: 'Servicios' },
  ...(HAS_CASES ? [{ href: '/casos/', label: 'Casos' }] : []),
  { href: '/blog/', label: 'Blog' },
  { href: '/contacto/', label: 'Contacto' },
];
