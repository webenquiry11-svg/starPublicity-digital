"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  ArrowRight, 
  Menu, 
  X, 
  // Icons for Mobile Menu
  Layers,
  Info,
  Award,
  Phone,
  ChevronRight
} from 'lucide-react';
import logo from '../../public/Star Digital Website Images/logo.png';

// Navigation Links
const navLinks = [
  { name: 'Our Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'How We Work', href: '#awards' },
  { name: 'Contact Us', href: '#contact' },
];

interface HeroProps {
  onQuoteClick?: () => void;
}

const HeroSectionWithNavbar: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Controls the Side Form
  const [isQuotePanelOpen, setIsQuotePanelOpen] = useState(false);
  
  // Form State
  const [hoverFormData, setHoverFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [hoverFormStatus, setHoverFormStatus] = useState({ message: '', error: false, submitting: false });

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleHoverFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHoverFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHoverFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHoverFormStatus({ message: 'Sending...', error: false, submitting: true });

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: hoverFormData.name, 
          email: hoverFormData.email,
          phone: hoverFormData.phone, 
          message: hoverFormData.message 
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
      }

      setHoverFormStatus({ message: 'Request sent successfully!', error: false, submitting: false });
      setHoverFormData({ name: '', email: '', phone: '', message: '' }); 
      
      setTimeout(() => {
        setIsQuotePanelOpen(false);
        setHoverFormStatus({ message: '', error: false, submitting: false });
      }, 2000);

    } catch (error: any) {
      setHoverFormStatus({ message: 'Failed to send. Please try again.', error: true, submitting: false });
    }
  };

  return (
    <section className={`relative min-h-[750px] md:min-h-screen overflow-hidden flex flex-col bg-white`}>
      
      {/* Styles for Animations & Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }

        /* Floating Animation */
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.3; }
          100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.5s; }
        .delay-200 { animation-delay: 1s; }
        .delay-300 { animation-delay: 1.5s; }
        .delay-400 { animation-delay: 2s; }
        .delay-500 { animation-delay: 2.5s; }
      `}} />

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]"></div>

        {/* Floating Icons */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="absolute top-[15%] left-[5%] animate-float w-12 h-12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="absolute bottom-[20%] left-[10%] animate-float delay-200 w-14 h-14" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="absolute top-[80%] left-[50%] animate-float delay-100 w-9 h-9" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="NextJS" className="absolute top-[20%] right-[10%] animate-float delay-300 w-16 h-16 invert" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="absolute top-[45%] left-[3%] animate-float delay-100 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="absolute bottom-[25%] right-[15%] animate-float delay-200 w-14 h-14" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="AR/VR" className="absolute top-[12%] right-[25%] animate-float w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="absolute top-[60%] right-[5%] animate-float delay-300 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="absolute top-[75%] left-[15%] animate-float delay-400 w-12 h-12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="VueJS" className="absolute top-[50%] right-[20%] animate-float delay-500 w-11 h-11" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="absolute bottom-[10%] left-[40%] animate-float w-12 h-12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="absolute top-[10%] left-[30%] animate-float delay-200 w-9 h-9" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" className="absolute bottom-[15%] right-[5%] animate-float delay-400 w-12 h-12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="absolute top-[35%] left-[20%] animate-float delay-500 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="absolute top-[70%] right-[25%] animate-float delay-100 w-16 h-16" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express" className="absolute bottom-[40%] left-[5%] animate-float delay-300 w-20 h-20 invert" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-40 w-full py-6 md:py-8">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20 flex items-center justify-between">
          <Link href="/" className="z-10">
            {/* RESTORED ORIGINAL SIZE */}
            <Image src={logo} alt="Logo" width={150} height={35} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-slate-800 font-medium hover:text-[#3590ba] transition-colors duration-200 uppercase text-base tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => setIsQuotePanelOpen(true)}
              className="group relative inline-flex items-center justify-center px-7 py-3 rounded-md text-sm tracking-wider font-extrabold text-white overflow-hidden bg-gray-800 shadow-lg shadow-[#2a7394]/40 transition-all duration-300 ease-out transform hover:scale-[1.05]"
            >
              <span className="relative flex items-center z-10">
                <Mail className="w-4 h-4 mr-2" />
                Get a Free Quote
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-50">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-800 focus:outline-none">
              {isMobileMenuOpen ? <span className="sr-only">Close Menu</span> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-20 flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Drive Growth Through <span className="text-[#2a7394]">Innovative Digital Strategies</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            We help ambitious brands scale their digital presence and dominate their markets.
          </p>
          <div className="flex justify-center animate-in fade-in zoom-in duration-1000 delay-500">
            <Link href="#contact" className="relative inline-flex items-center px-10 py-4 overflow-hidden text-lg font-medium text-slate-800 border-2 border-slate-800 rounded-full group transition-all duration-300 hover:border-[#2a7394] hover:shadow-[0_0_30px_-5px_rgba(42,115,148,0.4)] hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-[#2a7394] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative flex items-center group-hover:text-white transition-colors duration-300">
                  Start Your Project <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* === SLIDING SIDE FORM (Desktop & Tablet) === */}
      {/* ======================================================== */}
      
      {/* 1. Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isQuotePanelOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsQuotePanelOpen(false)}
      ></div>

      {/* 2. Container */}
      <div className="fixed top-[15%] right-0 z-[70] flex items-start shadow-none">
        
        {/* === WHITE FORM SECTION === */}
        <div 
            className="bg-white shadow-[-5px_0_15px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 ease-in-out rounded-tl-[40px] rounded-bl-[40px]"
            style={{ 
                width: isQuotePanelOpen ? '350px' : '0px', 
                opacity: isQuotePanelOpen ? 1 : 0 
            }}
        >
            <div className="w-[350px] p-8 flex flex-col justify-center min-h-[400px]">
                <div className="mb-8 flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                        Get a Free Quote <br />
                        <span className="border-b-4 border-[#2a7394] pb-1">With Our Experts</span>
                    </h3>
                    <button onClick={() => setIsQuotePanelOpen(false)} className="text-gray-400 hover:text-gray-600">
                        <X size={20} />
                    </button>
                </div>

                {hoverFormStatus.message ? (
                    <div className={`text-center py-8 flex flex-col items-center justify-center ${hoverFormStatus.error ? 'text-red-500' : 'text-green-500'}`}>
                      <p className="text-lg font-semibold">{hoverFormStatus.message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleHoverFormSubmit} className="space-y-6">
                        <input 
                            type="text" name="name" placeholder="Name" value={hoverFormData.name} onChange={handleHoverFormChange} required 
                            className="w-full py-2 border-b border-gray-300 focus:border-[#2a7394] outline-none text-slate-700 placeholder:text-gray-400 text-base bg-transparent" 
                        />
                        <input 
                            type="tel" name="phone" placeholder="Mobile No" value={hoverFormData.phone} onChange={handleHoverFormChange} 
                            className="w-full py-2 border-b border-gray-300 focus:border-[#2a7394] outline-none text-slate-700 placeholder:text-gray-400 text-base bg-transparent" 
                        />
                        <input 
                            type="email" name="email" placeholder="Em@il Id" value={hoverFormData.email} onChange={handleHoverFormChange} required 
                            className="w-full py-2 border-b border-gray-300 focus:border-[#2a7394] outline-none text-slate-700 placeholder:text-gray-400 text-base bg-transparent" 
                        />
                        <textarea 
                            name="message" placeholder="Message" value={hoverFormData.message} onChange={handleHoverFormChange} required 
                            rows={2}
                            className="w-full py-2 border-b border-gray-300 focus:border-[#2a7394] outline-none text-slate-700 placeholder:text-gray-400 text-base bg-transparent resize-none" 
                        />
                        <div className="flex justify-center pt-6">
                            <button 
                                type="submit" 
                                disabled={hoverFormStatus.submitting}
                                className="w-14 h-14 bg-[#2a7394] hover:bg-[#225d7a] rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 disabled:bg-gray-400"
                            >
                                {hoverFormStatus.submitting ? (
                                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                                ) : (
                                    <ArrowRight size={24} />
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* === ATTRACTIVE MOBILE MENU (Refined Design) === */}
      {/* ======================================================== */}
      
      {/* Backdrop with stronger blur for focus */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 w-[90%] sm:w-[400px] h-full bg-white shadow-2xl z-50 transform transition-transform duration-500 cubic-bezier(0.25, 0.8, 0.25, 1) lg:hidden flex flex-col rounded-l-[30px] border-l border-white/50 overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
          {/* Decorative Background Blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2a7394]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Menu Header */}
          <div className="relative flex items-center justify-between p-8 border-b border-dashed border-gray-200">
             {/* Using Logo for branding */}
             <div className="w-32 opacity-90 grayscale-[20%]">
               <Image src={logo} alt="Menu Logo" width={130} height={30} className="object-contain" />
             </div>
             <button 
               onClick={() => setIsMobileMenuOpen(false)} 
               className="p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-[#2a7394] hover:text-white transition-all duration-300 shadow-sm"
             >
               <X size={24} />
             </button>
          </div>

          {/* Menu Links Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-hide">
             <div className="flex flex-col space-y-4">
               {navLinks.map((link, i) => {
                 // Define icons for each link index
                 const icons = [Layers, Info, Award, Phone];
                 const Icon = icons[i] || ArrowRight;
                 
                 return (
                    <div 
                      key={i} 
                      className={`animate-in fade-in slide-in-from-right-12 duration-700 ease-out fill-mode-backwards`} 
                      style={{ animationDelay: `${100 + i * 75}ms` }}
                    >
                      <Link 
                        href={link.href} 
                        className="group relative flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#2a7394]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#2a7394] group-hover:scale-110 transition-all duration-300">
                              <Icon size={20} strokeWidth={2} />
                            </div>
                            <span className="font-bold text-lg text-slate-700 group-hover:text-slate-900">{link.name}</span>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-[#2a7394] transform group-hover:translate-x-1 transition-all" />
                      </Link>
                    </div>
                 )
               })}
             </div>
          </div>

          {/* Menu Footer / CTA */}
          <div className="relative p-6 mt-auto bg-slate-50 border-t border-slate-100">
             {/* Quick Contacts Mini-Section */}
             <div className="flex justify-around mb-6 text-center">
                <a href="mailto:contact@example.com" className="flex flex-col items-center group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#2a7394] group-hover:shadow-md transition-all mb-2">
                    <Mail size={18} />
                  </div>
                  <span className="text-xs font-medium text-slate-500 group-hover:text-[#2a7394]">Email</span>
                </a>
                <a href="tel:+1234567890" className="flex flex-col items-center group">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#2a7394] group-hover:shadow-md transition-all mb-2">
                    <Phone size={18} />
                  </div>
                  <span className="text-xs font-medium text-slate-500 group-hover:text-[#2a7394]">Call</span>
                </a>
             </div>

             <button 
                onClick={() => {
                   setIsMobileMenuOpen(false);
                   setIsQuotePanelOpen(true);
                }}
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-lg shadow-slate-900/20 flex items-center justify-center space-x-2 active:scale-95 transition-all hover:bg-[#2a7394] hover:shadow-[#2a7394]/30 hover:-translate-y-1"
             >
                <span>Get a Free Quote</span>
                <ArrowRight size={20} />
             </button>
          </div>
      </div>

    </section>
  );
};

export default HeroSectionWithNavbar;