"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart,
  Award,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

// --- Data for the Award Cards ---
const awardCards = [
  {
    id: 1,
    title: "Authenticity",
    icon: ShieldCheck,
    text: "Authenticity",
    explanation: "Clear communication and open collaboration ensure you understand what suits your brand best.",
    source: "Our Commitment",
    color: "#6b21a8", // Dark Purple
    rotation: -5, 
  },
  {
    id: 2,
    title: "Leadership",
    icon: TrendingUp,
    text: "Leadership",
    explanation: "Innovative strategies create trends, inspire action, and help your brand stay ahead of the competition.",
    source: "Our Strategy",
    color: "#1e40af", // Deep Blue
    rotation: 5, 
  },
  {
    id: 3,
    title: "Satisfaction",
    icon: Heart,
    text: "Satisfaction",
    explanation: "We are dedicated to exceeding your expectations and building trusted relationships through tailored solutions.",
    source: "Our Promise",
    color: "#2a7394",
    rotation: -3, 
  },
  {
    id: 4,
    title: "Accountability",
    icon: Award,
    text: "Accountability",
    explanation: "We consistently uphold our commitments, providing measurable and reliable results every single time.",
    source: "Our Guarantee",
    color: "#ca8a04", // Golden Yellow
    rotation: 6, 
  },
];

