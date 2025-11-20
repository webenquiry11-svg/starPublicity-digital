"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Triangle, // Used as a placeholder icon for the DNA/INDIGO logos
  CheckCircle 
} from 'lucide-react';

// --- Data for the Award Cards ---
const awardCards = [
  {
    id: 1,
    title: "DNA",
    icon: Triangle,
    text: "Best Design Studio.",
    source: "DNA Paris",
    color: "#6b21a8", // Dark Purple
    rotation: -5, // Slight tilt left
  },
  {
    id: 2,
    title: "Elephant", // Placeholder for the Elephant logo
    icon: null,
    text: "Best Design Project.",
    source: "Kyooiitus",
    color: "#1e40af", // Deep Blue
    rotation: 5, // Slight tilt right
  },
  {
    id: 3,
    title: "INDIGO",
    icon: Triangle,
    text: "Gold Winner in UX, Interface & Navigation",
    source: "IndigoAward.com",
    color: "#14b8a6", // Mint Green/Teal
    rotation: -3, // Slight tilt left
  },
  {
    id: 4,
    title: "C", // Placeholder for the "C" logo
    icon: CheckCircle,
    text: "4.9 ★ Top Rated On Clutch",
    source: "Clutch",
    color: "#ca8a04", // Golden Yellow
    rotation: 6, // Slight tilt right
  },
];

// --- Awards Section Component ---
const AwardsSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sectionNode = sectionRef.current;
        if (!sectionNode) return;

        const handleScroll = () => {
            const rect = sectionNode.getBoundingClientRect();
            // The animation will happen as the section scrolls through the middle of the viewport
            const scrollStart = rect.top - window.innerHeight;
            const scrollDistance = window.innerHeight;

            // Calculate progress from 0 to 1
            let progress = -scrollStart / scrollDistance;
            progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Pattern to mimic the faint circles behind the cards
    const cardPatternStyle = {
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.03) 10%, transparent 11%)`,
        backgroundSize: '40px 40px',
    };

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gray-50 min-h-[600px]" 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative h-72">
          {awardCards.map((card) => (
            <div 
              key={card.id}
              className={`absolute top-1/2 left-1/2 w-64 h-64 p-6 bg-white text-gray-900 shadow-lg border border-gray-100 flex flex-col justify-between rounded-md cursor-pointer`}
              style={{ 
                // Interpolate transform properties based on scrollProgress
                transform: `
                  translateX(calc(-50% + ${scrollProgress * (card.id * 320 - 800)}px)) 
                  translateY(-50%) 
                  rotate(${(scrollProgress * card.rotation) + (1 - scrollProgress) * (card.id * 2 - 5)}deg) 
                  scale(${0.8 + scrollProgress * 0.2})
                `,
                opacity: 0.5 + scrollProgress * 0.5,
              }}
            >
                {/* --- The Hanging String (Visual Effect) --- */}
                <div 
                    className={`absolute top-[-30px] w-0.5 h-8 bg-gray-300 left-1/2 transform -translate-x-1/2 transition-opacity duration-500`}
                    style={{ opacity: scrollProgress }}
                />

                {/* --- Internal Pattern/Noise --- */}
                <div 
                    className="absolute inset-0 opacity-50"
                    style={cardPatternStyle} 
                />
                
                {/* --- Top Content (Logo/Title) --- */}
                <div className="relative z-10 mb-4">
                    <div className="text-3xl font-extrabold uppercase mb-2 leading-none" style={{ color: card.color }}>
                        {card.icon && <card.icon size={36} className="mb-2 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />}
                        {!card.icon && card.title === "Elephant" && <div className="text-5xl mb-2">🐘</div>}
                        {card.title !== "Elephant" && card.title !== "C" ? card.title : null}
                    </div>
                </div>

                {/* --- Bottom Content (Text & Source) --- */}
                <div className="relative z-10 mt-auto text-left">
                    <p className="text-xl font-semibold text-gray-800 mb-3 leading-snug">{card.text}</p>
                    <p className="text-xs font-medium text-gray-500">{card.source}</p>
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
    { number: "80", label: "Team" },
    { number: "230", label: "Projects" },
    { number: "09", label: "Years" },
    { number: "25", label: "Industries" },
    { number: "10", label: "Awards" },
  ];

  return (
    <section
      className="py-12 bg-gray-50/50"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40'%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(0, 0, 0, 0.03)'/%3E%3C/svg%3E\")",
      }}
    >
      <div className="container mx-auto px-8 sm:px-16 lg:px-24">
        <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-12">
          <span className="italic font-serif font-normal">Our</span> STORY, BY NUMBERS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col p-4 border-gray-200 border-r [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(5n)]:border-r-0">
              <div className="flex items-start text-6xl sm:text-7xl font-light text-gray-900 leading-none">
                <AnimatedNumber target={parseInt(stat.number)} />
                <span className="text-[#256482] font-bold text-2xl ml-1 mt-1 flex-shrink-0">
                  +
                </span>
              </div>
              <p className="text-lg text-gray-700 mt-2">{stat.label}</p>
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
      <AwardsSection />
      <StoryByNumbersSection />
    </>
  );
}