"use client"; // Required for the Lottie component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Kanit } from 'next/font/google';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import herobg from '../../public/Star Digital Website Images/herobg.png';
import logo from '../../public/Star Digital Website Images/logo.png';

const kanit = Kanit({
  weight: ['400', '500', '700', '800'], // Include weights used in the component
  subsets: ['latin'],
  display: 'swap',
});

// Navigation Links
const navLinks = [
  { name: 'CLOUD', href: '#' },
  { name: 'ENTERPRISE', href: '#' },
  { name: 'MARKETPLACE', href: '#' },
  { name: 'DOCUMENTATION', href: '#' },
  { name: 'BLOG', href: '#' },
];

const HeroSectionWithNavbar: React.FC = () => {
  return (
    <section className={`relative min-h-[750px] md:min-h-screen overflow-hidden flex flex-col ${kanit.className}`}>
      <Image
        src={herobg}
        alt="Abstract background"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/20 -z-10" /> {/* Optional: Adds a dark overlay for better text readability */}

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
              <Link key={index} href={link.href} className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 uppercase text-sm tracking-wider">
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. Corrected Login Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2 border border-gray-400 rounded text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 text-sm uppercase">
              LOGIN
            </button>
          </div>

          {/* Mobile Menu Icon (Placeholder) */}
          <div className="lg:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Content --- */}
      <div className="relative z-20 flex-grow flex items-center">
        <div className="container mx-auto px-6">
          <div className="w-full lg:w-1/2 max-w-xl lg:ml-[10%]">
            <h1 className="text-[48px] font-medium text-[rgb(30,55,90)] leading-[58px] mb-6">
              Automate Software Build and Testing
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Drone is a self-service Continuous Integration
              platform for busy development teams.
            </p>

            {/* 4. Corrected Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-cyan-500 text-white font-medium rounded shadow-md hover:bg-cyan-600 transition-colors duration-200">
                GET STARTED
              </button>
              <button className="w-full sm:w-auto px-8 py-3 text-gray-800 font-bold rounded hover:bg-gray-100 transition-colors duration-200">
                DOCUMENTATION
              </button>
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