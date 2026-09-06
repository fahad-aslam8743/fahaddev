'use client';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const links=[['Work','/work'],['Services','/services'],['Process','/process'],['About','/about']] as const;

export function Nav(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{
   document.documentElement.classList.toggle('menu-open',open);
   return()=>document.documentElement.classList.remove('menu-open');
 },[open]);
 useEffect(()=>{
   const close=()=>setOpen(false);
   window.addEventListener('resize',close);
   return()=>window.removeEventListener('resize',close);
 },[]);
 return <>
   <header className="nav-wrap">
     <nav className="nav shell" aria-label="Primary navigation">
       <Link className="wordmark" href="/" onClick={()=>setOpen(false)}>fahaddev<span>.</span></Link>
       <div className="nav-links">
         <span className="nav-status"><i/>Available for new projects</span>
         {links.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}
         <Link className="btn btn-sm" href="/contact">Get a Free Project Roadmap</Link>
       </div>
       <button className="menu-btn" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(v=>!v)}>{open?<X size={22}/>:<Menu size={22}/>}</button>
     </nav>
   </header>
   <div id="mobile-navigation" className={`mobile-menu ${open?'is-open':''}`} aria-hidden={!open}>
     <div className="mobile-menu-panel">
       <div className="mobile-menu-shell shell">
         <div className="mobile-menu-top"><span className="nav-status mobile-status"><i/>Available for new projects</span><span className="mobile-menu-label">NAVIGATION</span></div>
         <div className="mobile-menu-links">
           {links.map(([n,h],i)=><Link key={h} href={h} onClick={()=>setOpen(false)}><small>0{i+1}</small><b>{n}</b><ArrowUpRight size={20}/></Link>)}
           <Link href="/contact" onClick={()=>setOpen(false)}><small>05</small><b>Start a Project</b><ArrowUpRight size={20}/></Link>
         </div>
         <div className="mobile-menu-bottom">
           <p>Have a site, product, workflow, or idea that needs to perform better?</p>
           <Link className="btn mobile-cta" href="/contact" onClick={()=>setOpen(false)}>Get a Free Project Roadmap <ArrowUpRight size={17}/></Link>
           <a className="mobile-email" href="mailto:hello@fahaddev.com">hello@fahaddev.com</a>
         </div>
       </div>
     </div>
   </div>
 </>
}
