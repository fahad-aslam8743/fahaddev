import {NextResponse} from 'next/server';
import {revalidatePath} from 'next/cache';
import {requireAdmin} from '@/lib/admin';
import {supabaseAdmin} from '@/lib/supabase';

const slugPattern=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function storagePath(url?:string|null){if(!url)return null;const marker='/storage/v1/object/public/project-images/';const i=url.indexOf(marker);return i>=0?decodeURIComponent(url.slice(i+marker.length)):null}

export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){
  await requireAdmin();const {id}=await params;const sb=supabaseAdmin();if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});
  const b=await req.json().catch(()=>null);if(!b)return NextResponse.json({error:'Invalid request'},{status:400});
  const slug=String(b.slug||'').trim().toLowerCase().slice(0,80);if(!slugPattern.test(slug))return NextResponse.json({error:'Use a lowercase URL slug such as my-project.'},{status:400});
  const update={slug,title:String(b.title||'').trim().slice(0,120),short:String(b.short||'').trim().slice(0,420),client_type:String(b.clientType||'').trim().slice(0,100),timeline:String(b.timeline||'').trim().slice(0,100),stack:Array.isArray(b.stack)?b.stack.map((x:any)=>String(x).trim()).filter(Boolean).slice(0,12):[],concept:!!b.concept,problem:String(b.problem||'').trim().slice(0,1800),approach:String(b.approach||'').trim().slice(0,1800),build:String(b.build||'').trim().slice(0,1800),result:String(b.result||'').trim().slice(0,1800),live_url:String(b.liveUrl||'').trim().slice(0,500)||null,image_url:String(b.imageUrl||'').trim().slice(0,1000)||null,sort_order:Math.max(1,Math.min(999,Number(b.sortOrder)||99)),published:b.published!==false,updated_at:new Date().toISOString()};
  if(update.title.length<2||update.short.length<20)return NextResponse.json({error:'Title and summary are required.'},{status:400});
  const {data:before}=await sb.from('projects').select('slug,image_url').eq('id',id).maybeSingle();
  const {error}=await sb.from('projects').update(update).eq('id',id);if(error)return NextResponse.json({error:error.code==='23505'?'That project slug already exists.':'Could not update project.'},{status:400});
  if(before?.image_url&&before.image_url!==update.image_url){const path=storagePath(before.image_url);if(path)await sb.storage.from('project-images').remove([path]);}
  revalidatePath('/');revalidatePath('/work');revalidatePath(`/work/${slug}`);if(before?.slug&&before.slug!==slug)revalidatePath(`/work/${before.slug}`);revalidatePath('/sitemap.xml');
  return NextResponse.json({ok:true});
}

export async function DELETE(_:Request,{params}:{params:Promise<{id:string}>}){
  await requireAdmin();const {id}=await params;const sb=supabaseAdmin();if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});
  const {data:before}=await sb.from('projects').select('slug,image_url').eq('id',id).maybeSingle();
  const {error}=await sb.from('projects').delete().eq('id',id);if(error)return NextResponse.json({error:'Could not delete project.'},{status:500});
  const path=storagePath(before?.image_url);if(path)await sb.storage.from('project-images').remove([path]);
  revalidatePath('/');revalidatePath('/work');if(before?.slug)revalidatePath(`/work/${before.slug}`);revalidatePath('/sitemap.xml');
  return NextResponse.json({ok:true});
}
