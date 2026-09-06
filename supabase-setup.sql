create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  company text,
  rating int not null default 5 check (rating between 1 and 5),
  message text not null,
  created_at timestamptz not null default now()
);
create index if not exists reviews_created_at_idx on public.reviews(created_at desc);
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

-- Public forms write through server routes using SUPABASE_SERVICE_ROLE_KEY.
-- Do not expose the service role key to browser code.
