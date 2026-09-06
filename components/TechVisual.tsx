import { BarChart3, Boxes, Code2, Database, Globe2, Layers3, Mail, Rocket, ShieldCheck, ShoppingBag } from 'lucide-react';

type Kind='home'|'work'|'services'|'process'|'about'|'contact';
const configs={
 home:{title:'Production system',sub:'Next.js · Supabase · Stripe',icon:Rocket,lines:['Performance-first UI','Secure data layer','Deployment & handoff']},
 work:{title:'Selected systems',sub:'Commerce · Dashboards · Platforms',icon:Layers3,lines:['Real client build','Production architecture','Labeled concept studies']},
 services:{title:'Full-stack delivery',sub:'Frontend → backend → launch',icon:Boxes,lines:['E-commerce systems','Dashboards & data tools','Custom web apps']},
 process:{title:'Clear delivery loop',sub:'Discover → shape → build → ship',icon:Code2,lines:['Scope first','Visible progress','Clean handoff']},
 about:{title:'Builder mindset',sub:'Product thinking + engineering',icon:Database,lines:['Business-first decisions','Maintainable systems','Practical problem solving']},
 contact:{title:'Start with clarity',sub:'Tell me what you need',icon:Mail,lines:['Goals & constraints','Best-fit approach','Clear next step']},
} satisfies Record<Kind,{title:string;sub:string;icon:any;lines:string[]}>;

export function TechVisual({kind='home'}:{kind?:Kind}){
 const c=configs[kind]; const Icon=c.icon;
 return <div className={`tech-visual tech-visual-${kind}`} aria-hidden="true">
   <div className="tech-glow"/>
   <div className="tech-window">
     <div className="tech-window-top"><div><i/><i/><i/></div><span>fahaddev / {kind}</span><b>LIVE</b></div>
     <div className="tech-window-body">
       <div className="tech-primary"><span className="tech-icon"><Icon size={24}/></span><small>{c.sub}</small><strong>{c.title}</strong></div>
       <div className="tech-lines">{c.lines.map((line,i)=><div key={line}><span>0{i+1}</span><b>{line}</b><em>{i===0?'ready':'connected'}</em></div>)}</div>
       <div className="tech-orbit"><Globe2 size={19}/><BarChart3 size={18}/><ShieldCheck size={18}/><ShoppingBag size={18}/></div>
     </div>
   </div>
 </div>
}
