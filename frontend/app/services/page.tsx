"use client";

import React from 'react';
import { 
  Megaphone, 
  Search,
  Glasses,
  Code,
  Camera,
  PenTool
} from 'lucide-react';
import Image from 'next/image';
import { DM_Sans } from "next/font/google";

// --- RESTORED ORIGINAL IMAGE IMPORT ---
import featureImage from "./_images/service.png"; 

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const services = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Data-driven campaigns that amplify your brand and turn clicks into customers.",
    icon: Megaphone,
  },
  {
    id: 2,
    title: "SEO Optimization",
    description: "Smart optimization that boosts your search rankings and organic visibility.",
    icon: Search,
  },
  {
    id: 3,
    title: "Immersive Technology",
    description: "AR, VR, and XR experiences that pull audiences into your brand story.",
    icon: Glasses,
  },
  {
    id: 4,
    title: "Website Development",
    description: "High-performing, modern websites built to convert and scale with you.",
    icon: Code,
  },
  {
    id: 5,
    title: "Product Ad Shoot",
    description: "Scroll-stopping product visuals that showcase every detail and drive sales.",
    icon: Camera,
  },
  {
    id: 6,
    title: "Logo Designing",
    description: "Distinctive logos that capture your brand’s personality in a single mark.",
    icon: PenTool,
  },
];

export default function ServicesSection() {
  return (
    <section className={`py-10 sm:py-14 bg-gray-50/30 ${dmSans.className} overflow-hidden`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* --- MAIN FLEX CONTAINER --- 
            On Mobile/Tablet: Stacked Column
            On XL Desktop: Row (Left Content + Right Image) side-by-side
        */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-stretch">
          
          {/* --- LEFT COLUMN: Heading + Cards --- */}
          <div className="w-full xl:w-2/3 flex flex-col justify-between">
            
            {/* 1. HEADING */}
            <div className="mb-8 sm:mb-12 max-w-3xl">
              <span className="block text-sm font-bold tracking-widest text-[#2a7394] uppercase mb-2">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                Our Core <span className="text-[#2a7394]">Digital Services</span> That Grow Brands
              </h2>
            </div>

            {/* 2. CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-full">
              {services.map((service, index) => {
                
                // UPDATED LOGIC:
                // Strict Alternating Pattern: Even = Colored, Odd = White
                // Mobile Result: Color, White, Color, White...
                const isColored = index % 2 === 0;

                return (
                  <div 
                    key={service.id}
                    className={`
                      group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl cursor-pointer overflow-hidden
                      border transition-all duration-300 h-full justify-start
                      
                      /* --- BASE COLORS --- */
                      ${isColored 
                        ? "bg-[#3590ba] border-[#3590ba]" 
                        : "bg-white border-gray-100 shadow-sm"
                      }
                      
                      hover:-translate-y-2 hover:shadow-xl
                    `}
                  >
                    {/* --- THE "WATER" FILL ANIMATION --- */}
                    <span 
                        className={`
                            absolute bottom-0 left-0 w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full
                            ${isColored 
                                ? "bg-white" 
                                : "bg-[#3590ba]"
                            }
                        `}
                    />

                    {/* --- CONTENT --- */}
                    <div className="relative z-10 flex flex-col items-center w-full h-full">
                        
                        {/* Icon Wrapper */}
                        <div className="mb-6 mt-2 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <service.icon 
                            size={40} 
                            strokeWidth={1.5}
                            className={`
                              transition-colors duration-500
                              ${isColored 
                                 ? "text-white group-hover:text-[#f97316]" 
                                 : "text-[#f97316] group-hover:text-white"
                              }
                            `} 
                          />
                        </div>

                        {/* Title */}
                        <h3 className={`
                          text-lg font-bold mb-3 transition-colors duration-500
                          ${isColored 
                            ? "text-white group-hover:text-slate-900" 
                            : "text-slate-900 group-hover:text-white"
                          }
                        `}>
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className={`
                          text-sm leading-relaxed transition-colors duration-500
                          ${isColored 
                            ? "text-blue-50 group-hover:text-slate-600" 
                            : "text-slate-600 group-hover:text-blue-50"
                          }
                        `}>
                          {service.description}
                        </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Image --- 
              On Mobile: Min-Height ensures visibility.
              On Desktop: 'items-stretch' on parent makes this full height.
          */}
          <div className="hidden md:block w-full xl:w-1/3 relative min-h-[450px] xl:min-h-auto rounded-3xl overflow-hidden shadow-2xl group">
             {/* RESTORED NEXT/IMAGE COMPONENT */}
             <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={featureImage} 
                  alt="Digital Marketing Analytics"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent pointer-events-none"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}