"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  ArrowRight, 
  Send, 
  Menu, 
  X, 
  Phone,
  MapPin, 
  Instagram, 
  Linkedin,
  Twitter
} from 'lucide-react';
import logo from '../../public/Star Digital Website Images/logo.png';

// Navigation Links
const navLinks = [
  { name: 'Our Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'How We Work', href: '#awards' },
  { name: 'Contact Us', href: '#contact' },
];
const HeroSectionWithNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Callback to handle seamless video looping
  const onVideoTimeUpdate = useCallback(() => {
    if (videoRef.current && videoRef.current.currentTime > videoRef.current.duration - 0.5) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <section className={`relative min-h-[750px] md:min-h-screen overflow-hidden flex flex-col`}>
      {/* Styles for Animations & Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}} />

      {/* --- RIGHT SIDE COMPOSITION (VIDEO) --- */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-[55%] xl:w-[50%] z-0">
        <div className="relative w-full h-full">
          {/* Gradient overlay to blend video into the background */}
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            onTimeUpdate={onVideoTimeUpdate}
            className="w-full h-full object-contain z-0">
            <source src="/Star Digital Website Images/herosection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* --- Navbar --- */}
      <nav className="relative z-50 w-full py-6 md:py-8">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10">
            <Image 
              src={logo} 
              alt="Star Publicity Logo" 
              width={150} 
              height={35} 
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-700 font-medium hover:text-[#256482] transition-colors duration-200 uppercase text-base tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="relative group">
              <button className="group relative inline-flex items-center justify-center px-7 py-3 rounded-md text-sm tracking-wider font-extrabold text-white overflow-hidden bg-gray-800 shadow-lg shadow-[#3590ba]/40 transition-all duration-300 ease-out transform hover:scale-[1.05] hover:bg-gray-700">
                <span className="absolute top-0 left-0 w-full h-[3px] bg-[#3590ba] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20"></span>
                <span className="absolute bottom-0 right-0 w-full h-[3px] bg-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-100 z-20"></span>
                <span className="relative flex items-center z-10">
                  <Mail className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  Get a Free Quote
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-800 focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <div className="p-2 bg-white rounded-full shadow-md"><X size={24} /></div> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

        <div className={`fixed top-0 right-0 w-[85%] sm:w-[400px] h-full bg-white shadow-2xl z-40 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-1.5 w-full bg-gradient-to-r from-[#256482] to-cyan-400"></div>
            <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                <div className="mb-10 mt-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans" style={{ fontFamily: "'Outfit', sans-serif" }}>Menu</p>
                      <h2 className="text-3xl font-bold text-slate-800 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Navigate</h2>
                </div>
                <div className="space-y-6">
                    {navLinks.map((link, index) => (
                    <Link key={index} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`group flex items-center justify-between text-2xl font-medium text-slate-700 hover:text-[#256482] transition-all duration-300 border-b border-gray-100 pb-4 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: "'Playfair Display', serif", transitionDelay: `${index * 100}ms` }}>
                        <span>{link.name}</span>
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#256482]" />
                    </Link>
                    ))}
                </div>
                <div className="mt-auto pt-10">
                    <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3590ba] rounded-full blur-[50px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get in Touch</h3> 
                        <div className="space-y-3 text-sm text-slate-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            <div className="flex items-center gap-3"><Mail size={16} className="text-[#3590ba]" /><a href="mailto:sales@starpublicity.org" className="hover:text-white">sales@starpublicity.org</a></div>
                            <div className="flex items-center gap-3"><Phone size={16} className="text-[#3590ba]" /><span>0161-4668602</span></div>
                            <div className="flex items-center gap-3"><MapPin size={16} className="text-[#3590ba]" /><span>Ludhiana, Punjab</span></div>
                        </div>
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

      {/* --- Hero Content --- */}
      <div className="relative z-20 flex-grow flex items-center">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20">
          <div className="w-full lg:w-1/2 max-w-xl lg:ml-[10%]">
            <h1 className="text-5xl md:text-6xl font-bold text-[#256482] leading-tight mb-6">
              Drive Growth Through Innovative Digital Strategies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We help ambitious brands scale their digital presence and dominate their markets.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="#contact" className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-md text-white font-semibold tracking-wider overflow-hidden bg-[#2a7394] shadow-lg shadow-[#2a7394]/40 transition-all duration-300 ease-out transform hover:scale-[1.05] hover:bg-[#225d7a]">
                <span className="absolute top-0 left-0 w-full h-[3px] bg-cyan-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20"></span>
                <span className="absolute bottom-0 right-0 w-full h-[3px] bg-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-100 z-20"></span>
                <span className="relative flex items-center z-10">Start Your Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionWithNavbar;