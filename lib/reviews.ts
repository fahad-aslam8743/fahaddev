import { supabaseAdmin } from './supabase';
export type Review={id:string;name:string;role?:string|null;company?:string|null;rating:number;message:string;created_at?:string};
export const fallbackReviews:Review[]=[
 {id:'seed-1',name:'Client feedback',role:'Project stakeholder',company:'Youth Senate of Pakistan',rating:5,message:'Clear communication, practical problem solving, and a strong focus on getting the system live and usable.'},
];
export async function getReviews(){const sb=supabaseAdmin();if(!sb)return fallbackReviews;const {data,error}=await sb.from('reviews').select('id,name,role,company,rating,message,created_at').order('created_at',{ascending:false}).limit(12);if(error||!data?.length)return fallbackReviews;return data as Review[]}
