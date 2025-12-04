"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display, DM_Sans } from "next/font/google";

// Import local images
import digitalMarketingImg from "./_images/digital1.png";
import seoImg from "./_images/seo.svg";
import arVrImg from "./_images/game.svg";
import webDevImg from "./_images/web1.png";
import photographyImg from "./_images/graphic1.jpeg";
import brandingImg from "./_images/fevicon.png";

// Configure Fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800", "900"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

gsap.registerPlugin(ScrollTrigger);

// --- 1. CURLY ARROW COMPONENT ---
const CurlyArrow = React.forwardRef<SVGSVGElement>((props, ref) => (
  <svg
    ref={ref}
    width="140"
    height="140"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -right-12 top-2 md:-right-8 md:-top-2 text-black rotate-[-10deg] z-10 pointer-events-none"
  >
    <path
      className="arrow-path"
      d="M 10 60 C 20 40, 40 40, 40 60 C 40 80, 20 80, 20 60 C 20 30, 60 30, 70 50 C 80 70, 90 50, 95 40"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      className="arrow-path"
      d="M 85 35 L 95 40 L 92 55"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
CurlyArrow.displayName = "CurlyArrow";

// --- 2. Data Structure ---
const services = [
  {
    id: 1,
    title: "Digital Marketing",
    category: "Marketing",
    description: "We drive targeted traffic and generate leads through strategic digital campaigns tailored to your audience.",
    image: digitalMarketingImg.src,
  },
  {
    id: 2,
    title: "SEO Optimization",
    category: "Growth",
    description: "Improve your search rankings and visibility with our data-driven keyword strategies and technical auditing.",
    image: seoImg.src,
  },
  {
    id: 3,
    title: "Immersive Technology",
    category: "AR / VR",
    description: "Create unforgettable experiences with cutting-edge augmented and virtual reality solutions for your brand.",
    image: arVrImg.src,
  },
  {
    id: 4,
    title: "Website Development",
    category: "Tech",
    description: "We build fast, responsive, and secure websites that provide a seamless user experience across all devices.",
    image: webDevImg.src,
  },
  {
    id: 5,
    title: "Product Ad Shoot",
    category: "Production",
    description: "Showcase your products in the best light with high-end commercial photography and video production.",
    image: photographyImg.src,
  },
  {
    id: 6,
    title: "Logo Designing",
    category: "Branding",
    description: "Establish a strong brand identity with a unique, memorable logo designed to stand the test of time.",
    image: brandingImg.src,
  },
];

// --- 3. UPDATED SERVICE CARD ---
const ServiceCard = ({ item, index }: { item: any, index: number }) => {
  return (
    <div className="group relative w-full h-[450px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
      
      {/* TOP SECTION: Image + Hover Overlay 
          (This part handles the animation)
      */}
      <div className="relative flex-grow bg-gray-50/50 overflow-hidden">
        
        {/* The Image Itself */}
        <div className="w-full h-full p-6 flex items-center justify-center">
             <div className="relative w-full h-48 transition-transform duration-500 group-hover:scale-105">
                <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>
        </div>

        {/* THE HOVER OVERLAY 
            (Now localized inside this top div only)
        */}
        <div className="absolute inset-0 bg-[#256482] z-10 flex flex-col items-center justify-center p-6 text-center translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            <div className="mb-2 text-cyan-300">
                <ArrowUpRight size={32} />
            </div>
            
            <p className={`text-white/95 text-sm leading-relaxed font-medium ${dmSans.className}`}>
                {item.description}
            </p>
            
            <span className="mt-4 text-[10px] font-bold text-white uppercase tracking-widest border-b border-white/40 pb-1">
                Learn More
            </span>
        </div>
      </div>

      {/* BOTTOM SECTION: Static Title 
          (This part remains visible and white on hover)
      */}
      <div className="h-28 flex flex-col items-center justify-center bg-white border-t border-gray-100 px-4 text-center relative z-20">          
          <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${dmSans.className}`} style={{ color: '#2a7394' }}>
              {item.category}
          </span>          
          <h4 className={`text-xl font-extrabold text-slate-900 uppercase leading-tight ${playfair.className}`}>
              {item.title}
          </h4>
      </div>

    </div>
  );
};

// --- 4. Main Section Component ---
export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const textRevealRef = useRef<HTMLDivElement>(null);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const directionRef = useRef<"next" | "prev">("next");

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  // --- ENTRANCE ANIMATION ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", 
        }
      });

      tl.from(".badge-anim", { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
      tl.from(".heading-line", { y: "100%", duration: 0.8, ease: "power4.out", stagger: 0.1 }, "-=0.3");

      if (arrowRef.current) {
        const paths = arrowRef.current.querySelectorAll(".arrow-path");
        tl.fromTo(paths, 
          { strokeDasharray: 300, strokeDashoffset: 300 },
          { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
          "-=0.5"
        );
      }

      tl.from(".desc-anim", { y: 20, opacity: 0, duration: 0.5 }, "-=1");
      tl.from(".btn-anim", { scale: 0, opacity: 0, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.3");
      
      tl.from(cardsRef.current?.children || [], {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out"
      }, "-=0.8");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // --- Pagination Logic ---
  const handlePageChange = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);
    directionRef.current = direction;

    const currentCards = cardsRef.current?.children;
    const exitX = direction === "next" ? -50 : 50; 

    gsap.to(currentCards || [], {
      x: exitX, 
      opacity: 0, 
      duration: 0.3, 
      ease: "power2.in",
      onComplete: () => {
        setCurrentPage((prev) => {
          if (direction === "next") return prev >= totalPages - 1 ? 0 : prev + 1;
          else return prev <= 0 ? totalPages - 1 : prev - 1;
        });
      }
    });
  };

  useEffect(() => {
    if (!cardsRef.current || isAnimating === false) return;
    const enterFromX = directionRef.current === "next" ? 50 : -50;
    
    gsap.set(cardsRef.current.children, { x: enterFromX, opacity: 0 });

    gsap.to(cardsRef.current.children, { 
      x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", 
      onComplete: () => setIsAnimating(false) 
    });
  }, [currentPage]);

  const visibleServices = services.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <section ref={containerRef} className="relative py-24 bg-[#f5f7fa] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-1/2 -translate-y-1/2 -left-[10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border-[50px] border-[#eef0f5]"></div>
         <div className="absolute top-1/2 -translate-y-1/2 -left-[20%] w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] rounded-full border-[40px] border-[#eef0f5] opacity-60"></div>
         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full border-[60px] border-[#eef0f5] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-4 lg:pr-8">
            <div className="relative">
              
              <div className="flex items-center gap-3 mb-5 badge-anim origin-left">
                <div className="w-10 h-10 flex items-center justify-center rounded-tl-xl rounded-br-xl shadow-sm" style={{ backgroundColor: '#2a7394' }}>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                </div>
                <span className={`font-bold tracking-[0.2em] text-xs uppercase ${dmSans.className}`} style={{ color: '#2a7394' }}>
                  Our Expertise
                </span>
              </div>

              <div ref={textRevealRef} className="relative inline-block mb-6 w-full max-w-[300px] lg:max-w-full">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] uppercase ${playfair.className}`}>
                  <div className="overflow-hidden"><div className="heading-line inline-block">What We</div></div>
                  <div className="overflow-hidden"><div className="heading-line inline-block">Offer</div></div>
                </h2>
                <CurlyArrow ref={arrowRef} />
              </div>

              <p className={`text-[#767676] text-lg font-normal mb-10 leading-relaxed max-w-sm desc-anim ${dmSans.className}`}>
                From digital strategy to immersive experiences, we provide the tools you need to grow your business.
              </p>

              {/* --- NAVIGATION BUTTONS --- */}
              <div className="flex gap-4">
                <button onClick={() => handlePageChange("prev")} disabled={isAnimating} className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white text-black hover:bg-[#2a7394] hover:text-white transition-all duration-300 group cursor-pointer btn-anim">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={() => handlePageChange("next")} disabled={isAnimating} className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white text-black hover:bg-[#2a7394] hover:text-white transition-all duration-300 group cursor-pointer btn-anim">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (CARDS) --- */}
          <div className="lg:col-span-8 w-full relative">
            <div 
              ref={cardsRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
              {visibleServices.map((item, i) => (
                <div key={item.id} className="service-card w-full">
                  <ServiceCard item={item} index={i + (currentPage * ITEMS_PER_PAGE)} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}