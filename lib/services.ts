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
    deliverables:['Custom product and collection interfaces','CMS-managed products and editorial content','Cart, checkout and payment integration','Order persistence and customer flows','Responsive performance and launch setup','Source, account and deployment handoff'],
    process:['Map the buying journey and business constraints','Shape the storefront, content model and checkout path','Build customer and admin-side workflows together','Test critical purchase and mobile flows','Launch with ownership and handoff made clear'],
    faqs:[
      {q:'Can you build without using a generic store theme?',a:'Yes. A custom front end can be combined with a CMS, payment provider and order data so the experience can reflect the brand without sacrificing operational control.'},
      {q:'Can my team update products after launch?',a:'Yes. Product and content management can be set up through a CMS or suitable admin workflow so normal updates do not require code changes.'},
      {q:'Can you integrate Stripe?',a:'Stripe checkout and payment flows can be included when it is suitable for the business, together with the surrounding order logic and production setup.'},
      {q:'Can you improve an existing store instead of rebuilding it?',a:'Yes. If the current foundation is worth keeping, the work can focus on conversion friction, responsive behavior, performance, content control or specific customer flows.'},
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
    deliverables:['Workflow-shaped dashboard interfaces','Search, filters, tables and exports','Role-aware access and protected views','API or database integrations','Admin actions and operational tooling','Responsive application layouts and deployment'],
    process:['Understand the real workflow before designing screens','Identify the data, actions and permissions each role needs','Build the operating view around priority tasks','Test edge cases, data states and permissions','Deploy with clear ownership and operating notes'],
    faqs:[
      {q:'Can a dashboard connect to my existing data?',a:'Usually yes if the source provides an API, database access, export or another reliable integration path. The right route depends on how the data is stored and updated.'},
      {q:'Can different users have different access?',a:'Yes. Role-aware interfaces and permissions can be included so different people see and control only what their job requires.'},
      {q:'Can it replace spreadsheets?',a:'Sometimes. The goal is not to replace a spreadsheet just because it is a spreadsheet; it is to remove the parts of the workflow that are error-prone, repetitive or hard to coordinate.'},
      {q:'Can you add exports and admin actions?',a:'Yes. Export, status changes, bulk actions, filters and other operational controls can be shaped around the actual process.'},
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
    deliverables:['Responsive application interface','Authentication and protected user flows','Database and API architecture','Third-party integrations','Forms, validation and state handling','Deployment, access and handoff'],
    process:['Clarify users, roles, goals and edge cases','Shape flows, data and technical boundaries','Build vertical slices that can be reviewed early','Test permissions, errors, responsive behavior and critical data actions','Launch with production access and next-step documentation'],
    faqs:[
      {q:'Can you handle both front end and back end?',a:'Yes. A project can include interface work, authentication, database design, APIs, integrations, deployment and handoff depending on what the product needs.'},
      {q:'Can you add authentication and user roles?',a:'Yes. Sign-up, sign-in, protected areas, role-aware interfaces and database permissions can be included when the product requires them.'},
      {q:'Can you work with an existing design?',a:'Yes. The build can start from existing Figma screens or a design system, and responsive or usability gaps can be flagged before they become implementation problems.'},
      {q:'Can the product grow later?',a:'The system can be structured so likely next steps are not unnecessarily blocked, while avoiding over-engineering features the product does not need yet.'},
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
    deliverables:['Responsive and layout fixes','Performance and UX cleanup','Feature additions and integrations','Form and conversion-flow improvements','Deployment and production issue fixes','Technical audit and prioritized recommendations'],
    process:['Identify the exact symptom and business impact','Audit the existing foundation before recommending a rebuild','Prioritize the smallest useful intervention','Test the affected paths in production-like conditions','Ship the fix and document anything that should happen next'],
    faqs:[
      {q:'Do I need a full rebuild?',a:'Not necessarily. If the existing foundation is sound, a focused intervention can be faster, safer and more economical than replacing everything.'},
      {q:'Can you fix mobile layout problems?',a:'Yes. Overflow, spacing, tap targets, responsive grids, navigation and other mobile problems can be isolated and corrected without changing unrelated parts of the site.'},
      {q:'Can you improve performance?',a:'Yes. The useful approach is to find the actual bottleneck first, then address heavy assets, rendering, data loading or other causes instead of applying generic optimizations blindly.'},
      {q:'Can you help with a failed deployment or launch issue?',a:'Yes, when the issue is specific and the necessary project access is available. The goal is to restore a safe production path without introducing unrelated changes.'},
    ],
    icon:Wrench,
  },
];

export function getService(slug:string){return services.find(service=>service.slug===slug)}
