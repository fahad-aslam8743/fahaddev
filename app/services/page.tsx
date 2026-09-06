import Link from 'next/link';
import {ShoppingBag,LayoutDashboard,Code2,ArrowRight,Check,TrendingUp,Settings2,ShieldCheck,Wrench} from 'lucide-react';
import {PageHero} from '@/components/PageHero';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({title:'Web Development Services for Growing Businesses',description:'Custom e-commerce, dashboards, web apps and focused product improvements built around conversion, operations and clean ownership.',path:'/services'});

const items=[
 {icon:ShoppingBag,title:'Commerce systems',hook:'Turn product interest into a faster, clearer buying journey.',features:['Custom product and collection experiences','CMS-managed products and content','Payments, orders and customer flows','Mobile performance and launch setup'],outcome:'Best when a brand has outgrown the limits or sameness of a template storefront.'},
 {icon:LayoutDashboard,title:'Dashboards & internal tools',hook:'Give your team one place to see what matters and act on it.',features:['Workflow-shaped views and filters','Role-aware access patterns','Realtime or API-driven data','Exports, admin controls and operations tooling'],outcome:'Best when spreadsheets and disconnected tools are creating avoidable operational drag.'},
 {icon:Code2,title:'Full-stack web products',hook:'Build the customer experience and the system behind it as one product.',features:['Authentication and user flows','Database and API architecture','Third-party integrations','Deployment, ownership and handoff'],outcome:'Best when the product needs custom logic, real data and long-term flexibility.'},
 {icon:Wrench,title:'Focused product improvements',hook:'Fix the part that is costing trust, speed or team time without rebuilding everything.',features:['Responsive and layout fixes','Performance and UX cleanup','Feature additions and integrations','Launch, deployment or workflow rescue'],outcome:'Best when the current product is worth keeping but a specific problem needs a clean intervention.'},
];
const faqs:FAQItem[]=[
 {q:'Do you only build complete websites from scratch?',a:'No. A focused improvement, feature addition, responsive fix, integration or performance pass can be the right project when the existing foundation is still useful.'},
 {q:'Can you build e-commerce without using a generic template?',a:'Yes. A custom front end can be combined with a CMS, payment system and order data so the buying experience can reflect the brand without losing operational control.'},
 {q:'Can a dashboard connect to my existing data?',a:'Usually yes, if the source exposes an API, database access, export or another reliable integration path. The right approach depends on how the data is currently stored and updated.'},
 {q:'Can you add authentication and user roles?',a:'Yes. Full-stack products can include sign-up, sign-in, protected areas, role-aware interfaces and database permissions when the product requires them.'},
 {q:'Do you handle Stripe payments?',a:'Stripe checkout and payment flows can be included in suitable commerce or SaaS projects, together with the surrounding order or subscription logic.'},
 {q:'Can my team manage products or page content after launch?',a:'Yes. Where editable content is part of the business workflow, a CMS or admin flow can be planned so ordinary updates do not require code changes.'},
 {q:'Can you work with a design I already have?',a:'Yes. The implementation can begin from existing Figma screens, brand guidelines or another design system. If the design has usability or responsive gaps, those can be flagged before development.'},
 {q:'What if I am not sure which service I need?',a:'You do not need to choose a label first. Start with the business problem, who is affected and what result you want. The service category can be decided after the problem is understood.'},
];

export default function Services(){return <>
<PageHero kind="services" eyebrow="Web development services" title="Build the part of your business customers see — and the system your team relies on behind it." body="From storefronts to dashboards, the work is shaped around the outcome first: more confident customer action, less operational friction, or a product your business can finally control." primary={{label:'Get a Recommended Approach',href:'/contact'}} secondary={{label:'See Selected Work',href:'/work'}}/>
<Reveal><section className="section shell"><div className="service-benefits"><article><TrendingUp/><b>Improve conversion paths</b><p>Remove friction between attention, decision and action.</p></article><article><Settings2/><b>Reduce operational drag</b><p>Replace repetitive manual steps with cleaner product workflows.</p></article><article><ShieldCheck/><b>Keep control after launch</b><p>Own the source, accounts, content systems and deployment path.</p></article></div></section></Reveal>
<Reveal><section className="section shell service-section"><div className="section-head centered"><span className="eyebrow">Choose by the problem, not the buzzword</span><h2>Four ways the work usually creates value.</h2><p>If your project crosses categories, that is normal. The system should follow the business, not a package name.</p></div><div className="service-list">{items.map(({icon:Icon,...x},i)=><article key={x.title}><div className="service-num">0{i+1}</div><div><Icon/><h2>{x.title}</h2><h3>{x.hook}</h3><ul>{x.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><p className="best"><b>Where it creates value:</b> {x.outcome}</p></div></article>)}</div></section></Reveal>
<FAQSection items={faqs} title="Service questions, answered before the proposal."/>
<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Not sure what the project should be?</span><h2>Describe the problem. I’ll help identify the smallest useful route.</h2><p>That may be a focused fix, a staged improvement or a larger custom build.</p></div><Link className="btn light-btn" href="/contact">Start with the Problem <ArrowRight size={17}/></Link></div></section>
</>}
