import Link from 'next/link';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({
  title:'Privacy & Project Enquiries',
  description:'How FahadDev handles the contact details and project information you choose to send through the website.',
  path:'/privacy',
  image:'/opengraph-image.png',
});

export default function Privacy(){return <section className="legal-page shell"><span className="eyebrow">Privacy</span><h1>Project details are for the conversation you started.</h1><p className="legal-lead">This site only asks for the information needed to understand and respond to a project enquiry or review.</p><div className="legal-grid"><section><h2>Project enquiries</h2><p>If you send the project brief, the name, email, phone/WhatsApp number, company or project name, website link and message you provide are stored so FahadDev can review and respond to your enquiry.</p></section><section><h2>Reviews</h2><p>If you submit a public review, the name, role, company, rating and review text you choose to provide are held for moderation first and may appear publicly only after approval.</p></section><section><h2>How information is used</h2><p>Enquiry details are used to reply, understand scope and manage the project conversation. Submitting the project brief does not subscribe you to a mailing list; the form is designed for the enquiry you chose to send.</p></section><section><h2>Removal or correction</h2><p>If you want information you submitted corrected or removed, contact FahadDev using the direct contact details on the contact page.</p></section></div><div className="legal-cta"><p>Have a privacy question about something you submitted?</p><Link className="btn btn-secondary" href="/contact#project-brief">Contact FahadDev</Link></div></section>}
