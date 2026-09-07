import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabase';

export async function GET(){
  const sb=supabaseAdmin();
  if(!sb)return NextResponse.json([]);
  const {data,error}=await sb.from('reviews').select('id,name,role,company,rating,message,created_at').eq('status','approved').order('approved_at',{ascending:false,nullsFirst:false}).order('created_at',{ascending:false}).limit(50);
  if(error)return NextResponse.json({error:'Could not load reviews right now.'},{status:500});
  return NextResponse.json(data,{headers:{'Cache-Control':'no-store'}});
}

export async function POST(req:Request){
  const sb=supabaseAdmin();
  if(!sb)return NextResponse.json({error:'Reviews database is not configured yet.'},{status:503});
  const body=await req.json().catch(()=>null);
  if(!body)return NextResponse.json({error:'Invalid request.'},{status:400});
  if(body.website)return NextResponse.json({ok:true});
  const name=String(body.name||'').trim().slice(0,80);
  const message=String(body.message||'').trim().slice(0,800);
  const role=String(body.role||'').trim().slice(0,100);
  const company=String(body.company||'').trim().slice(0,100);
  const rating=Math.max(1,Math.min(5,Number(body.rating)||5));
  if(name.length<2||message.length<12)return NextResponse.json({error:'Please add your name and a little more detail.'},{status:400});
  const {data,error}=await sb.from('reviews').insert({name,message,role:role||null,company:company||null,rating,status:'pending',approved_at:null}).select('id').single();
  if(error)return NextResponse.json({error:'Could not submit the review right now.'},{status:500});
  return NextResponse.json({id:data.id,ok:true,status:'pending'},{status:201});
}
