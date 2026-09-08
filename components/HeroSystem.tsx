'use client';

import { useRef } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight, BarChart3, Check, Code2, Database, Gauge, Layers3, Mail, MessageCircle, Rocket, ShieldCheck, ShoppingBag, Sparkles, Workflow } from 'lucide-react';

type Kind='home'|'work'|'services'|'process'|'about'|'contact'|'privacy';

const meta:Record<Kind,{label:string;sub:string}>= {
  home:{label:'Live product view',sub:'What customers see + what your team controls'},
  work:{label:'Case-study view',sub:'Problem, system and outcome in one story'},
  services:{label:'Connected build',sub:'Experience, content, data and deployment'},
  process:{label:'Visible delivery',sub:'You can see what is happening next'},
  about:{label:'Direct builder',sub:'Strategy, design judgment and implementation'},
  contact:{label:'Project intake',sub:'A clear route from first message to next step'},
  privacy:{label:'Data handling',sub:'Only the context needed for the conversation you started'},
};

function ConnectorLines(){return <svg className="studio-connectors" viewBox="0 0 620 410" preserveAspectRatio="none" aria-hidden="true">
  <path d="M88 86 C185 86 150 190 255 190 S365 118 455 118"/>
  <path d="M160 320 C230 260 290 340 365 274 S468 246 535 300"/>
  <path d="M52 235 C150 250 172 246 245 282"/>
</svg>}

function BrowserTop({label='fahaddev · live preview'}:{label?:string}){return <div className="studio-browser-top"><span/><span/><span/><b>{label}</b><i>↗</i></div>}

function HomeScene({imageUrl,context}:{imageUrl?:string|null;context?:string}){return <div className="studio-scene home-scene">
  <div className={`studio-live-site ${imageUrl?'has-real-preview':''}`}>
    {imageUrl?<div className="studio-real-project"><Image src={imageUrl} alt="Featured FahadDev project preview" fill priority sizes="(max-width: 720px) 82vw, 430px"/><div className="studio-real-project-shade"/><div className="studio-real-project-label"><small>Featured build</small><b>{context||'Live project'}</b><span>real project screenshot</span></div></div>:<>
    <div className="studio-live-nav"><b>North.</b><span>Shop</span><span>Story</span><i>Bag 02</i></div>
    <div className="studio-live-hero"><div><small>New collection</small><strong>Objects made to stay.</strong><button>Explore collection <ArrowUpRight size={13}/></button></div><div className="studio-product-shape"><i/><i/><i/></div></div>
    <div className="studio-live-products"><span/><span/><span/></div></>}
  </div>
  <div className="studio-control-card control-one"><span><Database/><small>CMS</small></span><b>Content your team can update</b><i><em style={{width:'78%'}}/></i></div>
  <div className="studio-control-card control-two"><span><BarChart3/><small>Orders</small></span><b>Customer action connected to operations</b><div className="mini-bars"><i/><i/><i/><i/></div></div>
  <div className="studio-status-chip"><span/><b>Production ready</b><small>responsive · tested · owned</small></div>
</div>}

function WorkScene({context}:{context?:string}){return <div className="studio-scene work-scene">
  <div className="work-feature-card"><small>Selected case</small><strong>{context||'A working product, not just a final screenshot.'}</strong><div className="work-preview"><div className="work-preview-nav"/><div className="work-preview-main"><span/><span/><span/></div></div></div>
  <div className="work-story-card"><span>01</span><div><small>Problem</small><b>Find the friction</b></div></div>
  <div className="work-story-card second"><span>02</span><div><small>System</small><b>Connect the parts</b></div></div>
  <div className="work-story-card third"><span>03</span><div><small>Outcome</small><b>Make the result usable</b></div></div>
</div>}

function ServicesScene({context}:{context?:string}){return <div className="studio-scene services-scene">
  <ConnectorLines/>
  <div className="service-node node-main"><Sparkles/><small>{context||'Your product'}</small><b>One connected experience</b></div>
  <div className="service-node node-a"><Code2/><span>Interface</span></div>
  <div className="service-node node-b"><Database/><span>Data</span></div>
  <div className="service-node node-c"><ShoppingBag/><span>Commerce</span></div>
  <div className="service-node node-d"><Workflow/><span>Operations</span></div>
  <div className="service-node node-e"><Rocket/><span>Launch</span></div>
  <div className="service-flow-label"><span>Design</span><i/><span>Build</span><i/><span>Connect</span><i/><span>Ship</span></div>
</div>}

