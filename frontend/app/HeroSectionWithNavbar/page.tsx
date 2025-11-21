"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, User, Phone, Briefcase, MessageSquare, ArrowRight, Send } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import herobg from '../../public/Star Digital Website Images/herobg.png';
import logo from '../../public/Star Digital Website Images/logo.png';

// Navigation Links
const navLinks = [
  { name: 'Our Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'FAQs', href: '#awards' },
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

const HeroSectionWithNavbar: React.FC = () => {
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
              <Link key={index} href={link.href} className="text-gray-700 font-medium hover:text-[#256482] transition-colors duration-200 uppercase text-base tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button: "Get a Free Quote" */}
          <div className="hidden lg:block relative group">
            <button className="px-6 py-3 bg-[#2a7394] text-white font-semibold rounded-md shadow-md hover:bg-[#225d7a] transition-all duration-300 ease-out text-sm">
              Get a Free Quote
            </button>

            {/* Hover Popup Form */}
            <div 
              className={`absolute top-full right-0 mt-2 w-[350px] p-6 bg-white rounded-xl shadow-2xl border border-gray-100 
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 scale-95
                         transition-all duration-300 ease-out z-40 origin-top-right`}
            >
              <h4 className="font-bold text-lg mb-1 text-gray-900">Quick Enquiry</h4>
              <p className="text-sm text-gray-600 mb-4">Let us know what you're looking for.</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
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

    </section>
  );
};

export default HeroSectionWithNavbar;