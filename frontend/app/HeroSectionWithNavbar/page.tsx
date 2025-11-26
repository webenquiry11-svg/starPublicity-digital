"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Added icons for the new menu
import { 
  Mail, 
  User, 
  Phone, 
  Briefcase, 
  MessageSquare, 
  ArrowRight, 
  Send, 
  Menu, 
  X, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter 
} from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import herobg from '../../public/Star Digital Website Images/herobg.png';
import logo from '../../public/Star Digital Website Images/logo.png';

// Navigation Links
const navLinks = [
  { name: 'Our Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'How We Work', href: '#awards' },
  { name: 'Contact Us', href: '#contact' },
];

const services = [
  "Digital Marketing",
  "Graphic Designing",
  "Web Development",
  "AR/VR Development",
  "Game Development",
  "Other"
];

// Custom Tailwind classes for the NEW Button design (Sliding Border Highlight)
// KEPT EXACTLY AS YOU HAD IT
const HIGHLIGHTED_BUTTON_CLASSES = `
  // Base Container & Styling
  group relative inline-flex items-center justify-center 
  px-7 py-3 rounded-md text-sm tracking-wider font-extrabold text-white
  overflow-hidden
  
  // Appearance
  bg-gray-800 // Dark base for contrast
  shadow-lg shadow-[#3590ba]/40
  
  // Transition effects
  transition-all duration-300 ease-out 
  transform hover:scale-[1.05] hover:bg-gray-700
`;

const HeroSectionWithNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling on body when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <section className={`relative min-h-[750px] md:min-h-screen overflow-hidden flex flex-col`}>
      {/* Loading fonts ONLY for the mobile menu aesthetics */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      `}} />

      <Image
        src={herobg}
        alt="Abstract background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* --- Lottie Animation (KEPT AS IS) --- */}
      <div className="absolute w-[70%] lg:w-[45%] h-auto bottom-24 right-0 max-w-[800px] z-10 hidden lg:block">
        <DotLottieReact
          src="https://lottie.host/f271b9db-0428-4d88-8e82-25d477b70f5c/DjqC6KkSpS.lottie"
          loop
          autoplay
        />
      </div>

      {/* --- Navbar --- */}
      <nav className="relative z-50 w-full py-6 md:py-8">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image 
              src={logo} 
              alt="Star Publicity Logo" 
              width={150} 
              height={35} 
            />
          </Link>

          {/* Navigation Links (Desktop - KEPT AS IS) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-700 font-medium hover:text-[#256482] transition-colors duration-200 uppercase text-base tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button: "Get a Free Quote" (Highlighted - KEPT AS IS) */}
          <div className="hidden lg:block">
            <div className="relative group">
              <button
                className={HIGHLIGHTED_BUTTON_CLASSES}
              >
                {/* Sliding Top Border */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-[#3590ba] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20"></span>
                
                {/* Sliding Bottom Border */}
                <span className="absolute bottom-0 right-0 w-full h-[3px] bg-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-100 z-20"></span>
                
                {/* Button Content */}
                <span className="relative flex items-center z-10">
                  <Mail className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  Get a Free Quote
                </span>
              </button>

              {/* Hover Popup Form (Styling preserved) */}
              <div 
                className={`absolute top-full right-0 mt-3 w-[350px] p-6 bg-white rounded-xl shadow-2xl border border-gray-100 
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 scale-95
                            transition-all duration-300 ease-out z-40 origin-top-right`}
              >
                <h4 className="font-bold text-lg mb-1 text-gray-900">Quick Enquiry</h4>
                <p className="text-sm text-gray-600 mb-4">Let us know what you're looking for.</p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Your Phone Number" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]" />
                  </div>
                  <div>
                    <textarea placeholder="Your Message" rows={3} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 text-sm text-white font-semibold py-2 px-4 rounded-md transition-colors bg-[#2a7394] hover:bg-[#225d7a]"
                  >
                    Send Enquiry <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* --- NEW Mobile Menu Button --- */}
          <div className="lg:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                 <div className="p-2 bg-white rounded-full shadow-md"><X size={24} /></div>
              ) : (
                 <Menu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* --- NEW ATTRACTIVE MOBILE MENU PANEL --- */}
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Side Panel */}
        <div 
          className={`fixed top-0 right-0 w-[85%] sm:w-[400px] h-full bg-white shadow-2xl z-40 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            {/* Decorative Top Gradient */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#256482] to-cyan-400"></div>

            <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                {/* Menu Header */}
                <div className="mb-10 mt-4">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans" style={{ fontFamily: "'Outfit', sans-serif" }}>Menu</p>
                     <h2 className="text-3xl font-bold text-slate-800 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Navigate
                     </h2>
                </div>

                {/* Links */}
                <div className="space-y-6">
                    {navLinks.map((link, index) => (
                    <Link 
                        key={index} 
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-center justify-between text-2xl font-medium text-slate-700 hover:text-[#256482] transition-all duration-300 border-b border-gray-100 pb-4
                        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                        style={{ 
                            fontFamily: "'Playfair Display', serif",
                            transitionDelay: `${index * 100}ms`
                        }}
                    >
                        <span>{link.name}</span>
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#256482]" />
                    </Link>
                    ))}
                </div>

                {/* Bottom CTA Card */}
                <div className="mt-auto pt-10">
                    <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden group">
                        {/* Decorative blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3590ba] rounded-full blur-[50px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        
                        <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get in Touch</h3>
                        <div className="space-y-3 text-sm text-slate-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-[#3590ba]" />
                                <a href="mailto:info@starpublicity.co.in" className="hover:text-white">info@starpublicity.co.in</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-[#3590ba]" />
                                <span>0161-4668602</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className="text-[#3590ba]" />
                                <span>Ludhiana, Punjab</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6 pt-6 border-t border-slate-700">
                            <a href="https://www.instagram.com/starpublicityldh/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3590ba] transition-colors"><Instagram size={20} /></a>
                            <a href="https://x.com/starpublicityld" target="_blank" rel="noopener noreferrer" className="hover:text-[#3590ba] transition-colors"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/company/m-s-star-publicity/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3590ba] transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </nav>

      {/* --- Hero Content (KEPT EXACTLY AS YOU HAD IT) --- */}
      <div className="relative z-20 flex-grow flex items-center">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20">
          <div className="w-full lg:w-1/2 max-w-xl lg:ml-[10%]">
            <h1 className="text-5xl md:text-6xl font-bold text-[#256482] leading-tight mb-6">
              Drive Growth Through Innovative Digital Strategies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We help ambitious brands scale their digital presence and dominate their markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="#contact" 
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-md text-white font-semibold tracking-wider overflow-hidden bg-[#2a7394] shadow-lg shadow-[#2a7394]/40 transition-all duration-300 ease-out transform hover:scale-[1.05] hover:bg-[#225d7a]"
              >
                {/* Sliding Top Border */}
                <span className="absolute top-0 left-0 w-full h-[3px] bg-cyan-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20"></span>
                
                {/* Sliding Bottom Border */}
                <span className="absolute bottom-0 right-0 w-full h-[3px] bg-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-100 z-20"></span>
                
                {/* Button Content */}
                <span className="relative flex items-center z-10">
                  Start Your Project
                </span>
              </Link>
            </div>
          </div>
          {/* Right side is intentionally empty for the illustration */}
          <div className="w-full lg:w-1/2">
            {/* The main drone illustration is positioned absolutely */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSectionWithNavbar;