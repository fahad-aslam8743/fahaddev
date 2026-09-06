import Link from 'next/link';
import { ArrowRight, Check, Gauge, LayoutDashboard, ShieldCheck, Workflow, Headphones, TrendingUp, MousePointerClick, Settings2, Rocket, BadgeCheck } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects } from '@/lib/projects';
import { HeroImage } from '@/components/HeroImage';
import { StackSection } from '@/components/StackSection';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Reveal } from '@/components/Reveal';

export default function Home(){return <>
<section className="home-hero-wrap"><div className="shell hero">
  <Reveal className="hero-copy"><span className="eyebrow">Web products for growing businesses</span><h1>Turn a business idea, broken workflow, or weak website into a product that performs.</h1><p className="lead">I design and build conversion-focused websites, e-commerce systems, dashboards and full-stack web apps — with the strategy, interface, backend, deployment and handoff handled as one connected project.</p><div className="hero-actions"><Link className="btn" href="/contact">Get a Free Consultation <ArrowRight size={17}/></Link><Link className="btn btn-secondary" href="/work">See Selected Work</Link></div><p className="microproof"><Check size={15}/> Direct developer access <span>·</span> Clear scope before build <span>·</span> Launch and handoff included</p></Reveal>
  <Reveal className="hero-media"><HeroImage kind="home"/></Reveal>
</div></section>

<section className="proof-ribbon"><div className="shell proof-ribbon-grid"><div><b>Mobile-first</b><span>Designed for the screens your customers actually use.</span></div><div><b>Business-focused</b><span>Every screen has a job, not just a visual purpose.</span></div><div><b>Full-stack</b><span>Frontend, backend, data and deployment work together.</span></div><div><b>Built to own</b><span>Source, accounts and handoff stay clear after launch.</span></div></div></section>

<Reveal><section className="section shell"><div className="section-head centered"><span className="eyebrow">What clients actually get</span><h2>A stronger customer journey on the outside — and a cleaner system behind it.</h2><p>The goal is not to impress you with a stack. It is to make the product easier to buy from, easier to use, easier to operate and easier to grow.</p></div><div className="benefit-grid"><article><MousePointerClick/><h3>Clearer paths to action</h3><p>Sharper hierarchy, stronger calls to action, and fewer dead ends between interest and conversion.</p></article><article><Gauge/><h3>Fast, responsive experiences</h3><p>Layouts built for real mobile behavior, with performance and usability treated as part of the product.</p></article><article><Settings2/><h3>Less operational friction</h3><p>CMS, dashboards and admin flows that reduce repetitive work and make everyday updates easier.</p></article><article><ShieldCheck/><h3>Cleaner long-term ownership</h3><p>Code, accounts, deployment and handoff stay organized so the product does not become a dependency trap.</p></article></div></section></Reveal>

<Reveal><section className="section alt"><div className="shell"><div className="section-head centered"><span className="eyebrow">Selected work</span><h2>Products built around real decisions, workflows and business needs.</h2><p>See how the interface, data and delivery come together — not just how the final screen looks.</p></div><div className="project-grid">{featuredProjects.map(p=><ProjectCard key={p.slug} p={p}/>)}</div><div className="section-single-action"><Link className="btn btn-secondary" href="/work">Explore All Case Studies <ArrowRight size={16}/></Link></div></div></section></Reveal>

<Reveal><section className="section value-band"><div className="shell value-band-grid"><div><TrendingUp/><span>Customer outcome</span><b>More confidence between first visit and next action.</b></div><div><LayoutDashboard/><span>Team outcome</span><b>Less digging, fewer manual steps, better visibility.</b></div><div><Workflow/><span>Project outcome</span><b>One person accountable for the whole product path.</b></div><div><Rocket/><span>Launch outcome</span><b>A production-ready release with ownership made clear.</b></div></div></section></Reveal>

<StackSection/>
<Partners/>

<Reveal><section className="section shell"><div className="section-head centered"><span className="eyebrow">Why a direct build works</span><h2>Fewer layers between the business problem and the person solving it.</h2></div><div className="reason-grid"><article><BadgeCheck/><span>01</span><h3>One owner across the system</h3><p>Interface, backend, data, deployment and handoff are considered together instead of split between disconnected teams.</p></article><article><TrendingUp/><span>02</span><h3>Decisions tied to the business goal</h3><p>Features are prioritized by what helps the customer journey or team workflow, not by what makes the proposal look bigger.</p></article><article><Headphones/><span>03</span><h3>Direct communication</h3><p>You speak to the person making the product and technical decisions, which keeps feedback faster and clearer.</p></article><article><ShieldCheck/><span>04</span><h3>Designed for handoff</h3><p>You keep access to the code, accounts, data and deployment path so the product remains yours.</p></article></div></section></Reveal>

<Reveal><section className="section alt"><div className="shell process-summary"><div className="section-head"><span className="eyebrow">A process that fits the project</span><h2>No fake week-by-week timeline. The depth changes with the job.</h2><p>Quick focused work can move quickly. Larger systems get the discovery, testing and checkpoints their risk actually requires.</p></div><div className="steps"><article><span>01</span><b>Understand</b><p>Goal, users, constraints, urgency and what success should look like.</p></article><article><span>02</span><b>Shape</b><p>Scope, priorities, technical direction and the right first milestone.</p></article><article><span>03</span><b>Build & review</b><p>Visible working progress so feedback happens before problems become expensive.</p></article><article><span>04</span><b>Launch & hand off</b><p>QA, deployment, domain setup, ownership and clear next steps.</p></article></div></div></section></Reveal>

<Testimonials/>

<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Have a project in mind?</span><h2>Bring the goal. I’ll help you turn it into the clearest practical build.</h2><p>One conversation to understand the problem, identify the right level of work and decide whether it is a fit.</p></div><Link className="btn light-btn" href="/contact">Get a Free Consultation <ArrowRight size={17}/></Link></div></section>
</>}
