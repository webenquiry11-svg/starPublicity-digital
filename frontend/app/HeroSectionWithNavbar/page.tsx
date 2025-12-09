"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  ArrowRight, 
  Send, 
  Menu, 
  X, ChevronRight,
  Phone,
  MapPin, 
  Instagram, 
  Linkedin,
  Twitter,
  // New icons for the background effect
  Code, Smartphone, Database, Cloud, Cpu, Globe, Layers, Wifi, Monitor,
  Server, GitBranch, Rocket // Added more icons for the background
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
  const [isHoverFormVisible, setIsHoverFormVisible] = useState(false);
  
  // State for the hover form
  const [hoverFormData, setHoverFormData] = useState({ name: '', email: '', phone: '' });
  const [hoverFormStatus, setHoverFormStatus] = useState({ message: '', error: false, submitting: false });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Callback to handle seamless video looping (Kept for compatibility, though video is removed in this design)
  const onVideoTimeUpdate = useCallback(() => {
    if (videoRef.current && videoRef.current.currentTime > videoRef.current.duration - 0.5) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleHoverFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHoverFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- UPDATED FORM SUBMISSION LOGIC ---
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
          message: "Quick Quote Request from Top Navbar" 
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
      }

      setHoverFormStatus({ message: 'Request sent successfully!', error: false, submitting: false });
      setHoverFormData({ name: '', email: '', phone: '' }); 
      
      setTimeout(() => {
        setIsHoverFormVisible(false);
        setHoverFormStatus({ message: '', error: false, submitting: false });
      }, 2000);

    } catch (error: any) {
      setHoverFormStatus({ message: 'Failed to send. Please try again.', error: true, submitting: false });
    }
  };

  return (
    // UPDATED: Changed background to white
    <section className={`relative min-h-[750px] md:min-h-screen overflow-hidden flex flex-col bg-white`}>
      
      {/* Styles for Animations & Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        /* Floating Animation for Background Icons */
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.2; }
          100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 1s; }
        .delay-200 { animation-delay: 2s; }
        .delay-300 { animation-delay: 3s; }
      `}} />

      {/* --- BACKGROUND DECORATION (New "Pennine" Style) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        
        {/* Floating Tech Icons */}
        {/* Using <img> tags with public URLs to ensure icons are visible. */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon" className="absolute top-[15%] left-[5%] opacity-10 animate-float w-12 h-12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Icon" className="absolute top-[20%] right-[10%] opacity-10 animate-float delay-100 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Icon" className="absolute bottom-[20%] left-[10%] opacity-10 animate-float delay-200 w-14 h-14" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS Icon" className="absolute top-[40%] left-[20%] opacity-5 animate-float delay-300 w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Icon" className="absolute bottom-[30%] right-[20%] opacity-10 animate-float w-12 h-12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Icon" className="absolute top-[10%] left-[40%] opacity-5 animate-float delay-200 w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift Icon" className="absolute top-[60%] right-[5%] opacity-5 animate-float delay-100 w-16 h-16" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin Icon" className="absolute bottom-[10%] left-[40%] opacity-5 animate-float w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud Icon" className="absolute top-[30%] right-[30%] opacity-5 animate-float delay-300 w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes Icon" className="absolute bottom-[15%] right-[45%] opacity-5 animate-float delay-100 w-12 h-12" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Icon" className="absolute top-[55%] left-[15%] opacity-10 animate-float delay-200 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter Icon" className="absolute top-[75%] right-[25%] opacity-5 animate-float w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Icon" className="absolute top-[80%] left-[50%] opacity-5 animate-float delay-100 w-9 h-9" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Icon" className="absolute top-[5%] right-[25%] opacity-10 animate-float delay-300 w-11 h-11" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular Icon" className="absolute bottom-[5%] left-[25%] opacity-5 animate-float w-[52px] h-[52px]" />
        <img src="https://cdn.jsdelivrnet/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js Icon" className="absolute top-[70%] left-[30%] opacity-10 animate-float delay-200 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Icon" className="absolute bottom-[40%] right-[5%] opacity-5 animate-float delay-100 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Icon" className="absolute bottom-[50%] left-[5%] opacity-5 animate-float delay-300 w-10 h-10" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass Icon" className="absolute top-[85%] right-[15%] opacity-10 animate-float w-11 h-11" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL Icon" className="absolute top-[50%] right-[40%] opacity-5 animate-float delay-200 w-12 h-12" />
      </div>

      {/* --- NAVBAR (Kept Exactly Same Structure, just updated text color for visibility) --- */}
      <nav className="relative z-50 w-full py-6 md:py-8">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10">
            <Image 
              src={logo} 
              alt="Star Publicity Logo" 
              width={150} 
              height={35} 
              className="" // Removed filter to show original logo colors
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-slate-800 font-medium hover:text-[#3590ba] transition-colors duration-200 uppercase text-base tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button (YOUR EXACT DESIGN) */}
          <div className="hidden lg:block">
            <div 
              className="relative group"
              onMouseEnter={() => setIsHoverFormVisible(true)}
              onMouseLeave={() => setIsHoverFormVisible(false)}
            >
              <button 
                className="group relative inline-flex items-center justify-center px-7 py-3 rounded-md text-sm tracking-wider font-extrabold text-white overflow-hidden bg-gray-800 shadow-lg shadow-[#3590ba]/40 transition-all duration-300 ease-out transform hover:scale-[1.05] hover:bg-gray-700"
              >
                <span className="absolute top-0 left-0 w-full h-[3px] bg-[#3590ba] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-20"></span>
                <span className="absolute bottom-0 right-0 w-full h-[3px] bg-cyan-400 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-100 z-20"></span>
                <span className="relative flex items-center z-10">
                  <Mail className="w-4 h-4 mr-2" />
                  Get a Free Quote
                </span>
              </button>

              {/* Hover Form (YOUR EXACT DESIGN) */}
              <div className={`absolute top-full right-0 mt-0 w-80 origin-top-right transition-all duration-300 ease-out ${isHoverFormVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-[#2a7394] to-[#225d7a] text-white rounded-xl shadow-2xl p-6 border border-white/20">
                  <h3 className="font-bold text-lg mb-1 text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-white">Quick Quote</h3>
                  <p className="text-gray-300 text-xs mb-4">We'll get back to you shortly.</p>
                  {hoverFormStatus.message ? (
                    <div className={`text-center py-8 ${hoverFormStatus.error ? 'text-red-300' : 'text-green-300'}`}>
                      {hoverFormStatus.message}
                    </div>
                  ) : (
                    <form onSubmit={handleHoverFormSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="hover-name" className="sr-only">Name</label>
                        <input type="text" id="hover-name" name="name" placeholder="Your Name" value={hoverFormData.name} onChange={handleHoverFormChange} required className="w-full text-sm bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-1.5 focus:outline-none focus:border-white transition-colors font-sans" />
                      </div>
                      <div>
                        <label htmlFor="hover-email" className="sr-only">Email</label>
                        <input type="email" id="hover-email" name="email" placeholder="Your Email" value={hoverFormData.email} onChange={handleHoverFormChange} required className="w-full text-sm bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-1.5 focus:outline-none focus:border-white transition-colors font-sans" />
                      </div>
                      <div>
                        <label htmlFor="hover-phone" className="sr-only">Phone Number</label>
                        <input type="tel" id="hover-phone" name="phone" placeholder="Phone Number" value={hoverFormData.phone} onChange={handleHoverFormChange} className="w-full text-sm bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-1.5 focus:outline-none focus:border-white transition-colors font-sans" />
                      </div>
                      <button type="submit" disabled={hoverFormStatus.submitting} className="w-full group inline-flex items-center justify-center py-2 px-4 rounded-md bg-white text-[#2a7394] font-bold text-sm transition-all duration-300 ease-out hover:bg-white/90 hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed">
                        {hoverFormStatus.submitting ? 'SENDING...' : "REQUEST QUOTE"}
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button (Updated color to white) */}
          <div className="lg:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <div className="p-2 bg-white rounded-full shadow-md text-gray-800"><X size={24} /></div> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel (Unchanged Structure) */}
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

      {/* --- UPDATED HERO CONTENT (Matches Pennine Image) --- */}
      <div className="relative z-20 flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20 text-center">
          
          {/* Top Tagline */}
          <p className="text-slate-700 text-sm md:text-base font-bold tracking-wide uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Your Trusted and Experienced End-to-End Partner in
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            <span className="text-[#3590ba]">Web and Mobile App</span> Development
          </h1>

          {/* Sub Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            That Powers <span className="text-[#3590ba]">Digital Transformation</span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            We deliver <span className="font-medium text-[#3590ba]">software solutions</span> powered by the <span className="font-medium text-[#3590ba]">latest technologies</span> to achieve your Business Goals. Your idea, our code - Our <span className="font-medium text-[#3590ba]">Digital revolution.</span>
          </p>

          {/* Center CTA Button (Outline Pill Style) */}
          <div className="flex justify-center animate-in fade-in zoom-in duration-1000 delay-500">
            <Link 
              href="#contact" 
              className="relative inline-flex items-center px-10 py-4 overflow-hidden text-lg font-medium text-slate-800 border-2 border-slate-800 rounded-full hover:text-white group hover:bg-slate-800 transition-all duration-300"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-slate-800 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
              <span className="relative text-slate-800 transition-colors duration-300 group-hover:text-white group-hover:pr-6">
                Talk to our experts
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionWithNavbar;