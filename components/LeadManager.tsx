'use client';
import {useMemo,useState} from 'react';
import {ExternalLink, Mail, MessageCircle, PhoneCall, Search, Trash2} from 'lucide-react';
import type {Lead} from '@/lib/leads';

const statuses=['new','contacted','qualified','won','closed'];

function GmailMark(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M3 5.5 12 12l9-6.5v12.2c0 .72-.58 1.3-1.3 1.3H17V9.8l-5 3.6-5-3.6V19H4.3c-.72 0-1.3-.58-1.3-1.3V5.5Z"/><path fill="#EA4335" d="M3.8 4.4A2 2 0 0 0 3 6v.1l9 6.5 9-6.5V6a2 2 0 0 0-.8-1.6L12 10.3 3.8 4.4Z"/><path fill="#FBBC04" d="M3 6.1V18c0 .55.34 1.02.82 1.2L7 16.9V9L3 6.1Z"/><path fill="#34A853" d="M21 6.1V18c0 .55-.34 1.02-.82 1.2L17 16.9V9l4-2.9Z"/></svg>}
function WhatsAppMark(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a9.5 9.5 0 0 0-8.27 14.18L2.4 21.6l5.55-1.3A9.5 9.5 0 1 0 12 2Zm0 17.25a7.7 7.7 0 0 1-3.92-1.07l-.28-.17-3.28.77.78-3.18-.18-.29A7.75 7.75 0 1 1 12 19.25Zm4.25-5.8c-.23-.12-1.37-.68-1.58-.76-.21-.08-.36-.12-.52.12-.15.23-.59.76-.72.92-.13.15-.27.17-.5.06-1.36-.68-2.26-1.22-3.16-2.77-.24-.41.24-.38.68-1.27.08-.15.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.91 0 1.12.82 2.21.93 2.36.12.15 1.61 2.46 3.9 3.45.55.24.97.38 1.3.48.55.17 1.04.15 1.43.09.44-.07 1.37-.56 1.56-1.1.19-.55.19-1.02.13-1.12-.05-.1-.21-.16-.44-.28Z"/></svg>}

function normalizeWhatsApp(phone?:string|null){if(!phone)return '';let digits=phone.replace(/\D/g,'');if(digits.startsWith('00'))digits=digits.slice(2);else if(digits.startsWith('0'))digits='92'+digits.slice(1);return digits;}
function prettyDate(value?:string){if(!value)return '';try{return new Intl.DateTimeFormat('en',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value))}catch{return ''}}

export function LeadManager({initial}:{initial:Lead[]}){
  const [rows,setRows]=useState(initial);const [busy,setBusy]=useState<string|null>(null);const [filter,setFilter]=useState('all');const [query,setQuery]=useState('');
  const visible=useMemo(()=>{const base=filter==='all'?rows:rows.filter(r=>r.status===filter);const q=query.trim().toLowerCase();if(!q)return base;return base.filter(r=>[r.name,r.email,r.phone,r.company,r.project,r.project_size,r.message].filter(Boolean).some(v=>String(v).toLowerCase().includes(q)));},[rows,filter,query]);
  async function setStatus(id:string,status:string){setBusy(id);const res=await fetch(`/api/leads/${id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})});setBusy(null);if(res.ok)setRows(x=>x.map(r=>r.id===id?{...r,status}:r));else alert('Could not update lead.');}
  async function remove(id:string){if(!confirm('Delete this lead permanently?'))return;setBusy(id);const res=await fetch(`/api/leads/${id}`,{method:'DELETE'});setBusy(null);if(res.ok)setRows(x=>x.filter(r=>r.id!==id));else alert('Could not delete lead.');}
  return <section className="lead-admin">
    <div className="admin-section-head admin-section-head-wrap"><div><span className="eyebrow">Sales inbox</span><h2>Project enquiries</h2><p>{rows.length?`${rows.length} enquiries saved in your private admin`:'New project briefs will appear here.'}</p></div><div className="admin-stat-pills"><span>{rows.filter(r=>r.status==='new').length} new</span><span>{rows.filter(r=>r.status==='qualified').length} qualified</span><span>{rows.filter(r=>r.status==='won').length} won</span></div></div>
    <div className="lead-toolbar"><div className="admin-filter-row lead-filter-row">{['all',...statuses].map(s=><button type="button" key={s} className={filter===s?'active':''} onClick={()=>setFilter(s)}>{s}</button>)}</div><label className="lead-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search name, email, phone, project…" aria-label="Search project enquiries"/></label></div>
    <div className="lead-admin-list">{visible.length===0&&<div className="admin-empty"><Mail/><b>No enquiries in this view</b><span>Switch the filter or wait for a new project brief.</span></div>}{visible.map(r=>{
      const wa=normalizeWhatsApp(r.phone);
      const subject=encodeURIComponent(`FahadDev — ${r.project}`);
      const gmail=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(r.email)}&su=${subject}&body=${encodeURIComponent(`Hi ${(r.name||'').split(' ')[0]||r.name},\n\nThanks for reaching out to FahadDev about ${r.project}.\n\n`)}`;
      const whatsapp=wa?`https://wa.me/${wa}?text=${encodeURIComponent(`Hi ${(r.name||'').split(' ')[0]||r.name}, thanks for reaching out to FahadDev about ${r.project}.`)}`:'';
      return <article key={r.id} className={`lead-card lead-${r.status}`}>
        <div className="lead-admin-top"><div className="lead-identity"><div className="lead-avatar">{(r.name||'?').slice(0,1).toUpperCase()}</div><div><div className="lead-name-line"><b>{r.name}</b><span className={`lead-status ${r.status}`}>{r.status}</span></div><a href={`mailto:${r.email}`}>{r.email}</a>{r.phone&&<a href={`tel:${r.phone}`}>{r.phone}</a>}<small>{prettyDate(r.created_at)}</small></div></div><select aria-label={`Status for ${r.name}`} value={r.status} disabled={busy===r.id} onChange={e=>setStatus(r.id,e.target.value)}>{statuses.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
        <div className="lead-admin-meta"><span>{r.project}</span>{r.project_size&&<span>{r.project_size}</span>}{r.company&&<span>{r.company}</span>}</div>
        {r.website_url&&<a className="lead-url" href={r.website_url} target="_blank" rel="noreferrer">{r.website_url}<ExternalLink size={12}/></a>}
        <div className="lead-message"><span>Project brief</span><p>{r.message}</p></div>
        <div className="lead-contact-actions"><a className="lead-action gmail" href={gmail} target="_blank" rel="noreferrer" title="Reply in Gmail"><GmailMark/><span>Gmail</span></a>{wa?<a className="lead-action whatsapp" href={whatsapp} target="_blank" rel="noreferrer" title="Reply on WhatsApp"><WhatsAppMark/><span>WhatsApp</span></a>:<span className="lead-action disabled" title="This older lead has no phone number"><MessageCircle/><span>No phone</span></span>}{r.phone&&<a className="lead-action call" href={`tel:${r.phone}`} title="Call this lead"><PhoneCall/><span>Call</span></a>}<button className="lead-delete" type="button" disabled={busy===r.id} onClick={()=>remove(r.id)}><Trash2/><span>Delete</span></button></div>
      </article>})}</div>
  </section>
}
