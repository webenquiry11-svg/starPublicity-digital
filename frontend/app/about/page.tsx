"use client";

import React, { useRef } from "react";
import Image from "next/image";
// Assuming you have these image paths defined correctly
import whyChoose from "../../public/Star Digital Website Images/why choose.png";
import whyChoose1 from "../../public/Star Digital Website Images/why choose1.png";

import { Check } from "lucide-react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";

// --- Data Definitions ---

const statsData = [
  {
    title: "Integrated Digital Expertise",
    text: "We integrate innovative strategies to provide solutions that work in perfect harmony.",
    color: "text-[#2a7394]",
  },
  {
    title: "Results-Driven Approach",
    text: "Our data-driven methodology ensures ROI and accountability at every step of your digital journey.",
    color: "text-[#2a7394]",
  },
  {
    title: "Full-Service Convenience",
    text: "From concept to launch, we provide everything your business needs for digital success.",
    color: "text-[#2a7394]",
  },
];

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
    icon: "💡",
  },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Logic for Timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Import New Fonts: Fraunces (Headings) & DM Sans (Body) */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      `}} />

      {/* === 1. HERO & MISSION SECTION === */}
      <div className="bg-white text-gray-900 overflow-hidden font-sans">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          // Reduced py for tablet/Nest Hub screens to prevent excessive scrolling
          className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-20 bg-white relative"
        >
          {/* Adjusted horizontal padding: px-6 for mobile, px-10 for tablet, px-16 for desktop */}
          <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
            {/* Top Marker */}
            <motion.p
              variants={itemVariants}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3 text-[#2a7394]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              — Safe By Design
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Column: Headline and CTA */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                {/* Font size adjusted: text-5xl on tablet (md), text-6xl on laptop (lg), text-7xl on desktop (xl) */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-[#2a7394] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Redefining Results, <br className="hidden lg:block" /> Building Your Success.
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  We understand the challenges brands face. Our team is here to
                  help you break barriers and achieve your goals. Together, we can
                  bring your vision to life.
                </motion.p>

                {/* New Quote */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2a7394] italic mt-4 md:mt-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "Where creativity sparks your story"
                </motion.p>
              </div>

              {/* Right Column: Imagery */}
              <motion.div
                variants={itemVariants}
                className="order-1 lg:order-2 relative h-64 sm:h-80 md:h-96 w-full flex justify-center lg:justify-end"
              >
                <div className="w-full sm:w-[90%] md:w-[85%] h-full rounded-[2rem] shadow-2xl relative overflow-hidden group">
                  {/* Hover Effect on Image */}
                  <div className="absolute inset-0 bg-[#2a7394]/10 z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
                  <Image
                    src={whyChoose}
                    alt="Team collaborating on a project"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Decorative Elements behind image */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-cyan-100/80 rounded-full blur-xl -z-10"
                ></motion.div>
              </motion.div>
            </div>

            {/* Security Cards (Below Hero) */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-20"
            >
              {securityCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300 group"
                >
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 text-slate-800 group-hover:text-[#2a7394] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-0 leading-relaxed text-base md:text-lg"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <hr className="border-gray-100" />

        {/* === 2. TIMELINE SECTION === */}
        <section
          ref={timelineRef}
          className="py-16 md:py-24 bg-[#2a7394] rounded-tl-[2.5rem] rounded-tr-[2.5rem] md:rounded-tl-[3.5rem] md:rounded-tr-[3.5rem] relative overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 2px, transparent 2px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Column: Headline and CTA */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                // Adjusted sticky position and font sizes for tablet height
                className="w-full lg:w-4/5 text-center lg:text-left lg:mt-12 lg:sticky top-24"
              >
                <h2
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 md:mb-8 text-white tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Lead Growth With Precision And Expertise.
                </h2>
                <p
                  className="text-base sm:text-lg md:text-xl text-blue-50/90 leading-relaxed mb-8 md:mb-10 font-normal"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Our rapid-response team leverages high-end tech and strategic
                  expertise to deliver outstanding results with remarkable speed
                  and precision.
                </p>
              </motion.div>

              {/* Right Column: Timeline Steps */}
              <div className="w-full relative space-y-8">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-6 top-4 bottom-4 w-px bg-blue-300/30 block" />

                {/* Progress Line Overlay - Hidden on mobile, visible on tab/desk */}
                <motion.div
                  className="absolute left-4 md:left-6 top-4 w-0.5 bg-white block origin-top shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  style={{ height: "100%", scaleY: smoothProgress }}
                />

                {corePrinciples.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group relative pl-12 md:pl-20"
                  >
                    {/* Timeline Marker icon */}
                    <div className="absolute left-0 md:left-2 top-0 w-8 h-8 md:w-10 md:h-10 bg-[#2a7394] border border-white/40 rounded-full flex items-center justify-center z-10 shadow-lg group-hover:bg-white group-hover:text-[#2a7394] transition-colors duration-300">
                      <span className="text-sm md:text-xl">{step.icon}</span>
                    </div>

                    <div className="relative bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-3xl border border-white/10 shadow-lg transition-all duration-300 hover:bg-white hover:border-transparent hover:shadow-2xl hover:-translate-y-2">
                      <div className="relative z-10">
                        <span
                          className="inline-block text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 bg-white/20 text-white group-hover:bg-[#2a7394]/10 group-hover:text-[#2a7394] transition-colors"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {step.step}
                        </span>

                        <h3
                          className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#2a7394] transition-colors"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {step.title}
                        </h3>

                        <ul className="list-none space-y-3 mb-2">
                          {step.points.map((point, pIndex) => (
                            <li
                              key={pIndex}
                              className="text-blue-50/80 group-hover:text-gray-600 flex items-start gap-3 text-base md:text-lg transition-colors"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              <Check className="w-5 h-5 text-cyan-300 group-hover:text-[#2a7394] flex-shrink-0 mt-1 transition-colors" />
                              <span
                                className={`${
                                  point.startsWith("“")
                                    ? "italic font-medium text-white group-hover:text-gray-800"
                                    : ""
                                }`}
                              >
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* === 3. TEAM INTRO SECTION === */}
      <div
        className="text-gray-900 relative"
        style={{
          backgroundColor: "#f9fafb",
          backgroundImage: `radial-gradient(#d1d5db 1px, transparent 1px)`,
          backgroundSize: `30px 30px`,
        }}
      >
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Animated Blobs - Reduced size for tablet performance */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-blue-200/40 rounded-full blur-[60px] md:blur-[80px] -z-0"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-200/40 rounded-full blur-[60px] md:blur-[80px] -z-0"
          ></motion.div>

          {/* Floating Images - Hidden on smaller screens (Mobile, Tablet, Nest Hub, Small Laptops). 
             Visible only on very large screens (2xl+) to prevent blocking text. */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 25 }}
            className="hidden 2xl:block absolute top-16 left-16 w-80 h-56 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white z-20"
          >
            <Image
              src={whyChoose}
              alt="Team working together"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 25 }}
            className="hidden 2xl:block absolute bottom-16 right-16 w-80 h-56 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white z-20"
          >
            <Image
              src={whyChoose1}
              alt="Team in a meeting"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white shadow-xl"
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a7394] leading-[1.1] mb-6 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get to know why brands trust{" "}
                <span className="text-[#2a7394]">Star Publicity.</span>
              </h2>
              <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-0 max-w-2xl mx-auto"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                We are a dedicated team of specialists committed to helping
                modern businesses grow. We deliver reliable results, transparent
                service, and innovative solutions that build client trust.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          <hr className="border-gray-200" />
        </div>

        {/* === 4. STATS SECTION === */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:gap-12 lg:gap-16">
              {/* Left Side: Headline and CTA */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full relative text-left"
              >
                <h2
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#2a7394] leading-none mb-6 md:mb-8"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Where Ambitious Brands Achieve More.
                </h2>
                <p
                  className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-lg"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Supercharge your brand's growth with Star Publicity. Our
                  creative strategies deliver quick, measurable results tailored
                  for your success.
                </p>
              </motion.div>

              {/* Right Side: Principles */}
              <div className="w-full space-y-8 md:space-y-12">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex flex-col pb-8 md:pb-10 border-b border-gray-200 last:border-b-0 cursor-default group"
                  >
                    <h3
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} mb-3 md:mb-4 group-hover:text-[#2a7394] transition-colors`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {stat.title}
                    </h3>
                    <p
                      className="text-lg md:text-xl text-gray-600"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {stat.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutSection;