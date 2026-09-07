-- FahadDev v9 database + storage setup
-- Safe to run again: this upgrades existing v8 tables without deleting data.

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  company text,
  rating int not null default 5 check (rating between 1 and 5),
  message text not null,
  created_at timestamptz not null default now()
);

-- Existing reviews should remain public after the moderation upgrade.
alter table public.reviews add column if not exists status text not null default 'approved';
alter table public.reviews add column if not exists approved_at timestamptz;
update public.reviews set approved_at=coalesce(approved_at,created_at) where status='approved';
alter table public.reviews alter column status set default 'pending';

do $$ begin
  alter table public.reviews add constraint reviews_status_check check (status in ('pending','approved'));
exception when duplicate_object then null;
end $$;

create index if not exists reviews_created_at_idx on public.reviews(created_at desc);
create index if not exists reviews_status_idx on public.reviews(status,created_at desc);
alter table public.reviews enable row level security;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  website_url text,
  project text not null,
  project_size text,
  message text not null,
  status text not null default 'new' check (status in ('new','contacted','qualified','won','closed')),
  source text,
  created_at timestamptz not null default now()
);
create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_status_idx on public.leads(status);
alter table public.leads enable row level security;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  short text not null,
  client_type text not null,
  timeline text not null default 'Full-stack build',
  stack text[] not null default '{}',
  concept boolean not null default false,
  problem text not null,
  approach text not null,
  build text not null,
  result text not null,
  live_url text,
  image_url text,
  sort_order int not null default 99,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists projects_sort_idx on public.projects(published,sort_order,created_at);
alter table public.projects enable row level security;

-- Seed the existing portfolio so every current work item is immediately editable in Admin.
insert into public.projects (slug,title,short,client_type,timeline,stack,concept,problem,approach,build,result,sort_order,published)
values
('youth-senate-pakistan','Youth Senate of Pakistan','An organization platform bringing membership intake, senator records, admin workflows and content operations into one structured web system.','Organization Platform','Full-stack platform',array['Membership','Admin workflows','Data management'],false,'Membership intake, records, administration and public-facing information become difficult to operate when they live across disconnected manual steps and separate content processes.','Treat the public website and the admin side as one operating system: structured intake, clear records, manageable content and practical workflows for the people running the organization.','Membership intake, admin workflows, senator data, CMS-style content management, certificate and media needs, responsive public pages and production deployment.','A working organization platform designed to make public information and internal administration easier to manage through one connected digital workflow.',1,true),
('elites','ÉLITES','A luxury fashion storefront built to feel as premium as the product — full e-commerce, CMS-managed.','E-commerce','Full-stack build',array['Next.js','Sanity','Supabase','Stripe'],false,'Premium products lose trust when the buying experience feels generic, slow, or stitched together from templates.','A custom editorial storefront with a CMS for product management, a structured checkout flow, and a clear separation between content, commerce, and customer data.','Responsive product discovery, product detail flows, cart and checkout, Stripe payments, CMS-managed catalog content, order persistence, and production deployment.','A reusable, production-ready commerce foundation designed for premium brands that need more control than a theme can provide.',2,true),
('pulse','Pulse','A real-time analytics dashboard concept — unifying creator metrics from multiple platforms into one view.','Analytics Dashboard','Concept build',array['Next.js','Supabase','TypeScript'],true,'Creators and small teams often make decisions from fragmented numbers spread across several platforms and spreadsheets.','A unified dashboard concept that prioritizes the metrics a team actually checks, with clean comparisons, role-aware access, and room for API integrations.','Dashboard information architecture, KPI views, trend charts, account states, role-based UI patterns, and a Supabase-ready data model.','A focused concept demonstrating how scattered reporting can become one usable operating view.',3,true),
('loom-studio','Loom Studio','A boutique furniture storefront concept — editorial product presentation, CMS-managed inventory.','Boutique E-commerce','Concept build',array['Next.js','Sanity','Stripe'],true,'Template stores can make considered, design-led products feel interchangeable with everything else online.','A restrained visual system built around strong product imagery, generous spacing, fast browsing, and CMS-controlled product storytelling.','Collection browsing, product pages, editorial content modules, CMS structure, cart-ready interaction patterns, and responsive mobile layouts.','A concept showing how custom commerce can preserve brand character without sacrificing clarity or speed.',4,true)
on conflict (slug) do nothing;

-- Public bucket for portfolio screenshots. Uploads themselves happen only through the authenticated server route.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('project-images','project-images',true,4194304,array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=true,file_size_limit=4194304,allowed_mime_types=array['image/jpeg','image/png','image/webp'];

-- Public forms and admin operations write through server routes using SUPABASE_SERVICE_ROLE_KEY.
-- Never expose the service role key to browser code.
