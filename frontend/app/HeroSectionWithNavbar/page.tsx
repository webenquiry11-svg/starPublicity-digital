"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Twitter,
  // NEW ICONS ADDED FOR ANIMATION
  TrendingUp,
  CheckCircle,
  Zap,
  Users
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

const HIGHLIGHTED_BUTTON_CLASSES = `
  group relative inline-flex items-center justify-center 
  px-7 py-3 rounded-md text-sm tracking-wider font-extrabold text-white
  overflow-hidden
  bg-gray-800 
  shadow-lg shadow-[#3590ba]/40
  transition-all duration-300 ease-out 
  transform hover:scale-[1.05] hover:bg-gray-700
`;

const HeroSectionWithNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', error: false, submitting: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus({ message: 'Sending...', error: false, submitting: true });

      try {
          const response = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
          });

          const result = await response.json();
          if (!response.ok) throw new Error(result.message || 'Something went wrong.');

          setStatus({ message: result.message, error: false, submitting: false });
          setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form

      } catch (error: any) {
          setStatus({ message: error.message, error: true, submitting: false });
      }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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

      <Image
        src={herobg}
        alt="Abstract background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* --- IMPROVED RIGHT SIDE COMPOSITION --- */}
      <div className="absolute w-[70%] lg:w-[50%] h-auto bottom-10 right-0 max-w-[900px] z-10 hidden lg:block pointer-events-none">
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          {/* 1. Ambient Glow (Backdrop) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3590ba]/20 rounded-full blur-[80px]"></div>

          {/* 2. Main Lottie Animation */}
          <div className="relative z-10 scale-110">
            <DotLottieReact
              src="https://lottie.host/bb8b224e-280e-4f31-85b1-180ab1f0aa3e/HltEmErHf6.lottie"
              loop
              autoplay
            />
          </div>

          {/* 3. Floating Glass Card: Growth */}
          <div className="absolute top-20 left-20 z-20 animate-float-slow">
            <div className="group relative bg-white/20 backdrop-blur-lg border border-white/30 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 w-48">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg shadow-inner shadow-black/10">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div className="relative">
                <p className="text-xs text-gray-500 font-semibold uppercase">Revenue</p>
                <p className="text-lg font-bold text-gray-800">+127%</p>
              </div>
            </div>
          </div>

          {/* 4. Floating Glass Card: Success */}
          <div className="absolute bottom-32 left-10 z-20 animate-float-medium" style={{ animationDelay: '1s' }}>
             <div className="group relative bg-white/80 backdrop-blur-lg border border-white/50 px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <div className="absolute -inset-px rounded-full bg-gradient-to-br from-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CheckCircle size={18} className="text-[#3590ba] relative" />
                <span className="text-sm font-bold text-slate-700">98% Success Rate</span>
             </div>
          </div>

          {/* 5. Floating Glass Card: Efficiency */}
          <div className="absolute top-40 right-20 z-20 animate-float-fast" style={{ animationDelay: '2s' }}>
            <div className="group relative bg-white/20 backdrop-blur-lg border border-white/30 p-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center gap-1 w-24">
               <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-full mb-1 shadow-inner shadow-black/10">
                 <Zap size={20} className="text-white" />
               </div>
               <span className="relative text-xs font-bold text-slate-600">Fast AI</span>
            </div>
          </div>

          {/* 6. Floating Glass Card: Happy Clients (NEW) */}
          <div className="absolute bottom-24 right-10 z-20 animate-float-slow" style={{ animationDelay: '0.5s' }}>
            <div className="group relative bg-white/20 backdrop-blur-lg border border-white/30 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 w-48">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-fuchsia-600 p-2 rounded-lg shadow-inner shadow-black/10">
                <Users size={24} className="text-white" />
              </div>
              <div className="relative">
                <p className="text-xs text-gray-500 font-semibold uppercase">Happy Clients</p>
                <p className="text-lg font-bold text-gray-800">500+</p>
              </div>
            </div>
          </div>

          {/* 6. Decorative Particles */}
          <div className="absolute top-10 right-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-700"></div>

        </div>
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
              <button className={HIGHLIGHTED_BUTTON_CLASSES}>
                <span className="absolute top-0 left-0 w-full h-[3px] bg-[#3590ba] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20"></span>
                <span className="absolute bottom-0 right-0 w-full h-[3px] bg-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-100 z-20"></span>
                <span className="relative flex items-center z-10">
                  <Mail className="w-4 h-4 mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  Get a Free Quote
                </span>
              </button>

              {/* Hover Popup Form */}
              <div className={`absolute top-full right-0 mt-3 w-[350px] p-6 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 scale-95 transition-all duration-300 ease-out z-40 origin-top-right`}>
                <h4 className="font-bold text-lg mb-1 text-gray-900">Quick Enquiry</h4>
                <p className="text-sm text-gray-600 mb-4">Let us know what you're looking for.</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]" /></div>
                  <div><input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]" /></div>
                  <div><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]" /></div>
                  <div><textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={3} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-offset-1 focus:ring-[#256482]"></textarea></div>
                  <button type="submit" disabled={status.submitting} className="w-full flex items-center justify-center gap-2 text-sm text-white font-semibold py-2 px-4 rounded-md transition-colors bg-[#2a7394] hover:bg-[#225d7a] disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {status.submitting ? 'Sending...' : 'Send Enquiry'} <Send size={16} />
                  </button>
                </form>
                {status.message && (
                  <p className={`text-sm mt-3 text-center ${status.error ? 'text-red-600' : 'text-green-600'}`}>
                    {status.message}
                  </p>
                )}
              </div>
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
          <div className="w-full lg:w-1/2">
             {/* Space reserved for absolute animation above */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSectionWithNavbar;