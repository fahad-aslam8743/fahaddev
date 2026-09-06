import {cookies} from 'next/headers'; import crypto from 'crypto'; import {redirect} from 'next/navigation';
export async function requireAdmin(){const expected=process.env.ADMIN_PASSWORD||'';const c=await cookies();const token=c.get('fd_admin')?.value;const valid=expected&&token===crypto.createHash('sha256').update(expected).digest('hex');if(!valid)redirect('/admin')}
