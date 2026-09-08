import { ArrowRight, BarChart3, Check, Code2, Database, Gauge, Layers3, Mail, MessageCircle, Rocket, ShieldCheck, ShoppingBag, Workflow } from 'lucide-react';

type Kind='home'|'work'|'services'|'process'|'about'|'contact';

const meta:Record<Kind,{label:string;sub:string}>= {
  home:{label:'Customer path',sub:'Clarity → confidence → action'},
  work:{label:'Case study',sub:'Problem → system → outcome'},
  services:{label:'Delivery system',sub:'Interface + data + operations'},
  process:{label:'Project flow',sub:'Visible decisions from start to launch'},
  about:{label:'Direct builder',sub:'Product thinking + implementation'},
  contact:{label:'Project intake',sub:'Context first, scope second'},
};

function Chrome(){return <div className="glass-hero-chrome"><span/><span/><span/><b>fahaddev.com</b></div>}

function Home(){return <div className="glass-hero-content home-glass-scene">
  <div className="glass-main-card"><small>Conversion path</small><h3>Make the next useful action feel obvious.</h3><div className="glass-path"><span><b>01</b>Understand</span><i/><span><b>02</b>Trust</span><i/><span><b>03</b>Act</span></div></div>
  <div className="glass-floating glass-float-a"><BarChart3/><span><small>Signal</small><b>Clearer</b></span></div>
  <div className="glass-floating glass-float-b"><ShieldCheck/><span><small>Ownership</small><b>Clean</b></span></div>
  <div className="glass-hero-footer"><span><Check/>Responsive</span><span><Check/>Connected</span><span><Check/>Production-ready</span></div>
</div>}

function Work({context}:{context?:string}){return <div className="glass-hero-content work-glass-scene">
  <div className="glass-project-stage"><div className="glass-project-thumb"><div className="glass-project-grid"/><span>{context||'Selected system'}</span></div><div className="glass-project-copy"><small>Case study</small><h3>{context||'Proof with the decisions still visible.'}</h3><p>Context, build logic and outcome stay connected.</p></div></div>
  <div className="glass-result-row"><span><b>Problem</b>What needed to change</span><span><b>System</b>What was connected</span><span><b>Outcome</b>What the build supports</span></div>
</div>}

function Services({context}:{context?:string}){return <div className="glass-hero-content services-glass-scene">
  <div className="glass-layer-stack"><div className="glass-layer l1"><Code2/><span>Experience</span></div><div className="glass-layer l2"><Database/><span>Data</span></div><div className="glass-layer l3"><Workflow/><span>Operations</span></div><div className="glass-layer l4"><Rocket/><span>Launch</span></div></div>
  <div className="glass-system-copy"><small>{context||'Connected delivery'}</small><h3>One product, not four disconnected handoffs.</h3><p>Interface, content, data and deployment move together.</p></div>
</div>}

function Process(){return <div className="glass-hero-content process-glass-scene"><div className="glass-process-line">{['Discover','Shape','Build','Verify','Launch'].map((x,i)=><div key={x} className={i===2?'active':''}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b><i/></div>)}</div><div className="glass-process-note"><ShieldCheck/><span><small>Current principle</small><b>Make important decisions visible before they become expensive.</b></span></div></div>}

function About(){return <div className="glass-hero-content about-glass-scene"><div className="glass-profile"><div className="glass-avatar">FA</div><span><small>FahadDev</small><b>One builder across product and implementation.</b></span></div><div className="glass-principles"><div><b>01</b><span>Clarify the business problem.</span></div><div><b>02</b><span>Connect the whole product path.</span></div><div><b>03</b><span>Ship with ownership intact.</span></div></div></div>}

function Contact(){return <div className="glass-hero-content contact-glass-scene"><div className="glass-message"><small>Project brief</small><strong>What needs to work better?</strong><span/><span/><span/></div><div className="glass-contact-actions"><div><Mail/><span><small>Email</small><b>Detailed brief</b></span></div><div><MessageCircle/><span><small>WhatsApp</small><b>Quick context</b></span></div></div><div className="glass-contact-next"><span>Context received</span><ArrowRight/><b>Clear next step</b></div></div>}

export function HeroSystem({kind='home',context}:{kind?:Kind;context?:string}){return <div className={`hero-system apple-hero-system hero-kind-${kind}`} aria-hidden="true"><div className="hero-soft-light hero-light-one"/><div className="hero-soft-light hero-light-two"/><div className="glass-hero-shell"><Chrome/>{kind==='home'?<Home/>:kind==='work'?<Work context={context}/>:kind==='services'?<Services context={context}/>:kind==='process'?<Process/>:kind==='about'?<About/>:<Contact/>}</div><div className="glass-hero-caption"><span>{meta[kind].label}</span><b>{context||meta[kind].sub}</b></div></div>}
