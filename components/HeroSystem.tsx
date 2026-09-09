import type { CSSProperties } from 'react';

type Kind='home'|'work'|'services'|'process'|'about'|'contact'|'privacy';

type HeroStyle = CSSProperties & {
  '--hero-image'?: string;
  '--hero-image-mobile'?: string;
};

function serviceKey(context?:string){
  const value=(context||'').toLowerCase();
  if(value.includes('commerce')) return 'ecommerce';
  if(value.includes('dashboard')||value.includes('tool')) return 'dashboard';
  if(value.includes('full')||value.includes('app')) return 'webapp';
  if(value.includes('improve')||value.includes('existing')||value.includes('focused')) return 'improvements';
  return 'services';
}

function sceneKey(kind:Kind, context?:string){
  if(kind==='services' && context) return serviceKey(context);
  return kind;
}

export function HeroSystem({kind='home',context,imageUrl}:{kind?:Kind;context?:string;imageUrl?:string|null}){
  const key=sceneKey(kind,context);
  const desktop=imageUrl || `/hero-scenes/${key}.webp`;
  const mobile=imageUrl || `/hero-scenes/${key}-mobile.webp`;
  const style:HeroStyle={
    '--hero-image':`url("${desktop}")`,
    '--hero-image-mobile':`url("${mobile}")`,
  };
  return <div className={`engine-hero-background photo-hero-background photo-${key}`} style={style} aria-hidden="true"><div className="photo-hero-vignette"/></div>;
}
