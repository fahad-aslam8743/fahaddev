export type Project = {
  slug: string; title: string; short: string; clientType: string; timeline: string;
  stack: string[]; concept?: boolean; problem: string; approach: string; build: string; result: string; liveUrl?: string;
};
export const projects: Project[] = [
  {
    slug:'elites', title:'ÉLITES', short:'A luxury fashion storefront built to feel as premium as the product — full e-commerce, CMS-managed.',
    clientType:'E-commerce', timeline:'Full-stack build', stack:['Next.js','Sanity','Supabase','Stripe'],
    problem:'Premium products lose trust when the buying experience feels generic, slow, or stitched together from templates.',
    approach:'A custom editorial storefront with a CMS for product management, a structured checkout flow, and a clear separation between content, commerce, and customer data.',
    build:'Responsive product discovery, product detail flows, cart and checkout, Stripe payments, CMS-managed catalog content, order persistence, and production deployment.',
    result:'A reusable, production-ready commerce foundation designed for premium brands that need more control than a theme can provide.'
  },
  {
    slug:'pulse', title:'Pulse', short:'A real-time analytics dashboard concept — unifying creator metrics from multiple platforms into one view.',
    clientType:'Analytics Dashboard', timeline:'Concept build', stack:['Next.js','Supabase','TypeScript'], concept:true,
    problem:'Creators and small teams often make decisions from fragmented numbers spread across several platforms and spreadsheets.',
    approach:'A unified dashboard concept that prioritizes the metrics a team actually checks, with clean comparisons, role-aware access, and room for API integrations.',
    build:'Dashboard information architecture, KPI views, trend charts, account states, role-based UI patterns, and a Supabase-ready data model.',
    result:'A focused concept demonstrating how scattered reporting can become one usable operating view.'
  },
  {
    slug:'loom-studio', title:'Loom Studio', short:'A boutique furniture storefront concept — editorial product presentation, CMS-managed inventory.',
    clientType:'Boutique E-commerce', timeline:'Concept build', stack:['Next.js','Sanity','Stripe'], concept:true,
    problem:'Template stores can make considered, design-led products feel interchangeable with everything else online.',
    approach:'A restrained visual system built around strong product imagery, generous spacing, fast browsing, and CMS-controlled product storytelling.',
    build:'Collection browsing, product pages, editorial content modules, CMS structure, cart-ready interaction patterns, and responsive mobile layouts.',
    result:'A concept showing how custom commerce can preserve brand character without sacrificing clarity or speed.'
  }
];
export const featuredProjects = projects;
export function getProject(slug:string){ return projects.find(p=>p.slug===slug); }
