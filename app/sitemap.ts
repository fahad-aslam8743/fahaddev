import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { SITE_URL } from '@/lib/seo';
export default function sitemap():MetadataRoute.Sitemap{
  const base=[
    {path:'/',priority:1,changeFrequency:'weekly' as const},
    {path:'/services',priority:.9,changeFrequency:'monthly' as const},
    {path:'/work',priority:.9,changeFrequency:'monthly' as const},
    {path:'/process',priority:.75,changeFrequency:'monthly' as const},
    {path:'/about',priority:.7,changeFrequency:'monthly' as const},
    {path:'/contact',priority:.8,changeFrequency:'monthly' as const},
  ];
  const lastModified=new Date();
  return [
    ...base.map(x=>({url:new URL(x.path,SITE_URL).toString(),lastModified,changeFrequency:x.changeFrequency,priority:x.priority})),
    ...projects.map(p=>({url:new URL(`/work/${p.slug}`,SITE_URL).toString(),lastModified,changeFrequency:'monthly' as const,priority:.7})),
  ];
}
