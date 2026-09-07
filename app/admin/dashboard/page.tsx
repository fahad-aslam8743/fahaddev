import {requireAdmin} from '@/lib/admin';
import {getAdminProjects} from '@/lib/projects';
import {getAdminReviews} from '@/lib/reviews';
import {getLeads} from '@/lib/leads';
import {ReviewManager} from '@/components/ReviewManager';
import {LeadManager} from '@/components/LeadManager';
import {ProjectManager} from '@/components/ProjectManager';

export default async function Dashboard(){
  await requireAdmin();
  const [reviews,leads,projects]=await Promise.all([getAdminReviews(),getLeads(),getAdminProjects()]);
  return <section className="admin-page shell">
    <div className="admin-top"><div><span className="eyebrow">Private admin</span><h1>Leads, portfolio & reviews</h1><p>Everything that affects public trust or incoming business is managed here.</p></div><form action="/api/admin/logout" method="post"><button className="text-button">Sign out</button></form></div>
    <div className="admin-overview"><article><span>Lead inbox</span><b>{leads.length}</b><small>Project enquiries</small></article><article><span>Portfolio</span><b>{projects.length}</b><small>Work entries</small></article><article><span>Pending reviews</span><b>{reviews.filter(r=>r.status==='pending').length}</b><small>Waiting for approval</small></article><article><span>Published reviews</span><b>{reviews.filter(r=>r.status==='approved').length}</b><small>Visible publicly</small></article></div>
    <LeadManager initial={leads}/>
    <ProjectManager initial={projects}/>
    <ReviewManager initial={reviews}/>
    <p className="admin-help">Run <code>supabase-setup.sql</code> once after this update. It creates or upgrades the leads, moderated reviews, editable projects and the public project-image storage bucket. The service-role key stays server-side.</p>
  </section>
}
