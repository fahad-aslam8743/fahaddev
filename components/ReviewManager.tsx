'use client';
import {useMemo,useState} from 'react';
import {CheckCircle2, Clock3, EyeOff, Star, Trash2} from 'lucide-react';
import type {Review,ReviewStatus} from '@/lib/reviews';

export function ReviewManager({initial}:{initial:Review[]}){
  const [rows,setRows]=useState(initial);
  const [busy,setBusy]=useState<string|null>(null);
  const [filter,setFilter]=useState<'all'|ReviewStatus>('all');
  const visible=useMemo(()=>filter==='all'?rows:rows.filter(r=>r.status===filter),[rows,filter]);
  const pending=rows.filter(r=>r.status==='pending').length;
  const approved=rows.filter(r=>r.status==='approved').length;

  function patchLocal(id:string,patch:Partial<Review>){setRows(x=>x.map(q=>q.id===id?{...q,...patch}:q));}
  async function save(r:Review,override?:Partial<Review>){
    const next={...r,...override};setBusy(r.id);
    const res=await fetch(`/api/reviews/${r.id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(next)});
    setBusy(null);
    if(!res.ok){alert('Could not save review.');return}
    patchLocal(r.id,next);
  }
  async function remove(id:string){
    if(!confirm('Delete this review permanently?'))return;
    setBusy(id);const res=await fetch(`/api/reviews/${id}`,{method:'DELETE'});setBusy(null);
    if(res.ok)setRows(x=>x.filter(r=>r.id!==id));else alert('Could not delete review.');
  }

  return <section className="review-admin">
    <div className="admin-section-head admin-section-head-wrap"><div><h2>Review moderation</h2><p>New reviews stay private until you approve them. Edit, publish, unpublish or delete from one place.</p></div><div className="admin-stat-pills"><span><Clock3 size={14}/>{pending} pending</span><span><CheckCircle2 size={14}/>{approved} published</span></div></div>
    <div className="admin-filter-row"><button className={filter==='all'?'active':''} onClick={()=>setFilter('all')}>All</button><button className={filter==='pending'?'active':''} onClick={()=>setFilter('pending')}>Pending</button><button className={filter==='approved'?'active':''} onClick={()=>setFilter('approved')}>Published</button></div>
    {!visible.length&&<div className="admin-empty"><Clock3/><b>No reviews in this view.</b><span>New submissions will appear here automatically.</span></div>}
    {visible.map(r=><article key={r.id} className={`admin-review-card review-status-${r.status}`}>
      <div className="admin-review-head"><div><b>{r.name}</b><span className={`status-badge ${r.status}`}>{r.status==='approved'?'Published':'Pending approval'}</span></div><div className="admin-stars">{Array.from({length:r.rating}).map((_,i)=><Star key={i} size={14} fill="currentColor"/>)}</div></div>
      <div className="form-two"><label>Name<input value={r.name} onChange={e=>patchLocal(r.id,{name:e.target.value})}/></label><label>Company<input value={r.company||''} onChange={e=>patchLocal(r.id,{company:e.target.value})}/></label></div>
      <label>Role<input value={r.role||''} onChange={e=>patchLocal(r.id,{role:e.target.value})}/></label>
      <label>Review<textarea rows={4} value={r.message} onChange={e=>patchLocal(r.id,{message:e.target.value})}/></label>
      <label>Rating<select value={r.rating} onChange={e=>patchLocal(r.id,{rating:Number(e.target.value)})}>{[5,4,3,2,1].map(n=><option value={n} key={n}>{n} / 5</option>)}</select></label>
      <div className="admin-review-actions"><div className="admin-primary-actions">{r.status==='pending'?<button className="btn btn-sm" disabled={busy===r.id} onClick={()=>save(r,{status:'approved'})}><CheckCircle2 size={15}/> Approve & publish</button>:<button className="btn btn-secondary btn-sm" disabled={busy===r.id} onClick={()=>save(r,{status:'pending'})}><EyeOff size={15}/> Unpublish</button>}<button className="btn btn-secondary btn-sm" disabled={busy===r.id} onClick={()=>save(r)}>Save edits</button></div><button className="text-button danger" disabled={busy===r.id} onClick={()=>remove(r.id)}><Trash2 size={15}/> Delete</button></div>
    </article>)}
  </section>
}
