import {getProjects} from '@/lib/projects';
import {ProjectCard} from '@/components/ProjectCard';
import {PageHero} from '@/components/PageHero';
import Link from 'next/link';
import {ArrowRight, CheckCircle2, Target, Layers3, Rocket} from 'lucide-react';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({title:'Web Development Work & Case Studies',description:'Selected commerce, dashboard and platform work showing the product problem, technical approach and business outcome behind each build.',path:'/work',image:'/opengraph-image.png'});
const faqs:FAQItem[]=[
 {q:'Are all projects on this page paid client projects?',a:'No. Concept work is labeled clearly. The goal is to show product thinking and implementation quality without presenting concept work as client work.'},
 {q:'Can you build something different from these examples?',a:'Yes. The portfolio shows the kinds of systems and decisions I work with, not a fixed catalogue of layouts. A new project should be shaped around its own users, workflows and constraints.'},
 {q:'Can you work from an existing product instead of starting over?',a:'Yes. If the existing code and architecture are worth keeping, the work can focus on the specific flows, features or technical problems that need improvement.'},
 {q:'Do case studies include the back-end work too?',a:'Where relevant, the build can include data models, authentication, CMS, payments, admin workflows, APIs and deployment in addition to the public interface.'},
 {q:'Can you share a live link for every project?',a:'Only where a live public deployment is available and appropriate to share. Concept projects and private systems may be presented through the case study instead.'},
 {q:'How do we start if I want something similar?',a:'Send the example you liked plus the business goal that matters in your version. The right scope is based on your problem, not copied from another project.'},
];
export default async function Work(){const projects=await getProjects();return <>
<PageHero kind="work" eyebrow="Selected work & product thinking" title="What I built. Why I built it that way. What the system was meant to solve." body="Open the work, see the decisions, and look past the polished screen. Each case study shows the problem, the connected build and the thinking behind it." primary={{label:'Discuss a Similar Build',href:'/contact#project-brief'}} secondary={{label:'Explore Services',href:'/services'}}/>
<Reveal><section className="section shell"><div className="portfolio-intro"><div><span className="eyebrow">How the work is judged</span><h2>By whether the important path becomes clearer, faster or easier to operate.</h2></div><ul><li><Target/>Outcome first</li><li><Layers3/>System-level thinking</li><li><Rocket/>Production delivery</li></ul></div><div className="project-grid project-grid-wide">{projects.map(p=><ProjectCard key={p.slug} p={p}/>)}</div></section></Reveal>
<Reveal><section className="work-proof"><div className="shell"><article><CheckCircle2/><h3>Responsive behavior</h3><p>Designed for the screens customers actually use.</p></article><article><CheckCircle2/><h3>Business-side control</h3><p>Content and admin needs considered alongside the public experience.</p></article><article><CheckCircle2/><h3>Clean deployment</h3><p>Launch, ownership and handoff treated as part of the work.</p></article></div></section></Reveal>
<FAQSection items={faqs} eyebrow="Portfolio questions" title="What the work page is — and what it is not."/>
<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Have a similar challenge?</span><h2>Your product does not need to look like these projects to benefit from the same thinking.</h2><p>Start with the customer decision or team workflow you need to improve.</p></div><Link className="btn light-btn" href="/contact#project-brief">Discuss Your Project <ArrowRight size={17}/></Link></div></section>
</>}
