import {
  ArrowUpRight,
  BarChart3,
  Check,
  CircleDollarSign,
  Code2,
  Database,
  Gauge,
  Layers3,
  Mail,
  MessageCircle,
  MousePointerClick,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
} from 'lucide-react';

type Kind='home'|'work'|'services'|'process'|'about'|'contact';

const labels:Record<Kind,string>={
  home:'Customer → product → action',
  work:'Selected systems',
  services:'Connected delivery',
  process:'Delivery control',
  about:'Product-minded engineering',
  contact:'Project intake',
};

function WindowTop({kind}:{kind:Kind}){
  return <div className="hs-topbar"><div className="hs-dots"><i/><i/><i/></div><span>fahaddev / {kind}</span><b><span/>LIVE</b></div>;
}

function HomeScene(){return <div className="hs-scene hs-home-scene">
  <div className="hs-stage-head"><div><small>Conversion path</small><strong>Make the next step obvious.</strong></div><span className="hs-live-pill"><Sparkles size={13}/>Product signal</span></div>
  <div className="hs-journey"><div><span>01</span><MousePointerClick/><b>Arrive</b><small>Clear promise</small></div><em/><div><span>02</span><Search/><b>Understand</b><small>Proof + fit</small></div><em/><div><span>03</span><ArrowUpRight/><b>Act</b><small>Low-friction CTA</small></div></div>
  <div className="hs-home-lower"><div className="hs-mini-chart"><div className="hs-mini-head"><span><BarChart3 size={15}/>Customer signal</span><b>↑ clearer</b></div><div className="hs-bars"><i/><i/><i/><i/><i/><i/></div></div><div className="hs-check-list"><span><Check/>Mobile path</span><span><Check/>Trust proof</span><span><Check/>Clean handoff</span></div></div>
</div>}

function WorkScene({context}:{context?:string}){return <div className="hs-scene hs-work-scene">
  <div className="hs-stage-head"><div><small>{context?'Case study system':'Case study library'}</small><strong>{context||'Proof with context, not decoration.'}</strong></div><span className="hs-live-pill"><Layers3 size={13}/>Systems</span></div>
  <div className="hs-project-stack"><article><div className="hs-project-mark commerce"><ShoppingBag/></div><div><b>Commerce</b><small>Storefront · checkout · content</small></div><span>Production</span></article><article><div className="hs-project-mark platform"><Database/></div><div><b>Organization platform</b><small>Admin · records · workflows</small></div><span>Live system</span></article><article><div className="hs-project-mark dashboard"><BarChart3/></div><div><b>Dashboard</b><small>Data · actions · visibility</small></div><span>Product study</span></article></div>
  <div className="hs-proof-line"><span><ShieldCheck/>Problem</span><i/><span><Code2/>Build</span><i/><span><Gauge/>Outcome</span></div>
</div>}

function ServicesScene({context}:{context?:string}){
  const specific=context?context.toLowerCase():'';
  const set=specific.includes('commerce')?{core:'Purchase path',sub:'from product to order',nodes:[[ShoppingBag,'Products'],[Layers3,'Content'],[CircleDollarSign,'Checkout'],[Database,'Orders']] as const}:specific.includes('dashboard')?{core:'Operating view',sub:'see and act faster',nodes:[[Database,'Data'],[Search,'Filters'],[ShieldCheck,'Roles'],[BarChart3,'Actions']] as const}:specific.includes('full-stack')?{core:'Product system',sub:'one connected build',nodes:[[Layers3,'Interface'],[ShieldCheck,'Auth'],[Database,'Data'],[Workflow,'Integrations']] as const}:specific.includes('improvement')?{core:'Highest-impact fix',sub:'keep what already works',nodes:[[MousePointerClick,'UX'],[Gauge,'Speed'],[Layers3,'Mobile'],[Rocket,'Deployment']] as const}:{core:'Business goal',sub:'what should improve?',nodes:[[ShoppingBag,'Commerce'],[BarChart3,'Dashboards'],[Code2,'Web apps'],[Gauge,'Improvements']] as const};
  return <div className="hs-scene hs-services-scene">
  <div className="hs-stage-head"><div><small>{context||'One connected product path'}</small><strong>{context?'The moving parts stay connected.':'Frontend and operations move together.'}</strong></div><span className="hs-live-pill"><Workflow size={13}/>Full-stack</span></div>
  <div className="hs-system-map"><div className="hs-core"><Layers3/><b>{set.core}</b><small>{set.sub}</small></div>{set.nodes.map(([Icon,label],i)=><div className={`hs-node n${i+1}`} key={label}><Icon/><span>{label}</span></div>)}<svg className="hs-connectors" viewBox="0 0 600 280" preserveAspectRatio="none"><path d="M300 140 C230 120 195 70 120 54"/><path d="M300 140 C370 120 405 70 480 54"/><path d="M300 140 C230 160 195 220 120 226"/><path d="M300 140 C370 160 405 220 480 226"/></svg></div>
</div>}

