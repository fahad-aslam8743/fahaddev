'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, BarChart3, Gauge, Layers3, ShoppingBag } from 'lucide-react';

const modes=[
  {
    id:'sell',label:'Sell more clearly',icon:ShoppingBag,
    kicker:'Commerce / conversion',
    title:'Turn browsing into a cleaner buying decision.',
    body:'When the product is good but the path feels generic, slow or uncertain, I focus the build around product clarity, mobile buying and checkout confidence.',
    bullets:['Product discovery that feels intentional','Fewer dead ends between interest and checkout','CMS + orders structured for the team'],
    href:'/services/ecommerce-development',signal:'customer → product → checkout',
  },
  {
    id:'operate',label:'Run operations better',icon:BarChart3,
    kicker:'Dashboards / internal systems',
    title:'Replace repeated admin work with one usable operating view.',
    body:'When the team is bouncing between spreadsheets, messages and disconnected tools, the right interface can remove manual work instead of adding another dashboard nobody uses.',
    bullets:['Useful views instead of vanity charts','Role-aware workflows and actions','Data structured around everyday decisions'],
    href:'/services/dashboard-development',signal:'data → visibility → action',
  },
  {
    id:'product',label:'Build a real product',icon:Layers3,
    kicker:'Full-stack web apps',
    title:'Connect the interface, data and business logic from day one.',
    body:'For products that need authentication, databases, APIs, permissions or payments, I build the moving parts as one system rather than handing the hard parts between separate people.',
    bullets:['Frontend and backend designed together','Clear ownership of accounts and source','Production paths considered before launch'],
    href:'/services/full-stack-web-app-development',signal:'idea → system → product',
  },
  {
    id:'improve',label:'Fix what already exists',icon:Gauge,
    kicker:'Focused improvements',
    title:'Keep what works. Repair what is costing attention, trust or speed.',
    body:'Not every business needs a rebuild. Sometimes the highest-value move is fixing the mobile experience, conversion path, performance or one broken workflow.',
    bullets:['Audit before rebuild','Prioritize the highest-impact friction','Ship focused improvements without unnecessary scope'],
    href:'/services/website-improvements',signal:'friction → focus → improvement',
  },
] as const;

export function CapabilitySwitcher(){
  const [active,setActive]=useState(0);
  const mode=modes[active];
  const Icon=mode.icon;
  return <section className="section capability-switch-section"><div className="shell capability-switch-shell">
    <div className="capability-switch-head"><span className="eyebrow">Choose the outcome, not the technology</span><h2>What needs to move?</h2><p>Tap the problem closest to yours. The technical stack comes after the business direction is clear.</p></div>
    <div className="capability-switcher">
      <div className="capability-tabs" role="tablist" aria-label="Project outcomes">{modes.map((m,i)=>{const MIcon=m.icon;return <button key={m.id} role="tab" aria-selected={active===i} className={active===i?'active':''} onClick={()=>setActive(i)}><MIcon/><span>{m.label}</span></button>})}</div>
      <div className="capability-stage" key={mode.id}>
        <div className="capability-stage-copy"><span className="eyebrow">{mode.kicker}</span><h3>{mode.title}</h3><p>{mode.body}</p><ul>{mode.bullets.map(x=><li key={x}>{x}</li>)}</ul><Link href={mode.href}>See how I approach it <ArrowUpRight size={17}/></Link></div>
        <div className="capability-live-panel" aria-hidden="true"><div className="capability-panel-top"><span><i/>LIVE SYSTEM</span><b>{String(active+1).padStart(2,'0')}</b></div><div className="capability-orbit"><Icon/><span className="orbit o1"/><span className="orbit o2"/><span className="orbit o3"/></div><div className="capability-signal"><small>signal path</small><strong>{mode.signal}</strong><div><i/><i/><i/><i/><i/></div></div></div>
      </div>
    </div>
  </div></section>;
}
