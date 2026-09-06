'use client';
import Link from 'next/link';
import { ArrowUpRight, Home, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links=[
  ['Home','/'],
  ['Services','/services'],
  ['Work','/work'],
  ['Process','/process'],
  ['About','/about'],
  ['Contact','/contact'],
] as const;

export function Nav(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const previous=document.body.style.overflow;
    if(open) document.body.style.overflow='hidden';
    return()=>{document.body.style.overflow=previous;};
  },[open]);
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape') setOpen(false)};
    window.addEventListener('keydown',onKey);
    return()=>window.removeEventListener('keydown',onKey);
  },[]);

  return <>
    <header className="site-header">
      <div className="shell nav-inner">
        <Link className="wordmark" href="/" aria-label="FahadDev home">FAHAD<span>DEV</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <span className="nav-status"><i/>Available</span>
          <Link className="nav-cta" href="/contact">Get a Free Consultation <ArrowUpRight size={15}/></Link>
          <button className="menu-toggle" onClick={()=>setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu size={22}/></button>
        </div>
      </div>
    </header>

    {open && <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="menu-overlay-top shell">
        <Link className="wordmark" href="/" onClick={()=>setOpen(false)}>FAHAD<span>DEV</span></Link>
        <button className="menu-close" onClick={()=>setOpen(false)} aria-label="Close menu"><X size={23}/></button>
      </div>
      <div className="menu-overlay-content shell">
        <div className="menu-overlay-links">
          {links.map(([label,href],i)=><Link key={href} href={href} onClick={()=>setOpen(false)}>
            <span>0{i+1}</span><strong>{label}</strong>{label==='Home'?<Home size={20}/>:<ArrowUpRight size={20}/>} 
          </Link>)}
        </div>
        <div className="menu-overlay-card">
          <span className="eyebrow">Have a project in mind?</span>
          <h2>Start with the business goal. I’ll help shape the technical route.</h2>
          <Link className="btn" href="/contact" onClick={()=>setOpen(false)}>Get a Free Consultation <ArrowUpRight size={17}/></Link>
        </div>
      </div>
    </div>}
  </>;
}
