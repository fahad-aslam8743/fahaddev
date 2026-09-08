import type {Metadata} from 'next';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowUpRight, CheckCircle2} from 'lucide-react';
import {getProject,defaultProjects} from '@/lib/projects';
import {pageMetadata,SITE_URL} from '@/lib/seo';
import {HeroSystem} from '@/components/HeroSystem';

export const dynamicParams=true;
export function generateStaticParams(){return defaultProjects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=await getProject(slug);if(!p)return {};return pageMetadata({title:`${p.title} Case Study — ${p.clientType}`,description:p.short,path:`/work/${p.slug}`,image:p.imageUrl||'/opengraph-image.png'})}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const p=await getProject(slug);if(!p)return notFound();
  const schema={'@context':'https://schema.org','@graph':[
    {'@type':'BreadcrumbList',itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:SITE_URL},
      {'@type':'ListItem',position:2,name:'Work',item:`${SITE_URL}/work`},
      {'@type':'ListItem',position:3,name:p.title,item:`${SITE_URL}/work/${p.slug}`},
    ]},
    {'@type':'CreativeWork',name:p.title,description:p.short,url:`${SITE_URL}/work/${p.slug}`,creator:{'@type':'Person',name:'Fahad Aslam'},keywords:p.stack.join(', '),isPartOf:{'@type':'CollectionPage',name:'FahadDev Work',url:`${SITE_URL}/work`}},
  ]};
  return <article className="case">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
    <section className="case-hero-wrap"><div className="shell">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/work">Work</Link><span>/</span><span>{p.title}</span></nav>
      <div className="case-hero-grid">
        <div className="case-head">{p.concept&&<span className="concept">Concept study</span>}<span className="eyebrow">{p.clientType}</span><h1>{p.title}</h1><p>{p.short}</p><div className="case-meta"><span>{p.timeline}</span><span>{p.stack.join(' · ')}</span></div><div className="case-hero-proof"><span><CheckCircle2/>Problem-led case study</span><span><CheckCircle2/>Responsive system thinking</span></div>{p.liveUrl&&<a className="btn" href={p.liveUrl} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight size={17}/></a>}</div>
        <div className="case-hero-media">{p.imageUrl?<figure className="case-project-image hero-project-image"><Image src={p.imageUrl} alt={`${p.title} project screenshot`} fill priority sizes="(max-width: 900px) 100vw, 48vw"/><div className="case-image-chrome"><i/><i/><i/><span>{p.title}</span></div><figcaption><span>Project view</span><b>{p.concept?'Concept exploration':'Production work'}</b></figcaption></figure>:<HeroSystem kind="work" context={p.title}/>}</div>
      </div>
    </div></section>
    <div className="shell case-body">
      <div className="case-content"><section><span>01</span><div><h2>The problem</h2><p>{p.problem}</p></div></section><section><span>02</span><div><h2>The approach</h2><p>{p.approach}</p></div></section><section><span>03</span><div><h2>The build</h2><p>{p.build}</p></div></section><section><span>04</span><div><h2>The result</h2><p>{p.result}</p></div></section></div>
      <div className="case-cta"><div><span className="eyebrow">Have a similar challenge?</span><h2>Start with the business outcome, not a copied layout.</h2></div><Link className="btn" href="/contact#project-brief">Discuss Your Project</Link></div>
    </div>
  </article>
}
