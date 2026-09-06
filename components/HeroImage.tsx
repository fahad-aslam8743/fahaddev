import Image from 'next/image';

type Kind='home'|'work'|'services'|'process'|'about'|'contact';
const copy:Record<Kind,{label:string;alt:string}>= {
  home:{label:'Conversion-focused digital product',alt:'Modern web product dashboard and storefront interface'},
  work:{label:'Selected product systems',alt:'Portfolio gallery of web products and dashboards'},
  services:{label:'Full-stack product delivery',alt:'Connected commerce, dashboard and web app systems'},
  process:{label:'A clear delivery system',alt:'Visual project workflow from discovery to launch'},
  about:{label:'Product-minded engineering',alt:'Developer workspace with product architecture and code interface'},
  contact:{label:'Project intake and collaboration',alt:'Project consultation and collaboration interface'}
};
export function HeroImage({kind}:{kind:Kind}){
  const x=copy[kind];
  return <figure className={`hero-art hero-art-${kind}`}>
    <div className="hero-art-glow"/>
    <div className="hero-art-frame">
      <Image src={`/heroes/${kind}.svg`} alt={x.alt} width={1200} height={820} priority={kind==='home'} sizes="(max-width: 900px) 100vw, 48vw" />
    </div>
    <figcaption><span>{x.label}</span><b>Built for real use, not presentation-only polish.</b></figcaption>
  </figure>
}
