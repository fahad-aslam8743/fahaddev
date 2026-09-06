import { Landmark, ShoppingBag, BarChart3, Armchair } from 'lucide-react';
import { Reveal } from './Reveal';
const items=[
  {name:'Youth Senate of Pakistan',meta:'Organization platform',icon:Landmark,accent:true},
  {name:'ÉLITES',meta:'Full-stack commerce build',icon:ShoppingBag},
  {name:'Pulse',meta:'Analytics concept',icon:BarChart3,concept:true},
  {name:'Loom Studio',meta:'Commerce concept',icon:Armchair,concept:true},
];
export function Partners(){return <section className="partners-section"><div className="shell"><Reveal className="section-head centered dark-head"><span className="eyebrow">Relevant product experience</span><h2>Real organization work, commerce systems and clearly labeled concept builds.</h2><p>Proof is separated from presentation: client work stays client work, and concept work is labeled as concept work.</p></Reveal><Reveal className="partner-logo-grid">{items.map(({icon:Icon,...x})=><article className={`partner-logo ${x.accent?'partner-highlight':''}`} key={x.name}><span className="partner-custom-icon"><Icon/></span><div><b>{x.name}</b><small>{x.meta}{x.concept?' · Concept':''}</small></div></article>)}</Reveal></div></section>}
