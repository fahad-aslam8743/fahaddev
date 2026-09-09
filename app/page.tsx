import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  CreditCard,
  LayoutDashboard,
  MessageSquareMore,
  SearchCheck,
  SearchX,
  Settings2,
  Smartphone,
  Repeat2,
} from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';
import { HeroSystem } from '@/components/HeroSystem';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Testimonials } from '@/components/Testimonials';
import { Reveal } from '@/components/Reveal';
import { FAQSection, FAQItem } from '@/components/FAQSection';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Custom Web Development for Growing Businesses',
  description:
    'Conversion-focused websites, e-commerce systems, dashboards and full-stack web apps with the design, CMS, data, payments, SEO and deployment connected from the start.',
  path: '/',
  image: '/opengraph-image.png',
});

const faqs: FAQItem[] = [
  {
    q: 'What kinds of projects are a good fit?',
    a: 'Custom business websites, e-commerce, dashboards, internal tools and full-stack web apps are the strongest fit. Focused improvements also make sense when the problem is clear.',
  },
  {
    q: 'Can you improve an existing website instead of rebuilding it?',
    a: 'Yes. If the foundation is useful, a focused performance, UX, conversion, responsive or feature pass can be smarter than replacing everything.',
  },
  {
    q: 'Can you handle CMS, database, auth and payments too?',
    a: 'Yes. Those pieces can be included when the product needs them so the interface and the business system are not treated as separate projects.',
  },
  {
    q: 'Will I be able to update the site myself?',
    a: 'When editable content belongs in the workflow, a CMS or admin flow can be included so normal business updates do not require code changes.',
  },
  {
    q: 'What is the best way to start?',
    a: 'Send the current URL, idea or workflow plus the result you want. I will help identify whether you need a focused improvement, staged build or complete system.',
  },
]

const launchItems = [
  {
    Icon: LayoutDashboard,
    title: 'Pages built to guide action',
    text: 'Clear hierarchy, strong calls to action, trust sections and page structure built around what the visitor should understand and do next.',
    gets: 'A website that explains the offer quickly instead of making customers hunt for the point.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile-first experience',
    text: 'Navigation, layouts, forms, cards and interactions are designed for real phone widths instead of being squeezed down from desktop.',
    gets: 'A customer journey that still feels intentional on the device most people actually use.',
  },
  {
    Icon: Settings2,
    title: 'CMS or admin control',
    text: 'Products, pages, projects, reviews, leads or other business content can be made editable when your workflow needs it.',
    gets: 'Your team can handle normal updates without asking a developer for every small change.',
  },
  {
    Icon: MessageSquareMore,
    title: 'Lead capture & business actions',
    text: 'Contact forms, email, WhatsApp, calls and the next-step flow are connected so interest does not end at a decorative form.',
    gets: 'A clear path from visitor interest to a lead you can actually follow up with.',
  },
  {
    Icon: CreditCard,
    title: 'Data, auth & payments when needed',
    text: 'Database structure, sign-in, permissions, checkout, orders and customer data are connected to the interface instead of bolted on later.',
    gets: 'A real working product behind the polished front end.',
  },
  {
    Icon: SearchCheck,
    title: 'SEO, speed, security & launch',
    text: 'Metadata, crawlable pages, responsive performance, sensible security, deployment, domain setup and ownership are considered before launch.',
    gets: 'A production website that is ready to be found, used, managed and handed over cleanly.',
  },
];

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();
  return (
    <>
      <section className="engine-hero-section engine-home-hero">
        <HeroSystem kind="home" context={featuredProjects[0]?.title || 'FahadDev'} />
        <div className="shell engine-hero-content">
          <Reveal className="engine-hero-copy hero-copy">
            <span className="eyebrow">Custom web development for growing businesses</span>
            <h1>Build the website your customers understand — and the system your business can grow on.</h1>
            <p className="lead">
              Custom websites, e-commerce, dashboards and web apps with the design, CMS, data, payments, admin and deployment connected from the start.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/contact">
                Get a Free Project Review <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-secondary" href="/work">
                Explore Selected Work
              </Link>
            </div>
            <p className="microproof">
              <Check size={15} /> No technical brief needed <span>·</span> Scope before commitment <span>·</span> Direct developer access
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="section launch-benefits-section">
          <div className="shell">
            <div className="section-head centered launch-benefits-head">
              <span className="eyebrow">Everything your website needs to launch</span>
              <h2>Not just pages. The customer experience and the business system behind it.</h2>
              <p>
                The exact scope changes by project, but these are the pieces I think through so you do not end up with a beautiful front end and unfinished business infrastructure behind it.
              </p>
            </div>
            <div className="launch-benefit-grid">
              {launchItems.map(({ Icon, title, text, gets }) => (
                <article key={title}>
                  <div className="launch-benefit-icon"><Icon /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="launch-benefit-get"><Check size={14} /><span><b>You get:</b> {gets}</span></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section shell pain-section">
          <div className="section-head centered">
            <span className="eyebrow">The problems worth fixing</span>
            <h2>A website becomes expensive when customers hesitate or your team keeps working around it.</h2>
            <p>These are the problems that usually create a real reason to improve the product.</p>
          </div>
          <div className="pain-grid">
            <article>
              <SearchX />
              <h3>People visit, but the offer still feels unclear</h3>
              <p>The message, proof or next action is not strong enough to turn attention into confidence.</p>
            </article>
            <article>
              <Smartphone />
              <h3>Mobile is costing you trust</h3>
              <p>Navigation, forms or content become awkward on the screens customers use most.</p>
            </article>
            <article>
              <Repeat2 />
              <h3>Your team repeats work the product should handle</h3>
              <p>Admin tasks, data entry and disconnected tools are consuming time and creating avoidable mistakes.</p>
            </article>
            <article>
              <CircleDollarSign />
              <h3>You need improvement, not an unnecessary rebuild</h3>
              <p>If the foundation is useful, the smarter route can be a focused fix instead of replacing everything.</p>
            </article>
          </div>
        </section>
      </Reveal>

      <ProductShowcase />

      <Reveal>
        <section className="section alt selected-work-section">
          <div className="shell">
            <div className="section-head centered">
              <span className="eyebrow">Proof before promises</span>
              <h2>See how the work connects the interface to the system behind it.</h2>
              <p>Real and concept projects are clearly labeled. Case studies focus on the problem, implementation and intended business result.</p>
            </div>
            <div className="project-grid">{featuredProjects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
            <div className="section-single-action">
              <Link className="btn btn-secondary" href="/work">
                View All Case Studies <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Testimonials />
      <FAQSection items={faqs} title="Questions clients usually want answered before starting." />

      <section className="cta-band">
        <div className="shell cta-band-inner">
          <div>
            <span className="eyebrow">Have a project in mind?</span>
            <h2>Start with what needs to work better.</h2>
            <p>Send the current URL, idea or workflow. I’ll help identify the clearest practical route before you commit to a bigger build.</p>
          </div>
          <Link className="btn light-btn" href="/contact">
            Start a Project <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
