'use client';
import { CSSProperties, useEffect, useRef, useState } from 'react';

export function Reveal({children,className='',delay=0}:{children:React.ReactNode,className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null); const [seen,setSeen]=useState(false);
 useEffect(()=>{if(!ref.current)return; const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setSeen(true);o.disconnect()}},{threshold:.07,rootMargin:'0px 0px -5% 0px'});o.observe(ref.current);return()=>o.disconnect()},[]);
 const style={'--reveal-delay':`${delay}ms`} as CSSProperties;
 return <div ref={ref} style={style} className={`reveal ${seen?'is-visible':''} ${className}`}>{children}</div>
}
