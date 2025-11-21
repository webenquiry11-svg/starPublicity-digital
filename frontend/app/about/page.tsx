"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Assuming you have these image paths defined correctly
import whyChoose from "../../public/Star Digital Website Images/why choose.png"; 
import whyChoose1 from "../../public/Star Digital Website Images/why choose1.png"; 

import { 
  PlayCircle, 
  Play,
  Check,
  Calendar, 
} from 'lucide-react';

// Data for the new "Stats Bar" section (for the dark theme section)
const statsData = [
  {
    number: 300,
    suffix: '+',
    text: 'Client Projects Completed', // Updated text for relevance
    color: 'text-[#256482]', 
  },
  {
    number: 2,
    suffix: 'M+',
    text: 'Reach in Square Feet (Outdoor)', // Updated text for relevance
    color: 'text-[#256482]',
  },
  {
    number: 90,
    suffix: ' day',
    text: 'Average Campaign Launch Time', // Updated text for relevance
    color: 'text-[#256482]',
  },
];

// Data for the Top Security Cards
const securityCards = [
    {
        title: "Centralized access management",
        description: "Secure your organization with SSO, SCIM, and domain capture.",
    },
    {
        title: "Enterprise-grade security",
        description: "Maintain SOC 2 Type II, SOC 3, GDPR, and CCPA compliance.",
    },
];

// Data for the Bottom Timeline Section
const timelineSteps = [
    {
        step: "STEP 1",
        title: "First workflows",
        points: [
            "Partner with our AI experts",
            "Connect core enterprise systems",
            "Deploy your initial automations",
        ],
        example: "Benchmark Mortgage reduced compliance reviews from days to minutes",
    },
    {
        step: "STEP 2",
        title: "Team expansion",
        points: [
            "Set up permissions + allowed apps",
            "Train additional builders",
            "Keep tabs on AI usage + impact",
        ],
        example: "Okta builds workflows in 2 hours, not full engineering sprints",
    },
    {
        step: "STEP 3",
        title: "Enterprise scale",
        points: [
            "Launch cross-functional workflows",
            "Roll out to more departments",
            "Deliver ROI with AI",
        ],
        example: "Remote.com automated more than 11 million tasks last year",
    },
];

// --- Animated Number Component (Unchanged) ---
interface AnimatedNumberProps {
  target: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, duration = 2000 }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const isFloat = target % 1 !== 0;

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16); // ~60fps

    const updateNumber = () => {
      start += increment;
      if (start < end) {
        setCurrentNumber(isFloat ? parseFloat(start.toFixed(1)) : Math.ceil(start));
        requestAnimationFrame(updateNumber);
      } else {
        setCurrentNumber(end);
      }
    };

    const animationFrame = requestAnimationFrame(updateNumber);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, isFloat]);

  return <>{currentNumber}</>;
};

