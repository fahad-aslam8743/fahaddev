import { Landmark, ShoppingBag } from 'lucide-react';
import { Reveal } from './Reveal';
import { BrandLogo } from './BrandLogo';
const items=[
 {type:'client',name:'Youth Senate of Pakistan',meta:'Organization platform'},
 {type:'project',name:'ÉLITES',meta:'Commerce product'},
 {type:'brand',slug:'vercel',name:'Vercel',meta:'Deployment'},
 {type:'brand',slug:'supabase',name:'Supabase',meta:'Data & auth'},
 {type:'brand',slug:'stripe',name:'Stripe',meta:'Payments'},
 {type:'brand',slug:'sanity',name:'Sanity',meta:'Content'},
] as const;
export function Partners(){return <section className="partners-section"><div className="shell"><Reveal className="section-head centered dark-head"><span className="eyebrow">Client & delivery ecosystem</span><h2>Real organization work, real product builds, real production platforms.</h2><p>A compact view of the client and technology ecosystem behind the work — without turning the page into a wall of logos.</p></Reveal><Reveal className="partner-logo-grid">{items.map((x)=>{if(x.type==='brand') return <article className="partner-logo" key={x.name}><BrandLogo slug={x.slug} name={x.name}/><div><b>{x.name}</b><small>{x.meta}</small></div></article>; const Icon=x.type==='client'?Landmark:ShoppingBag; return <article className="partner-logo partner-highlight" key={x.name}><span className="partner-custom-icon"><Icon/></span><div><b>{x.name}</b><small>{x.meta}</small></div></article>})}</Reveal></div></section>}
