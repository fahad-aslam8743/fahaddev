import { supabaseAdmin } from './supabase';
export type Review={id:string;name:string;role?:string|null;company?:string|null;rating:number;message:string;created_at?:string};
export async function getReviews(){const sb=supabaseAdmin();if(!sb)return [] as Review[];const {data,error}=await sb.from('reviews').select('id,name,role,company,rating,message,created_at').order('created_at',{ascending:false}).limit(12);if(error||!data)return [] as Review[];return data as Review[]}
