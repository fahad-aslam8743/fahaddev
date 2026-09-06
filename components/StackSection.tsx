import { Reveal } from './Reveal';
import { BrandLogo } from './BrandLogo';
const tools=[
 {slug:'nextdotjs',name:'Next.js',use:'Fast, SEO-friendly product experiences'},
 {slug:'react',name:'React',use:'Interactive interfaces and application flows'},
 {slug:'typescript',name:'TypeScript',use:'Safer changes as the product grows'},
 {slug:'supabase',name:'Supabase',use:'Authentication, database and realtime data'},
 {slug:'stripe',name:'Stripe',use:'Secure payments and checkout flows'},
 {slug:'sanity',name:'Sanity',use:'Content your team can update without code'},
 {slug:'vercel',name:'Vercel',use:'Fast deployment and reliable delivery'},
 {slug:'github',name:'GitHub',use:'Source control and clean ownership'},
];
export function StackSection(){return <section className="section stack-section"><div className="shell"><Reveal className="section-head centered"><span className="eyebrow">Technology behind the delivery</span><h2>A modern stack chosen for speed, control and maintainability.</h2><p>You do not need to care about every tool. You do need a system that stays fast, manageable and easier to extend after launch.</p></Reveal><Reveal className="stack-logo-grid">{tools.map(({slug,name,use})=><article key={name}><BrandLogo slug={slug} name={name}/><div><h3>{name}</h3><p>{use}</p></div></article>)}</Reveal><Reveal className="stack-outcomes"><div><span>For customers</span><b>Fast, responsive, trustworthy experiences.</b></div><div><span>For your team</span><b>Content and operations without unnecessary developer dependency.</b></div><div><span>For the future</span><b>A clearer codebase and ownership path when the product grows.</b></div></Reveal></div></section>}
