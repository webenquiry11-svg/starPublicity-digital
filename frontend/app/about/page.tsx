"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Kanit } from 'next/font/google';
import { 
  PlayCircle, 
  CheckCircle, 
  Play, 
  Users, 
  Award, 
  Briefcase
} from 'lucide-react';

// 1. Initialize the Roboto font
const kanit = Kanit({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Data for the "Why Choose Us" section
const reasons = [
  {
    title: 'Integrated Digital Expertise',
    description: 'We integrate innovative strategies to provide solutions that work in perfect harmony.',
  },
  {
    title: 'Results-Driven Approach',
    description: 'Our data-driven methodology ensures ROI and accountability at every step of your digital journey.',
  },
  {
    title: 'Full-Service Convenience',
    description: 'From concept to launch, we provide everything your business needs for digital success.',
  },
];

// Data for the new "Stats Bar" section
const statsData = [
  {
    icon: Users,
    number: 98,
    suffix: '%',
    text: 'Client Satisfaction',
  },
  {
    icon: Award,
    number: 15,
    suffix: '+',
    text: 'Industry Awards',
  },
  {
    icon: Briefcase,
    number: 350,
    suffix: '+',
    text: 'Successful Projects',
  },
  {
    icon: Play,
    number: 2.5,
    suffix: 'x',
    text: 'Average ROI Increase',
  },
];

// --- Animated Number Component (integrated directly) ---
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

  return (
    <>
      {/* === SECTION 1: CORE FEATURES === */}
      <section className={`py-16 md:py-24 bg-white ${kanit.className}`}>
        <div className="container mx-auto px-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Side: Image */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="w-[300px] h-[450px] md:w-[350px] md:h-[525px] rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Man in a business setting"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Side: Text Content and Buttons */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              <p className="text-blue-600 text-base font-bold uppercase tracking-wider mb-3">CORE FEATURES</p>
              <h2 className="text-[48px] font-medium text-[rgb(30,55,90)] leading-[58px] mb-6">
                Get Results That Matter
              </h2>
              <p className="text-xl text-gray-800 font-medium mb-6">
                Your growth is our top priority.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Star Publicity is redefining digital services. We seamlessly blend
                strategic thinking, creative excellence, and advanced technology to
                deliver powerful, integrated solutions that drive real results for
                your business.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button 
                  className="
                    bg-blue-600 text-white font-medium py-3 px-8 rounded-md 
                    transition-all duration-300 ease-out
                    hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
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
                  <PlayCircle className="w-5 h-5 text-blue-600" />
                  Intro Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 2: WHY CHOOSE US (Updated with <img> tags) === */}
      {/* Added relative and overflow-hidden for the decorative shape */}
      <section className={`relative isolate overflow-hidden py-16 md:py-24 bg-gray-50 ${kanit.className}`}>
        <div className="container mx-auto px-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Side: Text Content and List of Reasons */}
            <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left">
              <p className="text-blue-600 text-base font-bold uppercase tracking-wider mb-3">WHO WE ARE</p>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-10">
                Why Brands Trust Us
              </h2>

              {/* List of Reasons */}
              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start text-left gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{reason.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image Grid (UPDATED) */}
            <div className="w-full lg:w-1/2 h-[450px] relative">
              {/* Image 1 */}
              <div className="absolute w-[75%] h-[85%] top-0 left-[-10%] rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Team working together 1"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Image 2 */}
              <div className="absolute w-[75%] h-[85%] top-[34%] left-[20%] rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                  alt="Team presentation on whiteboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Tilted Triangle Shape */}
        <div 
          className="absolute bottom-0 right-32 -z-10 w-48 h-48 md:w-64 md:h-64 bg-blue-800"
          style={{
            clipPath: 'polygon(100% 0, 0 100%, 100% 100%)'
          }}>
        </div>
      </section>

      {/* === SECTION 3: VIDEO (New) === */}
      <section className={`py-16 md:py-24 bg-white ${kanit.className}`}>
        <div className="container mx-auto px-40">
          {/* Video Thumbnail Area */}
          <div className="relative w-full aspect-video rounded-lg shadow-xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
              alt="Team working at table"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-40">
              {/* Custom Play Button */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-white opacity-20 animate-ping"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-600 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: STATS BAR (New) === */}
      {/* Wrapper section for spacing */}
      <section className={`py-16 md:py-24 bg-gray-50 ${kanit.className}`}>
        <div className="container mx-auto px-32">
          <div ref={statsRef} className="py-12 bg-blue-600 rounded-lg">
            {/* Stats Wrapper */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center gap-8 text-white">
              
              {statsData.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-extrabold">
                      {isStatsVisible ? <AnimatedNumber target={stat.number} /> : 0}
                      {stat.suffix}
                    </span>
                    <p className="text-sm font-medium text-blue-200">{stat.text}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;