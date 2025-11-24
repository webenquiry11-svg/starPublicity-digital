"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Menu, 
    X, 
    ChevronDown, 
    BarChart3, 
    Palette, 
    Code, 
    View, 
    Gamepad2, 
    Phone, 
    Mail, 
    MessageCircle, 
    MapPin 
} from 'lucide-react';

// --- 1. Navbar Component ---
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Our Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "How We Work", href: "#work" },
        { name: "Contact Us", href: "#contact" },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="text-2xl font-bold text-slate-800">
                        <Link href="/">Star Publicity</Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link key={link.name} href={link.href} className="text-slate-600 font-medium hover:text-blue-600 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center">
                        <Link href="#contact" className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all">
                            Get a Free Quote
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-200">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map(link => (
                            <Link key={link.name} href={link.href} className="block text-slate-600 font-medium py-2 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contact" className="block w-full text-center bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all mt-2" onClick={() => setIsOpen(false)}>
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

// --- 2. Hero Section ---
const HeroSection = () => (
    <section className="relative bg-slate-50 py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-blue-200/50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -top-24 -left-16 w-96 h-96 bg-teal-100/50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto">
                Drive Growth Through Innovative Digital Strategies
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                We help ambitious brands scale their digital presence and dominate their markets.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#contact" className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all text-lg">
                    Start Your Project
                </Link>
                <Link href="#services" className="w-full sm:w-auto text-slate-700 font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition-all text-lg">
                    Learn More
                </Link>
            </div>
        </div>
    </section>
);

// --- 3. Services Section ---
const ServicesSection = () => {
    const services = [
        { icon: BarChart3, title: "Digital Marketing", description: "Data-driven strategies to grow your online presence and drive measurable results." },
        { icon: Palette, title: "Graphic Designing", description: "Stunning visuals that tell your brand story and captivate audiences." },
        { icon: Code, title: "Web Development", description: "Fast, secure, scalable websites built to drive conversions and growth." },
        { icon: View, title: "AR/VR Development", description: "Immersive experiences that engage customers and transform brand interactions." },
        { icon: Gamepad2, title: "Game Development", description: "Engaging games that entertain users and achieve your business objectives." },
    ];

    return (
        <section id="services" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What We Deliver</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all">
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-5">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                            <p className="text-slate-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. About Section ---
const AboutSection = () => {
    const trustPoints = [
        { title: "Integrated Digital Expertise", description: "We integrate innovative strategies to provide solutions that work in perfect harmony." },
        { title: "Results-Driven Approach", description: "Our data-driven methodology ensures ROI and accountability at every step of your digital journey." },
        { title: "Full-Service Convenience", description: "From concept to launch, we provide everything your business needs for digital success." },
    ];

    return (
        <section id="about" className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Part 1 */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="text-left">
                        <p className="text-blue-600 font-semibold mb-2">Your growth is our top priority.</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get Results That Matter.</h2>
                    </div>
                    <div>
                        <p className="text-lg text-slate-600">
                            Star Publicity is redefining digital services. We seamlessly blend strategic thinking, creative excellence, and advanced technology to deliver powerful, integrated solutions that drive real results for your business.
                        </p>
                    </div>
                </div>

                {/* Part 2 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why Brands Trust Us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustPoints.map((point, index) => (
                        <div key={index} className="p-6">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h3>
                            <p className="text-slate-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 5. FAQ Section ---
const WorkStepItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 py-6">
            <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-slate-800">{question}</h3>
                <ChevronDown
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={24}
                />
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pt-4 text-slate-600">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const HowWeWorkSection = () => {
    const faqs = [
        {
            question: "What services does Star Publicity offer?",
            answer: "Star Publicity offers digital solutions like marketing (SEO, social media, PPC), graphic design, web development, AR/VR, and game development, along with strategic consultation and custom solutions."
        },
        {
            question: "Do you work with businesses of all sizes?",
            answer: "Yes! We work with startups, SMEs, and enterprises across various industries. Our flexible service packages and solutions can be customized to fit any budget."
        },
        {
            question: "Do you offer support after project delivery?",
            answer: "Absolutely. We provide post-launch support, maintenance, and optimization. Our team is available for updates, bug fixes, and performance improvements."
        },
        {
            question: "How do I get started?",
            answer: "Getting started is simple: contact us through our website or call for a free consultation. We'll discuss your goals, understand your business, and recommend the best solutions."
        },
    ];

    return (
        <section id="work" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">How We Work</h2>
                </div>
                <div>
                    {faqs.map((faq, index) => (
                        <WorkStepItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 6. Contact Section ---
const ContactSection = () => {
    const contactMethods = [
        {
            icon: Phone,
            title: "Call Our Team",
            description: "Reach us for immediate support or business inquiries.",
            contact: "0161-4668602",
            href: "tel:01614668602"
        },
        {
            icon: Mail,
            title: "Email Us",
            description: "Share your requirements or ask anything.",
            contact: "info@starpublicity.co.in",
            href: "mailto:info@starpublicity.co.in"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp Support",
            description: "Instant messaging for quick replies and project discussions.",
            contact: "+91 7403434074",
            href: "https://wa.me/917403434074"
        },
        {
            icon: MapPin,
            title: "Visit Our Office",
            description: "Meet us in person at our head office.",
            contact: "SCO-137, Feroze Gandhi market, Ludhiana, Punjab, 141001",
            href: "https://maps.google.com/?q=SCO-137, Feroze Gandhi market, Ludhiana, Punjab, 141001"
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Let’s Connect With Star Publicity</h2>
                    <p className="mt-4 text-lg text-slate-300">We’re here to answer your questions and help your brand grow.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, index) => (
                        <a 
                            key={index} 
                            href={method.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-slate-800 p-8 rounded-2xl text-center group hover:bg-slate-700 transition-all"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mx-auto mb-5 group-hover:scale-110 transition-transform">
                                <method.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                            <p className="text-slate-400 mb-4 text-sm">{method.description}</p>
                            <p className="font-semibold text-blue-400 group-hover:text-white transition-colors">{method.contact}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 7. Footer Component ---
const Footer = () => (
    <footer className="bg-slate-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
            <p>Copyright © {new Date().getFullYear()} Star Publicity. All Rights Reserved.</p>
        </div>
    </footer>
);


// --- Main Page Component ---
export default function HomePage() {
    return (
        <main className="bg-white">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <HowWeWorkSection />
            <ContactSection />
            <Footer />
        </main>
    );
}