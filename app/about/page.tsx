import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Layers3,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import {PageHero} from '@/components/PageHero';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({
  title:'About FahadDev — Product-Minded Full-Stack Development',
  description:'Direct full-stack product development for business websites, commerce, dashboards and web apps from requirement to production handoff.',
  path:'/about',
  image:'/opengraph-image.png'
});

const capabilities=[
  {Icon:Layers3,title:'Customer experience',text:'Page structure, responsive interface, interaction, forms and the path from first impression to action.'},
  {Icon:Database,title:'Business system',text:'CMS, database, authentication, admin workflows, integrations and the data the interface depends on.'},
  {Icon:Gauge,title:'Production quality',text:'Performance, important states, responsive behavior, launch checks and the practical details that affect trust.'},
  {Icon:Rocket,title:'Launch & ownership',text:'Deployment, domains, production accounts, access and a handoff that leaves the business in control.'},
];

const experience=[
  {title:'Youth Senate of Pakistan platform',text:'A working organization platform covering membership intake, senator records, admin workflows, public content operations, certificate/media requirements and production deployment.',tag:'Organization platform'},
  {title:'Commerce systems',text:'Storefront experiences with CMS-managed products, customer flows, cart and checkout, Stripe payments, order data and the operational side that has to exist behind the shop.',tag:'Commerce'},
  {title:'Dashboard & SaaS systems',text:'Authenticated interfaces with CRUD workflows, charts, filters, forms, reusable components and responsive application layouts designed around recurring operational use.',tag:'Product systems'},
];

const principles=[
  'Business goal before unnecessary technical complexity',
  'Mobile treated as a core product surface, not a final resize',
  'Direct communication with the person shaping and building the product',
  'Real workflows considered alongside the visible interface',
  'Important error states and ownership considered before launch',
  'Clean production handoff through the right accounts',
];

const faqs:FAQItem[]=[
  {q:'Are you a solo developer or an agency?',a:'FahadDev is a direct solo development practice. You communicate with the person shaping and building the product rather than passing through account-management layers.'},
  {q:'What do you handle personally?',a:'Depending on the project: product framing, interface work, backend logic, database, CMS, integrations, testing, deployment and handoff.'},
  {q:'What kinds of businesses or projects are the best fit?',a:'Businesses that need more than a decorative brochure site are the strongest fit: commerce, dashboards, internal tools, operational websites and full-stack products where the customer experience and the system behind it both matter.'},
  {q:'Do you use AI in development?',a:'AI-assisted tools can speed up implementation and investigation, but requirements, architecture, product decisions, testing and production responsibility still need deliberate judgment.'},
  {q:'Why work directly with one builder?',a:'It reduces handoffs. The person hearing the business problem is the same person making the implementation decisions, which can keep context clearer across design, frontend, backend and launch.'},
  {q:'What matters most at handoff?',a:'The product should be usable, deployed and owned through the right accounts. Handoff is part of the build, not a folder sent at the end.'},
];

export default function About(){return <>
  <PageHero
    kind="about"
    eyebrow="FahadDev — direct full-stack development"
    title="One person responsible for connecting the customer experience to the system behind it."
    body="I focus on business websites, commerce, dashboards and web products where design, data, workflows and launch all need to work together. You deal directly with the person making the product and technical decisions."
    primary={{label:'Discuss Your Project',href:'/contact'}}
    secondary={{label:'See Selected Work',href:'/work'}}
  />

  <Reveal>
    <section className="section shell about-intro-section">
      <div className="about-intro-grid">
        <div>
          <span className="eyebrow">What you are actually hiring</span>
          <h2>Not just someone to turn a design into code.</h2>
        </div>
        <div className="about-intro-copy">
          <p>My role is to understand what the product needs to do for the customer and for the business, then connect those requirements into something that can actually be used, managed and launched.</p>
          <p>That means thinking beyond the visible page: where content comes from, what happens after a form is submitted, who manages records, how access works, what the mobile journey feels like, and who owns the production accounts when the project is complete.</p>
          <p>I prefer focused systems over unnecessary complexity. If an existing website can be improved without rebuilding it, that can be the better decision. If the business needs a full product, the architecture should support that reality from the beginning.</p>
        </div>
      </div>
    </section>
  </Reveal>

  <Reveal>
    <section className="section alt about-capability-section">
      <div className="shell">
        <div className="section-head centered">
          <span className="eyebrow">The areas I connect</span>
          <h2>The visible website is only one layer of a working product.</h2>
          <p>The value comes from making the customer-facing experience and the business-side system support each other.</p>
        </div>
        <div className="about-capability-grid">
          {capabilities.map(({Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  </Reveal>

  <Reveal>
    <section className="section shell about-experience-section">
      <div className="section-head centered">
        <span className="eyebrow">Relevant experience</span>
        <h2>Work that goes beyond landing-page mockups.</h2>
        <p>I would rather show the kinds of systems I have actually handled than inflate the page with unverifiable client-count badges.</p>
      </div>
      <div className="experience-list expanded-experience">
        {experience.map((item,i)=><article key={item.title}><span>0{i+1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><b>{item.tag}</b></article>)}
      </div>
    </section>
  </Reveal>

  <Reveal>
    <section className="section alt about-principles-section">
      <div className="shell about-principle-grid">
        <div className="about-principle-copy">
          <span className="eyebrow">How I prefer to work</span>
          <h2>Professional does not mean complicated. It means the important things are handled deliberately.</h2>
          <p>Clients should understand what is being built, why a decision matters, what comes next and what they will own at the end.</p>
        </div>
        <ul>
          {principles.map(x=><li key={x}><CheckCircle2/>{x}</li>)}
        </ul>
      </div>
    </section>
  </Reveal>

  <Reveal>
    <section className="section shell about-fit-section">
      <div className="about-fit-panel">
        <div><span className="eyebrow">Good fit</span><h2>Best when you need someone to think across the whole product.</h2></div>
        <div className="about-fit-list">
          <p><Smartphone/>A customer journey that has to work properly on mobile, not just desktop.</p>
          <p><Code2/>A website or app where frontend and backend decisions affect each other.</p>
          <p><MessageSquareText/>A direct working relationship instead of layers of account management.</p>
          <p><ShieldCheck/>A production build where ownership, access and important failure states matter.</p>
        </div>
      </div>
    </section>
  </Reveal>

  <FAQSection items={faqs} eyebrow="Working together" title="A few things worth knowing before you reach out."/>

  <section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">If this is how you want the project handled</span><h2>Start with the business problem. I’ll help turn it into a practical build.</h2><p>No technical brief is required before the first conversation.</p></div><Link className="btn light-btn" href="/contact">Start a Project <ArrowRight size={17}/></Link></div></section>
</>}
