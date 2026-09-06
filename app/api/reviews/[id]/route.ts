import {NextResponse} from 'next/server';
import {revalidatePath} from 'next/cache';
import {requireAdmin} from '@/lib/admin';
import {supabaseAdmin} from '@/lib/supabase';

export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){
  await requireAdmin();
  const {id}=await params;
  const sb=supabaseAdmin();
  if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});
  const b=await req.json().catch(()=>null);
  if(!b)return NextResponse.json({error:'Invalid request'},{status:400});
  const update={name:String(b.name||'').slice(0,80),role:String(b.role||'').slice(0,100)||null,company:String(b.company||'').slice(0,100)||null,message:String(b.message||'').slice(0,800),rating:Math.max(1,Math.min(5,Number(b.rating)||5))};
  const {error}=await sb.from('reviews').update(update).eq('id',id);
  if(error)return NextResponse.json({error:'Could not update review'},{status:500});
  revalidatePath('/');
  return NextResponse.json({ok:true});
}
export async function DELETE(_:Request,{params}:{params:Promise<{id:string}>}){
  await requireAdmin();
  const {id}=await params;
  const sb=supabaseAdmin();
  if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});
  const {error}=await sb.from('reviews').delete().eq('id',id);
  if(error)return NextResponse.json({error:'Could not delete review'},{status:500});
  revalidatePath('/');
  return NextResponse.json({ok:true});
}
