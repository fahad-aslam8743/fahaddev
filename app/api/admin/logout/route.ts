import {NextResponse} from 'next/server'; import {cookies} from 'next/headers';
export async function POST(req:Request){const c=await cookies();c.delete('fd_admin');return NextResponse.redirect(new URL('/admin',req.url),303)}
