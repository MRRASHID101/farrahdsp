import { 
  Home, 
  Users, 
  Heart, 
  ClipboardList, 
  ShieldCheck, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2,
  Calendar,
  Languages,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- TYPES ---
type Page = 'home' | 'about' | 'services' | 'referral' | 'rights' | 'faq' | 'contact';

// --- CONSTANTS ---
const CONTACT_INFO = {
  phone: '03 7051 2280',
  mobile: '0481 178 257',
  email: 'info@farrahdisabilityservices.com.au',
  address: '15 Bell St, Preston VIC 3072',
  ndis_reg: '4050083020',
  languages: ['English', 'Arabic', 'Somali', 'Turkish', 'Vietnamese']
};

const SEO_CONFIG: Record<Page, { title: string; description: string }> = {
  home: {
    title: 'NDIS Provider Melbourne | Farrah Disability Services Preston',
    description: 'Farrah Disability Services is a registered NDIS provider (#4050083020) in Preston, Melbourne. Culturally responsive disability support across Victoria.'
  },
  about: {
    title: 'About Us | Farrah Disability Services Preston Melbourne',
    description: 'Learn about Farrah Disability Services. Founded on genuine care, we provide licensed NDIS support for diverse communities in Melbourne.'
  },
  services: {
    title: 'NDIS Support Services Preston & Melbourne | Farrah Disability',
    description: 'Explore our NDIS services: Daily Living Support, Community Participation, Support Coordination, and Capacity Building in Melbourne.'
  },
  referral: {
    title: 'NDIS Referral & Intake Hub | Farrah Disability Services',
    description: 'Refer a participant to Farrah Disability Services. Rapid intake process for Support Coordinators and families in Melbourne.'
  },
  rights: {
    title: 'Participant Rights & Safety | NDIS Standards | Farrah Disability',
    description: 'Your rights and safety are our priority. View our commitment to NDIS Quality and Safeguards framework and advocacy information.'
  },
  faq: {
    title: 'NDIS FAQ & Help | Farrah Disability Services Preston',
    description: 'Common questions about NDIS plans, eligibility, and our disability support services in Greater Melbourne answered clearly.'
  },
  contact: {
    title: 'Contact Disability Support Services Preston Melbourne | Farrah',
    description: 'Reach our Preston office. Call 03 7051 2280 or visit us at 15 Bell St, Preston for personalized NDIS support enquiries.'
  }
};

const SERVICES = [
  {
    id: 'daily',
    title: 'Daily Living Support',
    description: 'Personal care, meals, routines and household tasks delivered with dignity.',
    icon: Home,
    tag: 'Core Support'
  },
  {
    id: 'community',
    title: 'Community Participation',
    description: 'Outings, social connections, social activities and community involvement.',
    icon: Users,
    tag: 'Social Access'
  },
  {
    id: 'coordination',
    title: 'Support Coordination',
    description: 'Expert NDIS plan navigation and provider sourcing for complex needs.',
    icon: ClipboardList,
    tag: 'Navigation'
  }
];

// --- COMPONENTS ---

const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'referral', label: 'Referral' },
    { id: 'rights', label: 'Rights' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`glass-nav h-20 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white transition-all group-hover:bg-accent group-hover:rotate-6">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="hidden sm:block">
            <span className="font-serif font-bold text-xl leading-tight block text-primary">Farrah</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-soft">Disability Services</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => setPage(link.id as Page)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activePage === link.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 transform -translate-y-0.5' 
                  : 'text-mid hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={`tel:${CONTACT_INFO.phone}`} className="hidden md:flex items-center gap-2 text-primary font-bold text-sm bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
            <Phone size={14} />
            {CONTACT_INFO.phone}
          </a>
          <button 
            onClick={() => setPage('referral')}
            className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-1"
          >
            Submit Referral
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-navy-dk pt-20 pb-10 text-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <Heart size={24} className="text-white" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl block leading-tight">Farrah Disability</span>
            <span className="text-xs uppercase tracking-widest opacity-50">Melbourne VIC</span>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Registered NDIS provider (#4050083020) delivering compassionate, culturally responsive support across all Melbourne suburbs.
        </p>
        <div className="flex gap-4">
           <a 
            href="https://wa.me/61434014184" 
            target="_blank" 
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
           >
             WhatsApp Chat
           </a>
        </div>
      </div>

      <div>
        <h4 className="text-white font-serif text-lg mb-6">Our Services</h4>
        <ul className="space-y-3 text-white/60 text-sm">
          {['Daily Living Support', 'Community Participation', 'Support Coordination', 'Capacity Building', 'Plan Management'].map(s => (
            <li key={s}><button onClick={() => setPage('services')} className="hover:text-white transition-colors cursor-pointer">{s}</button></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-serif text-lg mb-6">Resources</h4>
        <ul className="space-y-3 text-white/60 text-sm">
          {[
            { label: 'About Us', id: 'about' },
            { label: 'Participant Rights', id: 'rights' },
            { label: 'Referral Form', id: 'referral' },
            { label: 'Frequently Asked Questions', id: 'faq' },
            { label: 'Contact Us', id: 'contact' }
          ].map((link) => (
            <li key={link.id}><button onClick={() => setPage(link.id as Page)} className="hover:text-white transition-colors cursor-pointer">{link.label}</button></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-serif text-lg mb-6 leading-none border-l-4 border-coral pl-4">Reach Us</h4>
        <ul className="space-y-4 text-white/60 text-sm">
          <li className="flex gap-3">
            <MapPin size={18} className="text-coral shrink-0 transition-transform hover:scale-110" />
            <span>{CONTACT_INFO.address}</span>
          </li>
          <li className="flex gap-3">
            <Phone size={18} className="text-coral shrink-0 transition-transform hover:scale-110" />
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white font-semibold transition-colors">Office: {CONTACT_INFO.phone}</a>
          </li>
          <li className="flex gap-3">
            <Mail size={18} className="text-coral shrink-0 transition-transform hover:scale-110" />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white break-all transition-colors">{CONTACT_INFO.email}</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[11px] uppercase tracking-wider font-bold">
      <div>&copy; {new Date().getFullYear()} Farrah Disability Services. ABN 33 625 629 410</div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5">
          <CheckCircle2 size={10} className="text-green" />
          Registered NDIS Provider
        </span>
      </div>
    </div>
  </footer>
);

// --- PAGE COMPONENTS ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-cream">
      {/* Redesigned Hero: New Growth Inspired */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="stripe-bg absolute inset-0 opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-10 animate-in slide-in-from-left-8 duration-1000">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur px-5 py-2 rounded-full border border-primary/10 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">Registered NDIS Provider &middot; Melbourne</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-[7.5rem] font-bold leading-[0.85] tracking-tight text-primary font-serif">
                Care that is<br />
                <span className="text-accent italic">Truly Personal.</span>
              </h1>
              
              <p className="text-xl text-mid max-w-xl font-medium leading-relaxed">
                Farrah is a registered NDIS provider founded on the belief that disability support should be as unique as the people we serve.
              </p>
              
              <div className="flex flex-wrap gap-5 pt-4">
                <button 
                  onClick={() => setPage('referral')}
                  className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer text-lg"
                >
                  Start Your Journey <ArrowRight size={20} />
                </button>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="px-10 py-5 bg-white text-primary border-2 border-primary/10 rounded-full font-bold hover:bg-primary/5 transition-all flex items-center gap-3 text-lg"
                >
                  <Phone size={20} /> Our Office
                </a>
              </div>
            </div>

            {/* Overlapping Visuals */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0 animate-in slide-in-from-right-8 duration-1000">
              <div className="relative z-10 mr-12">
                <div className="aspect-[4/5] rounded-[4rem] bg-stone overflow-hidden new-growth-shadow border-[12px] border-white rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000" 
                    alt="Compassionate Support" 
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  />
                </div>
              </div>
              
              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-16 -right-4 w-2/3 z-20">
                <div className="aspect-[1/1] rounded-[3rem] bg-accent/10 overflow-hidden border-[8px] border-white shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-700">
                   <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                    alt="Professional Care" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-accent/5 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Numbers Bar */}
      <div className="bg-primary text-white py-12 relative z-30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-white/10">
          {[
            { label: 'NDIS Registration', val: '4050083020', icon: ShieldCheck },
            { label: 'Service Coverage', val: 'All Melbourne Suburbs', icon: MapPin },
            { label: 'Coordinator Line', val: '03 7051 2280', icon: Phone },
            { label: 'Cultural Care', val: '10+ Languages', icon: Languages }
          ].map((item, idx) => (
            <div key={idx} className="px-6 space-y-2 first:pl-0">
               <div className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</div>
               <div className="flex items-center gap-2 group cursor-default">
                 <item.icon size={18} className="text-accent-light" />
                 <span className="text-lg font-bold">{item.val}</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large Focus Section: Why Us */}
      <section className="py-32 lg:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <div className="aspect-square rounded-[5rem] bg-cream overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                    alt="Support" 
                   />
                </div>
                <div className="absolute top-12 -right-12 w-48 h-48 bg-accent rounded-full flex items-center justify-center p-8 text-white text-center font-serif font-bold text-lg leading-tight shadow-2xl animate-bounce duration-3000">
                   Same Day Intake Starts
                </div>
             </div>

             <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-accent font-bold text-xs uppercase tracking-[0.25em]">Our Approach</span>
                  <h2 className="text-5xl lg:text-7xl font-bold font-serif text-primary leading-[1] tracking-tighter">
                    Built for <span className="text-accent italic">Community.</span> Delivered for You.
                  </h2>
                  <p className="text-xl text-mid leading-relaxed font-medium">
                    Farrah Disability is set apart by our commitment to cultural responsiveness. We understand that your identity is part of your care.
                  </p>
                </div>

                <div className="space-y-8">
                   {[
                     { t: 'Cultural Resonance', d: 'Multilingual support matching participants with workers who share their heritage.' },
                     { t: 'Transparent Care', d: 'High-quality progress notes and clear communication for all coordinators.' },
                     { t: 'Radical Consistency', d: 'Same workers, same times. Stability is the foundation of progress.' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                          <CheckCircle2 size={24} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xl font-bold text-primary">{item.t}</h4>
                          <p className="text-mid text-sm font-medium">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Core Values */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">The Values That Guide Us</span>
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-primary">Foundations of <span className="text-accent italic">Trust.</span></h2>
            <p className="text-lg text-mid font-medium leading-relaxed">
              At Farrah, we believe that disability support should be rooted in deep respect and unwavering integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Dignity First",
                desc: "We treat every participant with the same respect we would give our own family.",
                icon: ShieldCheck,
                color: "bg-navy-lt"
              },
              {
                title: "Cultural Pride",
                desc: "Celebrating diversity and providing support that honours your language and heritage.",
                icon: Languages,
                color: "bg-coral-lt"
              },
              {
                title: "Empowerment",
                desc: "We don't just provide care; we build the capacity for independent, self-directed lives.",
                icon: Users,
                color: "bg-teal-lt"
              },
              {
                title: "Reliability",
                desc: "When we say we'll be there, we are. Consistency is our hallmark.",
                icon: Clock,
                color: "bg-gold-lt"
              }
            ].map((value, idx) => (
              <div key={idx} className={`${value.color} p-10 rounded-[2.5rem] border border-white space-y-6 hover:-translate-y-2 transition-transform duration-500 shadow-sm shadow-black/5`}>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                  <value.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">{value.title}</h3>
                <p className="text-mid text-sm font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-end mb-24">
            <div className="lg:w-2/3 space-y-6">
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] inline-block py-2 border-b-2 border-accent">The Full Support Stack</span>
              <h2 className="text-5xl lg:text-8xl font-bold leading-[0.9] text-primary font-serif italic">
                How We Help.
              </h2>
            </div>
            <div className="lg:w-1/3">
              <p className="text-mid leading-relaxed font-semibold">
                Expert disability support across Melbourne, tailored to your plan, your culture, and your life goals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-bg border border-border rounded-[3rem] p-12 transition-all duration-700 hover:shadow-2xl hover:shadow-navy/10 group cursor-pointer" onClick={() => setPage('services')}>
                <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-primary mb-8 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-primary">{service.title}</h3>
                <p className="text-mid leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-teal uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                  Navigate <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Simplified Intake Journey */}
      <section className="py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">The Pathway to Support</span>
                <h2 className="text-5xl lg:text-7xl font-serif font-bold text-primary">Your Journey <span className="text-accent italic">Starts Here.</span></h2>
                <p className="text-xl text-mid font-medium">
                  We've simplified our intake process so you can focus on what matters: living your best life.
                </p>
              </div>

              <div className="space-y-8">
                 {[
                   { step: "01", title: "Initial Enquiry", desc: "Reach out via our portal or phone. We'll listen and understand your goals." },
                   { step: "02", title: "Custom Matching", desc: "We find the perfect support worker who aligns with your personality and culture." },
                   { step: "03", title: "Meet & Greet", desc: "A brief introduction to ensure you feel comfortable with your new support team." },
                   { step: "04", title: "Service Begins", desc: "Support starts as scheduled, with regular check-ins to ensure excellence." }
                 ].map((item, idx) => (
                   <div key={idx} className="relative pl-16 group">
                     <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border-4 border-primary/5 flex items-center justify-center font-serif font-bold text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                       {item.step}
                     </div>
                     <div className="space-y-2">
                       <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                       <p className="text-mid text-sm font-medium leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl border-[20px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1000" 
                  alt="Support Specialist" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-white p-10 rounded-[3rem] shadow-2xl border border-primary/5 max-w-xs space-y-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-bg overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-primary">Over 400+ Care Successes This Year</p>
                <div className="flex gap-1 text-accent">
                  {[1,2,3,4,5].map(i => <ShieldCheck key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Specialised Support Domains */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            <div className="space-y-6">
              <span className="text-xs font-bold text-teal uppercase tracking-[0.3em]">Our Expertise</span>
              <h2 className="text-5xl lg:text-7xl font-serif font-bold text-primary">Specialised Care for <span className="text-accent italic">Complex Needs.</span></h2>
            </div>
            <div>
              <p className="text-lg text-mid font-medium leading-relaxed">
                We aren't a one-size-fits-all provider. We have developed deep expertise across specific care domains to ensure your support is clinically informed and deeply empathetic.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Psychosocial Disability", d: "Tailored coaching and support for mental health recovery and community re-engagement.", icon: Heart },
              { t: "Intellectual Disability", d: "Cognitive support focused on skill acquisition, safety, and fostering independence.", icon: ClipboardList },
              { t: "Physical Disability", d: "Expert mobility assistance, personal care, and high-intensity clinical support.", icon: ShieldCheck },
              { t: "Neurodiversity", d: "Sensory-friendly support for Autism and ADHD, focusing on strength-based outcomes.", icon: Users },
              { t: "Early Intervention", d: "Capacity building for children and youth, setting foundations for a bright future.", icon: CheckCircle2 },
              { t: "Aged Care Integration", d: "Seamless transition and support coordination for participants entering older life.", icon: Home }
            ].map((item, idx) => (
              <div key={idx} className="p-10 border border-border rounded-[2.5rem] hover:bg-bg transition-colors group">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-primary">{item.t}</h4>
                <p className="text-mid text-sm font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Cultural Connection Deep Dive */}
      <section className="py-32 bg-stone relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl skew-y-2">
              <img 
                src="https://images.unsplash.com/photo-1543269664-56d93c1bdf7f?auto=format&fit=crop&q=80&w=1000" 
                alt="Community Connection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Language & Heritage</span>
                <h2 className="text-5xl lg:text-8xl font-serif font-bold text-primary italic leading-[0.9]">Support that<br />Speaks Your Mind.</h2>
                <p className="text-xl text-mid font-medium max-w-xl">
                  Communication shouldn't be a barrier to care. Our team is representative of the diverse Melbourne communities we serve.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { l: "Arabic & Somali", d: "Deeply embedded in the Northern suburbs communities." },
                  { l: "Turkish & Greek", d: "Supporting the rich heritage of Melbourne's migrant history." },
                  { l: "Vietnamese & Chinese", d: "Specialized workers for Eastern and Western growth corridors." },
                  { l: "Universal Care", d: "Standard of excellence across all languages and backgrounds." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2 border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-bold text-primary">{item.l}</h4>
                    <p className="text-sm text-mid font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Community Reach Map & Partnership */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary-light rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 translate-x-1/4" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 text-left">
                <div className="space-y-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Industry Network</span>
                  <h2 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight">Partnering for<br /><span className="text-accent italic">Collective Impact.</span></h2>
                  <p className="text-lg text-mid font-medium leading-relaxed">
                    We work closely with Social Workers, Hospital Discharge Teams, and Support Coordinators to ensure seamless transitions and high-quality intervention.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { t: "Rapid Responses", d: "Quotes & Service Agreements issued within 24hrs." },
                    { t: "Crisis Competent", d: "Equipped to handle escalating psychosocial needs." },
                    { t: "Integrated Care", d: "Multidisciplinary collaboration at every step." },
                    { t: "Ethical Standards", d: "Zero tolerance for neglect or provider over-billing." }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                       <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm border border-navy/5">
                         <Star size={16} />
                       </div>
                       <h4 className="font-bold text-primary">{item.t}</h4>
                       <p className="text-xs text-mid font-medium">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-navy/5 space-y-8">
                  <h3 className="text-3xl font-serif font-bold text-primary">Refer a Participant</h3>
                  <p className="text-mid font-medium">Are you a professional looking for a reliable, culturally responsive provider for your client?</p>
                  <div className="space-y-4">
                    <button 
                      onClick={() => setPage('referral')}
                      className="w-full py-5 bg-accent text-white rounded-full font-bold shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      Access Professionals Portal
                    </button>
                    <p className="text-center text-xs text-soft font-bold uppercase tracking-widest">or call our direct line: {CONTACT_INFO.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Featured Intake Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
               <h2 className="text-6xl lg:text-8xl font-bold font-serif leading-[0.9] tracking-tighter italic text-secondary">
                 Immediate<br />Starts.
               </h2>
               <p className="text-2xl text-white/70 font-medium leading-relaxed max-w-lg">
                 We've engineered our intake process to be the fastest in Melbourne. Same-week support starts are our standard, not the exception.
               </p>
               <button 
                onClick={() => setPage('referral')}
                className="bg-white text-primary px-12 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-all text-xl cursor-pointer"
               >
                 Submit a Referral Request
               </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
               <div className="space-y-6">
                  <div className="aspect-square bg-white/5 rounded-[3rem] p-8 flex flex-col justify-end border border-white/10 hover:bg-white/10 transition-colors">
                     <Clock className="mb-4 text-secondary-lt" size={40} />
                     <h4 className="text-xl font-bold">2hr Response</h4>
                     <p className="text-xs text-white/50 uppercase tracking-widest mt-2">Guaranteed Acknowledgement</p>
                  </div>
                  <div className="aspect-square bg-white/5 rounded-[3rem] p-8 flex flex-col justify-end border border-white/10 hover:bg-white/10 transition-colors">
                     <ShieldCheck className="mb-4 text-secondary-lt" size={40} />
                     <h4 className="text-xl font-bold">NDIS Verify</h4>
                     <p className="text-xs text-white/50 uppercase tracking-widest mt-2">Compliance Actioned First</p>
                  </div>
               </div>
               <div className="space-y-6 mt-12">
                  <div className="aspect-square bg-white/5 rounded-[3rem] p-8 flex flex-col justify-end border border-white/10 hover:bg-white/10 transition-colors">
                     <Users className="mb-4 text-secondary-lt" size={40} />
                     <h4 className="text-xl font-bold">Match Worker</h4>
                     <p className="text-xs text-white/50 uppercase tracking-widest mt-2">Multilingual Matching</p>
                  </div>
                  <div className="aspect-square bg-teal rounded-[3rem] p-8 flex flex-col justify-center text-center shadow-2xl shadow-teal/40">
                     <div className="text-5xl font-serif font-bold text-white mb-2 italic">72hr</div>
                     <p className="text-xs font-extrabold uppercase tracking-widest">Average Start Time</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Participant Voices</span>
            <h2 className="text-4xl font-bold font-serif">A Commitment to <span className="italic text-primary">Every</span> Individual.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Farrah matched my son with a worker who speaks his language and shares his background. The difference has been extraordinary.", name: "Amal A.", role: "Parent & Carer" },
              { text: "As a Support Coordinator, I have referred multiple clients to Farrah. They are responsive, professional, and follow through every time.", name: "Sarah K.", role: "Support Coordinator" },
              { text: "From a diverse background, I finally feel truly seen and understood. The care is respectful and genuinely centered around my goals.", name: "Fatima R.", role: "NDIS Participant" }
            ].map((t, idx) => (
              <div key={idx} className="bg-bg p-8 rounded-3xl border border-border flex flex-col justify-between italic text-left">
                <p className="text-mid leading-relaxed text-lg mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold leading-none not-italic">
                    {t.name[0]}
                  </div>
                  <div className="not-italic">
                    <div className="font-bold text-sm text-ink leading-none">{t.name}</div>
                    <div className="text-[10px] uppercase font-bold text-soft tracking-wider mt-1">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Service Areas */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Where We Work</span>
              <h2 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-tight">Serving <span className="text-accent italic">All</span> of Melbourne.</h2>
              <p className="text-lg text-mid font-medium">
                Our team is mobile. We deliver high-quality NDIS support directly to participants' homes and community hubs across Greater Melbourne.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Northern Suburbs', 'Western Suburbs', 'Eastern Suburbs', 'South-East Melbourne', 'Preston & Surrounds', 'Melbourne CBD Area'].map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-border shadow-sm">
                    <MapPin size={16} className="text-accent" />
                    <span className="font-bold text-sm text-primary">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square bg-white rounded-[4rem] shadow-2xl p-4 overflow-hidden border border-border">
              {/* Map Placeholder Graphic */}
              <div className="w-full h-full bg-bg rounded-[3.5rem] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 stripe-bg rotate-12 scale-150" />
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping" />
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full" />
                <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent rounded-full opacity-50" />
                <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent rounded-full opacity-50" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow-xl border border-white max-w-[200px] text-center space-y-2">
                    <MapPin className="mx-auto text-primary" size={24} />
                    <div className="font-serif font-bold text-primary">Head Office</div>
                    <div className="text-[10px] font-bold text-soft uppercase tracking-widest">Preston, VIC 3072</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Partner with Farrah (For Coordinators) */}
      <section className="py-32 bg-primary-light/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-1/2 opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">For Professionals</span>
                <h2 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-tight">Partner with a <span className="text-accent italic">Reliable</span> Team.</h2>
                <p className="text-xl text-mid font-medium">
                  We work side-by-side with Support Coordinators to deliver the outcomes your participants deserve.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { t: "Fast Documentation", d: "Service agreements & logs sent within 48hrs." },
                    { t: "Multilingual Staff", d: "Culturally matched workers for complex caseloads." },
                    { t: "Direct Access", d: "One point of contact for your whole referral list." },
                    { t: "Audit Ready", d: "Full compliance with NDIS Quality & Safeguards." }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                       <h4 className="font-bold text-primary flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                         {item.t}
                       </h4>
                       <p className="text-sm text-mid">{item.d}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                   <button onClick={() => setPage('contact')} className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all cursor-pointer">
                      Professional Enquiry
                   </button>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-[2.5rem] bg-stone overflow-hidden shadow-xl mt-12">
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Collaborative Team" />
                </div>
                <div className="aspect-[3/4] rounded-[2.5rem] bg-stone overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Planning Session" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark pt-24 pb-20 relative overflow-hidden">
        <div className="stripe-bg absolute inset-0 opacity-5" />
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-serif">Reach Out in Your Language.</h2>
          <p className="text-white/80 text-lg">
            We ensure every participant feels heard and understood. Multilingual support available for Arabic, Somali, Turkish and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-2xl shadow-black/10 hover:scale-105 transition-all cursor-pointer"
            >
              Call the Coordinator
            </a>
            <button 
              onClick={() => setPage('contact')}
              className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all cursor-pointer"
            >
              General Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUBPAGE COMPONENTS ---

const Header = ({ title, subtitle, badge }: { title: string, subtitle: string, badge?: string }) => (
  <div className="bg-cream py-32 lg:py-56 border-b border-primary/5 stripe-bg overflow-hidden relative">
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    
    <div className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
      {badge && (
        <span className="inline-block bg-primary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] animate-in slide-in-from-bottom-2 duration-500 shadow-xl shadow-primary/20">
          {badge}
        </span>
      )}
      <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-primary leading-[0.85] font-serif tracking-tighter animate-in slide-in-from-bottom-4 duration-700 italic">
        {title}
      </h1>
      <p className="text-xl lg:text-3xl text-mid max-w-3xl mx-auto leading-tight font-medium animate-in fade-in duration-1000 delay-200">
        {subtitle}
      </p>
    </div>
  </div>
);

const AboutPage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="animate-in fade-in duration-500">
    <Header 
      badge="Our Story" 
      title="Disability Support Built on Genuine Care." 
      subtitle="Founded on one conviction: every person deserves support that is warm, consistent, and deeply respectful of who they are." 
    />
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-primary font-serif">Built from Experience, Driven by Purpose.</h2>
          <div className="prose prose-navy prose-lg max-w-none text-mid leading-relaxed space-y-6">
             <p className="font-serif italic text-2xl text-ink border-l-4 border-primary pl-8 py-2">
               "I started Farrah because I witnessed firsthand how profoundly a culturally attuned, genuinely caring support worker can transform a person's life."
             </p>
             <p>
               Farrah Disability Services was established with one mission: to deliver person-centred disability support that honours each participant's background, dignity, and aspirations.
             </p>
             <p>
               Having observed the persistent gap between what NDIS participants needed and what was being delivered, our founder built Farrah around the values that make support truly effective &mdash; consistency, compassion, and genuine cultural understanding.
             </p>
             <p>
               Today, we are proudly registered under the NDIS Quality and Safeguards Commission and hold ourselves to the framework's highest standards in every interaction.
             </p>
          </div>
          <div className="pt-8">
            <button onClick={() => setPage('contact')} className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all cursor-pointer">
              Talk to Our Coordinator
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sticky top-32">
           <div className="mt-12">
             <div className="aspect-[3/4] bg-bg rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Support meeting" />
             </div>
           </div>
           <div>
             <div className="aspect-[3/4] bg-bg rounded-3xl overflow-hidden shadow-xl mb-4">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Care connection" />
             </div>
             <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20">
                <div className="text-4xl font-serif font-bold mb-2">5★</div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Average Participant Rating Across Melbourne</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="animate-in fade-in duration-500">
    <Header 
      badge="Our Services" 
      title="NDIS Disability Support Services." 
      subtitle="Comprehensive coverage for all core registration groups across Victoria, delivered by multilingual professionals." 
    />
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {[
          {
            num: '01',
            title: 'Daily Living & Personal Care',
            desc: 'We assist with everyday tasks that help you live safely and comfortably at home.',
            features: ['Personal hygiene & showering', 'Meal preparation & dietary support', 'Morning & evening routines', 'Mobility & transfers', 'Light household cleaning'],
            tag: 'Core Support',
            img: 'https://images.unsplash.com/photo-1581056344415-0adb39ca914b?auto=format&fit=crop&q=80&w=800'
          },
          {
            num: '02',
            title: 'Community Participation',
            desc: 'Social connection is fundamental. We support you to engage in community life on your terms.',
            features: ['Social outings & recreation', 'Medical & therapeutic appointments', 'Faith & cultural participation', 'Transport assistance', 'Vocational & hobby support'],
            tag: 'Social Access',
            img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800',
            rev: true
          },
          {
            num: '03',
            title: 'Support Coordination',
            desc: 'Decoding your NDIS plan and connecting you with the right providers for your specific goals.',
            features: ['Plan interpretation & goal alignment', 'Provider sourcing & vetting', 'Crisis intervention coordination', 'Plan review preparation', 'Agency & LAC liaison'],
            tag: 'NDIS Navigation',
            img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800'
          }
        ].map((s, i) => (
          <div key={i} className={`flex flex-col ${s.rev ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-6xl font-serif font-bold text-navy-lt leading-none">{s.num}</span>
                <div className="h-0.5 w-12 bg-accent/20" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{s.tag}</span>
              </div>
              <h2 className="text-4xl font-bold text-ink leading-tight">{s.title}</h2>
              <p className="text-mid text-lg leading-relaxed">{s.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm font-semibold text-mid">
                    <div className="w-5 h-5 bg-green-lt rounded-full flex items-center justify-center text-green">
                      <CheckCircle2 size={12} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button 
                  onClick={() => setPage('referral')}
                  className="bg-primary text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary/10 hover:bg-primary-dark transition-all cursor-pointer"
                >
                  Refer for {s.title}
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-[2.5rem] bg-bg overflow-hidden shadow-2xl">
                 <img src={s.img} className="w-full h-full object-cover" alt={s.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ReferralPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="animate-in fade-in duration-500">
      <Header 
        badge="Participant Entry" 
        title="Referral & Intake Hub." 
        subtitle="Designed for Support Coordinators, Social Workers, and Families to initiate services rapidly." 
      />
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {!submitted ? (
              <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-xl border border-border">
                <div className="space-y-4 mb-10">
                  <h2 className="text-3xl font-bold font-serif">Submit an Intake Request</h2>
                  <p className="text-mid font-medium">Fields with (*) are required. We typically action referrals within 24 business hours.</p>
                </div>
                
                <form 
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-8 text-left"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-soft">Referrer First Name*</label>
                      <input required className="w-full px-5 py-4 bg-bg border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-soft">Referrer Last Name*</label>
                      <input required className="w-full px-5 py-4 bg-bg border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-soft">Contact Email*</label>
                      <input type="email" required className="w-full px-5 py-4 bg-bg border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-soft">Contact Phone*</label>
                      <input required className="w-full px-5 py-4 bg-bg border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink" />
                    </div>
                  </div>

                  <hr className="border-border" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-soft">Participant Name*</label>
                      <input required className="w-full px-5 py-4 bg-bg border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-soft">Participant Suburb*</label>
                      <input required className="w-full px-5 py-4 bg-bg border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-soft block mb-3">Primary Plan Type*</label>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {['NDIA Managed', 'Plan Managed', 'Self Managed'].map(type => (
                        <label key={type} className="relative cursor-pointer group">
                          <input type="radio" name="plan_type" className="peer sr-only" required />
                          <div className="px-4 py-4 rounded-2xl bg-bg text-center border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all group-hover:bg-sand">
                             <div className="text-sm font-bold">{type}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-soft">Notes & Urgent Requirements</label>
                    <textarea className="w-full px-5 py-4 bg-bg border border-border rounded-2xl min-h-[120px] focus:ring-2 focus:ring-primary/20 transition-all outline-none text-ink" />
                  </div>

                  <div className="flex items-start gap-3 pt-4">
                    <input type="checkbox" className="mt-1.5 rounded" required />
                    <p className="text-xs text-soft leading-relaxed font-medium">
                      I confirm this referral is submitted with the participant's knowledge and consent, and understand information will be handled per the Privacy Act 1988.
                    </p>
                  </div>

                  <button className="w-full py-5 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all text-lg cursor-pointer">
                    Send Rapid Intake Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white p-20 rounded-[3rem] shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold font-serif">Referral Received.</h2>
                <p className="text-mid max-w-sm mx-auto">Thank you for choosing Farrah. Our intake supervisor has been notified and will respond within 1 business day.</p>
                <button onClick={() => setSubmitted(false)} className="bg-bg text-soft px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sand transition-all cursor-pointer">Submit another referral</button>
              </div>
            )}
          </div>
          
          <div className="space-y-8 text-left">
            <div className="bg-primary p-8 rounded-[2rem] text-white space-y-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold">Urgent Intake?</h3>
              <p className="text-white/70 text-sm leading-relaxed">For same-day or emergency referrals requiring immediate intervention, call our designated intake line directly.</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all border border-white/10 group">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Call Coordinator Line</div>
                  <div className="font-bold text-lg">{CONTACT_INFO.phone}</div>
                </div>
              </a>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-border shadow-lg space-y-6 text-ink">
               <h4 className="flex items-center gap-2 font-bold text-ink border-b border-border pb-4">
                 <Clock size={18} className="text-primary" />
                 Intake Workflow
               </h4>
               <div className="space-y-6">
                 {[
                   { t: 'Acknowledgement', d: 'Receipt confirmed within 2 hours.' },
                   { t: 'Plan Review', d: 'NDIS funding verified within 24hrs.' },
                   { t: 'Worker Matching', d: 'Multilingual matching process begins.' }
                 ].map((s, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="text-primary font-serif font-bold text-xl opacity-20">0{i+1}</div>
                     <div>
                       <div className="text-sm font-bold mb-1">{s.t}</div>
                       <div className="text-xs text-slate-500 leading-relaxed font-semibold">{s.d}</div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RightsPage = () => (
  <div className="animate-in fade-in duration-500">
    <Header 
      badge="Safety & Compliance" 
      title="Participant Rights & Safety." 
      subtitle="Farrah operates with zero tolerance for neglect. We are fully committed to the NDIS Quality and Safeguards framework." 
    />
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { t: 'Your Right to Choice', d: 'You have total control over who supports you, when they visit, and how your goals are approached.' },
            { t: 'Safety & Protection', d: 'Strict worker screening and incident management protocols regulated by the NDIS commission.' },
            { t: 'Advocacy Access', d: 'The right to an independent advocate at any stage of your journey with Farrah.' }
          ].map((r, i) => (
            <div key={i} className="space-y-4 p-8 bg-bg rounded-3xl border border-border text-left">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                 <ShieldCheck size={28} />
               </div>
               <h3 className="text-2xl font-bold font-serif">{r.t}</h3>
               <p className="text-mid leading-relaxed text-sm font-medium">{r.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-left">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-serif leading-tight">Continuous Improvement<br /><span className="text-secondary italic">Through Your Voice.</span></h2>
              <p className="text-white/70 text-lg">
                We view feedback as an opportunity to grow. All participants have the right to provide feedback or lodge a complaint without fear of consequence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-[2rem] border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Mail size={24} />
                 </div>
                 <div>
                    <div className="font-bold">Lodge Feedback</div>
                    <div className="text-sm opacity-60">Response within 24 business hours</div>
                 </div>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                You can also contact the NDIS Quality and Safeguards Commission directly at 1800 035 544 if you feel your concern hasn't been addressed.
              </p>
              <button 
                onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}
                className="w-full py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-all cursor-pointer"
              >
                Email Our Quality Lead
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const FaqPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const faqs = [
    { q: "Is Farrah a registered NDIS provider?", a: "Yes, we are a fully registered NDIS provider (Registration #4050083020) serving all Melbourne suburbs." },
    { q: "What languages does your team speak?", a: "Our team is multilingual, speaking English, Arabic, Somali, Turkish, Vietnamese, and more." },
    { q: "How quickly can support start?", a: "We aim for same-week intake after plan verification is complete." },
    { q: "Do you provide support coordination?", a: "Yes, we have specialist Support Coordinators experienced in complex plan navigation." }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <Header 
        badge="Resource Library" 
        title="Frequently Asked Questions." 
        subtitle="Common queries about NDIS navigation and our service delivery model in Victoria." 
      />
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-8 bg-white border border-border rounded-3xl hover:border-primary transition-colors cursor-default text-left">
              <h3 className="text-xl font-bold mb-4 font-serif">{f.q}</h3>
              <p className="text-mid leading-relaxed font-semibold">{f.a}</p>
            </div>
          ))}
          <div className="pt-12 text-center space-y-6">
             <p className="text-mid">Didn't find what you were looking for?</p>
             <button onClick={() => setPage('contact')} className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer">
               Message Our Support Team
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => (
  <div className="animate-in fade-in duration-500">
    <Header 
      badge="Reach Out" 
      title="Contact Our Preston Office." 
      subtitle="Open Monday to Friday, 9am to 5pm. Centralized support for all Melbourne regions." 
    />
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="space-y-12 text-left">
           <h2 className="text-4xl font-bold font-serif">Come Say Hello.</h2>
           <div className="space-y-8">
             <div className="flex gap-6 items-start">
               <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                 <MapPin size={28} />
               </div>
               <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-soft mb-1">Office Address</div>
                  <div className="text-xl font-bold text-ink">{CONTACT_INFO.address}</div>
                  <div className="text-sm font-semibold text-mid mt-1">Preston VIC 3072</div>
               </div>
             </div>
             <div className="flex gap-6 items-start">
               <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                 <Phone size={28} />
               </div>
               <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-soft mb-1">Direct Lines</div>
                  <div className="text-xl font-bold text-ink">{CONTACT_INFO.phone}</div>
                  <div className="text-sm font-semibold text-mid mt-1">Mobile: {CONTACT_INFO.mobile}</div>
               </div>
             </div>
             <div className="flex gap-6 items-start">
               <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                 <Mail size={28} />
               </div>
               <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-soft mb-1">Email Enquiries</div>
                  <div className="text-xl font-bold text-ink break-all">{CONTACT_INFO.email}</div>
               </div>
             </div>
           </div>
        </div>
        <div className="bg-bg rounded-[3rem] p-10 lg:p-14 border border-border">
           <form className="space-y-6 text-left">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-soft">Full Name</label>
                <input className="w-full px-6 py-4 bg-white border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-soft">Email Address</label>
                <input type="email" className="w-full px-6 py-4 bg-white border border-border rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-soft">Your Message</label>
                <textarea className="w-full px-6 py-4 bg-white border border-border rounded-2xl min-h-[150px] focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all cursor-pointer">
                Send Message
              </button>
           </form>
        </div>
      </div>
    </section>
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // SEO & Scroll Management
  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update Meta Title
    document.title = SEO_CONFIG[activePage].title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', SEO_CONFIG[activePage].description);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setPage={setActivePage} />;
      case 'about': return <AboutPage setPage={setActivePage} />;
      case 'services': return <ServicesPage setPage={setActivePage} />;
      case 'referral': return <ReferralPage />;
      case 'rights': return <RightsPage />;
      case 'faq': return <FaqPage setPage={setActivePage} />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Schema Markup for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Farrah Disability Services",
          "url": "https://farrahdisabilityservices.com.au",
          "logo": "https://farrahdisabilityservices.com.au/logo.png",
          "image": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
          "description": "Registered NDIS provider offering culturally responsive disability support in Preston and Greater Melbourne.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "15 Bell St",
            "addressLocality": "Preston",
            "addressRegion": "VIC",
            "postalCode": "3072",
            "addressCountry": "AU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -37.7421,
            "longitude": 144.9921
          },
          "telephone": CONTACT_INFO.phone,
          "email": CONTACT_INFO.email,
          "openingHours": "Mo-Fr 09:00-17:00",
          "sameAs": [
            "https://www.facebook.com/FarrahDisabilityServices",
            "https://www.instagram.com/FarrahDisabilityServices"
          ],
          "brand": {
            "@type": "Brand",
            "name": "Farrah Disability Services"
          },
          "taxID": "33 625 629 410"
        })}
      </script>

      {/* Schema FAQ Markup */}
      {activePage === 'faq' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Is Farrah a registered NDIS provider?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are a fully registered NDIS provider (Registration #4050083020) serving all Melbourne suburbs." } },
              { "@type": "Question", "name": "What languages does your team speak?", "acceptedAnswer": { "@type": "Answer", "text": "Our team is multilingual, speaking English, Arabic, Somali, Turkish, Vietnamese, and more." } },
              { "@type": "Question", "name": "How quickly can support start?", "acceptedAnswer": { "@type": "Answer", "text": "We aim for same-week intake after plan verification is complete." } },
              { "@type": "Question", "name": "Do you provide support coordination?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we have specialist Support Coordinators experienced in complex plan navigation." } }
            ]
          })}
        </script>
      )}

      <Navbar activePage={activePage} setPage={setActivePage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <div key={activePage}>
            {renderPage()}
          </div>
        </AnimatePresence>
      </main>
      <Footer setPage={setActivePage} />
      
      {/* Floating Call Button for Mobile */}
      <a 
        href={`tel:${CONTACT_INFO.phone}`}
        className="fixed bottom-6 right-6 lg:hidden w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl z-[60]"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
