"use client";

import React from 'react';
import Link from 'next/link';
import { Kanit } from 'next/font/google';
import { 
  Layers,
  MessageSquare,
  LifeBuoy,
  MapPin,
  Phone,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

// Initialize the Roboto font
const kanit = Kanit({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

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
    icon: MessageSquare,
    title: "Chat to sales",
    description: "Speak to our friendly team.",
    linkText: "sales@starpublicity.com",
    href: "mailto:sales@starpublicity.com",
  },
  {
    icon: LifeBuoy,
    title: "Chat to support",
    description: "We're here to help.",
    linkText: "support@starpublicity.com",
    href: "mailto:support@starpublicity.com",
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "Visit our office HQ.",
    linkText: "View on Google Maps",
    href: "#", // Add your Google Maps link here
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    linkText: "+91 12345 67890",
    href: "tel:+911234567890",
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
      className={`py-16 md:py-24 bg-slate-50 relative overflow-hidden ${kanit.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Ensure content is above pattern */}
        {/* Header */}
        <div 
          className="relative text-center max-w-3xl mx-auto py-12 px-6 rounded-2xl overflow-hidden bg-white"
        >
          {/* Background Gradient and Pattern */}
          <div 
            className="absolute inset-0 -z-10"
          >
            {/* Subtle Mesh Gradient Background */}
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>


          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-4">
              <Layers className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-[48px] font-medium text-[rgb(30,55,90)] leading-[58px] mb-6">
              Contact our friendly team
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Let us know how we can help.
            </p>
          </div>
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
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)`
                }}
              />
              <div className="relative z-10 flex flex-col h-full"> {/* Content wrapper */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mb-4 transition-transform duration-300 group-hover:scale-110">
                <contact.icon className="w-5 h-5 text-blue-600 " />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{contact.description}</p>
              <Link
                href={contact.href} 
                className="font-medium text-blue-600 hover:text-blue-700 mt-auto inline-flex items-center group/link"
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
    <footer className={`bg-blue-950 text-white pt-16 pb-6 relative overflow-hidden ${kanit.className}`}>
      
      {/* --- BACKGROUND SPHERES (TWEAK THESE FOR EXACT POSITIONING) --- */}
      {/* You can adjust the 'w-h', 'opacity', and position ('-bottom-20', 'top-10', etc.) */}
      <div className="absolute w-60 h-60 rounded-full bg-blue-600 opacity-20 -bottom-20 -left-20 z-0"></div>
      <div className="absolute w-40 h-40 rounded-full bg-cyan-400 opacity-30 top-10 right-40 z-0"></div>
      <div className="absolute w-80 h-80 rounded-full bg-blue-600 opacity-20 -bottom-40 -right-40 z-0"></div>


      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Using a 12-column grid for precise proportions:
          - OmniVus: 5 columns (lg:col-span-5)
          - Pages: 3 columns (lg:col-span-3)
          - Working Hours: 4 columns (lg:col-span-4)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-blue-800">
 
          {/* Column 1: OmniVus. Description (Wider) */}
          <div className="lg:col-span-4 lg:col-start-2">
            {/* Note: "OmniVus." is text. If it's a logo, replace with <Image /> */}
            <h3 className="text-3xl font-bold mb-6">OmniVus.</h3>
            <p className="text-blue-300 text-sm mb-4 leading-relaxed ">
              The web has changed a lot since Vitaly posted his first article book in 2006. The team at Smashing
              has changed too, as have the things that we bring to our community onferences, books, and our
              membership added to the online magazine.
            </p>
            <p className="text-blue-300 text-sm leading-relaxed">
              One thing that hasn't changed is that we're a small team – with most of us not working
            </p>
          </div>

          {/* Column 2: Pages Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-6">Pages</h4>
            <div className="grid grid-cols-2 gap-4">
              {pageLinks.map((link, index) => (
                <Link key={index} href={link.href} className="flex items-center text-blue-300 hover:text-white transition-colors duration-200 group">
                  <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Working Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-6">Working Hours</h4>
            <p className="text-blue-300 mb-2">Monday - Friday: 7:00 - 17:00</p>
            <p className="text-blue-300 mb-6">Saturday: 7:00 - 12:00</p>
            <p className="text-blue-300 mb-6">Sunday and holidays: 8:00 - 10:00</p>
            
            <p className="text-sm font-medium text-blue-100 mb-4 leading-relaxed">
              For more than 30 years, IT Service has been a reliable
              partner in the field of logistics and cargo forwarding.
            </p>
            <a href="#" className="inline-flex items-center text-white bg-blue-600/50 hover:bg-blue-600/80 transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium">
              Discover More
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>

        </div>

        {/* Copyright and Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-blue-400 text-sm">
          <p>Copyright © {new Date().getFullYear()} WebTend. All Rights Reserved.</p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 sm:mt-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center 
                       hover:bg-blue-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
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