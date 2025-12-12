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

// Placeholder image (Replace with your specific path)
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
    <section className={`py-20 bg-gray-50/30 ${dmSans.className}`}>
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* --- MAIN FLEX CONTAINER --- 
            This ensures the Left Column (Heading + Grid) and Right Column (Image) 
            are side-by-side and equal height on large screens.
        */}
        <div className="flex flex-col xl:flex-row gap-8 items-stretch">
          
          {/* --- LEFT COLUMN: Heading + Cards --- */}
          <div className="w-full xl:w-2/3 flex flex-col justify-between">
            
            {/* 1. HEADING (Now inside the left column) */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
                Our Core <span className="text-[#2a7394]">Digital Services</span> That Grow Brands
              </h2>
            </div>

            {/* 2. CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {services.map((service, index) => {
                // Logic: 1st & 3rd columns are Colored. Middle is White.
                const isColored = index % 3 !== 1;

                return (
                  <div 
                    key={service.id}
                    className={`
                      group relative flex flex-col items-center text-center p-8 rounded-lg cursor-pointer overflow-hidden
                      border transition-all duration-300 h-full justify-center
                      
                      /* --- BASE COLORS --- */
                      ${isColored 
                        ? "bg-[#3590ba] border-[#3590ba]" 
                        : "bg-white border-gray-100 shadow-sm"
                      }
                      
                      hover:-translate-y-2 hover:shadow-2xl
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
                    ></span>

                    {/* --- CONTENT --- */}
                    <div className="relative z-10 flex flex-col items-center w-full">
                        
                        {/* Icon Wrapper */}
                        <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <service.icon 
                            size={42} 
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
              Because this is a flex item, 'h-full' will make it stretch 
              to match the height of the Left Column (Heading + Grid).
          */}
          <div className="w-full xl:w-1/3 relative min-h-[450px] xl:min-h-auto rounded-2xl overflow-hidden shadow-2xl group">
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