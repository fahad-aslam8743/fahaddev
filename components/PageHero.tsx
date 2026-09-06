import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TechVisual } from './TechVisual';

type Kind='work'|'services'|'process'|'about'|'contact';
export function PageHero({kind,eyebrow,title,body,primary='Book a Free Project Consultation',secondaryHref='/work',secondary='Explore Selected Work'}:{kind:Kind;eyebrow:string;title:string;body:string;primary?:string;secondaryHref?:string;secondary?:string}){
 return <section className="page-hero shell"><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{body}</p><div className="hero-actions"><Link className="btn" href="/contact">{primary}<ArrowRight size={17}/></Link>{secondary&&<Link className="btn btn-secondary" href={secondaryHref}>{secondary}</Link>}</div></div><TechVisual kind={kind}/></section>
}
