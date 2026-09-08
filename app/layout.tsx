import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MobileLeadBar } from '@/components/MobileLeadBar';
import { GlobalMotion } from '@/components/GlobalMotion';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo';

export const viewport:Viewport={themeColor:'#0b1220',colorScheme:'light'};

export const metadata:Metadata={
  metadataBase:new URL(SITE_URL),
  title:{default:'FahadDev — Custom Web Development for Growing Businesses',template:'%s | FahadDev'},
  description:DEFAULT_DESCRIPTION,
  applicationName:SITE_NAME,
  authors:[{name:'Fahad Aslam',url:SITE_URL}],
  creator:'Fahad Aslam',
  publisher:'FahadDev',
  category:'Web Development',
  referrer:'origin-when-cross-origin',
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
  alternates:{canonical:SITE_URL},
  openGraph:{type:'website',locale:'en_US',url:SITE_URL,siteName:SITE_NAME,title:'FahadDev — Custom Web Development for Growing Businesses',description:DEFAULT_DESCRIPTION,images:[{url:'/opengraph-image.png',width:1200,height:630,alt:'FahadDev custom web development'}]},
  twitter:{card:'summary_large_image',title:'FahadDev — Custom Web Development for Growing Businesses',description:DEFAULT_DESCRIPTION,images:['/opengraph-image.png']},
  icons:{icon:[{url:'/favicon.ico',sizes:'any'}],apple:[{url:'/apple-icon.png',sizes:'180x180',type:'image/png'}]},
  manifest:'/manifest.webmanifest',
  verification:{google:process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined},
};

const structuredData={
  '@context':'https://schema.org',
  '@graph':[
    {
      '@type':'WebSite','@id':`${SITE_URL}/#website`,url:SITE_URL,name:SITE_NAME,description:DEFAULT_DESCRIPTION,inLanguage:'en',
    },
    {
      '@type':'Person','@id':`${SITE_URL}/#fahad-aslam`,name:'Fahad Aslam',url:SITE_URL,jobTitle:'Full-Stack Web Developer',sameAs:['https://github.com/fahad-aslam8743'],
    },
    {
      '@type':'ProfessionalService','@id':`${SITE_URL}/#business`,name:SITE_NAME,url:SITE_URL,image:`${SITE_URL}/opengraph-image.png`,description:DEFAULT_DESCRIPTION,telephone:'+92-325-5504461',email:'hello@fahaddev.com',areaServed:'Worldwide',founder:{'@id':`${SITE_URL}/#fahad-aslam`},
      hasOfferCatalog:{'@type':'OfferCatalog',name:'Web development services',itemListElement:[
        {'@type':'Offer','itemOffered':{'@type':'Service','name':'Custom e-commerce development','url':`${SITE_URL}/services/ecommerce-development`}},
        {'@type':'Offer','itemOffered':{'@type':'Service','name':'Dashboard and internal tool development','url':`${SITE_URL}/services/dashboard-development`}},
        {'@type':'Offer','itemOffered':{'@type':'Service','name':'Full-stack web app development','url':`${SITE_URL}/services/full-stack-web-app-development`}},
        {'@type':'Offer','itemOffered':{'@type':'Service','name':'Website and product improvement work','url':`${SITE_URL}/services/website-improvements`}},
      ]},
    },
  ],
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><GlobalMotion/><a className="skip-link" href="#main-content">Skip to content</a><Nav/><main id="main-content">{children}</main><Footer/><MobileLeadBar/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/></body></html>}
