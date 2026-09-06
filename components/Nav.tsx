'use client';
import Link from 'next/link';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const desktopLinks=[
  ['Home','/'],
  ['Services','/services'],
  ['Work','/work'],
  ['Process','/process'],
  ['About','/about'],
] as const;
const mobileLinks=[...desktopLinks,['Contact','/contact'] as const];

export function Nav(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    if(!open) return;
    const y=window.scrollY;
    document.documentElement.classList.add('menu-open');
    document.body.style.position='fixed';
    document.body.style.top=`-${y}px`;
    document.body.style.width='100%';
    return()=>{
      document.documentElement.classList.remove('menu-open');
      document.body.style.position='';
      document.body.style.top='';
      document.body.style.width='';
      window.scrollTo(0,y);
    };
  },[open]);
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};
    window.addEventListener('keydown',onKey);
    return()=>window.removeEventListener('keydown',onKey);
  },[]);

  return <>
    <header className="site-header">
      <div className="shell nav-inner">
        <Logo/>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {desktopLinks.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="nav-cta" href="/contact">Start a Project <ArrowUpRight size={15}/></Link>
          <button className="menu-toggle" onClick={()=>setOpen(true)} aria-label="Open navigation" aria-expanded={open}><Menu size={22}/></button>
        </div>
      </div>
    </header>
    {open && <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="menu-overlay-top shell"><Logo/><button className="menu-close" onClick={()=>setOpen(false)} aria-label="Close navigation"><X size={23}/></button></div>
      <div className="menu-overlay-content shell">
        <nav className="menu-overlay-links" aria-label="Mobile navigation">
          {mobileLinks.map(([label,href],i)=><Link key={href} href={href} onClick={()=>setOpen(false)}><span>0{i+1}</span><strong>{label}</strong><ArrowUpRight size={19}/></Link>)}
        </nav>
        <div className="menu-overlay-card">
          <span className="eyebrow">Prefer a quick conversation?</span>
          <h2>Tell me what needs to work better.</h2>
          <div className="menu-overlay-actions">
            <Link className="btn" href="/contact" onClick={()=>setOpen(false)}>Start a Project</Link>
            <a className="btn btn-secondary" href="https://wa.me/923255504461" target="_blank" rel="noreferrer"><MessageCircle size={17}/>WhatsApp</a>
          </div>
        </div>
      </div>
    </div>}
  </>;
}
