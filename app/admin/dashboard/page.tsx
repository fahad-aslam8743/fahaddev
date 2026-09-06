import Link from 'next/link';
import {requireAdmin} from '@/lib/admin';
import {projects} from '@/lib/projects';
import {getReviews} from '@/lib/reviews';
import {getLeads} from '@/lib/leads';
import {ReviewManager} from '@/components/ReviewManager';
import {LeadManager} from '@/components/LeadManager';
export default async function Dashboard(){await requireAdmin();const [reviews,leads]=await Promise.all([getReviews(),getLeads()]);return <section className="admin-page shell"><div className="admin-top"><div><span className="eyebrow">Private admin</span><h1>Leads, portfolio & reviews</h1></div><form action="/api/admin/logout" method="post"><button className="text-button">Sign out</button></form></div><LeadManager initial={leads}/><section className="admin-block"><div className="admin-section-head"><div><h2>Projects</h2><p>Case studies are code-managed so the public portfolio cannot drift away from the reviewed site content.</p></div></div><div className="admin-table">{projects.map((r,i)=><div className="admin-row" key={r.slug}><div><b>{r.title}</b><small>/{r.slug}</small></div><span>{r.concept?'Concept':'Project'}</span><span>Order {i+1}</span><Link href={`/work/${r.slug}`}>Preview</Link></div>)}</div></section><ReviewManager initial={reviews}/><p className="admin-help">Run <code>supabase-setup.sql</code> once in Supabase. Public project briefs and reviews write through server routes using your service role key; nothing sensitive is exposed to the browser.</p></section>}
