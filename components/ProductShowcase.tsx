'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, BarChart3, Check, Database, Gauge, Layers3, ShoppingBag, Sparkles, Workflow } from 'lucide-react';

type Mode='commerce'|'operations'|'product'|'improve';

const modes:{id:Mode;label:string;eyebrow:string;title:string;body:string;cta:string;href:string;metrics:[string,string][];bullets:string[]}[]=[
  {id:'commerce',label:'Commerce',eyebrow:'Customer experience',title:'Turn product interest into a cleaner buying path.',body:'A custom storefront can keep the brand expressive while the underlying content, checkout and order flow stay practical for the team running it.',cta:'Explore e-commerce',href:'/services/ecommerce-development',metrics:[['Product','clearer'],['Checkout','shorter'],['Content','editable']],bullets:['Mobile-first product discovery','CMS-managed product content','Connected checkout and order data']},
  {id:'operations',label:'Internal tools',eyebrow:'Operational clarity',title:'Put the information your team acts on in one usable place.',body:'Dashboards and internal tools work best when they reduce repeated decisions, duplicated entry and spreadsheet hunting — not when they simply display more charts.',cta:'Explore dashboards',href:'/services/dashboard-development',metrics:[['Data','joined'],['Roles','clear'],['Actions','visible']],bullets:['Focused views instead of data noise','Role-aware access and workflows','Fewer manual handoffs']},
  {id:'product',label:'Full-stack product',eyebrow:'Connected delivery',title:'Build the interface and the system behind it as one product.',body:'Authentication, data, business logic, content and deployment are planned together so the experience feels coherent instead of assembled from disconnected pieces.',cta:'Explore full-stack apps',href:'/services/full-stack-web-app-development',metrics:[['Interface','fast'],['Data','structured'],['Launch','owned']],bullets:['Frontend + backend in one delivery path','Authentication and protected workflows','Production deployment and clean handoff']},
  {id:'improve',label:'Improve existing',eyebrow:'Focused improvement',title:'Keep what already works. Fix the part that is costing you.',body:'A rebuild is not automatically better. Sometimes the smarter project is a responsive pass, performance cleanup, conversion fix, integration or targeted feature addition.',cta:'Explore website improvements',href:'/services/website-improvements',metrics:[['Scope','smaller'],['Risk','lower'],['Impact','focused']],bullets:['Audit before replacement','Prioritise the highest-friction path','Improve without unnecessary migration']},
];

export function ProductShowcase(){
  const [mode,setMode]=useState<Mode>('commerce');
  const current=modes.find(x=>x.id===mode)!;
  return <section className="section product-showcase-section">
    <div className="shell">
      <div className="section-head centered product-showcase-head"><span className="eyebrow">One builder, different business problems</span><h2>Explore the kind of system you actually need.</h2><p>The interface changes with the problem. The delivery principle stays the same: clarity first, connected implementation, clean ownership.</p></div>
      <div className="glass-segmented" role="tablist" aria-label="Project types">
        {modes.map(x=><button key={x.id} type="button" role="tab" aria-selected={mode===x.id} className={mode===x.id?'active':''} onClick={()=>setMode(x.id)}>{x.label}</button>)}
      </div>
      <div className="product-showcase" key={mode}>
        <div className="product-showcase-copy">
          <span className="eyebrow">{current.eyebrow}</span>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          <ul>{current.bullets.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul>
          <Link className="showcase-link" href={current.href}>{current.cta}<ArrowRight size={17}/></Link>
        </div>
        <div className={`product-canvas canvas-${mode}`} aria-hidden="true">
          <div className="canvas-orb canvas-orb-one"/><div className="canvas-orb canvas-orb-two"/>
          <div className="canvas-window">
            <div className="canvas-window-top"><span/><span/><span/><b>fahaddev · product system</b></div>
            <div className="canvas-window-body">
              <div className="canvas-primary">
                <div className="canvas-primary-icon">{mode==='commerce'?<ShoppingBag/>:mode==='operations'?<BarChart3/>:mode==='product'?<Layers3/>:<Gauge/>}</div>
                <small>{current.eyebrow}</small><strong>{current.title}</strong>
                <div className="canvas-lines"><i/><i/><i/></div>
              </div>
              <div className="canvas-side">
                <div className="canvas-mini"><Sparkles/><span>Product signal</span><b>Focused</b></div>
                <div className="canvas-mini"><Workflow/><span>Delivery path</span><b>Connected</b></div>
                <div className="canvas-mini"><Database/><span>Ownership</span><b>Clear</b></div>
              </div>
            </div>
          </div>
          <div className="canvas-metrics">{current.metrics.map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}</div>
        </div>
      </div>
    </div>
  </section>
}
