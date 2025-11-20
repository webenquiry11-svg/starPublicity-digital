"use client";

import React from "react";
import Image from "next/image";
import { Monitor, Palette, Code, View, Gamepad2, Ruler, Diamond, Send } from "lucide-react";

// --- Services Data ---
const servicesData = [
  {
    // Corresponds to CORPORATE IDENTITY (Top Left/Mid)
    IconComponent: Ruler, 
    title: "CORPORATE IDENTITY",
    description: "Crafting unique brand identities that resonate with your audience and stand out in the market.",
    color: "#FF6B6B", 
  },
  {
    // Corresponds to CMS THEMES (Top Right/Mid)
    IconComponent: Palette,
    title: "CMS THEMES",
    description: "Custom and responsive themes for popular CMS platforms, tailored to your brand and needs.",
    color: "#A855F7", 
  },
  {
    // Corresponds to INFOGRAPHICS (Mid Right)
    IconComponent: Code,
    title: "INFOGRAPHICS",
    description: "Transforming complex data into beautiful, easy-to-understand visual stories.",
    color: "#EC4899", 
  },
  {
    // Corresponds to WEBSITE DESIGN (Bottom Right)
    IconComponent: Monitor,
    title: "WEBSITE DESIGN",
    description: "Creating stunning, user-friendly websites that drive engagement and conversions.",
    color: "#F59E0B", 
  },
  {
    // Corresponds to BRANDING (Bottom Left)
    IconComponent: Diamond,
    title: "BRANDING",
    description: "Comprehensive branding solutions, from logo design to complete brand guidelines.",
    color: "#A855F7", 
  },
  {
    // Corresponds to PRODUCT DESIGN (Mid Left)
    IconComponent: Gamepad2, 
    title: "PRODUCT DESIGN",
    description: "Intuitive and beautiful UI/UX design for digital products that users love.",
    color: "#FF6B6B", 
  },
];

// --- Specific Angles from your Image (Degrees) ---
// These angles are used to manually place the 6 items for maximum accuracy.
const imageAngles = [
  -140, // CORPORATE IDENTITY
  -40,  // CMS THEMES
  0,    // INFOGRAPHICS (Mid Right)
  40,   // WEBSITE DESIGN
  140,  // BRANDING
  180,  // PRODUCT DESIGN (Mid Left)
];

// --- Helper for Mobile Card (Standard Grid Layout) ---
const MobileServiceCard = ({ IconComponent, title, color }: any) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <div 
      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
      style={{ backgroundColor: `${color}20`, color: color }}
    >
      <IconComponent size={32} strokeWidth={2} />
    </div>
    <h3 className="text-xl font-bold text-gray-800 uppercase">{title}</h3>
  </div>
);

// --- MAIN REUSABLE COMPONENT ---
export default function ServicesSection() {
  const radius = 300; // Distance from center
  const iconDiameter = 96; // 6rem * 16px/rem = 96px (w-24 h-24)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section 
      id="services" 
      className="py-16 overflow-hidden relative bg-[#f8fafc]"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight Grid Background */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
        backgroundSize: '1.5rem 1.5rem',
        maskImage: 'radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), black, transparent)',
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}

        {/* --- MOBILE/TABLET VIEW (Grid) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden">
          {servicesData.map((service, index) => (
            <MobileServiceCard key={index} {...service} />
          ))}
        </div>

        {/* --- DESKTOP VIEW (Radial/Circular Layout) --- */}
        <div className="hidden lg:block relative w-full h-[600px] mx-auto">
          
          {/* Center Hub: DESIGN */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-48 h-48 bg-white rounded-full shadow-[0_0_40px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center relative z-20">
              <div className="w-40 h-40 rounded-full border-4 border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-gray-800 tracking-wider leading-tight">Our</span>
                <span className="text-3xl font-bold text-gray-800 tracking-wider leading-tight">Services</span>
              </div>
            </div>
            {/* Center decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-gray-100 rounded-full -z-10 opacity-50" />
          </div>

          {/* Satellite Items */}
          {servicesData.map((service, index) => {
            const angleDeg = imageAngles[index];
            const angleRad = (angleDeg * Math.PI) / 180;
            
            // Positioning of the Icon Ring Center
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            // Determines if the item is on the left half (for text alignment)
            const isLeftSide = angleDeg > 90 || angleDeg < -90; 

            // Calculate adjustment needed to align text/icon exactly on the circle
            // 48px is half the icon width. 200px is the text width. 16px is the gap.
            const totalWidth = 200 + 16 + 48; 

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 group transition-all duration-300 hover:z-30"
                style={{
                  // Position the item's center at (x, y) relative to the container center (top-1/2 left-1/2)
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* The Content Container */}
                <div
                  className={`flex items-center gap-4 min-w-[300px] ${isLeftSide ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  
                  {/* Icon Circle Wrapper */}
                  <div className="relative">
                    {/* Dashed Border Ring */}
                    <div 
                      className="w-24 h-24 rounded-full border-[3px] border-dashed flex items-center justify-center bg-white relative z-10 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                      style={{ borderColor: service.color }}
                    >
                      {/* Inner Icon */}
                      <service.IconComponent 
                        size={32} 
                        style={{ color: service.color }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Colored Arrow pointing to center (attached to the ring) */}
                    <div
                      className="absolute top-1/2 w-6 h-6 bg-transparent z-0 origin-center"
                      style={{
                        // Position relative to the icon ring
                        left: isLeftSide ? 'auto' : '100%',
                        right: isLeftSide ? '100%' : 'auto',
                        transform: 'translateY(-50%)',
                      }}
                    >
                        <div 
                          className={`w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ${isLeftSide ? 'border-l-[12px]' : 'border-r-[12px]'}`}
                          style={{
                              // Logic for triangle direction and color
                              [isLeftSide ? 'borderLeftColor' : 'borderRightColor']: service.color,
                          }}
                        />
                    </div>
                  </div>

                  {/* Text Label */}
                  <div className={`flex flex-col flex-grow min-w-[150px] max-w-[200px] ${isLeftSide ? 'items-end text-right' : 'items-start text-left'}`}>
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                        {service.title}
                    </h3>
                  </div>
                </div>

                {/* Enquiry Popup */}
                <div 
                  className={`absolute top-1/2 w-[320px] p-6 bg-white rounded-xl shadow-2xl border border-gray-100 
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 scale-95
                             transition-all duration-300 ease-out z-40`}
                  style={{
                    transform: `translateY(-50%)`,
                    left: isLeftSide ? 'auto' : 'calc(100% + 20px)',
                    right: isLeftSide ? 'calc(100% + 20px)' : 'auto',
                  }}
                >
                  <h4 className="font-bold text-lg mb-2" style={{ color: service.color }}>{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <div>
                      <input type="email" placeholder="Your Email" className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-offset-1" style={{'--tw-ring-color': service.color} as React.CSSProperties} />
                    </div>
                    <div>
                      <textarea placeholder="Your Message" rows={2} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-offset-1" style={{'--tw-ring-color': service.color} as React.CSSProperties}></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full flex items-center justify-center gap-2 text-sm text-white font-semibold py-2 px-4 rounded-md transition-colors"
                      style={{ backgroundColor: service.color }}
                    >
                      Send Enquiry <Send size={16} />
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}