function ProcessScene(){return <div className="studio-scene process-scene">
  <div className="process-live-line"><i/></div>
  {['Understand','Shape','Build','Review','Launch'].map((x,i)=><div key={x} className={`process-live-step step-${i+1}`}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b><small>{i===0?'goal + friction':i===1?'scope + flows':i===2?'working slices':i===3?'test + refine':'deploy + handoff'}</small></div>)}
  <div className="process-current"><Gauge/><span><small>Current principle</small><b>Important decisions stay visible.</b></span></div>
</div>}

function AboutScene(){return <div className="studio-scene about-scene">
  <div className="builder-card"><div className="builder-avatar">FA</div><div><small>FahadDev</small><strong>One person from product question to production.</strong></div></div>
  <div className="builder-map"><div><span>01</span><b>Understand</b><small>What should change for the business?</small></div><i/><div><span>02</span><b>Build</b><small>What system makes that change possible?</small></div><i/><div><span>03</span><b>Ship</b><small>How does it stay usable after launch?</small></div></div>
  <div className="builder-stack"><span><Layers3/>Product thinking</span><span><Code2/>Full-stack build</span><span><ShieldCheck/>Clean ownership</span></div>
</div>}


function PrivacyScene(){return <div className="studio-scene privacy-scene">
  <div className="privacy-shield"><ShieldCheck/><span><small>Project enquiries</small><b>Your details are used to understand and reply to the conversation you started.</b></span></div>
  <div className="privacy-flow"><div><span>01</span><b>You send context</b></div><i/><div><span>02</span><b>Stored for reply</b></div><i/><div><span>03</span><b>Managed privately</b></div></div>
  <div className="privacy-note"><Check/><span>Reviews are moderated before public display.</span></div>
</div>}

function ContactScene(){return <div className="studio-scene contact-scene">
  <div className="message-bubble client"><small>You</small><b>“Our mobile site loses people before they enquire.”</b></div>
  <div className="message-path"><i/><span>context</span><i/><span>scope</span><i/><span>next step</span></div>
  <div className="message-bubble reply"><small>FahadDev</small><b>“Send the URL. I’ll start with the friction before recommending a rebuild.”</b></div>
  <div className="contact-live-actions"><div><Mail/><span><small>Email</small><b>Detailed brief</b></span></div><div><MessageCircle/><span><small>WhatsApp</small><b>Quick context</b></span></div></div>
</div>}

export function HeroSystem({kind='home',context,imageUrl}:{kind?:Kind;context?:string;imageUrl?:string|null}){
  const ref=useRef<HTMLDivElement>(null);
  const onMove=(e:ReactPointerEvent<HTMLDivElement>)=>{
    if(!ref.current||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const r=ref.current.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*2;
    const y=((e.clientY-r.top)/r.height-.5)*2;
    ref.current.style.setProperty('--hero-rx',`${y*-1.1}deg`);
    ref.current.style.setProperty('--hero-ry',`${x*1.5}deg`);
    ref.current.style.setProperty('--hero-tx',`${x*4}px`);
    ref.current.style.setProperty('--hero-ty',`${y*4}px`);
    ref.current.style.setProperty('--hero-grid-x',`${x*-4}px`);
    ref.current.style.setProperty('--hero-grid-y',`${y*-4}px`);
    ref.current.style.setProperty('--hero-orb-x',`${x*10}px`);
    ref.current.style.setProperty('--hero-orb-y',`${y*8}px`);
  };
  const onLeave=()=>{if(!ref.current)return; for(const [k,v] of [['--hero-rx','0deg'],['--hero-ry','0deg'],['--hero-tx','0px'],['--hero-ty','0px'],['--hero-grid-x','0px'],['--hero-grid-y','0px'],['--hero-orb-x','0px'],['--hero-orb-y','0px']]) ref.current.style.setProperty(k,v)};
  return <div ref={ref} className={`studio-hero-system hero-kind-${kind}`} onPointerMove={onMove} onPointerLeave={onLeave}>
    <div className="studio-hero-grid" aria-hidden="true"/>
    <div className="studio-orb orb-one" aria-hidden="true"/><div className="studio-orb orb-two" aria-hidden="true"/>
    <div className="studio-browser">
      <BrowserTop label={kind==='work'&&context?`${context} · case study`:'fahaddev · interactive preview'}/>
      {kind==='home'?<HomeScene imageUrl={imageUrl} context={context}/>:kind==='work'?<WorkScene context={context}/>:kind==='services'?<ServicesScene context={context}/>:kind==='process'?<ProcessScene/>:kind==='about'?<AboutScene/>:kind==='privacy'?<PrivacyScene/>:<ContactScene/>}
    </div>
    <div className="studio-hero-label"><span><i/>Interactive preview</span><div><small>{meta[kind].label}</small><b>{context||meta[kind].sub}</b></div></div>
  </div>
}
