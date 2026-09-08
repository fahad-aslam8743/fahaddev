'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function GlobalMotion(){
  const pathname=usePathname();
  const disabled=pathname.startsWith('/admin');
  useEffect(()=>{
    if(disabled) return;
    const root=document.documentElement;
    let raf=0;
    const fine=window.matchMedia('(pointer:fine)').matches;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateScroll=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      const p=Math.min(1,Math.max(0,window.scrollY/max));
      root.style.setProperty('--scroll-progress',String(p));
      root.style.setProperty('--scroll-y',`${window.scrollY}px`);
    };
    const onScroll=()=>{
      if(raf) return;
      raf=requestAnimationFrame(()=>{raf=0;updateScroll()});
    };
    const onPointer=(e:PointerEvent)=>{
      if(!fine||reduced) return;
      root.style.setProperty('--pointer-x',`${e.clientX}px`);
      root.style.setProperty('--pointer-y',`${e.clientY}px`);
      root.style.setProperty('--pointer-xp',String(e.clientX/window.innerWidth));
      root.style.setProperty('--pointer-yp',String(e.clientY/window.innerHeight));
    };
    updateScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',updateScroll,{passive:true});
    window.addEventListener('pointermove',onPointer,{passive:true});
    return()=>{
      if(raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll',onScroll);
      window.removeEventListener('resize',updateScroll);
      window.removeEventListener('pointermove',onPointer);
    };
  },[disabled]);

  if(disabled) return null;
  return <div className="global-motion" aria-hidden="true"><div className="cursor-aura"/><div className="scroll-progress"/></div>;
}
