import React from 'react';
import ServicesSection from '../app/services/page'; 
import AboutSection from '../app/about/page'; 
import ContactSection from '../app/contact/page'; // 1. Import the new component
import HeroSectionWithNavbar from './HeroSectionWithNavbar/page';

const HomePage = () => {
  return (
    <main>
      <HeroSectionWithNavbar />
      <ServicesSection /> 
      <AboutSection /> 
      <ContactSection /> {/* 2. Place it here */}
    </main>
  );
}

export default HomePage;