function ProcessScene(){return <div className="hs-scene hs-process-scene">
  <div className="hs-stage-head"><div><small>Visible delivery</small><strong>Know what is happening next.</strong></div><span className="hs-live-pill"><Rocket size={13}/>Ship cleanly</span></div>
  <div className="hs-process-track">{[['01','Discover'],['02','Shape'],['03','Build'],['04','Verify'],['05','Launch']].map(([n,t],i)=><div className="hs-process-step" key={n}><span>{n}</span><b>{t}</b><small>{i<4?'next':'live'}</small></div>)}</div>
  <div className="hs-process-footer"><span><Check/>Scope before code</span><span><Check/>Reviewable progress</span><span><Check/>Ownership at handoff</span></div>
</div>}

function AboutScene(){return <div className="hs-scene hs-about-scene">
  <div className="hs-stage-head"><div><small>How I think about the work</small><strong>Business problem → product system.</strong></div><span className="hs-live-pill"><Code2 size={13}/>Direct builder</span></div>
  <div className="hs-about-grid"><div className="hs-about-main"><span className="hs-avatar">FA</span><div><b>FahadDev</b><small>Product thinking + full-stack delivery</small></div></div><div className="hs-about-principles"><article><span>01</span><b>Clarify</b><small>Goal before feature list</small></article><article><span>02</span><b>Connect</b><small>UI, data, ops, launch</small></article><article><span>03</span><b>Protect</b><small>Critical flows + ownership</small></article></div></div>
</div>}

function ContactScene(){return <div className="hs-scene hs-contact-scene">
  <div className="hs-stage-head"><div><small>Project brief</small><strong>Start with context, not technical jargon.</strong></div><span className="hs-live-pill"><MessageCircle size={13}/>Direct reply</span></div>
  <div className="hs-contact-card"><div className="hs-contact-row"><span>Name</span><b>Your project</b></div><div className="hs-contact-row"><span>Goal</span><b>What needs to work better?</b></div><div className="hs-contact-message"><i/><i/><i/></div><div className="hs-contact-actions"><span><Mail/>Email</span><span><MessageCircle/>WhatsApp</span><b>Brief received <Check/></b></div></div>
  <div className="hs-contact-proof"><span><CircleDollarSign/>Scope first</span><span><ShieldCheck/>No lock-in</span><span><Rocket/>Clear next step</span></div>
</div>}

export function HeroSystem({kind='home',context}:{kind?:Kind;context?:string}){
  return <div className={`hero-system hs-${kind}`} aria-hidden="true">
    <div className="hs-aura"/>
    <div className="hs-window">
      <WindowTop kind={kind}/>
      {kind==='home'?<HomeScene/>:kind==='work'?<WorkScene context={context}/>:kind==='services'?<ServicesScene context={context}/>:kind==='process'?<ProcessScene/>:kind==='about'?<AboutScene/>:<ContactScene/>}
    </div>
    <div className="hs-float hs-float-left"><span>{context||labels[kind]}</span><b><span/>ready</b></div>
    <div className="hs-float hs-float-right"><ShieldCheck/><div><small>Delivery principle</small><b>Clarity before complexity</b></div></div>
  </div>;
}
