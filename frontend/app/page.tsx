"use client";

import { useState, useEffect } from "react";
import HeroSectionWithNavbar from "./HeroSectionWithNavbar/page";
import ServicesSection from "./services/page";
import AboutSection from "./about/page";
import { ContactSection, Footer } from "./contact/page";
import AwardsSection from "./faq/page";
import QuoteModal from "./QuoteModal";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    // Apply smooth scrolling behavior safely on the client side
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className={`relative ${outfit.className}`}>
      <HeroSectionWithNavbar onQuoteClick={() => setIsModalOpen(true)} />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="awards">
        <AwardsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}