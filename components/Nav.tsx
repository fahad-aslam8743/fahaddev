'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname=usePathname();
  const active=(href:string)=>href==='/'?pathname===href:pathname.startsWith(href);

  useEffect(()=>setOpen(false),[pathname]);
  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};
    window.addEventListener('keydown',onKey);
    return()=>window.removeEventListener('keydown',onKey);
  },[]);

  return <>
    <header className={`site-header studio-header ${open?'menu-is-open':''}`}>
      <div className="shell nav-inner">
        <Logo/>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {desktopLinks.map(([label,href])=><Link key={href} href={href} aria-current={active(href)?'page':undefined} className={active(href)?'active':''}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="nav-cta" href="/contact">Start a Project <ArrowUpRight size={15}/></Link>
          <button className="menu-toggle" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open?<X size={21}/>:<Menu size={21}/>}</button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-dropdown ${open?'is-open':''}`} aria-hidden={!open}>
        <nav className="mobile-dropdown-links" aria-label="Mobile navigation">
          {mobileLinks.map(([label,href],i)=><Link
            key={href}
            href={href}
            aria-current={active(href)?'page':undefined}
            className={active(href)?'active':''}
            style={{'--menu-delay':`${i*58}ms`} as CSSProperties}
          ><span>{String(i+1).padStart(2,'0')}</span><strong>{label}</strong><ArrowUpRight size={18}/></Link>)}
        </nav>
        <div className="mobile-dropdown-footer" style={{'--menu-delay':`${mobileLinks.length*58}ms`} as CSSProperties}>
          <div><small>Have something in mind?</small><b>Send the problem. I’ll help shape the route.</b></div>
          <a href="https://wa.me/923255504461" target="_blank" rel="noreferrer"><MessageCircle size={17}/>WhatsApp</a>
        </div>
      </div>
    </header>
    {open&&<button className="mobile-menu-backdrop" aria-label="Close navigation" onClick={()=>setOpen(false)}/>} 
  </>;
}
