import {PageHero} from '@/components/PageHero';
import {CheckCircle2,Mail,Clock3,ArrowRight,MessageCircle} from 'lucide-react';
import {Reveal} from '@/components/Reveal';
import {FAQSection, FAQItem} from '@/components/FAQSection';
import {LeadForm} from '@/components/LeadForm';
import {pageMetadata} from '@/lib/seo';

export const metadata=pageMetadata({title:'Start a Web Project',description:'Send your project goal, current problem or website. Contact FahadDev by project brief, email or WhatsApp to discuss the clearest next step.',path:'/contact',image:'/opengraph-image.png'});
const faqs:FAQItem[]=[
 {q:'What should I send in the first message?',a:'The current URL or idea, what is not working, who the product is for and what result matters most. Screenshots, examples and deadlines help when available.'},
 {q:'Do I need to know the technology I want?',a:'No. The technology should follow the product requirements, existing systems and ownership needs.'},
 {q:'Can I contact you on WhatsApp instead?',a:'Yes. WhatsApp is available for a direct first conversation at +92 325 5504461.'},
 {q:'Can I ask about a small job or existing website?',a:'Yes. Focused responsive fixes, integrations, features, performance work and launch problems can all make sense when the problem is specific.'},
 {q:'Will I get a price immediately?',a:'A useful price depends on scope. First we identify what needs to change and what can stay; then pricing can be tied to actual deliverables.'},
];
export default function Contact(){return <>
<PageHero kind="contact" eyebrow="Start with the problem." title="Show me what needs to work better. I’ll help you find the clearest next step." body="Send the idea, current URL, broken workflow or result you need. You do not need to choose the technology before we talk." primary={{label:'Chat on WhatsApp',href:'https://wa.me/923255504461',external:true}} secondary={{label:'Send Project Details',href:'#project-brief'}}/>
<Reveal><section id="project-brief" className="section shell contact-section concise-contact"><div className="contact-side"><span className="eyebrow">Choose the easiest route</span><h2>Send enough context to understand the job. I’ll keep the next step clear.</h2><div className="contact-channel-grid"><a className="contact-channel whatsapp" href="https://wa.me/923255504461" target="_blank" rel="noreferrer"><MessageCircle/><span><b>WhatsApp</b><small>+92 325 5504461</small></span><ArrowRight/></a><a className="contact-channel" href="mailto:hello@fahaddev.com"><Mail/><span><b>Email</b><small>hello@fahaddev.com</small></span><ArrowRight/></a><div className="contact-channel contact-response"><Clock3/><span><b>Direct reply</b><small>No account-manager handoff</small></span></div></div><div className="contact-points compact-contact-points"><p><CheckCircle2/><span><b>1. I read the context.</b> The first response is about your problem, not a generic package.</span></p><p><CheckCircle2/><span><b>2. We identify the route.</b> Focused fix, staged improvement or complete build.</span></p><p><CheckCircle2/><span><b>3. Scope before commitment.</b> Deliverables and priorities are made clear before work begins.</span></p></div></div><LeadForm/></section></Reveal>
<FAQSection items={faqs} eyebrow="Before you message" title="The useful questions before starting the conversation."/>
</>}
