import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { BrandLogo } from './BrandLogo';
const tools=[
 {slug:'nextdotjs',name:'Next.js',use:'Fast product surfaces'},
 {slug:'react',name:'React',use:'Interactive interfaces'},
 {slug:'typescript',name:'TypeScript',use:'Safer changes'},
 {slug:'supabase',name:'Supabase',use:'Auth, data & realtime'},
 {slug:'stripe',name:'Stripe',use:'Payments & checkout'},
 {slug:'sanity',name:'Sanity',use:'Client-managed content'},
 {slug:'vercel',name:'Vercel',use:'Reliable delivery'},
 {slug:'github',name:'GitHub',use:'Source ownership'},
];
export function StackSection(){return <section className="section stack-section"><div className="shell"><Reveal className="section-head stack-head"><span className="eyebrow">Technology chosen for the outcome</span><h2>The stack is not the product. What it lets your business do is.</h2><p>These are the tools I reach for when they make the experience faster, the system easier to operate, and the handoff cleaner.</p></Reveal><Reveal className="stack-logo-grid">{tools.map(({slug,name,use})=><article key={name}><BrandLogo slug={slug} name={name}/><div><h3>{name}</h3><p>{use}</p></div><ArrowUpRight size={16}/></article>)}</Reveal><Reveal className="stack-outcomes"><div><span>For visitors</span><b>Fast, responsive, clear paths to action.</b></div><div><span>For your team</span><b>Content, data, and operations without developer dependency.</b></div><div><span>For ownership</span><b>Source, accounts, deployment, and handoff stay clear.</b></div></Reveal></div></section>}
