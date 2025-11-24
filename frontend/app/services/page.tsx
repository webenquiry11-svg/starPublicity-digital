"use client";

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Send, BarChart3, ShoppingCart, Image as ImageIcon } from 'lucide-react';

// --- GSAP Imports ---
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Image Imports ---
import web from '../../public/Star Digital Website Images/service/web.png';
import seo from '../../public/Star Digital Website Images/service/seo.png';
import graphic from '../../public/Star Digital Website Images/service/graphic.jpg';
import game from '../../public/Star Digital Website Images/service/game.png';
import digital from '../../public/Star Digital Website Images/service/digital.png';
import arvr from '../../public/Star Digital Website Images/service/arvr.png';

// --- 1. Reusable Components ---

// The Accent Panel (Text content)
const FeaturedAccentPanel: React.FC<{ service: ServiceData }> = ({ service }) => {
    
    return (
        <div
            className={`w-full lg:w-1/4 p-8 md:p-10 text-white flex flex-col justify-center min-h-[400px] lg:min-h-[400px] relative z-20 bg-slate-700 transition-colors duration-300 ease-in-out group-hover:bg-[var(--accent-color)] rounded-3xl shadow-2xl`}
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
                href="#lets-talk"
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

// --- New Reusable Image Visual Component ---
const ServiceImageVisual: React.FC<{ src: any; alt: string }> = ({ src, alt }) => (
    <div className="relative w-full h-full">
        <Image 
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 75vw"
        />
    </div>
);

// The Main Visual Area (Outer rounding remains rounded-[3rem])
// Width changed to lg:w-3/4 (75% width)
const MainVisualArea: React.FC<{ children: React.ReactNode, layout: 'left' | 'right' }> = ({ children, layout }) => {
    
    return (
        <div 
            className={`w-full lg:w-3/4 relative flex items-center justify-center p-0 rounded-[3rem] shadow-2xl overflow-hidden`}
            style={{ 
                backgroundColor: '#eeeeee',
            }}
        >
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
        tag: "WEB DEVELOPMENT",
        title: <>Website <br /> Design</>,
        description: "We build stunning, responsive websites that captivate your audience and drive business growth with modern technology.",
        accentColor: '#2563eb', // Blue
        VisualComponent: () => <ServiceImageVisual src={web} alt="Web Development" />,
        layout: 'left',
    },
    {
        tag: "SEARCH ENGINE OPTIMIZATION",
        title: <>SEO <br /> Strategy</>,
        description: "Boost your online visibility and rank higher on search engines with our data-driven SEO strategies and techniques.",
        accentColor: '#16a34a', // Green
        VisualComponent: () => <ServiceImageVisual src={seo} alt="SEO Strategy" />,
        layout: 'right',
    },
    {
        tag: "CREATIVE DESIGN",
        title: <>Graphic <br /> Design</>,
        description: "From logos to marketing materials, our creative designs make your brand stand out and leave a lasting impression.",
        accentColor: '#db2777', // Pink
        VisualComponent: () => <ServiceImageVisual src={graphic} alt="Graphic Design" />,
        layout: 'left',
    },
    {
        tag: "INTERACTIVE ENTERTAINMENT",
        title: <>Game <br /> Development</>,
        description: "We create immersive and engaging games for various platforms, bringing your creative visions to life with cutting-edge tech.",
        accentColor: '#7c3aed', // Violet
        VisualComponent: () => <ServiceImageVisual src={game} alt="Game Development" />,
        layout: 'right',
    },
    {
        tag: "ONLINE PRESENCE",
        title: <>Digital <br /> Marketing</>,
        description: "Our comprehensive digital marketing services help you connect with your audience and achieve your business objectives.",
        accentColor: '#ea580c', // Orange
        VisualComponent: () => <ServiceImageVisual src={digital} alt="Digital Marketing" />,
        layout: 'left',
    },
    {
        tag: "IMMERSIVE EXPERIENCES",
        title: <>AR/VR <br /> Development</>,
        description: "Step into the future with our AR/VR solutions, creating unforgettable interactive experiences for your brand and customers.",
        accentColor: '#0891b2', // Cyan
        VisualComponent: () => <ServiceImageVisual src={arvr} alt="AR/VR Development" />,
        layout: 'right',
    },
];

// --- 3. Main Showcase Item Component (Restored to Static Flow) ---

const ServiceShowcaseItem: React.FC<{ service: ServiceData }> = ({ service }) => {
    const isVisualLeft = service.layout === 'left';

    return (
        // The 'group' class is now on the sticky container, so we can just return the flex layout
        <div className="h-full w-full">
            <div className="flex flex-col lg:flex-row relative lg:gap-8">
                {isVisualLeft ? (
                    <>
                        <MainVisualArea layout={service.layout}><service.VisualComponent /></MainVisualArea>
                        <FeaturedAccentPanel service={service} />
                    </>
                ) : (
                    <>
                        <FeaturedAccentPanel service={service} />
                        <MainVisualArea layout={service.layout}><service.VisualComponent /></MainVisualArea>
                    </>
                )}
            </div>
        </div>
    );
};

// --- 4. Main Exported Section with GSAP Stacking Animation ---

export default function ServicesPage() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Select all the card containers
        const cards = gsap.utils.toArray<HTMLDivElement>(".service-card");

        const ctx = gsap.context(() => {
            cards.forEach((card, i) => {
                // We don't need to animate the last card
                if (i === cards.length - 1) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top", // When the top of the card hits the top of the viewport
                    endTrigger: cards[i + 1], // Animation ends when the next card starts
                    end: "top top",
                    pin: true, // Pin the current card
                    pinSpacing: false, // Don't add padding, we handle it with the sticky layout
                    scrub: 0.5, // Smooth scrubbing
                    animation: gsap.to(card, {
                        scale: 0.95, // Subtly scale down the card
                        opacity: 0.8, // Fade it back slightly
                        ease: "power1.inOut",
                    }),
                });
            });
        }, section);

        return () => ctx.revert(); // Cleanup GSAP context on unmount
    }, []);

    return (
        <section ref={sectionRef} className="bg-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card group h-screen sticky top-0 flex items-center">
                        <ServiceShowcaseItem service={service} />
                    </div>
                ))}
            </div>
        </section>
    );
}