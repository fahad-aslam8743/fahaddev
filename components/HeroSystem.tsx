import type { CSSProperties } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MessageCircle,
  PackageCheck,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react';

type Kind='home'|'work'|'services'|'process'|'about'|'contact'|'privacy';

type ServiceScene = {
  label:string;
  icon:typeof ShoppingBag;
  items:[string,string,string,string];
};

const serviceScene=(context?:string):ServiceScene=>{
  const value=(context||'').toLowerCase();
  if(value.includes('commerce'))return {label:'Commerce engine',icon:ShoppingBag,items:['Products','Content','Checkout','Orders']};
  if(value.includes('dashboard')||value.includes('tool'))return {label:'Operations engine',icon:LayoutDashboard,items:['Metrics','Roles','Search','Actions']};
  if(value.includes('full')||value.includes('app'))return {label:'Product engine',icon:Code2,items:['Interface','Auth','API','Database']};
  if(value.includes('improve')||value.includes('existing'))return {label:'Improvement engine',icon:Wrench,items:['Audit','Prioritise','Fix','Verify']};
  return {label:'Connected build',icon:Code2,items:['Experience','Content','Data','Launch']};
};

function HomeScene(){return <div className="engine-scene engine-scene-home">
  <div className="engine-home-browser">
    <div className="engine-browser-top"><i/><i/><i/><span>fahaddev.com</span></div>
    <div className="engine-home-ui">
      <div className="engine-ui-nav"><b>Brand</b><span>Work</span><span>About</span><span>Contact</span></div>
      <div className="engine-ui-copy"><small>Clear offer. Clear next step.</small><strong>A website people understand.</strong><div><span/><span/></div></div>
      <div className="engine-ui-object"><i/><i/><i/></div>
    </div>
  </div>
  <div className="engine-float engine-float-one"><Database/><span><small>CMS</small><b>Editable content</b></span></div>
  <div className="engine-float engine-float-two"><MessageCircle/><span><small>Leads</small><b>Email + WhatsApp</b></span></div>
  <div className="engine-float engine-float-three"><Rocket/><span><small>Launch</small><b>Production ready</b></span></div>
  <svg className="engine-connectors" viewBox="0 0 700 480" preserveAspectRatio="none"><path d="M370 150 C470 100 540 130 590 185"/><path d="M390 265 C510 280 520 335 586 350"/><path d="M285 320 C220 360 185 386 144 410"/></svg>
</div>}

function WorkScene({context}:{context?:string}){return <div className="engine-scene engine-scene-work">
  <div className="engine-work-index"><span>Selected work</span><b>{context||'Systems built around real problems'}</b></div>
  <div className="engine-work-card engine-work-a"><small>01 / Challenge</small><strong>Make the problem visible.</strong><i/></div>
  <div className="engine-work-card engine-work-b"><small>02 / System</small><strong>Connect the useful parts.</strong><div><span/><span/><span/></div></div>
  <div className="engine-work-card engine-work-c"><small>03 / Outcome</small><strong>Leave a product people can operate.</strong><Check/></div>
  <div className="engine-work-watermark">CASE<br/>STUDY</div>
</div>}

function ServicesScene({context}:{context?:string}){
  const scene=serviceScene(context);const Icon=scene.icon;
  return <div className={`engine-scene engine-scene-services engine-service-${scene.label.toLowerCase().replace(/\s+/g,'-')}`}>
    <div className="engine-service-core"><Icon/><span><small>{scene.label}</small><b>One connected product</b></span></div>
    <div className="engine-service-orbit orbit-a"><span>{scene.items[0]}</span></div>
    <div className="engine-service-orbit orbit-b"><span>{scene.items[1]}</span></div>
    <div className="engine-service-orbit orbit-c"><span>{scene.items[2]}</span></div>
    <div className="engine-service-orbit orbit-d"><span>{scene.items[3]}</span></div>
    <svg className="engine-orbit-lines" viewBox="0 0 700 480" preserveAspectRatio="none"><circle cx="465" cy="240" r="108"/><circle cx="465" cy="240" r="170"/><path d="M465 72V408M297 240H633"/></svg>
  </div>
}

