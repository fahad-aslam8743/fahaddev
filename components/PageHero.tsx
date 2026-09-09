import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HeroArtwork } from './HeroArtwork';
import { Reveal } from './Reveal';

type Kind='work'|'services'|'process'|'about'|'contact'|'privacy';
type Action={label:string;href:string;external?:boolean};

export function PageHero({kind,eyebrow,title,body,primary,secondary}:{kind:Kind;eyebrow:string;title:string;body:string;primary?:Action;secondary?:Action}){
  const actions=[primary,secondary].filter(Boolean) as Action[];
  return <section className="page-hero-wrap">
    <div className="shell page-hero">
      <Reveal className="page-hero-copy">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{kind[0].toUpperCase()+kind.slice(1)}</span></nav>
        <span className="eyebrow">{eyebrow}</span>
        <div className="hero-title-lockup"><h1>{title}</h1><span className="hero-title-rule" aria-hidden="true"/></div>
        <p>{body}</p>
        {actions.length>0&&<div className="hero-actions">{actions.map((a,i)=>a.external?<a key={a.label} className={`btn ${i?'btn-secondary':''}`} href={a.href} target="_blank" rel="noreferrer">{a.label}<ArrowRight size={17}/></a>:<Link key={a.label} className={`btn ${i?'btn-secondary':''}`} href={a.href}>{a.label}<ArrowRight size={17}/></Link>)}</div>}
        <div className="hero-proof-row"><span><CheckCircle2 size={15}/>Clear scope</span><span><CheckCircle2 size={15}/>Visible progress</span><span><CheckCircle2 size={15}/>Clean handoff</span></div>
      </Reveal>
      <Reveal className="page-hero-media"><HeroArtwork kind={kind} alt={`${eyebrow} visual`} priority/></Reveal>
    </div>
  </section>;
}
