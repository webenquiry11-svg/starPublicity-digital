"use client"; // Required for the Lottie component

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Mail, User, Phone, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import herobg from '../../public/Star Digital Website Images/herobg.png';
import logo from '../../public/Star Digital Website Images/logo.png';

// Navigation Links
const navLinks = [
  { name: 'Our Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'FAQs', href: '/faq' },
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

interface HeroProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const HeroSectionWithNavbar: React.FC<HeroProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <section className={`relative min-h-[750px] md:min-h-screen overflow-hidden flex flex-col`}>
      <Image
        src={herobg}
        alt="Abstract background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* --- Lottie Animation --- */}
      <div className="absolute w-[70%] lg:w-[45%] h-auto bottom-24 right-0 max-w-[800px] z-10">
        <DotLottieReact
          src="https://lottie.host/f271b9db-0428-4d88-8e82-25d477b70f5c/DjqC6KkSpS.lottie"
          loop
          autoplay
        />
      </div>

      {/* --- Navbar --- */}
      <nav className="relative z-30 w-full py-6 md:py-8">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image 
              src={logo} // Assumes logo.png is in the /public folder
              alt="Star Publicity Logo" 
              width={150} // Adjust width as needed
              height={35} // Adjust height as needed
            />
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-700 font-medium hover:text-[#256482] transition-colors duration-200 uppercase text-sm tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button: "Get a Free Quote" */}
          <div className="hidden lg:block">
            <button onMouseEnter={() => setIsModalOpen(true)} className="px-6 py-3 bg-[#2a7394] text-white font-semibold rounded-md shadow-md hover:bg-[#225d7a] transition-all duration-300 ease-out text-sm">
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Icon (Placeholder) */}
          <div className="lg:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Content --- */}
      <div className="relative z-20 flex-grow flex items-center">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20">
          <div className="w-full lg:w-1/2 max-w-xl lg:ml-[10%]">
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(30,55,90)] leading-tight mb-6">
              Drive Growth Through Innovative Digital Strategies
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              We help ambitious brands scale their digital presence and dominate their markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/start-project" className="w-full sm:w-auto px-8 py-3 bg-[#2a7394] text-white font-semibold rounded-md shadow-lg hover:bg-[#225d7a] transition-all duration-300 transform hover:-translate-y-0.5">
                Start Your Project
              </Link>
              <Link href="/learn-more" className="group w-full sm:w-auto px-8 py-3 text-gray-700 font-semibold rounded-md transition-colors duration-300 inline-flex items-center gap-2">
                <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#256482] after:transition-all after:duration-300 group-hover:after:w-full">Learn More</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          {/* Right side is intentionally empty for the illustration */}
          <div className="w-full lg:w-1/2">
            {/* The main drone illustration is positioned absolutely */}
          </div>
        </div>
      </div>

      {/* Login Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-black/20 p-8 w-full max-w-lg relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Get a Free Quote</h2>
            <p className="text-center text-gray-600 mb-8">Tell us about your project, and we'll get back to you.</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 mt-3" />
                    <input type="text" id="name" name="name" placeholder="John Doe" className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#256482] focus:border-[#256482] transition-shadow" />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 mt-3" />
                    <input type="email" id="email" name="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#256482] focus:border-[#256482] transition-shadow" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 mt-3" />
                    <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#256482] focus:border-[#256482] transition-shadow" />
                  </div>
                  <div className="relative">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in...</label>
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 mt-3" />
                    <select id="service" name="service" defaultValue="" className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#256482] focus:border-[#256482] transition-shadow appearance-none">
                      <option value="" disabled>Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <MessageSquare className="absolute left-3 top-5 h-5 w-5 text-gray-400" />
                  <textarea id="message" name="message" rows={4} placeholder="Tell us a little about your project..." className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#256482] focus:border-[#256482] transition-shadow resize-none"></textarea>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full py-3 px-4 bg-[#2a7394] text-white font-bold rounded-lg shadow-lg hover:bg-[#225d7a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a7394] transition-all duration-300 transform hover:-translate-y-0.5">
                  Send Quote Request
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
      
    </section>
  );
};

export default HeroSectionWithNavbar;