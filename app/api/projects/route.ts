import {NextResponse} from 'next/server';
import {revalidatePath} from 'next/cache';
import {requireAdmin} from '@/lib/admin';
import {supabaseAdmin} from '@/lib/supabase';

const slugPattern=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const normalize=(b:any)=>({
  slug:String(b.slug||'').trim().toLowerCase().slice(0,80),
  title:String(b.title||'').trim().slice(0,120),
  short:String(b.short||'').trim().slice(0,420),
  client_type:String(b.clientType||'').trim().slice(0,100),
  timeline:String(b.timeline||'').trim().slice(0,100),
  stack:Array.isArray(b.stack)?b.stack.map((x:any)=>String(x).trim()).filter(Boolean).slice(0,12):[],
  concept:!!b.concept,
  problem:String(b.problem||'').trim().slice(0,1800),
  approach:String(b.approach||'').trim().slice(0,1800),
  build:String(b.build||'').trim().slice(0,1800),
  result:String(b.result||'').trim().slice(0,1800),
  live_url:String(b.liveUrl||'').trim().slice(0,500)||null,
  image_url:String(b.imageUrl||'').trim().slice(0,1000)||null,
  sort_order:Math.max(1,Math.min(999,Number(b.sortOrder)||99)),
  published:b.published!==false,
});

export async function POST(req:Request){
  await requireAdmin();
  const sb=supabaseAdmin();if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});
  const body=await req.json().catch(()=>null);if(!body)return NextResponse.json({error:'Invalid request'},{status:400});
  const row=normalize(body);
  if(!slugPattern.test(row.slug)||row.title.length<2||row.short.length<20)return NextResponse.json({error:'Add a valid slug, title and useful summary.'},{status:400});
  const {data,error}=await sb.from('projects').insert(row).select('id').single();
  if(error)return NextResponse.json({error:error.code==='23505'?'That project slug already exists.':'Could not create project.'},{status:400});
  revalidatePath('/');revalidatePath('/work');revalidatePath(`/work/${row.slug}`);revalidatePath('/sitemap.xml');
  return NextResponse.json({id:data.id,ok:true},{status:201});
}
