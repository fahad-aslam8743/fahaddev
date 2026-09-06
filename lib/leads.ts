import { supabaseAdmin } from './supabase';
export type Lead={id:string;name:string;email:string;company?:string|null;website_url?:string|null;project:string;project_size?:string|null;message:string;status:string;source?:string|null;created_at?:string};
export async function getLeads(){const sb=supabaseAdmin();if(!sb)return [] as Lead[];const {data,error}=await sb.from('leads').select('id,name,email,company,website_url,project,project_size,message,status,source,created_at').order('created_at',{ascending:false}).limit(100);if(error||!data)return [] as Lead[];return data as Lead[]}
