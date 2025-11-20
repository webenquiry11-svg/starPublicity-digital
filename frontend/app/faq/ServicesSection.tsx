"use client";

import React, { useEffect, useRef } from "react";
import { Monitor, Palette, Code, Gamepad2, Ruler, Diamond, ArrowRight } from "lucide-react";

// --- Services Data ---
const servicesData = [
  {
    IconComponent: Ruler, 
    title: "CORPORATE IDENTITY",
    description: "Crafting unique brand identities that resonate with your audience and stand out in the market.",
    color: "#FF6B6B",
  },
  {
    IconComponent: Palette,
    title: "CMS THEMES",
    description: "Custom and responsive themes for popular CMS platforms, tailored to your brand and needs.",
    color: "#A855F7",
  },
  {
    IconComponent: Code,
    title: "INFOGRAPHICS",
    description: "Transforming complex data into beautiful, easy-to-understand visual stories.",
    color: "#EC4899",
  },
  {
    IconComponent: Monitor,
    title: "WEBSITE DESIGN",
    description: "Creating stunning, user-friendly websites that drive engagement and conversions.",
    color: "#F59E0B",
  },
  {
    IconComponent: Diamond,
    title: "BRANDING",
    description: "Comprehensive branding solutions, from logo design to complete brand guidelines.",
    color: "#A855F7",
  },
  {
    IconComponent: Gamepad2, 
    title: "PRODUCT DESIGN",
    description: "Intuitive and beautiful UI/UX design for digital products that users love.",
    color: "#FF6B6B",
  },
];

const ServiceCard = ({ IconComponent, title, description, color }: any) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="group relative bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-start text-left overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${color}15, transparent 80%)` }}
      />
      <div className="relative z-10 w-full h-full flex flex-col items-start">
        <div 
          className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
          style={{ backgroundColor: `${color}20` }}
        >
          <IconComponent className="h-8 w-8 transition-colors duration-300" style={{ color: color }} strokeWidth={2} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="mt-auto text-sm font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: color }}>
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

// --- MAIN REUSABLE COMPONENT ---
export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.service-card-wrapper');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services"
      className="py-16 md:py-20 overflow-hidden relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ourservices.jpeg')" }}
    >
      {/* Content container */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-[#256482] text-lg font-semibold uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
            What We Deliver
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#256482]/20 rounded-full"></span>
          </h2>
        </div>

        {/* --- Unified Responsive Grid --- */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card-wrapper" style={{ transitionDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
