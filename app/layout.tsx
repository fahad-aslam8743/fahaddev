import type { Metadata } from 'next'; import './globals.css'; import { Nav } from '@/components/Nav'; import { Footer } from '@/components/Footer';
export const metadata:Metadata={title:{default:'Fahad — Full-Stack Developer for E-commerce & Dashboards',template:'%s'},description:'Custom Next.js storefronts, dashboards and web apps for founders who need real engineering, not another template.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/><main>{children}</main><Footer/></body></html>}
