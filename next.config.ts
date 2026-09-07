import type { NextConfig } from 'next';

const baseHeaders=[
  {key:'X-Content-Type-Options',value:'nosniff'},
  {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
  {key:'X-Frame-Options',value:'SAMEORIGIN'},
  {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},
];

const productionHeaders=[
  {key:'Strict-Transport-Security',value:'max-age=31536000'},
  {key:'Content-Security-Policy',value:"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://cdn.simpleicons.org https://*.supabase.co; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests"},
];

const nextConfig:NextConfig={
  reactStrictMode:true,
  poweredByHeader:false,
  compress:true,
  images:{formats:['image/avif','image/webp'],remotePatterns:[{protocol:'https',hostname:'**.supabase.co',pathname:'/storage/v1/object/public/**'}]},
  async headers(){
    return [{source:'/:path*',headers:[...baseHeaders,...(process.env.NODE_ENV==='production'?productionHeaders:[])]}];
  },
};

export default nextConfig;
