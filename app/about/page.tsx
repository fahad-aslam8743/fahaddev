import Link from 'next/link';
import {PageHero} from '@/components/PageHero';
import {ArrowRight,CheckCircle2} from 'lucide-react';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({title:'Product-Minded Full-Stack Development',description:'Direct full-stack product development for business websites, commerce, dashboards and web apps from requirement to production handoff.',path:'/about',image:'/opengraph-image.png'});
const faqs:FAQItem[]=[
 {q:'Are you a solo developer or an agency?',a:'FahadDev is a direct solo development practice. You communicate with the person shaping and building the product rather than passing through account-management layers.'},
 {q:'What do you handle personally?',a:'Depending on the project: product framing, interface work, backend logic, database, CMS, integrations, testing, deployment and handoff.'},
 {q:'Do you use AI in development?',a:'AI-assisted tools can speed up implementation and investigation, but requirements, system decisions, testing and production responsibility still need deliberate judgment.'},
 {q:'What matters most at handoff?',a:'The product should be usable, deployed and owned through the right accounts. Handoff is part of the build, not a folder sent at the end.'},
];
const principles=['Business goal before technical complexity','Mobile treated as a core product surface','Direct communication with the person building','Clean launch, access and ownership'];
export default function About(){return <>
<PageHero kind="about" eyebrow="One builder. Direct ownership." title="Product judgment and full-stack execution from the first question to production." body="You work with the person making the product and technical decisions—not an account layer passing your brief between people." primary={{label:'Discuss Your Project',href:'/contact'}} secondary={{label:'See Selected Work',href:'/work'}}/>
<Reveal><section className="section shell about-story concise-about"><div className="about-story-lead"><span className="eyebrow">What you are hiring</span><h2>Someone to connect the business goal, customer experience and system behind it.</h2></div><div className="about-prose compact-prose"><p>My strongest work sits where the visible interface and the business workflow both matter: commerce, dashboards, internal tools and full-stack web products.</p><p>The job is bigger than writing code. It includes shaping the requirement, protecting mobile behavior and data flows, making admin/content ownership practical, testing the important paths and carrying the product through launch.</p></div></section></Reveal>
<Reveal><section className="section alt"><div className="shell"><div className="section-head centered"><span className="eyebrow">Relevant experience</span><h2>Real systems, not just landing-page mockups.</h2></div><div className="experience-list concise-experience"><article><span>01</span><div><h3>Youth Senate of Pakistan platform</h3><p>Membership intake, senator records, admin workflows, content operations, certificates/media needs and deployment.</p></div><b>Organization platform</b></article><article><span>02</span><div><h3>Commerce systems</h3><p>Storefronts, CMS-managed products, cart and checkout, Stripe payments, order data and admin operations.</p></div><b>Commerce delivery</b></article><article><span>03</span><div><h3>Dashboard & SaaS interfaces</h3><p>Authentication, CRUD workflows, charts, filters, forms, reusable components and responsive application layouts.</p></div><b>Product systems</b></article></div></div></section></Reveal>
<Reveal><section className="section shell"><div className="principle-grid concise-principles"><div><span className="eyebrow">Working principles</span><h2>Clear decisions. Useful progress. Clean ownership.</h2></div><ul>{principles.map(x=><li key={x}><CheckCircle2/>{x}</li>)}</ul></div></section></Reveal>
<FAQSection items={faqs} eyebrow="Working together" title="A few things worth knowing before you reach out."/>
<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">If this is how you want the project handled</span><h2>Start with the outcome. We can work backward from there.</h2></div><Link className="btn light-btn" href="/contact">Start a Project <ArrowRight size={17}/></Link></div></section>
</>}
