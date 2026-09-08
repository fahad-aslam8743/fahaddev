'use client';

import { useRef, type PointerEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import type {Project} from '@/lib/projects';

export function ProjectCard({p}:{p:Project}){
  const ref=useRef<HTMLElement>(null);
  const move=(e:PointerEvent<HTMLElement>)=>{const el=ref.current;if(!el)return;const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;el.style.setProperty('--card-rx',`${(0.5-y)*4}deg`);el.style.setProperty('--card-ry',`${(x-0.5)*6}deg`);el.style.setProperty('--card-x',`${x*100}%`);el.style.setProperty('--card-y',`${y*100}%`)};
  const leave=()=>{const el=ref.current;if(!el)return;el.style.setProperty('--card-rx','0deg');el.style.setProperty('--card-ry','0deg')};
  return <article ref={ref} onPointerMove={move} onPointerLeave={leave} className="project-card">
  <div className="project-glare" aria-hidden="true"/><div className={`project-visual ${p.imageUrl?'has-project-image':`visual-${p.slug}`}`}>
    {p.imageUrl?<><Image className="project-photo" src={p.imageUrl} alt={`${p.title} project preview`} fill sizes="(max-width: 620px) 100vw, (max-width: 1080px) 50vw, 33vw"/><div className="project-photo-overlay"/></>:<div className="visual-grid"/>}
    <div className="browser-bar"><i/><i/><i/><span>{p.slug}.project</span></div>
    {!p.imageUrl&&<div className="project-screen"><small>{p.clientType}</small><strong>{p.title}</strong><div>{p.stack.slice(0,3).map(x=><span key={x}>{x}</span>)}</div></div>}
    {p.imageUrl&&<div className="project-image-label"><small>{p.clientType}</small><strong>{p.title}</strong></div>}
  </div>
  <div className="project-body"><div className="project-kicker">{p.concept&&<span className="concept">Concept</span>}<span>{p.clientType}</span></div><h3>{p.title}</h3><p>{p.short}</p><Link className="case-button" href={`/work/${p.slug}`}>Open case study <ArrowUpRight size={16}/></Link></div>
</article>}
