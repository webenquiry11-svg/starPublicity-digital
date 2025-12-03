"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Playfair_Display, DM_Sans } from "next/font/google";

// Configure Fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

gsap.registerPlugin(ScrollTrigger);

// --- 1. CURLY ARROW COMPONENT (With Ref for Animation) ---
// We pass a ref here to animate the paths specifically
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
    {/* Loop Path */}
    <path
      className="arrow-path"
      d="M 10 60 C 20 40, 40 40, 40 60 C 40 80, 20 80, 20 60 C 20 30, 60 30, 70 50 C 80 70, 90 50, 95 40"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Arrow Head */}
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
interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const services: Service[] = [
  // --- PAGE 1 ---
  {
    id: 1,
    title: "Digital Marketing",
    category: "Marketing",
    description: "We drive targeted traffic and generate leads through strategic digital campaigns tailored to your audience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "SEO",
    category: "Optimization",
    description: "Improve your search rankings and visibility with our data-driven keyword strategies and technical auditing.",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=200&auto=format&fit=crop", 
  },
  {
    id: 3,
    title: "Immersive Tech",
    category: "AR / VR",
    description: "Create unforgettable experiences with cutting-edge augmented and virtual reality solutions for your brand.",
    image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=200&auto=format&fit=crop", 
  },
  // --- PAGE 2 ---
  {
    id: 4,
    title: "Web Development",
    category: "Development",
    description: "We build fast, responsive, and secure websites that provide a seamless user experience across all devices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200&auto=format&fit=crop", 
  },
  {
    id: 5,
    title: "Product Ad Shoot",
    category: "Photography",
    description: "Showcase your products in the best light with high-end commercial photography and video production.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=200&auto=format&fit=crop", 
  },
  {
    id: 6,
    title: "Logo Designing",
    category: "Branding",
    description: "Establish a strong brand identity with a unique, memorable logo designed to stand the test of time.",
    image: "https://images.unsplash.com/photo-1626785774573-4b7993143a4d?q=80&w=200&auto=format&fit=crop", 
  },
];

// --- 3. Service Card ---
const ServiceCard = ({ item }: { item: Service }) => {
  return (
    <div className="bg-white p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] relative border-t-[5px] border-teal-600 h-full flex flex-col min-h-[350px] group transition-transform hover:-translate-y-2 duration-300 z-0">
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-teal-600 fill-teal-600" />
        ))}
      </div>

      <p className={`text-[#767676] leading-relaxed mb-8 font-normal text-[17px] ${dmSans.className}`}>
        {item.description}
      </p>

      <div className="mt-auto">
        <h4 className={`font-bold text-black text-lg uppercase tracking-wide ${playfair.className}`}>
          {item.title}
        </h4>
        <span className={`text-teal-600 text-xs font-bold uppercase tracking-widest mt-1 block ${dmSans.className}`}>
          {item.category}
        </span>
      </div>

      <div className="absolute -bottom-8 -right-8 z-20">
        <div className="relative w-20 h-20 rounded-full border-[6px] border-[#f5f7fa] overflow-hidden shadow-lg bg-white">
           <Image 
             src={item.image} 
             alt={item.title}
             fill
             sizes="80px"
             className="object-cover"
           />
        </div>
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
  const [isPaused, setIsPaused] = useState(false);
  const directionRef = useRef<"next" | "prev">("next");

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  // --- ENTRANCE ANIMATION (The "Attractive" Part) ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Starts when top of section is 60% down the viewport
        }
      });

      // 1. Badge Pop
      tl.from(".badge-anim", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      });

      // 2. Text Reveal (Rise up effect)
      tl.from(".heading-line", {
        y: "100%",
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.1
      }, "-=0.3");

      // 3. Arrow "Draw" Animation
      if (arrowRef.current) {
        const paths = arrowRef.current.querySelectorAll(".arrow-path");
        tl.fromTo(paths, 
          { strokeDasharray: 300, strokeDashoffset: 300 },
          { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" },
          "-=0.5" // Start overlap with text
        );
      }

      // 4. Description Fade Up
      tl.from(".desc-anim", {
        y: 20,
        opacity: 0,
        duration: 0.5
      }, "-=1");

      // 5. Buttons Pop
      tl.from(".btn-anim", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3");

      // 6. Cards Entrance (Staggered from right)
      tl.from(cardsRef.current?.children || [], {
        x: 50,
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.8");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // --- Pagination Logic (Same as before) ---
  const handlePageChange = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);
    directionRef.current = direction;

    const currentCards = cardsRef.current?.children;
    const exitX = direction === "next" ? -100 : 100;

    gsap.to(currentCards || [], {
      x: exitX,
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      stagger: 0.05,
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
    const enterFromX = directionRef.current === "next" ? 100 : -100;
    gsap.fromTo(cardsRef.current.children,
      { x: enterFromX, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", onComplete: () => setIsAnimating(false) }
    );
  }, [currentPage]);

  useEffect(() => {
    if (isPaused || isAnimating) return;
    const interval = setInterval(() => handlePageChange("next"), 4000); 
    return () => clearInterval(interval);
  }, [isPaused, isAnimating, currentPage]);

  const visibleServices = services.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <section ref={containerRef} className="relative py-16 bg-[#f5f7fa] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-1/2 -translate-y-1/2 -left-[10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border-[50px] border-[#eef0f5]"></div>
         <div className="absolute top-1/2 -translate-y-1/2 -left-[20%] w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] rounded-full border-[40px] border-[#eef0f5] opacity-60"></div>
         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full border-[60px] border-[#eef0f5] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-4 lg:pr-8 pt-8 lg:sticky lg:top-24">
            <div className="relative">
              
              {/* Badge */}
              <div className="flex items-center gap-3 mb-5 badge-anim origin-left">
                <div className="bg-teal-600 w-10 h-10 flex items-center justify-center rounded-tl-xl rounded-br-xl shadow-sm">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                </div>
                <span className={`text-teal-600 font-bold tracking-[0.2em] text-xs uppercase ${dmSans.className}`}>
                  Our Expertise
                </span>
              </div>

              {/* Heading with Reveal Mask */}
              <div ref={textRevealRef} className="relative inline-block mb-6 w-full max-w-[300px] lg:max-w-full">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] uppercase ${playfair.className}`}>
                  {/* Mask Wrapper for Line 1 */}
                  <div className="overflow-hidden">
                    <div className="heading-line inline-block">What We</div>
                  </div>
                  {/* Mask Wrapper for Line 2 */}
                  <div className="overflow-hidden">
                    <div className="heading-line inline-block">Offer</div>
                  </div>
                </h2>
                <CurlyArrow ref={arrowRef} />
              </div>

              {/* Description */}
              <p className={`text-[#767676] text-lg font-normal mb-10 leading-relaxed max-w-sm desc-anim ${dmSans.className}`}>
                From digital strategy to immersive experiences, we provide the tools you need to grow your business.
              </p>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={() => handlePageChange("prev")}
                  disabled={isAnimating}
                  className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white text-black hover:bg-teal-600 hover:text-white transition-all duration-300 group cursor-pointer btn-anim"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => handlePageChange("next")}
                  disabled={isAnimating}
                  className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white text-black hover:bg-teal-600 hover:text-white transition-all duration-300 group cursor-pointer btn-anim"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-8 overflow-hidden">
            <div 
              ref={cardsRef} 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-4 pr-10 pb-20 cursor-grab active:cursor-grabbing"
            >
              {visibleServices.map((item) => (
                <div key={item.id} className="service-card">
                   <ServiceCard item={item} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}