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

// --- ICONS for Social Media (Lucide React) ---
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';


// Data for the 'Services' links shown in the footer
const serviceLinks = [
  { name: 'Digital Marketing', href: '/services/digital' },
  { name: 'Website Design', href: '/services/webdesign' },
  { name: 'Branding', href: '/services/branding' },
  { name: 'Social Media', href: '/services/social' },
  { name: 'SEO', href: '/services/seo' },
];

// Data for the 'Follow us on' section (example URLs)
const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

// --- 1. Top CTA Section (Mimics 'LET\'S CHAT') ---
export const ContactSection: React.FC = () => {
  // NOTE: Removed mouse tracking functions as they are not needed for this static design
  
  // Custom Green Color from the image
  const GREEN_ACCENT = '#82CA57'; 

  return (
    <section 
      className={`py-16 md:py-24 bg-gradient-to-br from-[#2a7394] to-[#225d7a] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-white max-w-6xl mx-auto">
          
          {/* Left Side: Headline and Tagline */}
          <div className="lg:col-span-7 text-center lg:text-left mb-8 lg:mb-0">
            <p className="text-xl md:text-2xl font-medium text-gray-300 mb-4">
              Have a project in mind? Let's collaborate — <br className="hidden sm:inline"/>feel free to reach out and say hello!
            </p>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              LET'S CHAT
            </h2>
          </div>
          
          {/* Right Side: Button and Divider */}
          <div className="w-full lg:col-span-5">
            <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-4">
              <div>
                <label htmlFor="cta-name" className="sr-only">Name</label>
                <input type="text" id="cta-name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2a7394] focus:border-[#2a7394] transition-shadow placeholder:text-gray-500" />
              </div>
              <div>
                <label htmlFor="cta-email" className="sr-only">Email</label>
                <input type="email" id="cta-email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2a7394] focus:border-[#2a7394] transition-shadow placeholder:text-gray-500" />
              </div>
              <div>
                <label htmlFor="cta-message" className="sr-only">Message</label>
                <textarea id="cta-message" placeholder="Your Message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-[#2a7394] focus:border-[#2a7394] transition-shadow placeholder:text-gray-500"></textarea>
              </div>
              <button 
                type="submit"
                className={`w-full group inline-flex items-center justify-center py-3 px-6 rounded-full bg-[${GREEN_ACCENT}] text-gray-900 font-bold text-lg border-2 border-transparent transition-all duration-300 ease-out hover:bg-white hover:text-[${GREEN_ACCENT}] hover:border-[${GREEN_ACCENT}] hover:scale-105`}
              >
                LET'S TALK
                <ChevronRight className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- 2. Footer Section (Mimics THINKSTER Footer) ---
export const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Custom Green Color from the image
  const GREEN_ACCENT = '#82CA57';

  // Base background is black for this footer style
  return (
    <footer className={`bg-white text-gray-900 pt-8 pb-4 relative overflow-hidden border-t border-gray-200`}>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Top Row: Logo, Contact Info, Find Us, Follow Us --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-gray-200">

          {/* Column 1 (lg:col-span-4): Logo and Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Image 
              src={logo}
              alt="Star Publicity Logo"
              width={180}
              height={42}
              className="mb-4" // Removed invert and brightness for light theme
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              We make success happen with bold brands, slick digital vibes, and print
              that speaks your language!
            </p>
          </div>

          {/* Column 2 (lg:col-span-2): Chat With Us (Phone/Email) */}
          <div className="lg:col-span-2">
            <h4 className={`text-sm font-semibold mb-4 tracking-wider text-gray-500`}>CHAT WITH US</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-900 font-semibold">0161-4668602</p>
              <a href="mailto:info@starpublicity.co.in" className="text-gray-600 hover:text-gray-900 transition-colors">
                info@starpublicity.co.in
              </a>
            </div>
          </div>

          {/* Column 3 (lg:col-span-3): Find Us (Address) */}
          <div className="lg:col-span-3">
            <h4 className={`text-sm font-semibold mb-4 tracking-wider text-gray-500`}>FIND US</h4>
            <p className="text-gray-600 text-sm">
              SCO-137, Feroze Gandhi market, Ludhiana, Punjab, 141001
            </p>
          </div>

          {/* Column 4 (lg:col-span-3): Follow Us (Socials) */}
          <div className="lg:col-span-3">
            <h4 className={`text-sm font-semibold mb-4 tracking-wider text-gray-500`}>FOLLOW US ON</h4>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center 
                             text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Bottom Row: Service Links & Copyright --- */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center pt-4">
          
          {/* Service Links */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-sm font-medium text-gray-600">
            {serviceLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="hover:text-gray-900 transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright and Scroll to Top (moved to the right side visually) */}
          <div className="flex items-center text-slate-500 text-xs mt-4 lg:mt-0">
            <p>Copyright © {new Date().getFullYear()} Star Publicity.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <Footer />
    </>
  );
}