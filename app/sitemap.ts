import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { services } from '@/lib/services';
import { SITE_URL } from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{
  const base=[
    {path:'/',priority:1,changeFrequency:'weekly' as const},
    {path:'/services',priority:.95,changeFrequency:'monthly' as const},
    {path:'/work',priority:.9,changeFrequency:'monthly' as const},
    {path:'/process',priority:.75,changeFrequency:'monthly' as const},
    {path:'/about',priority:.7,changeFrequency:'monthly' as const},
    {path:'/contact',priority:.8,changeFrequency:'monthly' as const},
    {path:'/privacy',priority:.25,changeFrequency:'yearly' as const},
  ];
  return [
    ...base.map(x=>({url:new URL(x.path,SITE_URL).toString(),changeFrequency:x.changeFrequency,priority:x.priority})),
    ...services.map(s=>({url:new URL(`/services/${s.slug}`,SITE_URL).toString(),changeFrequency:'monthly' as const,priority:.82})),
    ...projects.map(p=>({url:new URL(`/work/${p.slug}`,SITE_URL).toString(),changeFrequency:'monthly' as const,priority:.72})),
  ];
}
