"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Image Imports ---
import web from "./_images/web1.png";
import seo from "./_images/seo.svg";
import graphic from "./_images/graphic1.jpeg";
import game from "./_images/game.svg";
import digital from "./_images/digital1.png";
import arvr from "./_images/arvr.svg";

// --- 1. Reusable "Attractive Heading" Component (Duplicated for standalone use) ---
const SectionHeading = ({
  badge,
  titleNormal,
  titleItalic,
  subtext,
  color = "blue",
}: {
  badge: string;
  titleNormal: string;
  titleItalic: string;
  subtext: string;
  color?: "blue" | "purple" | "teal";
}) => {
  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-100",
      text: "text-blue-600",
      glow: "bg-blue-500/20",
      highlight: "text-blue-700",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-100",
      text: "text-purple-600",
      glow: "bg-purple-500/20",
      highlight: "text-purple-700",
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-100",
      text: "text-teal-600",
      glow: "bg-teal-500/20",
      highlight: "text-teal-700",
    },
  };

  const theme = colorClasses[color];

  return (
    <div className="relative text-center mb-24 z-10">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] ${theme.glow} blur-[90px] rounded-full -z-10 opacity-60 pointer-events-none`}
      ></div>

      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${theme.bg} ${theme.border} border shadow-sm mb-6 transition-transform hover:scale-105 duration-300`}
      >
        <span className={`relative flex h-2 w-2`}>
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.text} opacity-75`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${theme.text} bg-current`}
          ></span>
        </span>
        <span
          className={`text-[11px] font-bold tracking-[0.2em] uppercase ${theme.text}`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {badge}
        </span>
      </div>

      <h2
        className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {titleNormal}{" "}
        <span className={`font-medium italic ${theme.highlight}`}>
          {titleItalic}
        </span>
      </h2>

      <div className="flex items-center justify-center gap-4 mb-6 opacity-40">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-400"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-slate-600 bg-slate-100"></div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-400"></div>
      </div>

      <p
        className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {subtext}
      </p>
    </div>
  );
};

// --- Rest of your Components (FeaturedAccentPanel, etc.) ---

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
            <p
                className="text-sm font-bold tracking-widest uppercase opacity-80 mb-4 flex items-center relative z-10"
                style={{ fontFamily: "'Outfit', sans-serif" }}
            >
                <span
                    className="text-xl mr-2 leading-none animate-spin"
                    style={{ color: "#FFD700", animationDuration: "3s" }}
                >
                    *
                </span>
                {service.tag}
            </p>

            {/* Main Headline */}
            <h3
                className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 relative z-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                {service.title}
            </h3>

            {/* Description */}
            <div className="text-base font-medium opacity-90 mb-10 relative z-10 font-sans">
                <ul className="space-y-3">
                    {service.description.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 text-white/80 mr-3 mt-1 flex-shrink-0" />
                            <span style={{ fontFamily: "'Outfit', sans-serif" }}>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* New Explanation Paragraph */}
            <p
                className="text-base font-normal opacity-80 mt-6 relative z-10 font-sans"
                style={{ fontFamily: "'Outfit', sans-serif" }}
            >
                {service.explanation}
            </p>
        </div>
    );
};

// --- New Reusable Image Visual Component ---
const ServiceImageVisual: React.FC<{ src: any; alt: string }> = ({ src, alt }) => (
    <div className="relative w-full h-full p-8">
        <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 75vw"
        />
    </div>
);

// The Main Visual Area
const MainVisualArea: React.FC<{
  children: React.ReactNode;
  layout: "left" | "right";
}> = ({ children, layout }) => {
    return (
        <div 
            className={`w-full relative flex items-center justify-center p-0 h-[70vh]`}
        >
            <div className="w-full h-full relative rounded-3xl overflow-hidden">{children}</div>
        </div>
    );
};

// --- 2. Data for Services ---

interface ServiceData {
  tag: string;
  title: React.ReactNode;
  description: string[];
  explanation: string;
  accentColor: string;
  VisualComponent: React.FC;
  layout: "left" | "right";
}

