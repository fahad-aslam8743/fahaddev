import Image from 'next/image';

type Kind='home'|'work'|'services'|'process'|'about'|'contact';
const labels:Record<Kind,{kicker:string;title:string;note:string}>={
 home:{kicker:'BUILD SYSTEM',title:'Strategy → Interface → Data → Launch',note:'One connected product, not disconnected deliverables.'},
 work:{kicker:'SELECTED SYSTEMS',title:'Commerce · Dashboards · Platforms',note:'Built around decisions users actually need to make.'},
 services:{kicker:'FULL-STACK DELIVERY',title:'Customer experience + business operations',note:'The surface and the system underneath it, designed together.'},
 process:{kicker:'DELIVERY FLOW',title:'Clarify → Shape → Build → Test → Launch',note:'Flexible depth and speed based on the project.'},
 about:{kicker:'PRODUCT-MINDED ENGINEERING',title:'Business problem first. Technology second.',note:'Technical range used to make the product easier to run.'},
 contact:{kicker:'PROJECT INTAKE',title:'Bring the goal, problem, or broken flow.',note:'You do not need a perfect technical brief to start.'}
};
export function HeroImage({kind}:{kind:Kind}){const x=labels[kind];return <div className="hero-image-wrap"><div className="hero-image-glow"/><div className="hero-image-frame"><Image src={`/heroes/${kind}.png`} alt="Modern product interface illustration" width={1200} height={840} priority={kind==='home'} sizes="(max-width: 1020px) 100vw, 48vw"/><div className="hero-image-caption"><span>{x.kicker}</span><strong>{x.title}</strong><small>{x.note}</small></div></div><div className="floating-proof proof-a">Performance-first</div><div className="floating-proof proof-b">Production-ready</div></div>}
