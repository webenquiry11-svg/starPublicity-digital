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
    rotation: -5, // Slight tilt left
  },
  {
    id: 2,
    title: "Leadership",
    icon: TrendingUp,
    text: "Leadership",
    explanation: "Innovative strategies create trends, inspire action, and help your brand stay ahead of the competition.",
    source: "Our Strategy",
    color: "#1e40af", // Deep Blue
    rotation: 5, // Slight tilt right
  },
  {
    id: 3,
    title: "Satisfaction",
    icon: Heart,
    text: "Satisfaction",
    explanation: "We are dedicated to exceeding your expectations and building trusted relationships through tailored solutions.",
    source: "Our Promise",
    color: "#2a7394",
    rotation: -3, // Slight tilt left
  },
  {
    id: 4,
    title: "Accountability",
    icon: Award,
    text: "Accountability",
    explanation: "We consistently uphold our commitments, providing measurable and reliable results every single time.",
    source: "Our Guarantee",
    color: "#ca8a04", // Golden Yellow
    rotation: 6, // Slight tilt right
  },
];

// --- Awards Section Component ---
const AwardsSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

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

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        // Render a static grid for mobile
        return (
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 relative">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold tracking-widest border border-teal-100 uppercase mb-4 shadow-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Our Values
                        </span>
                        <h2 
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-sm tracking-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            <span className="text-slate-900">Our Core </span>
                            <span className="text-teal-600">Commitment</span>
                        </h2>
                        <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-teal-700 opacity-80 mb-6"></div>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-sans">
                            Excellence in Every Partnership
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {awardCards.map((card) => (
                            <div key={card.id} className="w-full h-full group">
                                <div 
                                    className="relative w-full h-full p-6 bg-white/50 backdrop-blur-md rounded-2xl border border-white/30 flex flex-col justify-between cursor-pointer transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/50"
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
    }
    
  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gray-50 min-h-[600px]" 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- UPDATED ATTRACTIVE HEADING START --- */}
        <div className="text-center mb-24 relative">          
             {/* Small decorative Badge - Using Teal to match the brand theme */}
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-xs font-bold tracking-widest border border-blue-100 uppercase mb-4 shadow-sm" style={{ fontFamily: "'Outfit', sans-serif", color: '#2a7394' }}>
                Our Values
            </span>            

            {/* Main Title with Gradient and Font */}
            <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-sm tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                <span className="text-slate-900">Our Core </span>                
                <span style={{ color: '#2a7394' }}>Commitment</span>
            </h2>
            
            {/* Decorative Underline Bar */}
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[#2a7394] to-blue-500 opacity-80 mb-6"></div>

            {/* Subtitle */}
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-sans">
                Excellence in Every Partnership
            </p>
        </div>
        {/* --- UPDATED ATTRACTIVE HEADING END --- */}

        <div className="relative h-72 w-full">
          {awardCards.map((card) => (
            <div 
              key={card.id} 
              className={`absolute top-1/2 left-1/2 w-72 sm:w-80 h-72 sm:h-80 group`}
              style={{ 
                transform: ` 
                  translateX(calc(-50% + ${scrollProgress * (card.id * 380 - 950)}px))
                  translateY(-50%) 
                  rotate(${
                    (scrollProgress * card.rotation) + (1 - scrollProgress) * (card.id * 2 - 5)
                  }deg)
                  scale(${0.8 + scrollProgress * 0.2})
                `,
                opacity: 0.5 + scrollProgress * 0.5,
              }}
            >
                {/* Glassmorphism Card */}
                <div 
                    className="relative w-full h-full p-6 bg-white/50 backdrop-blur-md rounded-2xl border border-white/30 flex flex-col justify-between cursor-pointer transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/50"
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
      <div className="container mx-auto px-8 sm:px-16 lg:px-24">
        
        {/* --- NUMBERS SECTION HEADING --- */}        
        <div className="text-center mb-16 relative">          
             {/* Small decorative Badge - Updated to Teal */}
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-xs font-bold tracking-widest border border-blue-100 uppercase mb-4 shadow-sm" style={{ fontFamily: "'Outfit', sans-serif", color: '#2a7394' }}>
                Our Impact
            </span>            

            {/* Main Title with Gradient and Font */}
            <h2 
                className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-sm tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-slate-900">Numbers That </span>              
              <span style={{ color: '#2a7394' }}>Define Us</span>
            </h2>
            
            {/* Decorative Underline Bar */}
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[#2a7394] to-blue-500 opacity-80"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start p-4 md:border-r border-gray-200 last:border-r-0 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl group">
              <div className="flex items-start text-5xl sm:text-6xl xl:text-7xl font-light text-slate-800 leading-none group-hover:text-blue-700 transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <AnimatedNumber target={parseInt(stat.number)} />
                <span className="font-bold text-2xl ml-1 mt-2 flex-shrink-0 group-hover:text-blue-400" style={{ color: '#2a7394' }}>
                  +
                </span>
              </div>
              <p className="text-lg text-gray-500 mt-3 font-medium tracking-wide uppercase font-sans group-hover:text-gray-800 transition-colors">{stat.label}</p>
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