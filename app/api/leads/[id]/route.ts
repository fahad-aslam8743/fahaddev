import {NextResponse} from 'next/server';
import {requireAdmin} from '@/lib/admin';
import {supabaseAdmin} from '@/lib/supabase';
const allowed=new Set(['new','contacted','qualified','won','closed']);
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){await requireAdmin();const {id}=await params;const sb=supabaseAdmin();if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});const b=await req.json();const status=String(b.status||'new');if(!allowed.has(status))return NextResponse.json({error:'Invalid status'},{status:400});const {error}=await sb.from('leads').update({status}).eq('id',id);if(error)return NextResponse.json({error:error.message},{status:500});return NextResponse.json({ok:true})}
export async function DELETE(_:Request,{params}:{params:Promise<{id:string}>}){await requireAdmin();const {id}=await params;const sb=supabaseAdmin();if(!sb)return NextResponse.json({error:'Supabase not configured'},{status:503});const {error}=await sb.from('leads').delete().eq('id',id);if(error)return NextResponse.json({error:error.message},{status:500});return NextResponse.json({ok:true})}