const AboutSection: React.FC = () => {
  const [isStatsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timelineNode = timelineRef.current;
    if (!timelineNode) return;

    const handleScroll = () => {
      const rect = timelineNode.getBoundingClientRect();
      const timelineHeight = timelineNode.offsetHeight;
      
      // Calculate how far the user has scrolled into the timeline section
      // Start when the top of the timeline is at 80% of the viewport height
      const scrollStart = rect.top - window.innerHeight * 0.8;
      // The total scrollable distance within the component
      const scrollDistance = timelineHeight;

      let progress = -scrollStart / scrollDistance;
      progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* === 1. NEW SECTION (Replaces Core Features) === */}
      <div className="bg-white text-gray-900">
            
            {/* === SECTION 1A: TOP SECURITY HERO & CARDS === */}
            <section className={`pt-20 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden`}>
                <div className="container mx-auto px-6 sm:px-12 lg:px-20">
                    
                    {/* Top Marker */}
                    <p className="text-sm font-bold uppercase tracking-wider mb-2 text-[#256482]">
                        — SAFE BY DESIGN
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Column: Headline and CTA */}
                        <div className="order-2 lg:order-1">
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
                                Complete security, visibility, and control
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-10">
                                Your teams are already using AI. Give them enterprise-grade
                                infrastructure instead of ungoverned experiments.
                            </p>
                            
                            {/* Button */}
                            <Link 
                                href="#"
                                className="inline-flex items-center bg-[#2a7394] text-white font-medium py-3 px-8 rounded-md 
                                transition-all duration-300 ease-out hover:bg-[#225d7a] hover:-translate-y-0.5"
                            >
                                Learn more about Enterprise security →
                            </Link>
                        </div>
                        
                        {/* Right Column: Imagery (Placeholder) */}
                        <div className="order-1 lg:order-2 relative h-96 w-full flex justify-center lg:justify-end">
                            <div className="w-[80%] h-full rounded-lg shadow-xl relative overflow-hidden">
                                <Image 
                                    src={whyChoose}
                                    alt="Team collaborating on a project"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Security Cards (Below Hero) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        {securityCards.map((card, index) => (
                            <div key={index} className="bg-white p-6 md:p-8 rounded-lg border border-gray-100 shadow-md">
                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-gray-600 mb-4">{card.description}</p>
                                {/* Placeholder for logos / badges */}
                                <div className="h-10 w-full bg-gray-50 rounded mt-4 flex items-center p-2">
                                    <span className="text-sm text-gray-500">App Icons / Compliance Logos Here</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <hr className="border-gray-100" />
            
            {/* === SECTION 1B: BOTTOM AI IMPACT TIMELINE === */}
            <section className={`py-20 md:py-32 bg-[#2a7394]`}>
                <div className="container mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Column: Headline and CTA */}
                        <div className="w-full lg:w-4/5 text-left lg:mt-24">
                            <h2 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
                                Turn AI into <span className="text-cyan-300">impact</span> in weeks, not months
                            </h2>
                            <p className="text-xl text-blue-100 leading-relaxed mb-10">
                                Our team of AI automation experts will help you
                                plan, deploy, and achieve results this quarter
                                instead of next.
                            </p>
                            
                            {/* Button */}
                            <Link 
                                href="#"
                                className="group inline-flex items-center bg-white text-[#2a7394] font-semibold py-4 px-10 rounded-lg text-lg 
                                transition-all duration-300 ease-out hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                <Calendar className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                                <span>Schedule time with our team</span>
                            </Link>
                        </div>
                        
                        {/* Right Column: Timeline Steps */}
                        <div ref={timelineRef} className="w-full relative space-y-6">
                            <div className="absolute left-4 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-blue-400/50 hidden md:block" />
                            
                            {/* Moving Progress Dot */}
                            <div className="absolute left-[5px] top-4 w-6 h-6 bg-cyan-300 rounded-full shadow-md hidden md:block"
                                 style={{
                                     // Use calc to move the dot along the height of the timeline container
                                     // The 'top-4' and '- 1.5rem' accounts for the padding/offset of the timeline line
                                     top: `calc(${scrollProgress * 100}% - 1.5rem * ${scrollProgress})`,
                                 }}
                            />
                            
                            {timelineSteps.map((step, index) => (
                                <div 
                                    key={index} 
                                    className="group relative pl-12"
                                >
                                    
                                    {/* Timeline Marker (small dot on the line) */}
                                    <div className="absolute left-0 top-0 w-8 h-8 bg-[#2a7394] rounded-full flex items-center justify-center z-10">
                                        <div className="w-4 h-4 bg-cyan-300 rounded-full transition-transform duration-300 group-hover:scale-125" />
                                    </div>

                                    <div 
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 overflow-hidden"
                                    >
                                        <div className="absolute -right-4 -top-4 text-8xl font-extrabold text-gray-100/80 select-none z-0">
                                            0{index + 1}
                                        </div>
                                        <div className="relative z-10">
                                            <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 bg-[#256482]/10 text-[#256482]">{step.step}</span>
                                            
                                            <ul className="list-none space-y-3 mb-5">
                                                {step.points.map((point, pIndex) => (
                                                    <li key={pIndex} className="text-gray-600 flex items-center gap-3">
                                                        <Check className="w-5 h-5 text-[#256482] flex-shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="text-sm text-gray-500 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                                "{step.example}"
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>

      {/* --- START OF NEW LIGHT-THEMED SECTION --- */}
      <div 
        className="text-gray-900"
        style={{
          backgroundColor: '#f9fafb', // This is tailwind's gray-50
          backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      >
        
        {/* === 2. TEAM INTRODUCTION (Top Half of Image - Replaces old "Why Brands Trust Us" Intro) === */}
        <section className={`py-24 md:py-32 relative overflow-hidden`}>
          
          {/* Visible Glowing Blobs (matching the other section) */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-400 rounded-full opacity-20 blur-xl -z-0"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FF6B50] rounded-full opacity-20 blur-xl -z-0"></div>

          {/* Blobs for the bottom-right image */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 rounded-full opacity-20 blur-xl -z-0"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FF6B50] rounded-full opacity-20 blur-xl -z-0"></div>

          {/* Image 1: Top Left */}
          <div className="hidden lg:block absolute top-16 left-16 w-64 h-40 rounded-lg overflow-hidden shadow-2xl transform -rotate-6">
            <Image 
              src={whyChoose}
              alt="Team working together"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2: Bottom Right */}
          <div className="hidden lg:block absolute bottom-16 right-16 w-64 h-40 rounded-lg overflow-hidden shadow-2xl transform rotate-6">
            <Image 
              src={whyChoose1}
              alt="Team in a meeting"
              fill
              className="object-cover"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
                Get to know the team at<br/>**Star Publicity Group.**
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We're a tight-knit team of digital experts dedicated to helping brands
                achieve scalable growth. We seamlessly blend strategic thinking,
                creative excellence, and advanced technology to deliver integrated
                solutions that drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    className="
                      bg-[#2a7394] text-white font-medium py-3 px-8 rounded-md 
                      transition-all duration-300 ease-out
                      hover:bg-[#225d7a] hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Learn More
                  </button>
                  <button 
                    className="
                      flex items-center justify-center gap-2 border border-gray-300 text-gray-800 
                      font-medium py-3 px-8 rounded-md 
                      transition-all duration-300 ease-out
                      hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <PlayCircle className="w-5 h-5 text-[#256482]" />
                    Intro Video
                  </button>
                </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto">
          <hr className="border-gray-200" />
        </div>

        {/* === 3. STATS/METRICS (Bottom Half of Image - Replaces old Stats Bar) === */}
        <section ref={statsRef} className={`py-16 md:py-24`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              
              {/* Left Side: Headline and CTA */}
              <div className="w-full lg:w-5/12 relative text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Your **digital growth** is just the start.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
                  We're not just a service provider, we're partners in each
                  client's growth. We implement powerful, data-driven strategies
                  to secure your success on-time and on-budget.
                </p>
                
                <button 
                  className="
                    bg-[#2a7394] text-white font-medium py-3 px-8 rounded-md 
                    transition-all duration-300 ease-out
                    hover:bg-[#225d7a] hover:shadow-lg hover:-translate-y-0.5"
                >
                  Learn More
                </button>
                
                {/* Decorative Shapes (mimicking the yellow/red blobs) */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF6B50] rounded-full opacity-20 blur-xl -z-0"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-400 rounded-full opacity-20 blur-xl -z-0"></div>

              </div>

              {/* Right Side: Large Animated Stats */}
              <div className="w-full lg:w-7/12 space-y-10">
                {statsData.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center pb-8 border-b border-gray-700 last:border-b-0">
                    <div className={`text-6xl md:text-7xl font-extrabold ${stat.color}`}>
                      {isStatsVisible ? <AnimatedNumber target={stat.number} /> : '0'}
                      {stat.suffix}
                    </div>
                    <div className="text-lg text-gray-400 max-w-xs text-right">
                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </div>
      {/* --- END OF NEW DARK-THEMED SECTION --- */}

    </>
  );
};

export default AboutSection;