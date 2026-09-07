'use client';
import { FormEvent, useState } from 'react';
import { CheckCircle2, Clock3, Star } from 'lucide-react';

export function ReviewForm(){
  const [rating,setRating]=useState(5);
  const [status,setStatus]=useState('');
  const [busy,setBusy]=useState(false);
  const [sent,setSent]=useState(false);

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setBusy(true);setStatus('');setSent(false);
    const form=e.currentTarget;
    const fd=new FormData(form);
    const payload={name:fd.get('name'),role:fd.get('role'),company:fd.get('company'),message:fd.get('message'),rating,website:fd.get('website')};
    const res=await fetch('/api/reviews',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    setBusy(false);
    if(res.ok){
      setStatus('Thanks — your review was submitted for approval. It will appear here after it has been reviewed.');
      setSent(true);form.reset();setRating(5);
    }else{
      const j=await res.json().catch(()=>({}));
      setStatus(j.error||'Could not submit review. Please try again.');
    }
  }

  return <form className="review-form" onSubmit={submit}>
    <div className="review-form-head"><div><span className="eyebrow">Share your experience</span><h3>Add a review</h3></div><div className="rating-picker" aria-label="Rating">{[1,2,3,4,5].map(n=><button type="button" key={n} onClick={()=>setRating(n)} className={n<=rating?'on':''} aria-label={`${n} stars`}><Star size={18} fill="currentColor"/></button>)}</div></div>
    <p className="review-moderation-note"><Clock3 size={15}/> Reviews are checked before publishing so the public feedback stays genuine and useful.</p>
    <div className="form-two"><label>Name<input name="name" required maxLength={80}/></label><label>Company / project<input name="company" maxLength={100}/></label></div>
    <label>Your role<input name="role" maxLength={100} placeholder="Founder, manager, stakeholder..."/></label>
    <label>Review<textarea name="message" required minLength={12} maxLength={800} rows={5} placeholder="What was useful about working together?"/></label>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off"/>
    <button className="btn" disabled={busy}>{busy?'Submitting…':'Submit Review'}</button>
    {status&&<p className={`form-status ${sent?'form-status-success':'form-status-error'}`}>{sent&&<CheckCircle2 size={15}/>} {status}</p>}
  </form>
}
