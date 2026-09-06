import {NextResponse} from 'next/server';
import {cookies} from 'next/headers';
import crypto from 'crypto';
function safeEqual(a:string,b:string){const aa=Buffer.from(a),bb=Buffer.from(b);return aa.length===bb.length&&crypto.timingSafeEqual(aa,bb)}
export async function POST(req:Request){const data=await req.formData();const pass=String(data.get('password')||'');const expected=process.env.ADMIN_PASSWORD||'';if(!expected||!safeEqual(pass,expected))return NextResponse.redirect(new URL('/admin?error=1',req.url),303);const c=await cookies();const token=crypto.createHash('sha256').update(expected).digest('hex');c.set('fd_admin',token,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',maxAge:60*60*8,path:'/'});return NextResponse.redirect(new URL('/admin/dashboard',req.url),303)}
