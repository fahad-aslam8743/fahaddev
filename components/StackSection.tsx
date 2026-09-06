import { Reveal } from './Reveal';
import { BrandLogo } from './BrandLogo';

const groups=[
  {
    title:'Customer experience',
    outcome:'Fast pages, responsive interfaces, fewer front-end surprises.',
    tools:[['nextdotjs','Next.js'],['react','React'],['typescript','TypeScript']],
  },
  {
    title:'Data, auth & content',
    outcome:'Secure data flows and content your team can actually manage.',
    tools:[['supabase','Supabase'],['sanity','Sanity']],
  },
  {
    title:'Commerce & delivery',
    outcome:'Payments, deployment and source ownership set up for real use.',
    tools:[['stripe','Stripe'],['vercel','Vercel'],['github','GitHub']],
  },
] as const;

export function StackSection(){return <section className="section stack-section"><div className="shell"><Reveal className="section-head centered"><span className="eyebrow">Technology with a reason</span><h2>The stack is chosen for what it gives your product.</h2><p>No logo wall for decoration. Each part of the stack supports speed, control, reliability or a cleaner handoff.</p></Reveal><Reveal className="stack-groups">{groups.map((group)=><article className="stack-group" key={group.title}><div><span className="eyebrow">{group.title}</span><h3>{group.outcome}</h3></div><div className="stack-tool-row">{group.tools.map(([slug,name])=><div className="stack-tool" key={name}><BrandLogo slug={slug} name={name}/><span>{name}</span></div>)}</div></article>)}</Reveal></div></section>}
