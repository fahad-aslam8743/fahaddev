export type Project = {
  slug: string; title: string; short: string; clientType: string; timeline: string;
  stack: string[]; concept?: boolean; problem: string; approach: string; build: string; result: string; liveUrl?: string;
};
export const projects: Project[] = [
  {
    slug:'youth-senate-pakistan', title:'Youth Senate of Pakistan', short:'An organization platform bringing membership intake, senator records, admin workflows and content operations into one structured web system.',
    clientType:'Organization Platform', timeline:'Full-stack platform', stack:['Membership','Admin workflows','Data management'],
    problem:'Membership intake, records, administration and public-facing information become difficult to operate when they live across disconnected manual steps and separate content processes.',
    approach:'Treat the public website and the admin side as one operating system: structured intake, clear records, manageable content and practical workflows for the people running the organization.',
    build:'Membership intake, admin workflows, senator data, CMS-style content management, certificate and media needs, responsive public pages and production deployment.',
    result:'A working organization platform designed to make public information and internal administration easier to manage through one connected digital workflow.'
  },
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
export const featuredProjects = projects.slice(0,3);
export function getProject(slug:string){ return projects.find(p=>p.slug===slug); }
