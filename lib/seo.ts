import type { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fahaddev.com';
export const SITE_NAME = 'FahadDev';
export const DEFAULT_DESCRIPTION = 'Conversion-focused websites, e-commerce systems, dashboards and full-stack web apps built around real customer and team outcomes.';

export function pageMetadata({
  title,
  description,
  path='/',
}: {title:string; description:string; path?:string}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [{url:'/opengraph-image.png', width:1200, height:630, alt:`${SITE_NAME} — web product development`}],
    },
    twitter: {
      card:'summary_large_image',
      title,
      description,
      images:['/twitter-image.png'],
    },
  };
}

export function faqJsonLd(items:{q:string;a:string}[]) {
  return {
    '@context':'https://schema.org',
    '@type':'FAQPage',
    mainEntity: items.map((item)=>({
      '@type':'Question',
      name:item.q,
      acceptedAnswer:{'@type':'Answer',text:item.a},
    })),
  };
}
