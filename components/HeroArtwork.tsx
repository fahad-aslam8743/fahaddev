import Image from 'next/image';

type MainKind = 'home'|'work'|'services'|'process'|'about'|'contact'|'privacy';

type Props = {
  kind?: MainKind;
  serviceSlug?: string;
  alt?: string;
  priority?: boolean;
};

const serviceArtwork: Record<string,string> = {
  'ecommerce-development':'/hero-elements-v21/ecommerce.webp',
  'dashboard-development':'/hero-elements-v21/dashboard.webp',
  'full-stack-web-app-development':'/hero-elements-v21/webapp.webp',
  'website-improvements':'/hero-elements-v21/improvements.webp',
};

const pageArtwork: Record<MainKind,string> = {
  home:'/hero-elements-v21/home.webp',
  services:'/hero-elements-v21/services.webp',
  work:'/hero-elements-v21/work.webp',
  process:'/hero-elements-v21/process.webp',
  about:'/hero-elements-v21/about.webp',
  contact:'/hero-elements-v21/contact.webp',
  privacy:'/hero-elements-v21/privacy.webp',
};

export function HeroArtwork({kind='home',serviceSlug,alt='FahadDev project and product visual',priority=false}:Props){
  const src=serviceSlug ? (serviceArtwork[serviceSlug] || pageArtwork.services) : pageArtwork[kind];
  const variant=serviceSlug || kind;
  return <figure className={`hero-artwork hero-artwork-${variant}`}>
    <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 860px) 100vw, 48vw"/>
    <span className="hero-artwork-sheen" aria-hidden="true"/>
  </figure>;
}
