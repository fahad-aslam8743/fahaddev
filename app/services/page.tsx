import Link from 'next/link';
import {ArrowRight,Check} from 'lucide-react';
import {PageHero} from '@/components/PageHero';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {services} from '@/lib/services';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({title:'Web Development Services for Growing Businesses',description:'Custom e-commerce, dashboards, web apps and focused product improvements built around conversion, operations and clean ownership.',path:'/services',image:'/opengraph-image.png'});
const faqs:FAQItem[]=[
 {q:'Do you only build complete websites from scratch?',a:'No. If the current foundation is useful, a focused responsive, conversion, performance, feature or integration pass can be the smarter project.'},
 {q:'Can you handle CMS, database, auth and payments?',a:'Yes. Those pieces can be included when the product needs them so the public experience and the system behind it work together.'},
 {q:'Can my team manage content after launch?',a:'Yes. Products, pages or other business content can be made editable through a CMS or admin flow when that belongs in the workflow.'},
 {q:'Can you work from an existing design or product?',a:'Yes. Existing Figma, branding, code and live products can all be useful starting points. I will flag the parts that should stay and the parts creating friction.'},
 {q:'What if I do not know which service I need?',a:'You do not need to choose a service label. Send the business problem, who is affected and the result you want; the right project shape can be decided from there.'},
];

export default function Services(){return <>
<PageHero kind="services" eyebrow="Build what the business actually needs." title="Customer experience, business logic and ownership — connected as one product." body="Choose the closest problem below. The scope can be a focused improvement or a complete build; it should follow the job, not a package name." primary={{label:'Get a Recommended Approach',href:'/contact'}} secondary={{label:'See Selected Work',href:'/work'}}/>
<Reveal><section className="section shell service-section concise-page-section"><div className="section-head centered"><span className="eyebrow">Four useful starting points</span><h2>Start with the outcome you need.</h2><p>Each path combines the visible customer experience with the practical system behind it.</p></div><div className="service-list concise-service-list">{services.map(({icon:Icon,...x},i)=><article key={x.slug}><div className="service-num">0{i+1}</div><div><Icon/><h2>{x.shortTitle}</h2><h3>{x.hook}</h3><ul>{x.outcomes.slice(0,3).map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><p className="best"><b>Best fit:</b> {x.bestFor}</p><Link className="service-link" href={`/services/${x.slug}`}>See what is included <ArrowRight size={16}/></Link></div></article>)}</div><div className="service-fit-note"><b>Focused fix or full build?</b><span>If the current product is worth keeping, I will recommend improving it rather than replacing it just to make the project larger.</span></div></section></Reveal>
<FAQSection items={faqs} title="The questions that matter before choosing a route."/>
<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Not sure what the project should be?</span><h2>Describe the problem. I’ll help narrow it to the smallest useful route.</h2></div><Link className="btn light-btn" href="/contact">Start with the Problem <ArrowRight size={17}/></Link></div></section>
</>}
