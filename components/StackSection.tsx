import { Code2, Database, CreditCard, Rocket } from 'lucide-react';
const stacks=[
 {icon:Code2,title:'Frontend systems',items:['Next.js','React','TypeScript','Responsive UI']},
 {icon:Database,title:'Data & backend',items:['Supabase','APIs','Auth','Structured data']},
 {icon:CreditCard,title:'Commerce & content',items:['Stripe','Sanity CMS','Orders','Content workflows']},
 {icon:Rocket,title:'Launch & delivery',items:['Vercel','Performance','QA','Domain handoff']},
];
export function StackSection(){return <section className="section shell"><div className="section-head"><span className="eyebrow">The system behind the interface</span><h2>A practical stack chosen around the product — not around hype.</h2><p>I use tools that make the finished product fast, maintainable, easy to hand over, and realistic for the client to keep running.</p></div><div className="stack-grid">{stacks.map(({icon:Icon,title,items})=><article key={title}><span className="stack-icon"><Icon size={22}/></span><h3>{title}</h3><div>{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>}