const servicesData: ServiceData[] = [
  {
    tag: "WEB DEVELOPMENT",
    title: (
      <>
        Website <br /> Design
      </>
    ),
    description: [
      "Responsive, high-speed websites.",
      "Secure coding and seamless UX.",
      "Custom conversion features.",
    ],
    explanation: "We build more than just websites; we create digital experiences.",
    accentColor: "#2563eb",
    VisualComponent: () => <ServiceImageVisual src={web} alt="Web Development" />,
    layout: "left",
  },
  {
    tag: "SEARCH ENGINE OPTIMIZATION",
    title: (
      <>
        SEO <br /> Strategy
      </>
    ),
    description: [
      "On-page and off-page SEO.",
      "Keyword research.",
      "Improved organic traffic.",
    ],
    explanation:
      "Our SEO strategies are designed to elevate your online presence.",
    accentColor: "#16a34a",
    VisualComponent: () => <ServiceImageVisual src={seo} alt="SEO Strategy" />,
    layout: "left",
  },
  {
    tag: "CREATIVE DESIGN",
    title: (
      <>
        Graphic <br /> Design
      </>
    ),
    description: [
      "Creative visuals tailored to brand.",
      "Consistent designs.",
      "Fast delivery.",
    ],
    explanation: "Creativity is at the heart of our design process.",
    accentColor: "#db2777",
    VisualComponent: () => (
      <ServiceImageVisual src={graphic} alt="Graphic Design" />
    ),
    layout: "left",
  },
  {
    tag: "INTERACTIVE ENTERTAINMENT",
    title: (
      <>
        Game <br /> Development
      </>
    ),
    description: [
      "Engaging gameplay.",
      "Cross-platform compatibility.",
      "Dynamic graphics.",
    ],
    explanation: "We develop captivating games that pull users into immersive worlds.",
    accentColor: "#7c3aed",
    VisualComponent: () => <ServiceImageVisual src={game} alt="Game Development" />,
    layout: "left",
  },
  {
    tag: "ONLINE PRESENCE",
    title: (
      <>
        Digital <br /> Marketing
      </>
    ),
    description: [
      "Data-driven strategies.",
      "Targeted campaigns.",
      "Boosted engagement.",
    ],
    explanation:
      "Our digital marketing services are built on a foundation of data-driven strategies.",
    accentColor: "#ea580c",
    VisualComponent: () => (
      <ServiceImageVisual src={digital} alt="Digital Marketing" />
    ),
    layout: "left",
  },
  {
    tag: "IMMERSIVE EXPERIENCES",
    title: (
      <>
        AR/VR <br /> Development
      </>
    ),
    description: [
      "Custom AR/VR experiences.",
      "Realistic environments.",
      "Advanced solutions.",
    ],
    explanation: "Step into the future with our custom AR/VR solutions.",
    accentColor: "#0891b2",
    VisualComponent: () => <ServiceImageVisual src={arvr} alt="AR/VR Development" />,
    layout: "left",
  },
];

// --- 4. Main Exported Section with Scrollytelling Animation ---

export default function ServicesPage() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const imageWrappers = gsap.utils.toArray<HTMLDivElement>(".service-image-wrapper");
        const contentPanels = gsap.utils.toArray<HTMLDivElement>(".service-content-panel");

        // Set initial state: hide all content panels except the first one
        gsap.set(contentPanels.slice(1), { autoAlpha: 0 });

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom", 
                onUpdate: self => {
                    let activeIndex = -1;
                    imageWrappers.forEach((image, i) => {
                        const rect = image.getBoundingClientRect();
                        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                            activeIndex = i;
                        }
                    });

                    if (activeIndex !== -1) {
                        gsap.to(contentRef.current, {
                            backgroundColor: servicesData[activeIndex].accentColor,
                            duration: 0.5,
                            ease: "power2.inOut",
                        });
                        contentPanels.forEach((panel, i) => {
                            gsap.to(panel, { autoAlpha: i === activeIndex ? 1 : 0, duration: 0.3 });
                        });
                    }
                }
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-20">
             {/* Import fonts from Google Fonts */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&display=swap');
            `,
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- NEW HEADING USAGE --- */}
                <SectionHeading
                    badge="What We Do"
                    titleNormal="Our Premium"
                    titleItalic="Services"
                    subtext="A comprehensive suite of creative and technical solutions designed to elevate your brand."
                    color="teal"
                />

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Scrolling Images */}
                    <div className="lg:col-span-8 space-y-16">
                        {servicesData.map((service, index) => (
                            <div key={index} className="service-image-wrapper">
                                <MainVisualArea layout="left">
                                    <service.VisualComponent />
                                </MainVisualArea>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Content */}
                    <div className="lg:col-span-4 lg:sticky top-[15vh] h-[70vh]">
                        <div ref={contentRef} className="relative w-full h-full rounded-3xl overflow-hidden transition-colors duration-500" style={{backgroundColor: servicesData[0].accentColor}}>
                            {servicesData.map((service, index) => (
                                <div key={index} className="service-content-panel absolute inset-0">
                                    <FeaturedAccentPanel service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}