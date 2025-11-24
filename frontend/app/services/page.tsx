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
            className={`w-full p-8 md:p-10 text-white flex flex-col justify-center h-full`}
            style={{ 
                '--accent-color': service.accentColor,
            } as React.CSSProperties }
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
            className={`w-full relative flex items-center justify-center p-0 h-[90vh]`}
        >
            <div className="w-full h-full relative rounded-3xl overflow-hidden">{children}</div>
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
        layout: 'left',
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
        layout: 'left',
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
        layout: 'left',
    },
];

// --- 4. Main Exported Section with Scrollytelling Animation ---

export default function ServicesPage() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const imageWrappers = gsap.utils.toArray<HTMLDivElement>('.service-image-wrapper');
        const contentPanels = gsap.utils.toArray<HTMLDivElement>('.service-content-panel');

        // Set initial state: hide all content panels except the first one
        gsap.set(contentPanels.slice(1), { autoAlpha: 0 });

        const ctx = gsap.context(() => {
            // --- The Definitive Fix: A Single Observer ---
            // This single ScrollTrigger observes the entire section and updates on every scroll frame.
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                // On every scroll update, check which image is active
                onUpdate: self => {
                    let activeIndex = -1;
                    // Find which image is currently in the "active" zone (center of the screen)
                    imageWrappers.forEach((image, i) => {
                        const rect = image.getBoundingClientRect();
                        // Check if the vertical center of the viewport is between the top and bottom of the image
                        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                            activeIndex = i;
                        }
                    });

                    if (activeIndex !== -1) {
                        // Animate background color to match the active service
                        gsap.to(contentRef.current, { backgroundColor: servicesData[activeIndex].accentColor, duration: 0.5, ease: 'power2.inOut' });
                        
                        // Animate the content panels
                        contentPanels.forEach((panel, i) => {
                            // Fade in the active panel, fade out all others.
                            gsap.to(panel, { autoAlpha: i === activeIndex ? 1 : 0, duration: 0.3 });
                        });
                    }
                }
            });
        }, section);

        return () => ctx.revert(); // Cleanup GSAP context on unmount
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Left Column: Scrolling Images */}
                <div className="lg:col-span-8 space-y-16">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-image-wrapper">
                            <MainVisualArea layout="left"><service.VisualComponent /></MainVisualArea>
                        </div>
                    ))}
                </div>

                {/* Right Column: Sticky Content */}
                <div className="lg:col-span-4 lg:sticky top-[5vh] h-[90vh]">
                    <div ref={contentRef} className="relative w-full h-full rounded-3xl overflow-hidden transition-colors duration-500" style={{backgroundColor: servicesData[0].accentColor}}>
                        {servicesData.map((service, index) => (
                            <div key={index} className="service-content-panel absolute inset-0">
                                <FeaturedAccentPanel service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}