// --- Awards Section Component ---
const AwardsSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isCompact, setIsCompact] = useState(false);
    
    // Config to adjust how wide cards spread based on screen size
    const [spreadConfig, setSpreadConfig] = useState({ multiplier: 320, subtractor: 800 });

    useEffect(() => {
        const sectionNode = sectionRef.current;
        if (!sectionNode) return;

        const handleScroll = () => {
            const rect = sectionNode.getBoundingClientRect();
            const scrollStart = rect.top - window.innerHeight;
            const scrollDistance = window.innerHeight;

            let progress = -scrollStart / scrollDistance;
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isCompact]);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            // CHANGED: We now treat anything under 1100px (including Nest Hub at 1024px)
            // as "Compact" mode. This forces the Grid layout which guarantees visibility.
            // The animation is reserved for screens > 1100px.
            setIsCompact(width < 1100);

            // Default config for Desktop
            setSpreadConfig({ multiplier: 320, subtractor: 800 });
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // --- COMPACT VIEW (Grid Layout for Mobile & Tablet/Nest Hub) ---
    if (isCompact) {
        return (
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-12 relative">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold tracking-widest border border-teal-100 uppercase mb-4 shadow-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Our Values
                        </span>
                        <h2 
                            className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-sm tracking-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            <span className="text-slate-900">Our Core </span>
                            <span className="text-teal-600">Commitment</span>
                        </h2>
                        <div className="w-20 h-1.5 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-teal-700 opacity-80 mb-4"></div>
                        <p className="text-base text-slate-500 max-w-xl mx-auto font-sans">
                            Excellence in Every Partnership
                        </p>
                    </div>

                    {/* GRID LOGIC FIX:
                       - Mobile: grid-cols-1 (1 card per row)
                       - Tablet/Nest Hub: grid-cols-2 (2 cards per row) 
                       This ensures 4 cards fit perfectly in a 2x2 grid on a 1024px screen.
                    */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {awardCards.map((card) => (
                            <div key={card.id} className="w-full group">
                                <div 
                                    className="relative w-full h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                    style={{ borderLeft: `4px solid ${card.color}` }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: card.color }}>
                                            {card.icon && <card.icon size={24} className="text-white" strokeWidth={2} />}
                                        </div>
                                        <p className="text-xl md:text-2xl font-bold text-slate-800" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.text}</p>
                                    </div>
                                    <p className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed font-sans">{card.explanation}</p>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans mt-auto">{card.source}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
    
  // --- DESKTOP VIEW (> 1100px) (Animated Spread) ---
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-50 min-h-[700px]" 
    >
      <div className="container mx-auto px-8">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-24 relative">           
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-xs font-bold tracking-widest border border-blue-100 uppercase mb-4 shadow-sm" style={{ fontFamily: "'Outfit', sans-serif", color: '#2a7394' }}>
                Our Values
            </span>            

            <h2 
                className="text-6xl font-bold mb-6 drop-shadow-sm tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                <span className="text-slate-900">Our Core </span>                
                <span style={{ color: '#2a7394' }}>Commitment</span>
            </h2>
            
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[#2a7394] to-blue-500 opacity-80 mb-6"></div>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-sans">
                Excellence in Every Partnership
            </p>
        </div>

        <div className="relative h-80 w-full">
          {awardCards.map((card) => (
            <div 
              key={card.id} 
              className={`absolute top-1/2 left-1/2 w-80 h-80 group`}
              style={{ 
                transform: ` 
                  translateX(calc(-50% + ${scrollProgress * (card.id * spreadConfig.multiplier - spreadConfig.subtractor)}px))
                  translateY(-50%) 
                  rotate(${
                    (scrollProgress * card.rotation) + (1 - scrollProgress) * (card.id * 2 - 5)
                  }deg)
                  scale(${0.8 + scrollProgress * 0.2})
                `,
                opacity: 0.5 + scrollProgress * 0.5,
                zIndex: Math.round(scrollProgress * 10) + card.id,
              }}
            >
                {/* Glassmorphism Card */}
                <div 
                    className="relative w-full h-full p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 flex flex-col justify-between cursor-pointer transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/60 group-hover:bg-white/90"
                    style={{ boxShadow: `0 0 20px ${card.color}20, inset 0 0 0 1px ${card.color}00` }}
                >
                    <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 25px ${card.color}80, inset 0 0 0 1px ${card.color}80` }}></div>

                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: card.color }}>
                            {card.icon && <card.icon size={28} className="text-white" strokeWidth={2} />}
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto text-left">
                        <p className="text-2xl font-bold text-slate-800 mb-2 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.text}</p>
                        <p className="text-base text-slate-600 mb-3 leading-relaxed font-sans">{card.explanation}</p>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-auto font-sans">{card.source}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber: React.FC<{ target: number }> = ({ target }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = target;
          const duration = 1500;
          const increment = end / (duration / 16);

          const updateNumber = () => {
            start += increment;
            if (start < end) {
              setCurrent(Math.ceil(start));
              requestAnimationFrame(updateNumber);
            } else {
              setCurrent(end);
            }
          };
          requestAnimationFrame(updateNumber);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{target < 10 && current < 10 ? `0${current}` : current}</span>;
};

const StoryByNumbersSection = () => {
  const stats = [
    { number: "65", label: "Experts" },
    { number: "300", label: "Campaigns" },
    { number: "13", label: "Years" },
    { number: "14", label: "Honors" },
    { number: "24", label: "Industries" },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gray-50/50"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(0, 0, 0, 0.03)'/%3E%3C/svg%3E\")",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* --- NUMBERS SECTION HEADING --- */}        
        <div className="text-center mb-12 md:mb-16 relative">           
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-xs font-bold tracking-widest border border-blue-100 uppercase mb-4 shadow-sm" style={{ fontFamily: "'Outfit', sans-serif", color: '#2a7394' }}>
                Our Impact
            </span>            

            <h2 
                className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-sm tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-slate-900">Numbers That </span>              
              <span style={{ color: '#2a7394' }}>Define Us</span>
            </h2>
            
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[#2a7394] to-blue-500 opacity-80"></div>
        </div>

        {/* Responsive Grid: 2 cols on tablet, 3 on laptop, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-center lg:items-start p-4 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl group border-b md:border-b-0 border-gray-100 lg:border-r last:border-0 last:border-b-0">
              <div className="flex items-start text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-800 leading-none group-hover:text-blue-700 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <AnimatedNumber target={parseInt(stat.number)} />
                <span className="font-bold text-xl md:text-2xl ml-1 mt-1 md:mt-2 flex-shrink-0 group-hover:text-blue-400" style={{ color: '#2a7394' }}>
                  +
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-500 mt-2 md:mt-3 font-medium tracking-wide uppercase font-sans group-hover:text-gray-800 transition-colors text-center lg:text-left">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function FaqPage() {
  return (
    <>
      {/* Import fonts from Google Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap');
      `}} />
      
      <AwardsSection />
      <StoryByNumbersSection />
    </>
  );
}