'use client';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function MobileLeadBar(){
  const [visible,setVisible]=useState(false);
  const pathname=usePathname();
  const excluded=pathname.startsWith('/contact')||pathname.startsWith('/admin')||pathname.startsWith('/privacy');
  useEffect(()=>{
    if(excluded){setVisible(false);return}
    const onScroll=()=>setVisible(window.scrollY>420);
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>window.removeEventListener('scroll',onScroll);
  },[excluded]);
  if(!visible||excluded)return null;
  return <div className="mobile-lead-bar show" aria-label="Quick project contact">
    <Link href="/contact">Start a project</Link>
    <a href="https://wa.me/923255504461" target="_blank" rel="noreferrer"><MessageCircle size={17}/>WhatsApp</a>
  </div>;
}
