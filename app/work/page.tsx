import {getProjects} from '@/lib/projects';
import {ProjectCard} from '@/components/ProjectCard';
import {PageHero} from '@/components/PageHero';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({title:'Web Development Work & Case Studies',description:'Selected commerce, dashboard and platform work showing the problem, implementation and result behind each build.',path:'/work',image:'/opengraph-image.png'});
const faqs:FAQItem[]=[
 {q:'Are all projects paid client projects?',a:'No. Concept work is labeled clearly. Real organization/client work and concept studies are not presented as the same thing.'},
 {q:'Can you build something different from these examples?',a:'Yes. The portfolio shows the kinds of systems and decisions I work with, not a fixed catalogue of layouts.'},
 {q:'Can you improve an existing product instead of starting over?',a:'Yes. If the current code and architecture are worth keeping, the work can focus on the specific flows, features or technical problems that need improvement.'},
 {q:'How do we start if I want something similar?',a:'Send the example you liked and the business result you need in your version. The scope should follow your problem rather than copy another project.'},
];
export default async function Work(){const projects=await getProjects();return <>
<PageHero kind="work" eyebrow="Proof before promises." title="See the problem, the system that was built, and the result it was meant to create." body="Real and concept work are labeled clearly. Each case study focuses on the decisions that matter—not a gallery of unexplained screenshots." primary={{label:'Discuss a Similar Build',href:'/contact'}} secondary={{label:'Explore Services',href:'/services'}}/>
<Reveal><section className="section shell work-gallery-section concise-page-section"><div className="section-head centered"><span className="eyebrow">Selected work</span><h2>Products built around a job, not a template.</h2><p>Open any project to see the challenge, implementation and outcome in context.</p></div><div className="project-grid project-grid-wide">{projects.map(p=><ProjectCard key={p.slug} p={p}/>)}</div></section></Reveal>
<FAQSection items={faqs} eyebrow="Portfolio questions" title="What the work proves — and what it does not pretend."/>
<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Have a similar challenge?</span><h2>Start with the result you need, not a copied layout.</h2></div><Link className="btn light-btn" href="/contact">Discuss Your Project <ArrowRight size={17}/></Link></div></section>
</>}
