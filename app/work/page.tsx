import type {Metadata} from 'next';
import {projects} from '@/lib/projects';
import {ProjectCard} from '@/components/ProjectCard';
import {PageHero} from '@/components/PageHero';
import Link from 'next/link';
import {ArrowRight, CheckCircle2} from 'lucide-react';
export const metadata:Metadata={title:'Selected Work — Fahad',description:'Production-minded web builds and clearly labeled concept systems.'};
export default function Work(){return <><PageHero kind="work" eyebrow="Selected systems" title="Products built around real decisions, not portfolio decoration." body="A closer look at commerce, dashboard, and platform work — including the problem, the system behind it, and what each build was designed to improve." secondary="See Services" secondaryHref="/services"/><section className="section shell"><div className="portfolio-intro"><div><span className="eyebrow">Portfolio</span><h2>Different interfaces. The same standard of thinking.</h2></div><ul><li><CheckCircle2/>Responsive by default</li><li><CheckCircle2/>System-level thinking</li><li><CheckCircle2/>Concept work labeled honestly</li></ul></div><div className="project-grid project-grid-wide">{projects.map(p=><ProjectCard key={p.slug} p={p}/>)}</div></section><section className="cta-band"><div className="shell"><span className="eyebrow">Have a similar challenge?</span><h2>Your project does not need to look like these projects to benefit from the same process.</h2><Link className="btn light-btn" href="/contact">Discuss Your Project <ArrowRight size={17}/></Link></div></section></>}
