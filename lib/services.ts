import { Code2, LayoutDashboard, ShoppingBag, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug:string;
  title:string;
  shortTitle:string;
  eyebrow:string;
  description:string;
  hook:string;
  bestFor:string;
  outcomes:string[];
  deliverables:string[];
  process:string[];
  implementation:{title:string;detail:string}[];
  qualityChecks:string[];
  handoff:string[];
  faqs:{q:string;a:string}[];
  icon:LucideIcon;
};

export const services:Service[]=[
  {
    slug:'ecommerce-development',
    title:'Custom e-commerce development',
    shortTitle:'Commerce systems',
    eyebrow:'Sell with more control',
    description:'Custom storefronts and commerce systems for brands that need a buying experience, content workflow and ownership model that fit the business rather than a generic theme.',
    hook:'Turn product interest into a faster, clearer buying journey.',
    bestFor:'Brands that have outgrown a generic storefront, need a more premium buying experience, or want tighter control over products, content, orders and customer flows.',
    outcomes:['Clearer product discovery and buying paths','A responsive experience built around mobile shoppers','Products and content your team can manage','Payments, orders and deployment connected cleanly'],
    deliverables:['Custom product and collection interfaces','CMS-managed products and editorial content','Cart, checkout and payment integration','Order persistence and customer flows','Search, filtering and product discovery where needed','Responsive performance and launch setup','Analytics-ready events and conversion touchpoints','Source, account and deployment handoff'],
    process:['Map the buying journey and business constraints','Shape the storefront, content model and checkout path','Build customer and admin-side workflows together','Test critical purchase and mobile flows','Launch with ownership and handoff made clear'],
    implementation:[
      {title:'Storefront experience',detail:'Collections, product pages, search, cart and checkout are shaped around how customers actually compare and buy — not around a theme’s default layout.'},
      {title:'Content & product control',detail:'Products, pricing, media and editorial content can be connected to a CMS or admin workflow so routine changes do not require a developer.'},
      {title:'Payments & order flow',detail:'Payment, confirmation and order persistence are connected as one flow so customer actions do not disappear between the interface and operations.'},
      {title:'Production ownership',detail:'Domains, deployment, service accounts and source are organized so the business keeps control after launch instead of depending on hidden agency accounts.'},
    ],
    qualityChecks:['Mobile product discovery and checkout','Empty, loading and error states','Payment success, failure and cancellation paths','Performance on key storefront pages','Forms, links, metadata and production environment'],
    handoff:['Source code and repository access','Your own CMS/payment/hosting accounts where practical','A clear list of services and credentials the business owns','Launch notes for normal content and product updates'],
    faqs:[
      {q:'Can you build without using a generic store theme?',a:'Yes. A custom front end can be combined with a CMS, payment provider and order data so the experience can reflect the brand without sacrificing operational control.'},
      {q:'Can my team update products after launch?',a:'Yes. Product and content management can be set up through a CMS or suitable admin workflow so normal updates do not require code changes.'},
      {q:'Can you integrate Stripe?',a:'Stripe checkout and payment flows can be included when it is suitable for the business, together with the surrounding order logic and production setup.'},
      {q:'Can you improve an existing store instead of rebuilding it?',a:'Yes. If the current foundation is worth keeping, the work can focus on conversion friction, responsive behavior, performance, content control or specific customer flows.'},
      {q:'Will the store work properly on phones?',a:'Mobile is treated as a primary buying surface, not a smaller desktop version. Navigation, product media, variant selection, cart, checkout and tap targets are checked specifically at phone widths.'},
    ],
    icon:ShoppingBag,
  },
  {
    slug:'dashboard-development',
    title:'Dashboard & internal tool development',
    shortTitle:'Dashboards & internal tools',
    eyebrow:'Make operations easier to see',
    description:'Custom dashboards and internal tools that turn scattered data and repetitive workflows into one clearer operating surface for the people doing the work.',
    hook:'Give your team one place to see what matters and act on it.',
    bestFor:'Teams relying on spreadsheets, manual follow-up, disconnected tools or admin processes that take too many clicks and too much memory to run safely.',
    outcomes:['One clearer view of the information that matters','Fewer repetitive manual steps','Role-aware workflows and safer access','Faster filtering, searching, exporting and action'],
    deliverables:['Workflow-shaped dashboard interfaces','Search, filters, tables and exports','Role-aware access and protected views','API or database integrations','Admin actions and operational tooling','Status, approval and audit-style flows where useful','Responsive application layouts','Deployment and operating handoff'],
    process:['Understand the real workflow before designing screens','Identify the data, actions and permissions each role needs','Build the operating view around priority tasks','Test edge cases, data states and permissions','Deploy with clear ownership and operating notes'],
    implementation:[
      {title:'Workflow first',detail:'The interface starts from what the team needs to see, decide and change during a real workday — not from a generic dashboard template.'},
      {title:'Data connected to action',detail:'Tables, metrics and charts are useful only when they help someone act. Search, filters, status changes and exports are built around that operating loop.'},
      {title:'Roles & permissions',detail:'Different users can be given different views and actions so sensitive or destructive controls are not exposed to everyone by default.'},
      {title:'Operational reliability',detail:'Loading, empty, error and conflicting states are considered so the tool remains understandable when data is incomplete or something fails.'},
    ],
    qualityChecks:['Role and permission boundaries','Search, filters, pagination and exports','Empty/loading/error data states','Critical create/update/delete actions','Responsive layouts and production data flows'],
    handoff:['Source code and deployment access','Database/API ownership information','Role and permission notes','A clear operating guide for the main admin workflows'],
    faqs:[
      {q:'Can a dashboard connect to my existing data?',a:'Usually yes if the source provides an API, database access, export or another reliable integration path. The right route depends on how the data is stored and updated.'},
      {q:'Can different users have different access?',a:'Yes. Role-aware interfaces and permissions can be included so different people see and control only what their job requires.'},
      {q:'Can it replace spreadsheets?',a:'Sometimes. The goal is not to replace a spreadsheet just because it is a spreadsheet; it is to remove the parts of the workflow that are error-prone, repetitive or hard to coordinate.'},
      {q:'Can you add exports and admin actions?',a:'Yes. Export, status changes, bulk actions, filters and other operational controls can be shaped around the actual process.'},
      {q:'Can you build approval or review workflows?',a:'Yes. If work moves through states such as pending, approved, rejected or completed, the interface and permissions can be designed around that flow.'},
    ],
    icon:LayoutDashboard,
  },
  {
    slug:'full-stack-web-app-development',
    title:'Full-stack web app development',
    shortTitle:'Full-stack web products',
    eyebrow:'Build the whole product path',
    description:'Customer-facing web applications where the interface, authentication, data model, APIs, integrations and deployment need to work as one connected product.',
    hook:'Build the customer experience and the system behind it as one product.',
    bestFor:'Products that need custom logic, real user accounts, structured data, integrations or workflows that cannot be solved well by a brochure site or template.',
    outcomes:['A product structure shaped around real user actions','Authentication and data flows designed together','Less handoff friction between front end and back end','A cleaner production and ownership path'],
    deliverables:['Responsive application interface','Authentication and protected user flows','Database and API architecture','Role-aware product areas where needed','Third-party integrations','Forms, validation and state handling','Error and edge-state handling','Deployment, access and handoff'],
    process:['Clarify users, roles, goals and edge cases','Shape flows, data and technical boundaries','Build vertical slices that can be reviewed early','Test permissions, errors, responsive behavior and critical data actions','Launch with production access and next-step documentation'],
    implementation:[
      {title:'Product flows',detail:'The build starts with the actions users need to complete and the states the product must handle, then the interface and backend are shaped around those flows.'},
      {title:'Authentication & data',detail:'Accounts, permissions, database records and protected areas are designed together so user identity and data access do not become an afterthought.'},
      {title:'APIs & integrations',detail:'External services are connected behind clear interfaces with validation and failure handling so one integration does not quietly break the entire experience.'},
      {title:'Production architecture',detail:'Environment variables, deployment, domains and service ownership are organized for a real production product rather than only a local demo.'},
    ],
    qualityChecks:['Sign-up, sign-in and protected routes','Permission boundaries and sensitive actions','Validation, error and loading states','Critical database/API operations','Responsive behavior and production configuration'],
    handoff:['Repository and deployment ownership','Database/service access information','Environment and integration inventory','Clear notes for maintaining and extending the product'],
    faqs:[
      {q:'Can you handle both front end and back end?',a:'Yes. A project can include interface work, authentication, database design, APIs, integrations, deployment and handoff depending on what the product needs.'},
      {q:'Can you add authentication and user roles?',a:'Yes. Sign-up, sign-in, protected areas, role-aware interfaces and database permissions can be included when the product requires them.'},
      {q:'Can you work with an existing design?',a:'Yes. The build can start from existing Figma screens or a design system, and responsive or usability gaps can be flagged before they become implementation problems.'},
      {q:'Can the product grow later?',a:'The system can be structured so likely next steps are not unnecessarily blocked, while avoiding over-engineering features the product does not need yet.'},
      {q:'Will I know which services and accounts the product depends on?',a:'Yes. The handoff should make the important production dependencies visible — repository, hosting, database, integrations and any external services the product relies on.'},
    ],
    icon:Code2,
  },
  {
    slug:'website-improvements',
    title:'Website & product improvement work',
    shortTitle:'Focused improvements',
    eyebrow:'Fix what is costing trust or time',
    description:'Focused development work for an existing website or product when the foundation is usable but a specific problem is hurting conversion, speed, mobile usability or operations.',
    hook:'Fix the part that is costing trust, speed or team time without rebuilding everything.',
    bestFor:'Businesses that already have a live product and need a responsive fix, feature, integration, performance pass, launch rescue or workflow improvement.',
    outcomes:['Keep the parts that already work','Fix the highest-impact friction first','Reduce the cost and risk of an unnecessary rebuild','Get a clearer route for future improvements'],
    deliverables:['Responsive and layout fixes','Performance and UX cleanup','Feature additions and integrations','Form and conversion-flow improvements','Navigation and content hierarchy improvements','Deployment and production issue fixes','Technical audit and prioritized recommendations','Regression checks around the changed area'],
    process:['Identify the exact symptom and business impact','Audit the existing foundation before recommending a rebuild','Prioritize the smallest useful intervention','Test the affected paths in production-like conditions','Ship the fix and document anything that should happen next'],
    implementation:[
      {title:'Find the real cause',detail:'A visible symptom can come from layout, rendering, data, assets or deployment. The first step is to isolate the cause instead of adding another layer of CSS or code blindly.'},
      {title:'Protect what works',detail:'Existing features that are stable are left alone where possible. The goal is a focused change with a smaller regression surface, not a rewrite for its own sake.'},
      {title:'Improve the customer path',detail:'Mobile friction, weak calls to action, slow pages, broken forms and confusing content hierarchy are prioritized by how much they affect trust or action.'},
      {title:'Verify the change',detail:'The changed path is checked across relevant screen sizes and states so the fix does not simply move the problem somewhere else.'},
    ],
    qualityChecks:['Affected mobile and desktop widths','Forms, links and conversion actions','Performance before/after where relevant','Adjacent flows likely to regress','Production deployment and rollback awareness'],
    handoff:['A clear summary of what changed','Any new service or configuration ownership','Known limitations or follow-up priorities','Source/deployment changes committed cleanly'],
    faqs:[
      {q:'Do I need a full rebuild?',a:'Not necessarily. If the existing foundation is sound, a focused intervention can be faster, safer and more economical than replacing everything.'},
      {q:'Can you fix mobile layout problems?',a:'Yes. Overflow, spacing, tap targets, responsive grids, navigation and other mobile problems can be isolated and corrected without changing unrelated parts of the site.'},
      {q:'Can you improve performance?',a:'Yes. The useful approach is to find the actual bottleneck first, then address heavy assets, rendering, data loading or other causes instead of applying generic optimizations blindly.'},
      {q:'Can you help with a failed deployment or launch issue?',a:'Yes, when the issue is specific and the necessary project access is available. The goal is to restore a safe production path without introducing unrelated changes.'},
      {q:'Will you tell me if a rebuild is actually the better option?',a:'Yes. If the existing foundation makes a focused fix unsafe or disproportionately expensive, that should be explained before work expands rather than discovered after the project starts.'},
    ],
    icon:Wrench,
  },
];

export function getService(slug:string){return services.find(service=>service.slug===slug)}
