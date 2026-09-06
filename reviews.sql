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
-- Public website writes through your server route using SUPABASE_SERVICE_ROLE_KEY.
-- Do not expose the service role key to the browser.
