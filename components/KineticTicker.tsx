const defaultItems=['Conversion UX','Next.js builds','Mobile-first UI','Commerce systems','Dashboards','CMS workflows','Payments','Admin tools','Performance','Clean handoff'];

export function KineticTicker({items=defaultItems,compact=false}:{items?:readonly string[];compact?:boolean}){
  const row=[...items,...items];
  return <div className={`kinetic-ticker ${compact?'compact':''}`} aria-label="Capabilities"><div className="kinetic-track">{row.map((item,i)=><span key={`${item}-${i}`}><i/>{item}</span>)}</div></div>;
}
