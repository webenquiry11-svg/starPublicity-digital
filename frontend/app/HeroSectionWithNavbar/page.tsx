"use client"; // Required for the Lottie component

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Kanit } from 'next/font/google';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';
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
  { name: 'Our Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
];

const HeroSectionWithNavbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

          {/* CTA Button: "Get a Free Quote" */}
          <div className="hidden lg:block">
            <button onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 ease-out text-sm">
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
        <div className="container mx-auto px-6">
          <div className="w-full lg:w-1/2 max-w-xl lg:ml-[10%]">
            <h1 className="text-5xl md:text-6xl font-bold text-[rgb(30,55,90)] leading-tight mb-6">
              Drive Growth Through Innovative Digital Strategies
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              We help ambitious brands scale their digital presence and dominate their markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/start-project" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5">
                Start Your Project
              </Link>
              <Link href="/learn-more" className="w-full sm:w-auto px-8 py-3 text-white font-semibold rounded-md border-2 border-white/80 hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Learn More
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
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-black/20 p-8 w-full max-w-md relative animate-fade-in-up">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-center text-gray-600 mb-8">Please enter your details to sign in.</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-5">
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 mt-3" />
                  <input type="email" id="email" name="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 mt-3" />
                  <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="••••••••" className="w-full pl-10 pr-10 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 mt-3 text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-0.5">
                  Login
                </button>
              </div>
            </form>

            <div className="relative flex items-center my-8">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.596,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <span className="text-sm font-medium text-gray-700">Continue with Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-black text-white rounded-lg shadow-sm hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.01,16.32c-1.29,0-2.43-0.43-3.35-1.28c-0.12-0.11-0.23-0.23-0.33-0.36c-1.04-1.33-1.66-2.99-1.66-4.79c0-3.31,2.69-6,6-6c1.4,0,2.73,0.48,3.78,1.35c-1.11,1.04-1.8,2.48-1.8,4.11c0,1.49,0.57,2.81,1.51,3.84C15.2,15.99,13.68,16.32,12.01,16.32z M17.9,3.33C16.39,3.33,15.5,4.2,15.5,4.2c-0.99,1.59-2.69,2.4-4.58,2.4c-0.33,0-0.66-0.03-0.98-0.08c-2.03-0.31-3.83-1.62-4.9-3.32c0,0-0.93-1.28-2.37-1.2c-1.45,0.08-2.7,0.84-3.46,2.08c-1.17,1.9-1.5,4.08-0.9,6.23c0.54,1.93,1.74,3.63,3.35,4.83c1.33,1,2.83,1.54,4.38,1.54c1.56,0,3.03-0.53,4.26-1.48c1.31-1.02,2.29-2.48,2.66-4.11c0.03-0.1,0.05-0.2,0.08-0.3c-1.45-0.6-2.45-2-2.45-3.59c0-0.73,0.21-1.42,0.58-2.01C19.89,4.6,19.09,3.33,17.9,3.33z"></path>
                </svg>
                <span className="text-sm font-medium">Continue with Apple</span>
              </button>
            </div>

          </div>
        </div>
      )}
      
    </section>
  );
};

export default HeroSectionWithNavbar;