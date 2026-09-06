import Link from 'next/link';
import { ArrowRight, Check, Gauge, ShieldCheck, Settings2, TrendingUp, Workflow, MousePointerClick, BadgeCheck, Headphones, Rocket } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects } from '@/lib/projects';
import { HeroImage } from '@/components/HeroImage';
import { StackSection } from '@/components/StackSection';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Reveal } from '@/components/Reveal';
import { FAQSection, FAQItem } from '@/components/FAQSection';
import { pageMetadata } from '@/lib/seo';

export const metadata=pageMetadata({title:'Custom Web Development for Growing Businesses',description:'Conversion-focused websites, e-commerce systems, dashboards and full-stack web apps built around customer action, operational clarity and clean ownership.',path:'/'});

const faqs:FAQItem[]=[
 {q:'What kinds of projects are a good fit?',a:'Custom business websites, e-commerce experiences, dashboards, internal tools and full-stack web apps are the strongest fit. Focused improvements to an existing product can also make sense when the problem is clear.'},
 {q:'Do I need a technical specification before contacting you?',a:'No. A useful starting point is the business goal, what is not working today, who uses the product and what a good result would look like. The technical route can be shaped from there.'},
 {q:'Can you improve an existing website instead of rebuilding it?',a:'Yes. If the current product has a solid foundation, a focused performance, UX, conversion or feature pass can be more sensible than a rebuild. The first step is identifying whether the current system is worth keeping.'},
 {q:'Can you handle both front end and back end?',a:'Yes. Projects can include interface work, authentication, database design, APIs, CMS, payments, admin flows, deployment and handoff, depending on what the product needs.'},
 {q:'Will the site work properly on mobile?',a:'Mobile behavior is treated as a core product surface, not a late adjustment. Layout, tap targets, forms, overflow, performance and key customer paths are checked across responsive sizes.'},
 {q:'Will I be able to update content myself?',a:'When the project needs editable content, a CMS or suitable admin flow can be included so normal business updates do not require changing code.'},
 {q:'Who owns the code and accounts after launch?',a:'The goal is clean ownership. Source code, deployment access, domains, data services and other project accounts should remain clear and transferable rather than creating avoidable lock-in.'},
 {q:'How long does a project take?',a:'It depends on scope, risk and urgency. A focused fix can move quickly; a larger system needs more discovery, testing and review. I do not force every job into the same artificial timeline.'},
 {q:'How is pricing handled?',a:'Scope and priorities are clarified before a project price is agreed. If the brief changes materially, the impact is discussed before additional work is assumed.'},
 {q:'Do you provide support after launch?',a:'Launch-related issues can be handled during the agreed support window, and ongoing improvements can be scoped separately when a product needs continued work.'},
 {q:'Can you work with an existing designer or team?',a:'Yes. The build can start from existing designs, brand systems or product requirements, and can also integrate with another team when responsibilities are clear.'},
 {q:'What is the best way to start?',a:'Send the current URL, idea or workflow plus the result you want. You can use the project brief on the contact page or message directly on WhatsApp.'},
];

