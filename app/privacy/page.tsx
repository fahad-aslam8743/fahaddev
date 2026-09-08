import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({
  title:'Privacy & Project Enquiries',
  description:'How FahadDev handles the contact details and project information you choose to send through the website.',
  path:'/privacy',
  image:'/opengraph-image.png',
});

export default function Privacy(){return <><PageHero kind="privacy" eyebrow="Privacy & data handling" title="Your project details stay tied to the conversation you started." body="FahadDev asks for the information needed to understand an enquiry, respond to it, and moderate reviews — not to quietly subscribe visitors to unrelated marketing."/><Reveal><section className="legal-page shell"><span className="eyebrow">The practical details</span><p className="legal-lead">This site only asks for the information needed to understand and respond to a project enquiry or review.</p><div className="legal-grid"><section><h2>Project enquiries</h2><p>If you send the project brief, the name, email, phone/WhatsApp number, company or project name, website link and message you provide are stored so FahadDev can review and respond to your enquiry.</p></section><section><h2>Reviews</h2><p>If you submit a public review, the name, role, company, rating and review text you choose to provide are held for moderation first and may appear publicly only after approval.</p></section><section><h2>How information is used</h2><p>Enquiry details are used to reply, understand scope and manage the project conversation. Submitting the project brief does not subscribe you to a mailing list; the form is designed for the enquiry you chose to send.</p></section><section><h2>Removal or correction</h2><p>If you want information you submitted corrected or removed, contact FahadDev using the direct contact details on the contact page.</p></section></div><div className="legal-cta"><p>Have a privacy question about something you submitted?</p><Link className="btn btn-secondary" href="/contact">Contact FahadDev</Link></div></section></Reveal></>}
