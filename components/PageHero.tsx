import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HeroImage } from './HeroImage';
import { Reveal } from './Reveal';

type Kind='work'|'services'|'process'|'about'|'contact';
export function PageHero({kind,eyebrow,title,body,primary='Get a Free Consultation',secondaryHref='/work',secondary='See Selected Work'}:{kind:Kind;eyebrow:string;title:string;body:string;primary?:string;secondaryHref?:string;secondary?:string}){
  return <section className="page-hero-wrap">
    <div className="shell page-hero">
      <Reveal className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="hero-actions"><Link className="btn" href="/contact">{primary}<ArrowRight size={17}/></Link>{secondary&&<Link className="btn btn-secondary" href={secondaryHref}>{secondary}</Link>}</div>
        <div className="hero-proof-row"><span><CheckCircle2 size={15}/>Clear scope</span><span><CheckCircle2 size={15}/>Visible progress</span><span><CheckCircle2 size={15}/>Clean handoff</span></div>
      </Reveal>
      <Reveal className="page-hero-media"><HeroImage kind={kind}/></Reveal>
    </div>
  </section>;
}
