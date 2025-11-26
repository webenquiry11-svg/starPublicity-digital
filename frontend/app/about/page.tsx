"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// Assuming you have these image paths defined correctly
import whyChoose from "../../public/Star Digital Website Images/why choose.png";
import whyChoose1 from "../../public/Star Digital Website Images/why choose1.png";

import { PlayCircle, Play, Check, Calendar } from "lucide-react";

// Data for the new "Stats Bar" section (for the dark theme section)
const statsData = [
  {
    // Integrated Digital Expertise
    title: "Integrated Digital Expertise",
    text: "We integrate innovative strategies to provide solutions that work in perfect harmony.",
    color: "text-[#256482]",
  },
  {
    // Results-Driven Approach
    title: "Results-Driven Approach",
    text: "Our data-driven methodology ensures ROI and accountability at every step of your digital journey.",
    color: "text-[#256482]",
  },
  {
    // Full-Service Convenience
    title: "Full-Service Convenience",
    text: "From concept to launch, we provide everything your business needs for digital success.",
    color: "text-[#256482]",
  },
];

// Data for the Top Security Cards
const securityCards = [
  {
    title: "Our Mission: Elevate Ambition",
    description:
      "Transforming your growth through bold strategies, innovation, and technology—empowering you to lead and inspire.",
  },
  {
    title: "Our Vision: Inspire the Future",
    description:
      "Championing your success with measurable results, meaningful collaborations, and future-ready digital excellence.",
  },
];

// --- CORE PRINCIPLES (NEW DATA - Kept separate as they are used in the Timeline) ---
const corePrinciples = [
  {
    step: "STEP 1",
    title: "Understand your goals and challenges",
    points: [
      "Analyze existing processes with precision",
      "Identify solutions powered by the latest tech",
      "“Clients observe better clarity and actionable strategies from day one.”",
    ],
    icon: "🎯",
  },
  {
    step: "STEP 2",
    title: "Roll out tailored strategies and cutting-edge tools",
    points: [
      "Seamless integration with your workflow",
      "Guarantee efficiency at every milestone",
      "“Most brands see smoother transitions and faster ROI within weeks.”",
    ],
    icon: "🚀",
  },
  {
    step: "STEP 3",
    title: "Monitor, refine, and support for lasting performance",
    points: [
      "Stay ahead with continuous updates and innovation",
      "Scale results as your needs grow",
      "“Our proficiency ensures your growth journey never stops advancing.”",
    ],
    icon: "💡", // Kept this icon as it fits well
  },
];

