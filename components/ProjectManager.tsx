'use client';
import {ChangeEvent,useEffect,useMemo,useState} from 'react';
import {ChevronDown, ExternalLink, ImagePlus, Pencil, Plus, Save, Trash2, Upload, X} from 'lucide-react';
import type {Project} from '@/lib/projects';

const blank:Project={slug:'',title:'',short:'',clientType:'',timeline:'',stack:[],concept:false,problem:'',approach:'',build:'',result:'',liveUrl:'',imageUrl:'',sortOrder:99,published:true};

function slugify(v:string){return v.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80)}

export function ProjectManager({initial}:{initial:Project[]}){
  const [rows,setRows]=useState(initial);
  const [creating,setCreating]=useState(false);
  const [draft,setDraft]=useState<Project>(blank);
  const [openId,setOpenId]=useState<string|null>(null);
  const [busy,setBusy]=useState<string|null>(null);
  const [notice,setNotice]=useState('');
  const [fileMap,setFileMap]=useState<Record<string,File|undefined>>({});
  const published=useMemo(()=>rows.filter(x=>x.published!==false).length,[rows]);

  function editLocal(key:string,patch:Partial<Project>){setRows(x=>x.map((p,i)=>((p.id||`fallback-${i}`)===key?{...p,...patch}:p)));}
  function projectKey(p:Project,i:number){return p.id||`fallback-${i}`}
  async function upload(file?:File){
    if(!file)return null;const fd=new FormData();fd.append('file',file);
    const res=await fetch('/api/projects/upload',{method:'POST',body:fd});const j=await res.json().catch(()=>({}));
    if(!res.ok)throw new Error(j.error||'Could not upload image.');return String(j.url||'');
  }
  async function createProject(){
    setNotice('');setBusy('new');
    try{const imageUrl=(await upload(fileMap.new))||draft.imageUrl||null;const payload={...draft,imageUrl};const res=await fetch('/api/projects',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const j=await res.json().catch(()=>({}));if(!res.ok)throw new Error(j.error||'Could not add project.');setRows(x=>[...x,{...payload,id:j.id}].sort((a,b)=>(a.sortOrder||99)-(b.sortOrder||99)));setDraft(blank);setFileMap(x=>({...x,new:undefined}));setCreating(false);setNotice('Project added and public pages refreshed.');}
    catch(e){setNotice(e instanceof Error?e.message:'Could not add project.')}finally{setBusy(null)}
  }
  async function saveProject(p:Project,key:string){
    setNotice('');setBusy(key);
    try{const imageUrl=(await upload(fileMap[key]))||p.imageUrl||null;const payload={...p,imageUrl};let res:Response;if(p.id){res=await fetch(`/api/projects/${p.id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});}else{res=await fetch('/api/projects',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});}const j=await res.json().catch(()=>({}));if(!res.ok)throw new Error(j.error||'Could not save project.');editLocal(key,{...payload,id:p.id||j.id});setFileMap(x=>({...x,[key]:undefined}));setNotice('Project saved. Public work pages were refreshed.');}
    catch(e){setNotice(e instanceof Error?e.message:'Could not save project.')}finally{setBusy(null)}
  }
  async function removeProject(p:Project,key:string){
    if(!p.id){setNotice('Run supabase-setup.sql once so the original projects become editable database records.');return}
    if(!confirm(`Delete “${p.title}” from the portfolio?`))return;setBusy(key);const res=await fetch(`/api/projects/${p.id}`,{method:'DELETE'});setBusy(null);if(res.ok){setRows(x=>x.filter(q=>q.id!==p.id));setNotice('Project deleted and public pages refreshed.')}else{const j=await res.json().catch(()=>({}));setNotice(j.error||'Could not delete project.')}
  }
  function fileChanged(key:string,e:ChangeEvent<HTMLInputElement>){const f=e.target.files?.[0];setFileMap(x=>({...x,[key]:f}));}

  return <section className="admin-block project-admin">
    <div className="admin-section-head admin-section-head-wrap"><div><h2>Work / case studies</h2><p>Add, edit, reorder, publish or remove portfolio work. Uploaded images automatically appear on cards and case-study pages.</p></div><button className="btn btn-sm" onClick={()=>setCreating(v=>!v)}>{creating?<><X size={15}/>Cancel</>:<><Plus size={15}/>Add new work</>}</button></div>
    <div className="admin-stat-pills"><span>{rows.length} total</span><span>{published} published</span><span>{rows.length-published} hidden</span></div>
    {notice&&<p className="admin-notice">{notice}</p>}

    {creating&&<ProjectEditor title="New project" value={draft} onChange={setDraft} file={fileMap.new} onFile={e=>fileChanged('new',e)} onSave={createProject} busy={busy==='new'} isNew/>}

    <div className="project-admin-list">{rows.map((p,i)=>{const key=projectKey(p,i);const opened=openId===key;return <article className="project-admin-row" key={key}>
      <div className="project-admin-summary">
        <div className="project-admin-thumb">{p.imageUrl?<img src={p.imageUrl} alt=""/>:<span>{String(i+1).padStart(2,'0')}</span>}</div>
        <div className="project-admin-name"><div><b>{p.title}</b>{p.concept&&<span className="concept">Concept</span>}{p.published===false&&<span className="status-badge pending">Hidden</span>}</div><small>/{p.slug} · Order {p.sortOrder||i+1}</small></div>
        <div className="project-admin-summary-actions">{p.published!==false&&<a href={`/work/${p.slug}`} target="_blank" rel="noreferrer" className="admin-icon-button" aria-label={`Preview ${p.title}`}><ExternalLink size={16}/></a>}<button className="admin-icon-button" onClick={()=>setOpenId(opened?null:key)} aria-label={`Edit ${p.title}`}><Pencil size={16}/><ChevronDown className={opened?'rotated':''} size={14}/></button></div>
      </div>
      {opened&&<ProjectEditor title={`Edit ${p.title}`} value={p} onChange={next=>editLocal(key,next)} file={fileMap[key]} onFile={e=>fileChanged(key,e)} onSave={()=>saveProject(p,key)} onDelete={()=>removeProject(p,key)} busy={busy===key}/>} 
    </article>})}</div>
  </section>
}

function ProjectEditor({title,value,onChange,onFile,file,onSave,onDelete,busy,isNew}:{title:string;value:Project;onChange:(v:Project)=>void;onFile:(e:ChangeEvent<HTMLInputElement>)=>void;file?:File;onSave:()=>void;onDelete?:()=>void;busy:boolean;isNew?:boolean}){
  const set=<K extends keyof Project>(k:K,v:Project[K])=>onChange({...value,[k]:v});
  return <div className="project-editor">
    <div className="project-editor-title"><div><span className="eyebrow">Portfolio editor</span><h3>{title}</h3></div><label className="publish-toggle"><input type="checkbox" checked={value.published!==false} onChange={e=>set('published',e.target.checked)}/><span>Published</span></label></div>
    <div className="project-editor-grid">
      <label>Project title<input value={value.title} onChange={e=>onChange({...value,title:e.target.value,slug:isNew&&!value.slug?slugify(e.target.value):value.slug})} placeholder="Project name"/></label>
      <label>URL slug<input value={value.slug} onChange={e=>set('slug',slugify(e.target.value))} placeholder="project-name"/></label>
      <label>Project type<input value={value.clientType} onChange={e=>set('clientType',e.target.value)} placeholder="E-commerce / Organization Platform"/></label>
      <label>Timeline label<input value={value.timeline} onChange={e=>set('timeline',e.target.value)} placeholder="Full-stack build"/></label>
      <label>Display order<input type="number" min="1" max="999" value={value.sortOrder||99} onChange={e=>set('sortOrder',Number(e.target.value))}/></label>
      <label>Live URL<input type="url" value={value.liveUrl||''} onChange={e=>set('liveUrl',e.target.value)} placeholder="https://..."/></label>
    </div>
    <label>Short project summary<textarea rows={3} value={value.short} onChange={e=>set('short',e.target.value)} placeholder="What this project does and why it matters."/></label>
    <label>Stack / capabilities <small>Comma-separated</small><input value={value.stack.join(', ')} onChange={e=>set('stack',e.target.value.split(',').map(x=>x.trim()).filter(Boolean))} placeholder="Next.js, Supabase, Stripe"/></label>
    <div className="project-image-upload">
      <div className="project-image-preview"><ProjectImagePreview file={file} fallback={value.imageUrl||null}/></div>
      <div><span className="eyebrow">Project image</span><h4>Upload once. Use it everywhere.</h4><p>JPG, PNG or WebP up to 4 MB. The image is used on Work cards, homepage featured work and the case-study hero.</p><label className="upload-button"><Upload size={16}/>Choose image<input type="file" accept="image/jpeg,image/png,image/webp" onChange={onFile}/></label></div>
    </div>
    <div className="project-long-grid"><label>Problem<textarea rows={5} value={value.problem} onChange={e=>set('problem',e.target.value)}/></label><label>Approach<textarea rows={5} value={value.approach} onChange={e=>set('approach',e.target.value)}/></label><label>Build<textarea rows={5} value={value.build} onChange={e=>set('build',e.target.value)}/></label><label>Result<textarea rows={5} value={value.result} onChange={e=>set('result',e.target.value)}/></label></div>
    <label className="checkbox"><input type="checkbox" checked={!!value.concept} onChange={e=>set('concept',e.target.checked)}/> Mark as concept work</label>
    <div className="project-editor-actions"><button className="btn btn-sm" disabled={busy} onClick={onSave}><Save size={15}/>{busy?'Saving…':'Save project'}</button>{onDelete&&<button className="text-button danger" disabled={busy} onClick={onDelete}><Trash2 size={15}/>Delete project</button>}</div>
  </div>
}

function ProjectImagePreview({file,fallback}:{file?:File;fallback?:string|null}){
  const [localUrl,setLocalUrl]=useState<string|null>(null);
  useEffect(()=>{if(!file){setLocalUrl(null);return}const url=URL.createObjectURL(file);setLocalUrl(url);return()=>URL.revokeObjectURL(url)},[file]);
  const src=localUrl||fallback;
  return src?<img src={src} alt="Project preview"/>:<div><ImagePlus/><b>No project image yet</b><span>A real screenshot makes the case study more credible.</span></div>;
}