export default function Home(){return <>
<section className="home-hero-wrap"><div className="shell hero">
  <Reveal className="hero-copy"><span className="eyebrow">Custom web products for real business goals</span><h1>Web products engineered to win trust, simplify work, and turn attention into action.</h1><p className="lead">Custom websites, commerce systems, dashboards and full-stack apps — designed around what customers need to do and what your team needs to run better.</p><div className="hero-actions"><Link className="btn" href="/contact">Get a Free Project Review <ArrowRight size={17}/></Link><Link className="btn btn-secondary" href="/work">Explore Selected Work</Link></div><p className="microproof"><Check size={15}/> Direct developer access <span>·</span> Scope before build <span>·</span> Launch and handoff included</p></Reveal>
  <Reveal className="hero-media"><HeroImage kind="home"/></Reveal>
</div></section>

<section className="proof-ribbon"><div className="shell proof-ribbon-grid"><div><b>Built for mobile</b><span>Responsive paths that feel intentional on the screens customers actually use.</span></div><div><b>Built for action</b><span>Hierarchy and calls to action shaped around the next useful decision.</span></div><div><b>Built as a system</b><span>Interface, data, content and deployment planned together.</span></div><div><b>Built to hand over</b><span>Ownership stays clear after launch.</span></div></div></section>

<Reveal><section className="section shell"><div className="section-head centered"><span className="eyebrow">What the investment should improve</span><h2>A better customer experience outside. Less friction inside.</h2><p>The product should create a business advantage, not just a nicer screenshot.</p></div><div className="benefit-grid"><article><MousePointerClick/><h3>Clearer conversion paths</h3><p>Reduce confusion between first visit, product understanding and the next action you want a customer to take.</p></article><article><Gauge/><h3>Faster real-world experience</h3><p>Responsive layouts and performance decisions designed for mobile networks and everyday devices.</p></article><article><Settings2/><h3>Smoother operations</h3><p>CMS, dashboards and admin flows that reduce repetitive work and keep updates closer to the team.</p></article><article><ShieldCheck/><h3>Cleaner ownership</h3><p>Source, data, deployment and project accounts structured so growth does not become a dependency trap.</p></article></div></section></Reveal>

<Reveal><section className="section alt"><div className="shell"><div className="section-head centered"><span className="eyebrow">Selected work</span><h2>See the thinking behind the interface.</h2><p>Each case study is framed around the problem, the build and the outcome the product was designed to support.</p></div><div className="project-grid">{featuredProjects.map(p=><ProjectCard key={p.slug} p={p}/>)}</div><div className="section-single-action"><Link className="btn btn-secondary" href="/work">View All Case Studies <ArrowRight size={16}/></Link></div></div></section></Reveal>

<Reveal><section className="section value-band"><div className="shell value-band-grid"><div><TrendingUp/><span>Customer</span><b>More confidence between first visit and next action.</b></div><div><Workflow/><span>Operations</span><b>Fewer manual steps and clearer information.</b></div><div><BadgeCheck/><span>Delivery</span><b>One owner across the connected product path.</b></div><div><Rocket/><span>Launch</span><b>A production release with handoff already considered.</b></div></div></section></Reveal>

<StackSection/>
<Partners/>

<Reveal><section className="section shell"><div className="section-head centered"><span className="eyebrow">Why direct development can work better</span><h2>Less distance between the business problem and the person solving it.</h2></div><div className="reason-grid"><article><BadgeCheck/><span>01</span><h3>One accountable owner</h3><p>Interface, backend, data and deployment are considered together rather than split across a relay chain.</p></article><article><TrendingUp/><span>02</span><h3>Decisions tied to outcomes</h3><p>Features are judged by what they improve for customers or the team, not by how impressive a proposal looks.</p></article><article><Headphones/><span>03</span><h3>Direct communication</h3><p>Questions and feedback reach the person making product and implementation decisions.</p></article><article><ShieldCheck/><span>04</span><h3>Handoff planned early</h3><p>Ownership, accounts and maintainability are part of delivery rather than an afterthought.</p></article></div></section></Reveal>

<Reveal><section className="section alt"><div className="shell process-summary"><div className="section-head"><span className="eyebrow">Flexible delivery</span><h2>The process adapts to the job. The clarity does not.</h2><p>A quick technical fix and a full product build should not move at the same pace, but both should have a clear next step.</p></div><div className="steps"><article><span>01</span><b>Understand</b><p>Goal, users, constraints and urgency.</p></article><article><span>02</span><b>Shape</b><p>Scope, priorities and technical route.</p></article><article><span>03</span><b>Build & review</b><p>Working progress while changes are still cheap.</p></article><article><span>04</span><b>Launch & hand off</b><p>QA, deployment, access and ownership.</p></article></div></div></section></Reveal>

<Testimonials/>
<FAQSection items={faqs} schema/>

<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Have a project in mind?</span><h2>Start with what needs to work better.</h2><p>Send the goal, current problem or existing URL. The first job is to identify the clearest practical route.</p></div><Link className="btn light-btn" href="/contact">Start a Project <ArrowRight size={17}/></Link></div></section>
</>}
