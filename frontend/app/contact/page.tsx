"use client";

import React, { useState } from 'react';
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
    Link as LinkIcon, // Using a generic link icon as a fallback for Pinterest
} from 'lucide-react';


// Data for the 'Services' links shown in the footer
const serviceLinks = [
    { name: 'Digital Marketing', href: '/services/digital' },
    { name: 'Website Design', href: '/services/webdesign' },
    { name: 'Branding', href: '/services/branding' },
    { name: 'Immersive Technology', href: '/services/social' },
    { name: 'SEO', href: '/services/seo' },
];

// Data for the 'Follow us on' section (example URLs)
const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/starpublicity', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/starpublicityldh/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/starpublicityld', label: 'Twitter' },
    { icon: LinkIcon, href: 'https://in.pinterest.com/starpublicityldh/', label: 'Pinterest' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/m-s-star-publicity/', label: 'LinkedIn' },
];

// --- Custom Colors ---
const COLOR_BLUE_DARK = '#2a7394';
const COLOR_SLATE_LIGHT = '#f8fafc'; // Matches bg-slate-50

// --- 1. Top CTA Section (Mimics 'LET\'S CHAT') ---
export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong.');
            }

            setStatus({ message: result.message, error: false, submitting: false });
            setFormData({ name: '', email: '', message: '' }); // Clear form

        } catch (error: any) {
            setStatus({ message: error.message, error: true, submitting: false });
        }
    };

    return (
        <section 
            // NOTE: Background must be the same color as the wave fill color for a seamless look
            className={`py-12 md:py-16 bg-gradient-to-br from-[#2a7394] to-[#225d7a] relative overflow-hidden`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-white max-w-6xl mx-auto">
                    
                    {/* Left Side: Headline and Tagline */}
                    <div className="lg:col-span-7 text-center lg:text-left mb-8 lg:mb-0">
                        <p className="text-xl md:text-2xl font-medium text-gray-300 mb-4 font-sans">
                            Got an idea? Connect with our team and let’s make something extraordinary together.
                        </p>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight font-grotesk text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-white">
                            LET’S CONNECT
                        </h2>
                    </div>
                    
                    {/* Right Side: Form */}
                    <div 
                        className="w-full lg:col-span-5 bg-white/10 lg:bg-transparent p-8 lg:p-0 rounded-2xl lg:rounded-none border border-white/20 lg:border-none shadow-lg lg:shadow-none backdrop-blur-sm lg:backdrop-blur-none"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="cta-name" className="sr-only">Name</label>
                                <input type="text" id="cta-name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors font-sans" />
                            </div>
                            <div>
                                <label htmlFor="cta-email" className="sr-only">Email</label>
                                <input type="email" id="cta-email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors font-sans" />
                            </div>
                            <div>
                                <label htmlFor="cta-message" className="sr-only">Message</label>
                                <textarea id="cta-message" name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={2} className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors resize-none font-sans"></textarea>
                            </div>
                            <button type="submit" disabled={status.submitting} className={`w-full group inline-flex items-center justify-center py-3 px-6 rounded-full bg-white text-[#2a7394] font-bold text-lg transition-all duration-300 ease-out hover:bg-white/90 hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed`}>
                                {status.submitting ? 'SENDING...' : "LET'S TALK"}
                                <ChevronRight className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </form>
                        {status.message && <p className={`text-center mt-4 ${status.error ? 'text-red-400' : 'text-green-300'}`}>{status.message}</p>}
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
    
    // Base background is slate-50
    return (
        <footer className="bg-slate-50 text-gray-900 pt-16 pb-8 relative overflow-hidden font-sans">
            
            {/* --- 1. NEW ANIMATED MULTI-LAYER WAVE DIVIDER --- */}
            <div className="absolute top-0 left-0 w-full z-0 transform -translate-y-px -scale-x-100 -scale-y-100">
                <style jsx>{`
                    .waves {
                        position: relative;
                        width: 100%;
                        height: 15vh;
                        min-height: 100px;
                        max-height: 150px;
                    }
                    .parallax > use {
                        animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
                    }
                    .parallax > use:nth-child(1) {
                        animation-delay: -2s;
                        animation-duration: 7s;
                    }
                    .parallax > use:nth-child(2) {
                        animation-delay: -3s;
                        animation-duration: 10s;
                    }
                    .parallax > use:nth-child(3) {
                        animation-delay: -4s;
                        animation-duration: 13s;
                    }
                    @keyframes move-forever {
                        0% { transform: translate3d(-90px,0,0); }
                        100% { transform: translate3d(85px,0,0); }
                    }
                `}</style>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
                    {/* The fill color is changed to a semi-transparent grey to match the footer style */}
                    <g className="parallax">
                        <use href="#gentle-wave" x="48" y="0" fill="rgba(203, 213, 225, 0.7)" />
                        <use href="#gentle-wave" x="48" y="3" fill="rgba(203, 213, 225, 0.5)" />
                        <use href="#gentle-wave" x="48" y="5" fill="rgba(203, 213, 225, 0.3)" />
                    </g>
                </svg>
            </div>
            {/* End of Wave Divider */}

            {/* New Subtle Geometric Background (Existing decorative elements) */}
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbeafe' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-teal-200/50 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -top-24 -left-16 w-96 h-96 bg-yellow-100/50 rounded-full filter blur-3xl opacity-50"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- Top Row: Logo, Contact Info, Find Us, Follow Us --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-slate-200">

                    {/* Column 1 (lg:col-span-4): Logo and Description */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Image 
                            src={logo}
                            alt="Star Publicity Logo"
                            width={180}
                            height={42}
                            className="mb-4" // Removed invert and brightness for light theme
                        />
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-sans">
                            We make success happen with bold brands, slick digital vibes, and print
                            that speaks your language!
                        </p>
                    </div>

                    {/* Column 2 (lg:col-span-2): Chat With Us (Phone/Email) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-semibold mb-4 tracking-wider text-gray-500 font-grotesk">CHAT WITH US</h4>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-900 font-semibold font-sans">0161-4668602</p>
                            <a href="mailto:sales@starpublicity.org" className="text-gray-600 hover:text-gray-900 transition-colors font-sans">
                                sales@starpublicity.org
                            </a>
                        </div>
                    </div>

                    {/* Column 3 (lg:col-span-3): Find Us (Address) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold mb-4 tracking-wider text-gray-500 font-grotesk">FIND US</h4>
                        <p className="text-gray-600 text-sm font-sans">
                            SCO-137, Feroze Gandhi market, Ludhiana, Punjab, 141001
                        </p>
                    </div>

                    {/* Column 4 (lg:col-span-3): Follow Us (Socials) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold mb-4 tracking-wider text-gray-500 font-grotesk">FOLLOW US ON</h4>
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
                    <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-sm font-medium text-gray-600 font-sans">
                        {serviceLinks.map((link, index) => (
                            <span key={index} className="py-1">
                                {link.name}
                            </span>
                        ))}
                    </div>

                    {/* Copyright and Scroll to Top (moved to the right side visually) */}
                    <div className="flex items-center gap-4 text-slate-500 text-xs mt-4 lg:mt-0 font-sans">
                        <p>Copyright © {new Date().getFullYear()} Star Publicity.</p>
                         <a href="/Star Digital Website Images/privacypolicy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
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