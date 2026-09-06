import {NextResponse} from 'next/server';
import {supabaseAdmin} from '@/lib/supabase';

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(req:Request){
  const sb=supabaseAdmin();
  if(!sb)return NextResponse.json({error:'The project form is temporarily unavailable. Please use WhatsApp or email.'},{status:503});
  const body=await req.json().catch(()=>null);
  if(!body)return NextResponse.json({error:'Invalid request.'},{status:400});
  if(body.website)return NextResponse.json({ok:true});
  const name=String(body.name||'').trim().slice(0,80);
  const email=String(body.email||'').trim().toLowerCase().slice(0,120);
  const company=String(body.company||'').trim().slice(0,120);
  let websiteUrl=String(body.website_url||'').trim().slice(0,220);
  if(websiteUrl&&!/^https?:\/\//i.test(websiteUrl))websiteUrl='';
  const project=String(body.project||'Not sure yet').trim().slice(0,100);
  const projectSize=String(body.project_size||'').trim().slice(0,100);
  const message=String(body.message||'').trim().slice(0,1800);
  const source=String(body.source||'website').trim().slice(0,80);
  if(name.length<2||!emailPattern.test(email)||message.length<20)return NextResponse.json({error:'Please add your name, a valid email and a little more project detail.'},{status:400});
  const {data,error}=await sb.from('leads').insert({name,email,company:company||null,website_url:websiteUrl||null,project,project_size:projectSize||null,message,status:'new',source}).select().single();
  if(error)return NextResponse.json({error:'Could not save the project brief. Please use WhatsApp or email.'},{status:500});
  return NextResponse.json({id:data.id,ok:true},{status:201});
}
