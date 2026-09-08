'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Layers3, Rocket, SearchCheck } from 'lucide-react';

const steps=[
  {id:0,n:'01',title:'Understand',body:'Clarify the goal, the user, the friction and what must not break.',Icon:SearchCheck,visual:'Goal → friction → priority',deliverable:'Clear problem + success criteria'},
  {id:1,n:'02',title:'Shape',body:'Turn the problem into the smallest useful flows, responsibilities and decisions.',Icon:Layers3,visual:'Scope → flow → system',deliverable:'Build plan + visible scope'},
  {id:2,n:'03',title:'Build & review',body:'Move through working slices so feedback arrives while changes are still cheap.',Icon:CheckCircle2,visual:'Build → review → refine',deliverable:'Working product, reviewed in stages'},
  {id:3,n:'04',title:'Launch & hand off',body:'Verify key paths, deploy cleanly and leave ownership understandable.',Icon:Rocket,visual:'QA → launch → ownership',deliverable:'Production release + clean handoff'},
];

export function BuildStory(){
  const [active,setActive]=useState(0);
  const refs=useRef<(HTMLElement|null)[]>([]);
  useEffect(()=>{
    const obs=refs.current.map((el,i)=>{if(!el)return null;const o=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)setActive(i)},{rootMargin:'-34% 0px -48% 0px',threshold:.01});o.observe(el);return o});
    return()=>obs.forEach(o=>o?.disconnect());
  },[]);
  const current=steps[active];
  return <section className="section studio-story-section"><div className="shell studio-story">
    <div className="section-head centered studio-story-head"><span className="eyebrow">See the project move</span><h2>You should not disappear into a development black box.</h2><p>The active stage changes as you scroll. This is the same idea behind the delivery: the next decision stays visible.</p></div>
    <div className="studio-story-layout">
      <div className="studio-story-steps">{steps.map((step,i)=><article ref={el=>{refs.current[i]=el}} key={step.n} className={active===i?'active':''} onMouseEnter={()=>setActive(i)}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.body}</p><small>{step.deliverable}</small></div></article>)}</div>
      <div className="studio-story-sticky" aria-hidden="true"><div className="story-product"><div className="story-product-top"><span/><span/><span/><b>project / {current.n}</b></div><div className="story-product-stage"><current.Icon/><small>Current stage</small><h3>{current.title}</h3><p>{current.visual}</p><div className="story-product-line"><i style={{width:`${(active+1)*25}%`}}/></div><div className="story-product-grid">{steps.map((s,i)=><div key={s.n} className={i<=active?'done':''}><span>{s.n}</span><b>{s.title}</b></div>)}</div></div></div></div>
    </div>
  </div></section>;
}
