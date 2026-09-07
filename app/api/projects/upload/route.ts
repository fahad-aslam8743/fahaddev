import {NextResponse} from 'next/server';
import crypto from 'crypto';
import {requireAdmin} from '@/lib/admin';
import {supabaseAdmin} from '@/lib/supabase';

const allowed=new Map([['image/jpeg','jpg'],['image/png','png'],['image/webp','webp']]);
function matchesSignature(bytes:Uint8Array,type:string){
  if(type==='image/jpeg')return bytes.length>3&&bytes[0]===0xff&&bytes[1]===0xd8&&bytes[2]===0xff;
  if(type==='image/png')return bytes.length>8&&[0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a].every((v,i)=>bytes[i]===v);
  if(type==='image/webp')return bytes.length>12&&String.fromCharCode(...bytes.slice(0,4))==='RIFF'&&String.fromCharCode(...bytes.slice(8,12))==='WEBP';
  return false;
}
export async function POST(req:Request){
  await requireAdmin();
  const sb=supabaseAdmin();if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});
  const form=await req.formData();const file=form.get('file');
  if(!(file instanceof File))return NextResponse.json({error:'Choose an image first.'},{status:400});
  const ext=allowed.get(file.type);if(!ext)return NextResponse.json({error:'Use JPG, PNG or WebP.'},{status:400});
  if(file.size>4*1024*1024)return NextResponse.json({error:'Image must be under 4 MB.'},{status:400});
  if(file.size<16)return NextResponse.json({error:'That image file is not valid.'},{status:400});
  const bytes=new Uint8Array(await file.arrayBuffer());
  if(!matchesSignature(bytes,file.type))return NextResponse.json({error:'The file contents do not match the selected image type.'},{status:400});
  const path=`projects/${Date.now()}-${crypto.randomBytes(5).toString('hex')}.${ext}`;
  const {error}=await sb.storage.from('project-images').upload(path,bytes,{contentType:file.type,upsert:false,cacheControl:'31536000'});
  if(error)return NextResponse.json({error:'Could not upload image. Make sure the project-images storage bucket exists.'},{status:500});
  const {data}=sb.storage.from('project-images').getPublicUrl(path);
  return NextResponse.json({url:data.publicUrl,path});
}
