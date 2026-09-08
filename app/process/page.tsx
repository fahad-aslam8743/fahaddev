import Link from 'next/link';
import {
  ArrowRight,
  Search,
  Map,
  Code2,
  TestTube2,
  Rocket,
  CheckCircle2,
  MessageSquareText,
  ShieldCheck,
  KeyRound,
  GitBranch,
} from 'lucide-react';
import {PageHero} from '@/components/PageHero';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({
  title:'Web Development Process — Clear, Flexible, Visible',
  description:'A professional web development process from business problem to tested production launch, with visible decisions, review checkpoints and clean handoff.',
  path:'/process',
  image:'/opengraph-image.png'
});

const steps=[
  {
    icon:Search,
    title:'Understand',
    intro:'Before screens or code, I make sure the real problem is clear.',
    detail:'We clarify the business goal, the users involved, what is currently slowing them down, what already works, and what success should actually change after launch.',
    client:'You see: a clear problem statement, priorities and the information I still need from you.',
    output:'Output: agreed direction before build decisions become expensive.'
  },
  {
    icon:Map,
    title:'Shape',
    intro:'The idea becomes a practical product plan instead of a loose feature list.',
    detail:'I map the important pages, actions, content, data, admin needs, integrations and edge cases. The goal is the smallest scope that solves the problem properly without quietly creating a fragile system.',
    client:'You see: structure, major flows, scope boundaries and the decisions that affect cost or timeline.',
    output:'Output: a buildable system with fewer surprises later.'
  },
  {
    icon:Code2,
    title:'Build',
    intro:'The project is built in working pieces you can actually review.',
    detail:'Frontend, backend, database, CMS, forms, payments or admin workflows are connected as the product needs them. Important behavior is reviewed while changes are still easy—not after everything is locked together.',
    client:'You see: working checkpoints, real screens and clear progress instead of status messages with nothing to inspect.',
    output:'Output: a usable product growing toward production, not a hidden codebase.'
  },
  {
    icon:TestTube2,
    title:'Verify',
    intro:'The polished screen is not the finish line—the important paths have to survive real use.',
    detail:'I check responsive layouts, forms, empty/loading/error states, core data operations, access rules, important integrations, performance concerns and the flows that can damage trust if they fail.',
    client:'You see: what was checked, what changed because of testing and anything that still needs an explicit decision.',
    output:'Output: fewer avoidable surprises when real customers start using the product.'
  },
  {
    icon:Rocket,
    title:'Launch',
    intro:'Production is part of the build, not a final upload button.',
    detail:'Deployment, domain connection, environment variables, production accounts, access, handoff and final checks are completed through the right ownership path so the business is not trapped inside a developer-owned setup.',
    client:'You see: the live product, the accounts that matter and what you can manage after handoff.',
    output:'Output: a product that is live, owned correctly and ready for the next iteration.'
  },
];

const controls=[
  {Icon:MessageSquareText,title:'Visible communication',text:'Important decisions, blockers and scope changes are surfaced early instead of appearing as a surprise near launch.'},
  {Icon:GitBranch,title:'Controlled scope',text:'New ideas are evaluated against the goal. They can be added, staged or deferred without quietly turning the build into something else.'},
  {Icon:ShieldCheck,title:'Quality on the important paths',text:'Testing follows business risk: forms, checkout, access, data, mobile and production behavior matter more than decorative perfection.'},
  {Icon:KeyRound,title:'Clean ownership',text:'Domains, hosting, CMS, payments and production access should end in the right client-owned accounts wherever practical.'},
];

const faqs:FAQItem[]=[
  {q:'Do all projects follow the same timeline?',a:'No. The sequence stays clear, but the depth depends on scope and risk. A focused fix should not be forced through the same schedule as a full product build.'},
  {q:'Will I see progress before the project is finished?',a:'Yes. Working checkpoints are used so you can react to the real product while important decisions are still inexpensive to change.'},
  {q:'What happens if the scope changes?',a:'The impact is surfaced before the change quietly becomes extra work. Priorities can be adjusted, staged or re-scoped with the effect on time and complexity made clear.'},
  {q:'What gets tested before launch?',a:'Responsive behavior, primary forms and flows, important data operations, error states, permissions, integrations and production behavior are typical priorities.'},
  {q:'How do you handle client accounts and ownership?',a:'Where practical, production services should live in the client’s own accounts or be transferred cleanly. Access and ownership are part of the handoff conversation from the beginning.'},
  {q:'What do I receive at handoff?',a:'The relevant source, deployment path, production access and ownership information are made clear so the product is not trapped in one person’s account or an undocumented setup.'},
];

export default function Process(){return <>
  <PageHero
    kind="process"
    eyebrow="A visible delivery system"
    title="From business problem to production without turning the project into a black box."
    body="You should know what is being decided, what is being built, what is being checked and what happens next. The process stays structured enough to protect the result without adding ceremony that does not help the product."
    primary={{label:'Start with Your Goal',href:'/contact'}}
    secondary={{label:'Explore Services',href:'/services'}}
  />

  <Reveal>
    <section className="section shell process-detail-section">
      <div className="section-head centered">
        <span className="eyebrow">How the work moves</span>
        <h2>Five stages, each with a clear purpose and something concrete for you to see.</h2>
        <p>The goal is not to make development look complicated. It is to make the important decisions visible before they become expensive mistakes.</p>
      </div>
      <div className="process-detail-list">
        {steps.map(({icon:Icon,title,intro,detail,client,output},i)=><article key={title}>
          <div className="process-detail-meta"><span>0{i+1}</span><div className="process-detail-icon"><Icon size={22}/></div></div>
          <div className="process-detail-copy">
            <h2>{title}</h2>
            <h3>{intro}</h3>
            <p>{detail}</p>
            <div className="process-detail-proof">
              <span><CheckCircle2 size={16}/>{client}</span>
              <span><CheckCircle2 size={16}/>{output}</span>
            </div>
          </div>
        </article>)}
      </div>
    </section>
  </Reveal>

  <Reveal>
    <section className="section alt process-control-section">
      <div className="shell">
        <div className="section-head centered">
          <span className="eyebrow">What keeps the project professional</span>
          <h2>The process is useful only if it protects communication, scope, quality and ownership.</h2>
        </div>
        <div className="process-control-grid">
          {controls.map(({Icon,title,text})=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  </Reveal>

  <FAQSection items={faqs} eyebrow="Process questions" title="Know how the work moves before it starts."/>

  <section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Have a deadline or a stuck project?</span><h2>Start with the outcome that matters. I’ll help turn it into the safest practical route.</h2><p>You do not need a technical brief before reaching out.</p></div><Link className="btn light-btn" href="/contact">Discuss the Project <ArrowRight size={17}/></Link></div></section>
</>}
