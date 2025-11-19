"use client";

import { useState } from "react";
import HeroSectionWithNavbar from "./HeroSectionWithNavbar/page";
import ServicesSection from "./services/page";
import AboutSection from "./about/page";
import ContactPage from "./contact/page";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <HeroSectionWithNavbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactPage setIsModalOpen={setIsModalOpen} />
      </div>
    </main>
  );
}