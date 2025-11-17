import React from 'react';
import Link from 'next/link';
// Use the 'Kanit' font as requested
import { Kanit } from 'next/font/google';

// 1. Initialize the correct font
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
    // 2. Apply the 'inter' font class to the root section
    <section className={`relative min-h-[750px] md:min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden flex flex-col ${kanit.className}`}>
      
      {/* --- Background Illustrations (Exact Assets) --- */}
      <img src="https://assets-global.website-files.com/602928ac00d23f7216a04a37/60334888127393d2576b5c2a_background.svg" alt="Background Pattern" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" />
      <img src="https://assets-global.website-files.com/602928ac00d23f7216a04a37/60334887eb23533475d400e9_BG%20Image.svg" alt="Left background element" className="absolute w-[150px] h-auto bottom-10 left-4 z-10 opacity-70" />
      <img src="https://assets-global.website-files.com/602928ac00d23f7216a04a37/603348872b4f0b2f15ac13d7_BG%20Image%203.svg" alt="Mid background element" className="absolute w-[120px] h-auto bottom-1/2 left-[45%] z-10 opacity-70" />
      <img src="https://assets-global.website-files.com/602928ac00d23f7216a04a37/6033488783e74033b092289f_BG%20Image%202.svg" alt="Right background element" className="absolute w-[150px] h-auto bottom-8 right-8 z-10 opacity-70" />
      
      {/* --- Main Drone Illustration (Exact Asset) --- */}
      <img src="https://assets-global.website-files.com/602928ac00d23f7216a04a37/603348873528b7e71f55a1d5_Illustration.svg" alt="Hero Illustration" 
           className="absolute w-[70%] lg:w-[45%] h-auto bottom-0 right-0 max-w-[800px] z-10" />

      {/* --- Navbar --- */}
      <nav className="relative z-30 w-full py-6 md:py-8">
        <div className="container mx-auto px-6 lg:px-8 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img 
              src="https://assets-global.website-files.com/602928ac00d23f7216a04a37/602928ac00d23f707aa04a50_logo.svg" 
              alt="DRONE by harness Logo" 
              className="h-7 w-auto" // Using <img> tag for SVG is fine
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