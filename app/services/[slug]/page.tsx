import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowRight,CheckCircle2,ShieldCheck,KeyRound,Workflow} from 'lucide-react';
import {getService,services} from '@/lib/services';
import {pageMetadata,SITE_URL} from '@/lib/seo';
import {FAQSection} from '@/components/FAQSection';
import {Reveal} from '@/components/Reveal';
import {HeroArtwork} from '@/components/HeroArtwork';

export function generateStaticParams(){return services.map(service=>({slug:service.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const service=getService(slug);if(!service)return {};return pageMetadata({title:service.title,description:service.description,path:`/services/${service.slug}`,image:'/opengraph-image.png'})}

export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const service=getService(slug);if(!service)return notFound();
  const schema={'@context':'https://schema.org','@graph':[
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:SITE_URL},{'@type':'ListItem',position:2,name:'Services',item:`${SITE_URL}/services`},{'@type':'ListItem',position:3,name:service.shortTitle,item:`${SITE_URL}/services/${service.slug}`}]},
    {'@type':'Service',name:service.title,description:service.description,url:`${SITE_URL}/services/${service.slug}`,provider:{'@type':'ProfessionalService',name:'FahadDev',url:SITE_URL},areaServed:'Worldwide'},
  ]};
  const Icon=service.icon;
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
    <section className="service-detail-hero"><div className="shell"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.shortTitle}</span></nav><div className="service-detail-head"><div className="service-detail-copy"><span className="eyebrow">{service.eyebrow}</span><div className="hero-title-lockup"><h1>{service.title}</h1><span className="hero-title-rule" aria-hidden="true"/></div><p>{service.description}</p><div className="hero-actions"><Link className="btn" href="/contact">Discuss this project <ArrowRight size={17}/></Link><Link className="btn btn-secondary" href="/work">See related work</Link></div><div className="service-best-fit"><Icon/><div><span>Best fit</span><p>{service.bestFor}</p></div></div></div><div className="service-detail-visual"><HeroArtwork serviceSlug={service.slug} alt={`${service.shortTitle} visual`} priority/></div></div></div></section>

    <Reveal><section className="section shell service-trust-intro"><div className="section-head"><span className="eyebrow">What should improve</span><h2>The finished product should make something meaningfully easier.</h2><p>Not just prettier screens. The work should improve how customers buy, how users complete tasks, or how the business operates behind the interface.</p></div><div className="service-outcome-grid expanded-outcomes">{service.outcomes.map((outcome,i)=><article key={outcome}><span>0{i+1}</span><p>{outcome}</p></article>)}</div></section></Reveal>

    <Reveal><section className="section alt service-scope-section"><div className="shell service-scope-layout"><div className="service-included-panel"><span className="eyebrow">Typical scope</span><h2>What can be included in this kind of build.</h2><p className="service-panel-intro">The exact scope follows the problem, but these are the pieces I expect to think through rather than leaving them as somebody else’s problem later.</p><ul>{service.deliverables.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></div><div className="service-process-panel"><span className="eyebrow">How the project moves</span><h2>Visible decisions, reviewable progress.</h2><ol>{service.process.map((item,i)=><li key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></li>)}</ol></div></div></section></Reveal>

    <Reveal><section className="section shell service-implementation-section"><div className="section-head centered"><span className="eyebrow">What happens under the surface</span><h2>The parts clients do not always see are where reliability is won.</h2><p>A professional build connects the visible interface with the workflows, data and production decisions behind it.</p></div><div className="service-implementation-grid">{service.implementation.map((item,i)=><article key={item.title}><span>{String(i+1).padStart(2,'0')}</span><Workflow/><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section></Reveal>

    <Reveal><section className="section alt service-assurance-section"><div className="shell service-assurance-grid"><article><div className="assurance-icon"><ShieldCheck/></div><span className="eyebrow">Before launch</span><h2>I check the paths that can damage trust.</h2><p>These checks are adjusted to the project, but launch should not depend on a quick glance at the homepage.</p><ul>{service.qualityChecks.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></article><article><div className="assurance-icon"><KeyRound/></div><span className="eyebrow">After handoff</span><h2>You should know what you own and how it runs.</h2><p>The project should not become a black box after launch. Important access and operating context stay visible.</p><ul>{service.handoff.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></article></div></section></Reveal>

    <FAQSection items={service.faqs} eyebrow={`${service.shortTitle} questions`} title="Useful answers before we decide the scope."/>
    <section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Think this is close to what you need?</span><h2>Send the current situation. I’ll help narrow it to the smallest useful next step.</h2></div><Link className="btn light-btn" href="/contact">Start with Your Project <ArrowRight size={17}/></Link></div></section>
  </>;
}
