import HeroSectionWithNavbar from "./HeroSectionWithNavbar/page";
import ServicesSection from "./services/page";
import AboutSection from "./about/page";
import ContactPage from "./contact/page";

export default function HomePage() {
  return (
    <main>
      <HeroSectionWithNavbar />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </main>
  );
}