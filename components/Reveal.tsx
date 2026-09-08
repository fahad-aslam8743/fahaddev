'use client';
import { useEffect, useRef, useState } from 'react';
export function Reveal({children,className=''}:{children:React.ReactNode,className?:string}){
 const ref=useRef<HTMLDivElement>(null); const [seen,setSeen]=useState(false);
 useEffect(()=>{if(!ref.current)return; const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setSeen(true);o.disconnect()}},{threshold:0,rootMargin:'0px 0px 55% 0px'});o.observe(ref.current);return()=>o.disconnect()},[]);
 return <div ref={ref} className={`reveal ${seen?'is-visible':''} ${className}`}>{children}</div>
}
