import Link from 'next/link';
import {PageHero} from '@/components/PageHero';
import {ArrowRight,Search,Map,Code2,TestTube2,Rocket} from 'lucide-react';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({title:'Web Development Process — Clear, Flexible, Visible',description:'A clear web development process from business problem to tested production launch, with visible progress and clean handoff.',path:'/process',image:'/opengraph-image.png'});
const steps=[
 {icon:Search,title:'Understand',text:'Clarify the goal, users, current friction and what success should change.'},
 {icon:Map,title:'Shape',text:'Turn the problem into priorities, screens, system requirements and the smallest useful scope.'},
 {icon:Code2,title:'Build',text:'Ship working increments so the important decisions can be reviewed while they are still easy to change.'},
 {icon:TestTube2,title:'Verify',text:'Check mobile, forms, states, data flows, permissions, performance and the paths that cannot afford to fail.'},
 {icon:Rocket,title:'Launch',text:'Deploy, connect the domain, confirm access and hand over the product through the right accounts.'},
];
const faqs:FAQItem[]=[
 {q:'Do all projects follow the same timeline?',a:'No. The sequence stays clear, but the depth depends on scope and risk. A focused fix should not be forced through the same schedule as a full product build.'},
 {q:'Will I see progress before the project is finished?',a:'Yes. Working checkpoints are used so feedback happens while changes are still inexpensive.'},
 {q:'What happens if the scope changes?',a:'The impact is surfaced before the change quietly becomes extra work. Priorities can be adjusted, staged or re-scoped.'},
 {q:'What gets tested before launch?',a:'Responsive behavior, primary forms and flows, important data operations, error states, permissions and production behavior are typical priorities.'},
 {q:'What do I receive at handoff?',a:'The relevant source, deployment path, project access and ownership information are made clear so the product is not trapped in one person’s account.'},
];
export default function Process(){return <>
<PageHero kind="process" eyebrow="No black box." title="From problem to production with the important decisions visible all the way through." body="Focused work stays focused. Larger builds get more depth. Either way, you know what is being decided, built, checked and launched next." primary={{label:'Start with Your Goal',href:'/contact'}} secondary={{label:'Explore Services',href:'/services'}}/>
<Reveal><section className="section shell concise-page-section"><div className="section-head centered"><span className="eyebrow">The delivery path</span><h2>Five stages. No ceremony for ceremony’s sake.</h2><p>Enough structure to protect the result without turning the project into meetings about meetings.</p></div><div className="process-flow concise-process-flow">{steps.map(({icon:Icon,title,text},i)=><article key={title}><div className="process-index">0{i+1}</div><span className="process-icon"><Icon size={22}/></span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section></Reveal>
<FAQSection items={faqs} eyebrow="Process questions" title="Know how the work moves before it starts."/>
<section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Have a deadline or a stuck project?</span><h2>Tell me the outcome that cannot slip. We’ll find the safest fast route.</h2></div><Link className="btn light-btn" href="/contact">Discuss the Project <ArrowRight size={17}/></Link></div></section>
</>}
