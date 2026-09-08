import Image from 'next/image';
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
} from 'lucide-react';

type Kind='home'|'work'|'services'|'process'|'about'|'contact'|'privacy';

const heroImage:Record<Kind,string>={
  home:'/heroes-v15/home.jpg',
  work:'/heroes-v15/work.jpg',
  services:'/heroes-v15/services.jpg',
  process:'/heroes-v15/process.jpg',
  about:'/heroes-v15/about.jpg',
  contact:'/heroes-v15/contact.jpg',
  privacy:'/heroes-v15/privacy.jpg',
};

function Chrome({label}:{label:string}){return <div className="ref-browser-chrome"><span/><span/><span/><b>{label}</b><i>↗</i></div>}

function HomeVisual({imageUrl,context}:{imageUrl?:string|null;context?:string}){
  return <>
    <div className="ref-browser ref-browser-home">
      <Chrome label="fahaddev · featured build"/>
      <div className="ref-browser-screen">
        {imageUrl?<Image src={imageUrl} alt={`${context||'Featured'} project preview`} fill priority sizes="(max-width: 760px) 82vw, 520px"/>:<div className="ref-demo-site">
          <div className="ref-demo-nav"><b>Atelier.</b><span>Work</span><span>About</span><i>Menu</i></div>
          <div className="ref-demo-copy"><small>Designed to be understood</small><strong>Beautiful outside.<br/>Useful underneath.</strong><button>Explore <ArrowUpRight size={12}/></button></div>
          <div className="ref-demo-object"><i/><i/><i/></div>
        </div>}
      </div>
    </div>
    <div className="ref-float-card ref-float-a"><Database/><span><small>CMS + admin</small><b>Update without code</b></span></div>
    <div className="ref-float-card ref-float-b"><Smartphone/><span><small>Responsive</small><b>Built around real phones</b></span></div>
    <div className="ref-status"><i/><span><b>Production ready</b><small>design · system · launch</small></span></div>
  </>;
}

function WorkVisual(){return <>
  <div className="ref-work-stack">
    <div className="ref-work-card card-one"><span>01</span><small>Organization platform</small><b>Public experience + admin workflows</b><div><i/><i/><i/></div></div>
    <div className="ref-work-card card-two"><span>02</span><small>Commerce</small><b>Storefront + content + checkout</b><div><i/><i/><i/></div></div>
    <div className="ref-work-card card-three"><span>03</span><small>Product system</small><b>Interface + data + operations</b><div><i/><i/><i/></div></div>
  </div>
  <div className="ref-proof-chip"><Check/><span><small>Proof over decoration</small><b>Problem → build → result</b></span></div>
</>}

function ServicesVisual({context}:{context?:string}){return <>
  <div className="ref-service-core"><small>{context||'Connected web product'}</small><strong>One product.<br/>All the important layers.</strong></div>
  <div className="ref-service-layer layer-1"><Code2/><span><small>Experience</small><b>UI + responsive flows</b></span></div>
  <div className="ref-service-layer layer-2"><Database/><span><small>System</small><b>CMS + data + auth</b></span></div>
  <div className="ref-service-layer layer-3"><ShoppingBag/><span><small>Business</small><b>Leads + payments + admin</b></span></div>
  <div className="ref-service-layer layer-4"><Rocket/><span><small>Launch</small><b>Domain + deployment + ownership</b></span></div>
</>}

function ProcessVisual(){const steps=['Understand','Shape','Build','Verify','Launch'];return <>
  <div className="ref-process-board"><small>Visible delivery</small><strong>Nothing important disappears into a black box.</strong><div className="ref-process-line">{steps.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,'0')}</span><i/><b>{s}</b></div>)}</div></div>
  <div className="ref-process-note"><LayoutDashboard/><span><small>Client view</small><b>Working checkpoints, not vague updates</b></span></div>
</>}

function AboutVisual(){return <>
  <div className="ref-about-card"><div className="ref-about-monogram">FA</div><div><small>FahadDev</small><strong>One builder from the first product question to production.</strong></div></div>
  <div className="ref-about-principles"><span><b>01</b>Understand the business</span><span><b>02</b>Build the right system</span><span><b>03</b>Hand over cleanly</span></div>
  <div className="ref-about-tools"><Code2/><Database/><LayoutDashboard/><Rocket/></div>
</>}

function ContactVisual(){return <>
  <div className="ref-message ref-message-client"><small>Project enquiry</small><b>“Our website looks fine, but mobile visitors are not converting.”</b></div>
  <div className="ref-message ref-message-reply"><small>FahadDev</small><b>“Send the URL. I’ll start with the friction before recommending a rebuild.”</b></div>
  <div className="ref-contact-actions"><span><Mail/><b>Email</b></span><span><MessageCircle/><b>WhatsApp</b></span></div>
</>}

function PrivacyVisual(){return <>
  <div className="ref-privacy-card"><ShieldCheck/><span><small>Project information</small><strong>Only used to understand and reply to the conversation you started.</strong></span></div>
  <div className="ref-privacy-flow"><span>Send context</span><i/><span>Private review</span><i/><span>Reply</span></div>
</>}

function resolveHeroImage(kind:Kind,context?:string){
  if(kind==='services'&&context){
    const c=context.toLowerCase();
    if(c.includes('commerce'))return heroImage.work;
    if(c.includes('dashboard')||c.includes('tool'))return heroImage.services;
    if(c.includes('full')||c.includes('app'))return heroImage.process;
    if(c.includes('improve')||c.includes('existing'))return heroImage.about;
  }
  if(kind==='work'&&context){
    const choices=[heroImage.work,heroImage.home,heroImage.services,heroImage.about];
    let n=0;for(const ch of context)n=(n+ch.charCodeAt(0))%choices.length;
    return choices[n];
  }
  return heroImage[kind];
}

export function HeroSystem({kind='home',context,imageUrl}:{kind?:Kind;context?:string;imageUrl?:string|null}){
  const background=resolveHeroImage(kind,context);
  return <figure className={`ref-hero-visual ref-hero-${kind}`}>
    <Image className="ref-hero-photo" src={background} alt="" fill priority={kind==='home'} sizes="(max-width: 860px) 94vw, 48vw"/>
    <div className="ref-hero-photo-wash"/>
    <div className="ref-hero-scene">
      {kind==='home'?<HomeVisual imageUrl={imageUrl} context={context}/>:kind==='work'?<WorkVisual/>:kind==='services'?<ServicesVisual context={context}/>:kind==='process'?<ProcessVisual/>:kind==='about'?<AboutVisual/>:kind==='contact'?<ContactVisual/>:<PrivacyVisual/>}
    </div>
    <figcaption><span>FahadDev</span><b>{kind==='home'?'Design + build + launch':kind==='work'?'Selected work':kind==='services'?'Connected development':kind==='process'?'Clear delivery':kind==='about'?'Direct builder':kind==='contact'?'Start a project':'Privacy by design'}</b></figcaption>
  </figure>;
}
