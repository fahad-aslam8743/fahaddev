import { supabaseAdmin } from './supabase';

export type ReviewStatus='pending'|'approved';
export type Review={
  id:string;
  name:string;
  role?:string|null;
  company?:string|null;
  rating:number;
  message:string;
  status:ReviewStatus;
  approved_at?:string|null;
  created_at?:string;
};

const fields='id,name,role,company,rating,message,status,approved_at,created_at';

export async function getReviews(){
  const sb=supabaseAdmin();
  if(!sb)return [] as Review[];
  const {data,error}=await sb.from('reviews').select(fields).eq('status','approved').order('approved_at',{ascending:false,nullsFirst:false}).order('created_at',{ascending:false}).limit(12);
  if(!error&&data)return data as Review[];
  return [] as Review[];
}

export async function getAdminReviews(){
  const sb=supabaseAdmin();
  if(!sb)return [] as Review[];
  const {data,error}=await sb.from('reviews').select(fields).order('created_at',{ascending:false}).limit(100);
  if(!error&&data)return data as Review[];
  return [] as Review[];
}
