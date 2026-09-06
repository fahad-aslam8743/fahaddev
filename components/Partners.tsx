import { Landmark, ShoppingBag, BarChart3, Armchair } from 'lucide-react';
import { Reveal } from './Reveal';
const items=[
  {name:'Youth Senate of Pakistan',meta:'Organization platform',icon:Landmark,accent:true},
  {name:'ÉLITES',meta:'Commerce build',icon:ShoppingBag},
  {name:'Pulse',meta:'Analytics concept',icon:BarChart3},
  {name:'Loom Studio',meta:'Commerce concept',icon:Armchair},
];
export function Partners(){return <section className="partners-section"><div className="shell"><Reveal className="section-head centered dark-head"><span className="eyebrow">Organizations & product work</span><h2>Work shaped around different users, workflows and business goals.</h2><p>A snapshot of organization work and portfolio systems behind the case studies.</p></Reveal><Reveal className="partner-logo-grid">{items.map(({icon:Icon,...x})=><article className={`partner-logo ${x.accent?'partner-highlight':''}`} key={x.name}><span className="partner-custom-icon"><Icon/></span><div><b>{x.name}</b><small>{x.meta}</small></div></article>)}</Reveal></div></section>}
