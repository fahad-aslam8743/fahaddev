import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowRight,CheckCircle2} from 'lucide-react';
import {getService,services} from '@/lib/services';
import {pageMetadata,SITE_URL} from '@/lib/seo';
import {FAQSection} from '@/components/FAQSection';
import {Reveal} from '@/components/Reveal';
import {HeroSystem} from '@/components/HeroSystem';

export function generateStaticParams(){return services.map(service=>({slug:service.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const service=getService(slug);if(!service)return {};return pageMetadata({title:service.title,description:service.description,path:`/services/${service.slug}`,image:'/opengraph-image.png'})}

export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const service=getService(slug);if(!service)return notFound();
  const schema={
    '@context':'https://schema.org','@graph':[
      {'@type':'BreadcrumbList',itemListElement:[
        {'@type':'ListItem',position:1,name:'Home',item:SITE_URL},
        {'@type':'ListItem',position:2,name:'Services',item:`${SITE_URL}/services`},
        {'@type':'ListItem',position:3,name:service.shortTitle,item:`${SITE_URL}/services/${service.slug}`},
      ]},
      {'@type':'Service',name:service.title,description:service.description,url:`${SITE_URL}/services/${service.slug}`,provider:{'@type':'ProfessionalService',name:'FahadDev',url:SITE_URL},areaServed:'Worldwide'},
    ]
  };
  const Icon=service.icon;
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
    <section className="service-detail-hero"><div className="shell"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.shortTitle}</span></nav><div className="service-detail-head"><div className="service-detail-copy"><span className="eyebrow">{service.eyebrow}</span><h1>{service.title}</h1><p>{service.description}</p><div className="hero-actions"><Link className="btn" href="/contact#project-brief">Discuss this project <ArrowRight size={17}/></Link><Link className="btn btn-secondary" href="/work">See related work</Link></div><p className="microproof"><CheckCircle2 size={15}/> No technical brief needed <span>·</span> Scope before commitment <span>·</span> Remote-friendly</p><div className="service-best-fit"><Icon/><div><span>Best fit</span><p>{service.bestFor}</p></div></div></div><div className="service-detail-visual"><HeroSystem kind="services" context={service.shortTitle}/></div></div></div></section>
    <Reveal><section className="section shell"><div className="section-head centered"><span className="eyebrow">What should improve</span><h2>The build is only useful if the product becomes easier to buy from, use or operate.</h2></div><div className="service-outcome-grid">{service.outcomes.map((outcome,i)=><article key={outcome}><span>0{i+1}</span><p>{outcome}</p></article>)}</div></section></Reveal>
    <Reveal><section className="section alt"><div className="shell service-detail-split"><div><span className="eyebrow">Typical scope</span><h2>What this kind of project can include.</h2><p>Exact deliverables depend on the product. These are common pieces, not a forced package.</p></div><ul>{service.deliverables.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></div></section></Reveal>
    <Reveal><section className="section shell"><div className="section-head centered"><span className="eyebrow">How the work moves</span><h2>A clear route without forcing an artificial timeline.</h2></div><div className="service-process-grid">{service.process.map((item,i)=><article key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p></article>)}</div></section></Reveal>
    <FAQSection items={service.faqs} eyebrow={`${service.shortTitle} questions`} title="Useful answers before we decide the scope."/>
    <section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Think this is close to what you need?</span><h2>Send the current situation. I’ll help narrow it to the smallest useful next step.</h2><p>No need to choose the architecture or prepare a formal specification first.</p></div><Link className="btn light-btn" href="/contact#project-brief">Start with Your Project <ArrowRight size={17}/></Link></div></section>
  </>;
}
