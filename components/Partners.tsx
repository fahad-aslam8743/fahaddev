import { Landmark, ShoppingBag, BarChart3, Armchair } from 'lucide-react';
import { Reveal } from './Reveal';
import { BrandLogo } from './BrandLogo';
const items=[
 {type:'lucide',icon:Landmark,name:'Youth Senate of Pakistan',meta:'Client organization',tone:'client'},
 {type:'lucide',icon:ShoppingBag,name:'ÉLITES',meta:'Commerce build',tone:'work'},
 {type:'lucide',icon:BarChart3,name:'Pulse',meta:'Analytics product',tone:'work'},
 {type:'lucide',icon:Armchair,name:'Loom Studio',meta:'Commerce concept',tone:'work'},
 {type:'brand',slug:'vercel',name:'Vercel',meta:'Deployment platform',tone:'tech'},
 {type:'brand',slug:'supabase',name:'Supabase',meta:'Data platform',tone:'tech'},
 {type:'brand',slug:'stripe',name:'Stripe',meta:'Payments platform',tone:'tech'},
] as const;
export function Partners(){return <section className="partners-section"><div className="shell"><Reveal className="partners-copy"><span className="eyebrow">Clients, product work & platform ecosystem</span><h2>Built in real systems, not presentation-only mockups.</h2><p>Selected organization work, product builds, and production platforms that sit behind the kind of systems I deliver.</p></Reveal><Reveal className="partner-logo-grid">{items.map((x)=>{const Icon=x.type==='lucide'?x.icon:null;return <article key={x.name} className={`partner-logo ${x.tone}`}>{x.type==='brand'?<BrandLogo slug={x.slug} name={x.name}/>:<span className="partner-custom-icon">{Icon&&<Icon/>}</span>}<div><b>{x.name}</b><small>{x.meta}</small></div></article>})}</Reveal></div></section>}
