'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Layers3, Rocket, SearchCheck } from 'lucide-react';

const steps=[
  {id:0,n:'01',title:'Understand',body:'Clarify the goal, the user, the friction and what must not break.',Icon:SearchCheck,visual:'Goal → constraints → priority'},
  {id:1,n:'02',title:'Shape',body:'Turn the problem into a smaller set of flows, responsibilities and decisions.',Icon:Layers3,visual:'Scope → flow → system'},
  {id:2,n:'03',title:'Build & review',body:'Move through working slices so feedback arrives while changes are still cheap.',Icon:CheckCircle2,visual:'Build → review → refine'},
  {id:3,n:'04',title:'Launch & hand off',body:'Verify the important paths, deploy cleanly and leave ownership understandable.',Icon:Rocket,visual:'QA → launch → ownership'},
];

export function BuildStory(){
  const [active,setActive]=useState(0);
  const refs=useRef<(HTMLElement|null)[]>([]);
  useEffect(()=>{
    const obs=refs.current.map((el,i)=>{
      if(!el) return null;
      const o=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)setActive(i)},{rootMargin:'-35% 0px -45% 0px',threshold:.01});
      o.observe(el);return o;
    });
    return()=>obs.forEach(o=>o?.disconnect());
  },[]);
  const current=steps[active];
  return <section className="section build-story-section"><div className="shell build-story">
    <div className="build-story-intro"><span className="eyebrow">Flexible delivery</span><h2>The process adapts to the job. The clarity does not.</h2><p>A focused fix and a full product build should not move at the same pace. Both should make the next decision visible.</p></div>
    <div className="build-story-layout">
      <div className="build-story-steps">{steps.map((step,i)=><article ref={el=>{refs.current[i]=el}} key={step.n} className={active===i?'active':''} onMouseEnter={()=>setActive(i)}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></article>)}</div>
      <div className="build-story-sticky" aria-hidden="true"><div className="story-glass"><div className="story-top"><span/><span/><span/><b>delivery / {current.n}</b></div><div className="story-body"><current.Icon/><small>Current stage</small><h3>{current.title}</h3><p>{current.visual}</p><div className="story-progress">{steps.map((s,i)=><i key={s.n} className={i<=active?'on':''}/>)}</div></div></div></div>
    </div>
  </div></section>
}
