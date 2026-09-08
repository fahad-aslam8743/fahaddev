'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, BarChart3, Check, Database, Gauge, Layers3, ShoppingBag, Workflow } from 'lucide-react';

type Mode='commerce'|'operations'|'product'|'improve';

type ModeData={id:Mode;label:string;eyebrow:string;title:string;body:string;cta:string;href:string;customer:string[];team:string[];signal:string};
const modes:ModeData[]=[
  {id:'commerce',label:'E-commerce',eyebrow:'Sell with less friction',title:'A storefront customers understand and your team can actually run.',body:'The visual experience, product content, checkout, order data and admin flow are planned as one system.',cta:'Explore e-commerce',href:'/services/ecommerce-development',customer:['Clear product discovery','Fast mobile checkout','Trust where decisions happen'],team:['CMS-managed content','Orders stored cleanly','Ownership after launch'],signal:'Product → cart → payment → order'},
  {id:'operations',label:'Dashboard',eyebrow:'Run work with less repetition',title:'Put the data, actions and roles your team needs in one place.',body:'A useful internal tool reduces searching, duplicate entry and unnecessary handoffs instead of giving the team another dashboard to babysit.',cta:'Explore dashboards',href:'/services/dashboard-development',customer:['Faster response','Fewer mistakes','Clearer service'],team:['Role-aware views','Focused actions','Joined operational data'],signal:'Data → decision → action → record'},
  {id:'product',label:'Web app',eyebrow:'Build the real product',title:'Frontend, backend, auth, data and deployment working as one experience.',body:'The customer-facing interface and the system behind it are designed together so the product feels coherent from sign-in to the final action.',cta:'Explore full-stack apps',href:'/services/full-stack-web-app-development',customer:['Responsive interface','Reliable user flows','Consistent product logic'],team:['Authentication','Structured data','Production deployment'],signal:'User → auth → logic → data → result'},
  {id:'improve',label:'Improve',eyebrow:'Fix before rebuilding',title:'Keep the good foundation. Remove the part that is costing you.',body:'Sometimes the best project is a focused mobile, performance, conversion or feature pass—not a complete replacement.',cta:'Explore improvements',href:'/services/website-improvements',customer:['Cleaner mobile path','Faster key screens','Less confusion'],team:['Smaller scope','Lower migration risk','Focused measurable change'],signal:'Audit → priority → fix → verify'},
];

function Preview({mode}:{mode:Mode}){
  if(mode==='commerce')return <div className="scope-preview commerce-preview"><div className="scope-preview-nav"><b>North.</b><span>New</span><span>Objects</span><i>Cart 02</i></div><div className="scope-preview-hero"><div><small>NEW / 26</small><strong>Made for everyday use.</strong><button>Shop collection</button></div><div className="scope-product-art"><span/><span/></div></div><div className="scope-product-row"><i/><i/><i/></div></div>;
  if(mode==='operations')return <div className="scope-preview operations-preview"><div className="ops-sidebar"><b>Atlas</b><span className="on"/><span/><span/><span/></div><div className="ops-main"><div className="ops-head"><strong>Operations</strong><i>Today</i></div><div className="ops-metrics"><span><small>Open</small><b>18</b></span><span><small>Resolved</small><b>42</b></span><span><small>Response</small><b>1.8h</b></span></div><div className="ops-chart"><i/><i/><i/><i/><i/><i/></div><div className="ops-table"><span/><span/><span/></div></div></div>;
  if(mode==='product')return <div className="scope-preview app-preview"><div className="app-top"><b>Orbit</b><span>Workspace</span><i>FA</i></div><div className="app-stage"><div className="app-copy"><small>WORKSPACE</small><strong>One place for the whole flow.</strong><span/><span/><button>Continue</button></div><div className="app-flow"><div>User</div><i/><div>Auth</div><i/><div>Data</div><i/><div>Result</div></div></div></div>;
  return <div className="scope-preview improve-preview"><div className="improve-before"><small>Before</small><div className="bad-nav"/><div className="bad-copy"><span/><span/><span/></div><button>?</button></div><div className="improve-arrow">→</div><div className="improve-after"><small>After</small><div className="good-nav"/><strong>One clear message.</strong><p>One clear next step.</p><button>Start here</button></div></div>;
}

export function ProductShowcase(){
  const [mode,setMode]=useState<Mode>('commerce');
  const current=modes.find(x=>x.id===mode)!;
  return <section className="section live-scope-section">
    <div className="shell">
      <div className="section-head centered live-scope-head"><span className="eyebrow">What actually gets implemented</span><h2>Choose the project type. See the customer-facing experience and the business features behind it.</h2><p>This is where the build becomes concrete: interface, admin control, data, workflow and the next action the product needs to support.</p></div>
      <div className="scope-switcher" role="tablist" aria-label="Project types">
        {modes.map(x=><button key={x.id} type="button" role="tab" aria-selected={mode===x.id} className={mode===x.id?'active':''} onClick={()=>setMode(x.id)}>{x.label}</button>)}
      </div>
      <div className="live-scope" key={mode} aria-live="polite">
        <div className="live-scope-copy"><span className="eyebrow">{current.eyebrow}</span><h3>{current.title}</h3><p>{current.body}</p><div className="scope-columns"><div><b>Customer gets</b>{current.customer.map(x=><span key={x}><Check size={15}/>{x}</span>)}</div><div><b>Your team gets</b>{current.team.map(x=><span key={x}><Check size={15}/>{x}</span>)}</div></div><div className="scope-signal"><Workflow size={16}/><span>{current.signal}</span></div><Link className="showcase-link" href={current.href}>{current.cta}<ArrowRight size={17}/></Link></div>
        <div className="live-scope-visual"><div className="scope-browser"><div className="scope-browser-top"><span/><span/><span/><b>interactive product preview</b></div><Preview mode={mode}/></div><div className="scope-float scope-float-a"><Database/><span><small>Connected data</small><b>{mode==='commerce'?'Orders':mode==='operations'?'Records':mode==='product'?'User state':'Existing stack'}</b></span></div><div className="scope-float scope-float-b">{mode==='commerce'?<ShoppingBag/>:mode==='operations'?<BarChart3/>:mode==='product'?<Layers3/>:<Gauge/>}<span><small>Primary outcome</small><b>{mode==='commerce'?'Buy':mode==='operations'?'Act':mode==='product'?'Use':'Improve'}</b></span></div></div>
      </div>
    </div>
  </section>;
}
