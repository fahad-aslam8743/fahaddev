'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function LeadForm(){
  const [busy,setBusy]=useState(false);
  const [status,setStatus]=useState('');
  const [failed,setFailed]=useState(false);

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setBusy(true); setStatus(''); setFailed(false);
    const form=e.currentTarget;
    const fd=new FormData(form);
    const payload={
      name:fd.get('name'), email:fd.get('email'), phone:fd.get('phone'), company:fd.get('company'), website_url:fd.get('website_url'),
      project:fd.get('project'), project_size:fd.get('project_size'), message:fd.get('message'), website:fd.get('website'), source:'contact-page'
    };
    try{
      const res=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      const json=await res.json().catch(()=>({}));
      if(!res.ok) throw new Error(json.error||'Could not send your project brief.');
      setStatus('Thanks — your project brief is in. I’ll use these details to make the first reply useful.');
      form.reset();
    }catch(err){
      setFailed(true);
      setStatus(err instanceof Error?err.message:'Could not send your project brief.');
    }finally{setBusy(false)}
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="contact-form-heading"><span className="eyebrow">Project brief</span><h3>Share the context once. I’ll reply with the next useful step.</h3><p>No technical language required. No commitment is created by sending this form.</p></div>
    <div className="form-two"><label>Name<input name="name" required maxLength={80} placeholder="Your name"/></label><label>Email<input name="email" type="email" required maxLength={120} placeholder="you@company.com"/></label></div>
    <div className="form-two"><label>WhatsApp / phone<input name="phone" type="tel" required minLength={7} maxLength={30} inputMode="tel" autoComplete="tel" placeholder="+92 3xx xxxxxxx"/><small>Used only to reply about this enquiry.</small></label><label>Company / project<input name="company" maxLength={120} placeholder="Optional"/></label></div>
    <label>Existing website<input name="website_url" type="url" maxLength={220} placeholder="https://... (optional)"/></label>
    <label>What needs to work better?<select name="project" defaultValue="Not sure yet"><option>New e-commerce / website</option><option>Dashboard or internal tool</option><option>Full-stack web app</option><option>Fix or improve an existing product</option><option>Quick technical work</option><option>Not sure yet</option></select></label>
    <label>Likely project shape<select name="project_size" defaultValue="Prefer to discuss after scope"><option>Prefer to discuss after scope</option><option>Focused fix or small job</option><option>Custom project</option><option>Larger product build</option><option>Ongoing improvements</option></select></label>
    <label>What is happening now?<textarea name="message" rows={6} minLength={20} maxLength={1800} placeholder="What do you have today, what is the problem, who is affected, and what would a good result look like?" required/></label>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <button className="btn" type="submit" disabled={busy}>{busy?'Sending…':<>Send Project Brief <ArrowRight size={17}/></>}</button>
    {status&&<p className={`form-status ${failed?'form-status-error':'form-status-success'}`} role="status">{status}</p>}
    {failed&&<div className="lead-fallback"><span>Still want to send it now?</span><a href="https://wa.me/923255504461" target="_blank" rel="noreferrer"><MessageCircle size={16}/>Send the details on WhatsApp</a><a href="mailto:hello@fahaddev.com">Email instead</a></div>}
    <p className="form-note">Your email and phone are used only to respond to this project enquiry. <Link href="/privacy">Privacy details</Link> · Prefer a faster conversation? WhatsApp is available above.</p>
  </form>;
}
