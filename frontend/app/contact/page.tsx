"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail,
  Layers,
  MessageSquare,
  LifeBuoy,
  MapPin,
  Phone,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import logo from '../../public/Star Digital Website Images/logo.png';

// Data for the 'Pages' links for the Footer
const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Career', href: '/career' },
  { name: 'Refund', href: '/refund' },
  { name: 'Terms', href: '/terms' },
  { name: 'Details', href: '/details' },
  { name: 'Contact', href: '/contact' },
  { name: 'Business', href: '/business' },
  { name: 'Affiliate', href: '/affiliate' },
];


// Data for the "Contact" section
const contactData = [
  {
    icon: Phone,
    title: "📞 Call Our Team",
    description: "Reach us for immediate support or business inquiries.",
    linkText: "0161-4668602",
    href: "tel:01614668602",
  },
  {
    icon: MessageSquare,
    title: "✉️ Email Us",
    description: "Share your requirements or ask anything.",
    linkText: "info@starpublicity.co.in",
    href: "mailto:info@starpublicity.co.in",
  },
  {
    icon: LifeBuoy, // Using LifeBuoy for WhatsApp support
    title: "📱 WhatsApp Support",
    description: "Instant messaging for quick replies and project discussions.",
    linkText: "+91 7403434074",
    href: "https://wa.me/917403434074",
  },
  {
    icon: MapPin,
    title: "🏢 Visit Our Office",
    description: "Meet us in person at our head office.",
    linkText: "SCO-137, Feroze Gandhi market, Ludhiana, Punjab, 141001",
    href: "https://www.google.com/maps/search/?api=1&query=SCO-137,+Feroze+Gandhi+market,+Ludhiana,+Punjab,+141001",
  },
];

const ContactSection: React.FC = () => {

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    // Reset properties if needed, though CSS handles the transition out
  };

  return (
    <section 
      className={`py-16 md:py-24 bg-slate-50 relative overflow-hidden`}
    >
      {/* Decorative Background Shape */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#3590ba]/20 to-purple-500/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Ensure content is above pattern */}
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="relative inline-block">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md mb-6">
              <Layers className="w-6 h-6 text-[#3590ba]" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let’s Connect With <span className="text-[#3590ba]">Star Publicity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to answer your questions and help your brand grow.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          {contactData.map((contact, index) => (
            <div
              key={index} 
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="group relative bg-white rounded-xl shadow-sm border border-slate-200 p-6
                         flex flex-col items-start text-left overflow-hidden
                         transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2
                         animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Interactive Aurora Background */}
              <div 
                className="
                  absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(53, 144, 186, 0.15), transparent 40%)`
                }}
              />
              <div className="relative z-10 flex flex-col h-full"> {/* Content wrapper */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#3590ba]/20 mb-4 transition-transform duration-300 group-hover:scale-110">
                <contact.icon className="w-5 h-5 text-[#3590ba] " />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{contact.description}</p>
              <Link
                href={contact.href} 
                className="font-medium text-[#3590ba] hover:text-[#2a739a] mt-auto inline-flex items-center group/link"
              >
                {contact.linkText}
                <ArrowUp className="w-4 h-4 ml-1 transition-transform duration-300 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`bg-[#3590ba] text-slate-800 pt-16 pb-6 relative overflow-hidden`}>
      
      {/* --- BACKGROUND SPHERES (TWEAK THESE FOR EXACT POSITIONING) --- */}
      {/* You can adjust the 'w-h', 'opacity', and position ('-bottom-20', 'top-10', etc.) */}
      <div className="absolute w-60 h-60 rounded-full bg-white/20 -bottom-20 -left-20 z-0"></div>
      <div className="absolute w-40 h-40 rounded-full bg-white/30 top-10 right-40 z-0"></div>
      <div className="absolute w-80 h-80 rounded-full bg-white/20 -bottom-40 -right-40 z-0"></div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Using a 12-column grid for precise proportions:
          - OmniVus: 5 columns (lg:col-span-5)
          - Pages: 3 columns (lg:col-span-3)
          - Working Hours: 4 columns (lg:col-span-4)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/30">
 
          {/* Column 1: OmniVus. Description (Wider) */}
          <div className="lg:col-span-4 lg:col-start-2">
            <Image 
              src={logo}
              alt="Star Publicity Logo"
              width={180}
              height={42}
              className="mb-6"
            />
            <p className="text-slate-700 text-sm leading-relaxed">
              Star Publicity is a full-service digital agency dedicated to helping ambitious brands scale their online presence. We blend creative excellence with data-driven strategies to deliver results that matter.
            </p>
          </div>

          {/* Column 2: Pages Links */}
          <div className="lg:col-span-3">
            <h4 className={`text-xl font-bold mb-6`}>Pages</h4>
            <div className="grid grid-cols-2 gap-4">
              {pageLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm text-slate-700 hover:text-black hover:underline transition-colors duration-200">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="lg:col-span-3">
            <h4 className={`text-xl font-bold mb-6`}>Get in Touch</h4>
            <div className="space-y-4 text-slate-700 text-sm">
              <a href="mailto:info@starpublicity.co.in" className="flex items-center hover:text-black transition-colors">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>info@starpublicity.co.in</span>
              </a>
              <a href="tel:01614668602" className="flex items-center hover:text-black transition-colors">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0 text-slate-800" />
                <span>0161-4668602</span>
              </a>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
                <span>SCO-137, Feroze Gandhi market, Ludhiana, Punjab, 141001</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright and Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-slate-600 text-sm">
          <p>Copyright © {new Date().getFullYear()} Star Publicity. All Rights Reserved.</p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 sm:mt-0 w-10 h-10 bg-white/50 rounded-full flex items-center justify-center 
                       hover:bg-white/80 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-slate-800" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const ContactPage = () => {
  return (
    <>
      <ContactSection />
      <Footer />
    </>
  );
};

export default ContactPage;