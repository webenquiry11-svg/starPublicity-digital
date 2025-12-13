"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Mail, 
    MapPin, 
    Phone, 
    Facebook, 
    Instagram, 
    Linkedin, 
    Twitter,
    Link as LinkIcon
} from 'lucide-react';
import logo from '../../public/Star Digital Website Images/logo.png';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

// Social Media Links
const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: LinkIcon, href: "#" }
];

// Service Links for Footer
const serviceLinks = [
    { name: "Digital Marketing", href: "#" },
    { name: "SEO Optimization", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "App Development", href: "#" },
    { name: "Graphic Design", href: "#" },
];

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, message: '', error: false });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ submitting: true, message: '', error: false });

        try {
            const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
            const response = await fetch(`${baseUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.message || 'Something went wrong');

            setStatus({ submitting: false, message: 'Message sent successfully!', error: false });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({ submitting: false, message: 'Failed to send message.', error: true });
        }
    };

    return (
        <section className={`py-10 md:py-12 bg-gradient-to-br from-[#2a7394] to-[#225d7a] relative overflow-hidden ${outfit.className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-white max-w-6xl mx-auto">
                    <div className="lg:col-span-7 text-center lg:text-left mb-8 lg:mb-0">
                        <p className="text-xl md:text-2xl font-medium text-gray-300 mb-4">
                            Got an idea? Connect with our team and let’s make something extraordinary together.
                        </p>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-white">
                            LET'S WORK <br /> TOGETHER
                        </h2>
                    </div>

                    <div className="lg:col-span-5 bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-2xl">
                        {status.message && (
                            <div className={`mb-4 text-center font-bold ${status.error ? 'text-red-300' : 'text-green-300'}`}>
                                {status.message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="cta-name" className="sr-only">Name</label>
                                <input type="text" id="cta-name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="cta-email" className="sr-only">Email</label>
                                <input type="email" id="cta-email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors" />
                            </div>
                            <div>
                                <label htmlFor="cta-message" className="sr-only">Message</label>
                                <textarea id="cta-message" name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={2} className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/70 py-2 focus:outline-none focus:border-white transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" disabled={status.submitting} className={`w-full group inline-flex items-center justify-center py-3 px-6 rounded-full bg-white text-[#2a7394] font-bold text-lg transition-all duration-300 ease-out hover:bg-white/90 hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed`}>
                                {status.submitting ? 'SENDING...' : "LET'S TALK"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className={`bg-slate-50 text-gray-900 pt-10 pb-8 relative overflow-hidden ${outfit.className}`}>
             {/* --- 1. NEW ANIMATED MULTI-LAYER WAVE DIVIDER --- */}
             <div className="absolute top-0 left-0 w-full z-0 transform -translate-y-px -scale-x-100 -scale-y-100">
                <svg className="w-full h-12 md:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#2a7394" fillOpacity="0.1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#2a7394" fillOpacity="0.2" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-gray-200 pb-12">
                    <div className="lg:col-span-4">
                        <Image
                            src={logo}
                            alt="Star Publicity Logo"
                            width={180}
                            height={42}
                            className="mb-4"
                        />
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            We make success happen with bold brands, slick digital vibes, and print
                            that speaks your language!
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-semibold mb-4 tracking-wider text-gray-500">CHAT WITH US</h4>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-900 font-semibold">0161-4668602</p>
                            <a href="mailto:sales@starpublicity.org" className="text-gray-600 hover:text-gray-900 transition-colors">
                                sales@starpublicity.org
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold mb-4 tracking-wider text-gray-500">FIND US</h4>
                        <p className="text-gray-600 text-sm md:text-center lg:text-left">
                            Ludhiana, Punjab, 141001
                        </p>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold mb-4 tracking-wider text-gray-500">FOLLOW US ON</h4>
                        <div className="flex space-x-2">
                            {socialLinks.map((social, index) => (
                                <div 
                                    key={index} 
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center 
                                              text-gray-500 cursor-default"
                                >
                                    <social.icon className="w-4 h-4" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between items-center pt-4">
                    <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-sm font-medium text-gray-600">
                        {serviceLinks.map((link, index) => (
                            <span key={index} className="py-1">
                                {link.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 text-slate-500 text-xs mt-4 lg:mt-0">
                        <p>Copyright © {new Date().getFullYear()} Star Publicity.</p>
                        <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
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