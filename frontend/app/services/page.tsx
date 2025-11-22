"use client";

import React from 'react';
import { Send, BarChart3, ShoppingCart } from 'lucide-react';

// --- 1. Reusable Components ---

// The Accent Panel (Text content)
const FeaturedAccentPanel: React.FC<{ service: ServiceData }> = ({ service }) => {
    return (
        <div
            className="w-full lg:w-96 p-8 md:p-10 text-white flex flex-col justify-center min-h-[400px] lg:min-h-[600px] relative z-20 bg-slate-700 transition-colors duration-300 ease-in-out group-hover:bg-[var(--accent-color)]"
            style={{ 
                '--accent-color': service.accentColor,
            } as React.CSSProperties}
        >
            {/* Top Tag */}
            <p className="text-sm font-semibold tracking-widest uppercase opacity-80 mb-4 flex items-center relative z-10">
                <span className="text-xl mr-2 leading-none animate-spin" style={{ color: '#FFD700', animationDuration: '3s' }}>*</span> 
                {service.tag}
            </p>

            {/* Main Headline */}
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 relative z-10">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-base font-medium opacity-90 mb-10 relative z-10">
                {service.description}
            </p>

            {/* Explore Button */}
            <a 
                href="#"
                className="inline-flex items-center text-base font-bold uppercase tracking-wider group mt-auto relative z-10"
            >
                <span className="opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    Explore
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 ml-3 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-white/40 group-hover:translate-x-1 group-hover:scale-110">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </a>
        </div>
    );
};

// --- Visual Components for each service ---

// Original Tote Bag Visual
const ToteBagVisual = () => (
    <div className="relative w-full max-w-2xl h-full flex items-end justify-between p-4" style={{ minHeight: '550px' }}>
        <div className="w-[30%] h-[70%] bg-blue-700 rounded-lg relative flex flex-col items-center justify-center p-2 text-white shadow-xl">
            <p className="text-6xl font-extrabold" style={{ fontFamily: 'serif' }}>TOTE</p>
            <p className="text-6xl font-extrabold" style={{ fontFamily: 'serif' }}>BAG</p>
        </div>
        <div className="w-[30%] h-[80%] bg-gray-100 rounded-lg relative flex flex-col items-center justify-center p-2 text-blue-700 shadow-xl">
            <p className="text-6xl font-extrabold" style={{ fontFamily: 'serif' }}>TOTE</p>
            <p className="text-6xl font-extrabold" style={{ fontFamily: 'serif' }}>BAG</p>
        </div>
        <div className="w-[30%] h-[65%] bg-red-500 rounded-lg relative flex flex-col items-center justify-center p-2 text-white shadow-xl overflow-hidden">
             <p className="text-6xl font-extrabold transform scale-y-90" style={{ fontFamily: 'serif' }}>TOTE</p>
             <p className="text-6xl font-extrabold transform scale-y-90" style={{ fontFamily: 'serif' }}>BAG</p>
             <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-red-800 opacity-20 transform skewY(10deg)" />
        </div>
    </div>
);

// New E-commerce Visual
const EcommerceVisual = () => (
    <div className="relative w-full max-w-2xl h-full flex items-center justify-center p-4" style={{ minHeight: '550px' }}>
        <div className="w-full h-80 bg-white rounded-xl shadow-2xl p-4 flex gap-4">
            <div className="w-1/3 bg-slate-100 rounded-lg"></div>
            <div className="w-2/3 flex flex-col gap-4">
                <div className="w-full h-1/2 bg-slate-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-16 h-16 text-slate-300" />
                </div>
                <div className="w-full h-1/2 bg-slate-100 rounded-lg"></div>
            </div>
        </div>
    </div>
);

// New SEO Visual
const SeoVisual = () => (
    <div className="relative w-full max-w-2xl h-full flex items-center justify-center p-4" style={{ minHeight: '550px' }}>
        <div className="w-full h-80 bg-white rounded-xl shadow-2xl p-4 flex items-center justify-center">
            <BarChart3 className="w-48 h-48 text-green-300" strokeWidth={1} />
        </div>
    </div>
);

// The Main Visual Area (accepts a visual component as a prop)
const MainVisualArea: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div 
            className="w-full lg:flex-grow relative flex items-center justify-center p-8 md:p-12"
            style={{ 
                backgroundColor: '#eeeeee',
            }}
        >
            <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.1)' }} />
            {children}
        </div>
    );
};

// --- 2. Data for Services ---

interface ServiceData {
    tag: string;
    title: React.ReactNode;
    description: string;
    accentColor: string;
    VisualComponent: React.FC;
    layout: 'left' | 'right';
}

const servicesData: ServiceData[] = [
    {
        tag: "BRAND IDENTITY",
        title: <><span className="text-yellow-300">Content</span> Marketing <br /> Specialist</>,
        description: "We optimize visibility, drive organic traffic, and deliver targeted content that connects with your audience.",
        accentColor: '#3a7a96',
        VisualComponent: ToteBagVisual,
        layout: 'left',
    },
    {
        tag: "WEB DEVELOPMENT",
        title: <>E-commerce <br /> Solutions</>,
        description: "Building robust, scalable, and secure online stores that provide a seamless shopping experience and drive conversions.",
        accentColor: '#6d28d9', // Violet
        VisualComponent: EcommerceVisual,
        layout: 'right',
    },
    {
        tag: "DIGITAL MARKETING",
        title: <>SEO & Campaign <br /> Strategy</>,
        description: "Driving organic growth with data-driven SEO and creating targeted campaigns that boost your online presence and ROI.",
        accentColor: '#059669', // Emerald Green
        VisualComponent: SeoVisual,
        layout: 'left',
    },
];

// --- 3. Main Showcase Item Component ---

const ServiceShowcaseItem: React.FC<{ service: ServiceData }> = ({ service }) => {
    const isVisualLeft = service.layout === 'left';
    
    return (
        <div 
            className="group flex flex-col lg:flex-row relative shadow-2xl overflow-hidden h-full w-full"
            style={{ 
                borderRadius: isVisualLeft ? '0 1.5rem 1.5rem 0' : '1.5rem 0 0 1.5rem'
            }}
        >
            {isVisualLeft ? (
                <>
                    <MainVisualArea><service.VisualComponent /></MainVisualArea>
                    <FeaturedAccentPanel service={service} />
                </>
            ) : (
                <>
                    <FeaturedAccentPanel service={service} />
                    <MainVisualArea><service.VisualComponent /></MainVisualArea>
                </>
            )}
        </div>
    );
};

// --- 4. Main Exported Section ---

export default function ServicesPage() {
    return (
        <section className="py-12 md:py-20 bg-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                {servicesData.map((service, index) => (
                    <ServiceShowcaseItem key={index} service={service} />
                ))}
            </div>
        </section>
    );
}