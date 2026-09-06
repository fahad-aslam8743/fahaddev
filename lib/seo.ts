import type { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://fahaddev.com';
export const SITE_NAME = 'FahadDev';
export const DEFAULT_DESCRIPTION = 'Custom websites, e-commerce systems, dashboards and full-stack web apps built around clearer customer action, smoother operations and clean ownership.';

export function pageMetadata({
  title,
  description,
  path='/',
  image='/heroes/home.png',
}: {title:string; description:string; path?:string; image?:string}): Metadata {
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
      images: [{url:image, alt:`${title} — ${SITE_NAME}`}],
    },
    twitter: {
      card:'summary_large_image',
      title,
      description,
      images:[image],
    },
  };
}
