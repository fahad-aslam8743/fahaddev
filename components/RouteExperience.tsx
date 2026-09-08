'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RouteExperience({children}:{children:React.ReactNode}){
  const pathname=usePathname();

  useEffect(()=>{
    if('scrollRestoration' in history) history.scrollRestoration='manual';
    const frame=requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'auto'}));
    return()=>cancelAnimationFrame(frame);
  },[pathname]);

  return <div key={pathname} className="route-experience">{children}</div>;
}