function ProcessScene(){const steps=['Understand','Shape','Build','Verify','Launch'];return <div className="engine-scene engine-scene-process">
  <div className="engine-process-header"><small>Delivery engine</small><b>Visible from first question to production.</b></div>
  <svg className="engine-process-path" viewBox="0 0 700 470" preserveAspectRatio="none"><path d="M135 365 C220 330 225 205 320 220 S445 330 515 275 S570 145 625 125"/></svg>
  <div className="engine-process-stops">{steps.map((step,i)=><div key={step} style={{'--step':i} as CSSProperties}><span>{String(i+1).padStart(2,'0')}</span><i/><b>{step}</b></div>)}</div>
  <div className="engine-process-proof"><PackageCheck/><span><small>At every stage</small><b>Something concrete to review</b></span></div>
</div>}

function AboutScene(){return <div className="engine-scene engine-scene-about">
  <div className="engine-about-signature"><div>FA</div><span><small>FahadDev</small><b>One builder. Full product context.</b></span></div>
  <div className="engine-about-card about-card-a"><Sparkles/><span><small>Product thinking</small><b>Business goal before interface noise</b></span></div>
  <div className="engine-about-card about-card-b"><Code2/><span><small>Full-stack</small><b>Frontend and system decisions stay connected</b></span></div>
  <div className="engine-about-card about-card-c"><Users/><span><small>Direct relationship</small><b>No account-manager handoff</b></span></div>
  <div className="engine-about-card about-card-d"><ShieldCheck/><span><small>Ownership</small><b>Clean production handoff</b></span></div>
  <div className="engine-about-line"/>
</div>}

function ContactScene(){return <div className="engine-scene engine-scene-contact">
  <div className="engine-contact-message engine-contact-client"><small>Project enquiry</small><b>“Here is what is not working.”</b><span>mobile · conversion · workflow</span></div>
  <div className="engine-contact-arrow"><ArrowUpRight/></div>
  <div className="engine-contact-message engine-contact-reply"><small>Direct reply</small><b>“Here is the smallest useful next step.”</b><span>scope before commitment</span></div>
  <div className="engine-contact-channel channel-mail"><Mail/><b>Email</b></div>
  <div className="engine-contact-channel channel-wa"><MessageCircle/><b>WhatsApp</b></div>
</div>}

function PrivacyScene(){return <div className="engine-scene engine-scene-privacy">
  <div className="engine-privacy-lock"><LockKeyhole/></div>
  <div className="engine-privacy-card"><small>Project context</small><b>Collected only to understand and reply.</b></div>
  <div className="engine-privacy-flow"><span><FileText/>You send</span><i/><span><ShieldCheck/>Private review</span><i/><span><Mail/>Reply</span></div>
  <div className="engine-privacy-grid"><span/><span/><span/><span/><span/><span/></div>
</div>}

function sceneVariant(context?:string){
  if(!context)return 0;let total=0;for(const ch of context)total+=ch.charCodeAt(0);return total%4;
}

export function HeroSystem({kind='home',context}:{kind?:Kind;context?:string;imageUrl?:string|null}){
  const variant=sceneVariant(context);
  return <div className={`engine-hero-background engine-${kind} engine-variant-${variant}`} aria-hidden="true">
    <div className="engine-paper-grid"/><div className="engine-aura aura-one"/><div className="engine-aura aura-two"/>
    {kind==='home'?<HomeScene/>:kind==='work'?<WorkScene context={context}/>:kind==='services'?<ServicesScene context={context}/>:kind==='process'?<ProcessScene/>:kind==='about'?<AboutScene/>:kind==='contact'?<ContactScene/>:<PrivacyScene/>}
  </div>;
}