// --- Animated Number Component (Kept, although not used in this section now) ---
interface AnimatedNumberProps {
  target: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  target,
  duration = 2000,
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const isFloat = target % 1 !== 0;

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16); // ~60fps

    const updateNumber = () => {
      start += increment;
      if (start < end) {
        setCurrentNumber(
          isFloat ? parseFloat(start.toFixed(1)) : Math.ceil(start)
        );
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* === 1. NEW SECTION (Replaces Core Features) === */} 
      <div className="bg-white text-gray-900">
        {/* === SECTION 1A: TOP SECURITY HERO & CARDS === */}
        <section
          className={`pt-20 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden`}
        >
          <div className="container mx-auto px-8 sm:px-16 lg:px-24">
            {/* Top Marker */}
            <p className="text-sm font-bold uppercase tracking-wider mb-2 text-[#256482]">
              — SAFE BY DESIGN
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column: Headline and CTA */}
              <div className="order-2 lg:order-1">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-[#256482] font-grotesk">
                  Redefining Results, Building Your Success
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-10 font-sans">
                 We understand the challenges brands face. Our team is here to help you break barriers and achieve your goals. Together, we can bring your vision to life.
                </p>

                {/* New Quote */}
                <p className="text-2xl font-semibold text-[#256482] italic mt-8 font-sans">
                  "Where creativity sparks your story"
                </p>
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
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-lg border border-gray-100 shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-900 font-grotesk">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-sans">{card.description}</p>
                   
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* === SECTION 1B: BOTTOM CORE PRINCIPLES TIMELINE === */}
        <section
          className={`py-20 md:py-32 bg-[#2a7394] rounded-tl-2xl rounded-tr-2xl`}
        >
          <div className="container mx-auto px-8 sm:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column: Headline and CTA */}
              <div className="w-full lg:w-4/5 text-left lg:mt-24">
                <h2 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-white font-grotesk">
                  Lead Growth With Precision And Expertise...
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed mb-10 font-sans">
                  Our rapid-response team leverages high-end tech and strategic
                  expertise to deliver outstanding results with remarkable speed
                  and precision.
                </p>
              </div>

              {/* Right Column: Timeline Steps (Using Core Principles Data) */}
              <div ref={timelineRef} className="w-full relative space-y-6">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-blue-400/50 hidden md:block" />

                {/* Moving Progress Dot */}
                <div
                  className="absolute left-[5px] top-4 w-6 h-6 bg-cyan-300 rounded-full shadow-md hidden md:block"
                  style={{
                    // Use calc to move the dot along the height of the timeline container
                    top: `calc(${
                      scrollProgress * 100
                    }% - 1.5rem * ${scrollProgress})`,
                  }}
                />

                {corePrinciples.map((step, index) => (
                  <div key={index} className="group relative pl-12">
                    {/* Timeline Marker (small dot on the line) */}
                    <div className="absolute left-0 top-0 w-8 h-8 bg-[#2a7394] rounded-full flex items-center justify-center z-10">
                      <span className="text-xl">{step.icon}</span>
                    </div>

                    <div className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 overflow-hidden">
                      <div className="relative z-10">
                        <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 bg-[#256482]/10 text-[#256482]">
                          {step.step}
                        </span>

                        <h3 className="text-xl font-bold mb-3 text-[#256482] font-grotesk">
                          {step.title}
                        </h3>

                        <ul className="list-none space-y-3 mb-5">
                          {step.points.map((point, pIndex) => (
                            <li
                              key={pIndex}
                              className="text-gray-600 flex items-start gap-3 font-sans"
                            >
                              <Check className="w-5 h-5 text-[#256482] flex-shrink-0 mt-0.5" />
                              <span className={`${point.startsWith('“') ? 'italic' : ''}`}>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- START OF RESTORED SECTION 2 (Team Introduction) --- */}
      <div
        className="text-gray-900"
        style={{
          backgroundColor: "#f9fafb", // This is tailwind's gray-50
          backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      >
        {/* === 2. TEAM INTRODUCTION (Restored Section 2) === */}
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

          <div className="container mx-auto px-8 sm:px-16 lg:px-24 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#256482] leading-snug mb-6 font-grotesk">
                Get to know why brands trust Star Publicity.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-sans">
                We are a dedicated team of specialists committed to helping
                modern businesses grow. We deliver reliable results, transparent
                service, and innovative solutions that build client trust.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto">
          <hr className="border-gray-200" />
        </div>

        {/* === 3. STATS/METRICS (Replaced with Core Principles) === */}
        <section ref={statsRef} className={`py-16 md:py-24`}>
          <div className="container mx-auto px-8 sm:px-16 lg:px-24">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              {/* Left Side: Headline and CTA */}
              <div className="w-full lg:w-5/12 relative text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-[#256482] leading-tight mb-6 font-grotesk">
                  Where Ambitious Brands Achieve More{" "}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg font-sans">
                  Supercharge your brand's growth with Star Publicity. Our
                  creative strategies deliver quick, measurable results tailored
                  for your success.
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

              {/* Right Side: Principles (Replaces Animated Stats) */}
              <div className="w-full lg:w-7/12 space-y-10">
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col pb-8 border-b border-gray-200 last:border-b-0"
                  >
                    {/* Title (Uses the large statistic font size) */}
                    <h3
                      className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-2 font-grotesk`}
                    >
                      {stat.title}
                    </h3>

                    {/* Description (Uses the label style) */}
                    <p className="text-lg text-gray-600 font-sans">{stat.text}</p>
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
