import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

export type FAQItem={q:string;a:string};
export function FAQSection({items,eyebrow='Questions clients usually ask',title='Clear answers before you commit.',description='If your question is more specific, send the context and I’ll answer it directly.'}:{items:FAQItem[];eyebrow?:string;title?:string;description?:string}){
  return <section className="section faq-section">
    <div className="shell faq-layout">
      <Reveal className="section-head faq-heading centered"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{description}</p></Reveal>
      <Reveal className="faq-list">{items.map((x,i)=><details key={x.q}><summary><span>{String(i+1).padStart(2,'0')}</span><strong>{x.q}</strong><ChevronDown size={18}/></summary><p>{x.a}</p></details>)}</Reveal>
    </div>
  </section>;
}
