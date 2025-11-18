import React from "react";
import { Kanit } from 'next/font/google';
import { Monitor, Palette, Code, View, Gamepad2 } from "lucide-react";

// Initialize the Kanit font
const kanit = Kanit({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// --- Service Card Component ---
// I've updated the classes here for a better animation

interface ServiceCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  IconComponent,
  title,
  description,
}) => {
  const cardClasses = `
    group relative flex flex-col items-center text-center px-6 py-16 rounded-lg shadow-sm max-w-[280px] mx-auto overflow-hidden isolate
    transition-all duration-300 ease-out transform
    bg-white text-gray-800
    hover:bg-blue-600 hover:scale-105 hover:-translate-y-1 hover:shadow-xl
    
    after:content-[''] after:absolute after:inset-0 after:-z-10
    after:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)]
    after:bg-[size:10px_10px]
    after:opacity-0 group-hover:after:opacity-100
    after:transition-opacity after:duration-300
  `;

  const iconContainerClasses = `
    w-20 h-20 rounded-full flex items-center justify-center mb-4
    transition-all duration-300 ease-out
    bg-blue-50
    group-hover:bg-white
  `;

  const iconClasses = `
    h-10 w-10
    transition-all duration-300 ease-out
    text-blue-600
    group-hover:scale-110 group-hover:rotate-6
  `;

  return (
    <div className={cardClasses}>
      <div className={iconContainerClasses}>
        <IconComponent className={iconClasses} strokeWidth={2} />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-600 group-hover:text-blue-200">
        {description}
      </p>
    </div>
  );
};

// --- Services Data ---
// (This section is unchanged)
const servicesData = [
  {
    IconComponent: Monitor,
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence and drive measurable results.",
  },
  {
    IconComponent: Palette,
    title: "Graphic Designing",
    description: "Stunning visuals that tell your brand story and captivate audiences.",
  },
  {
    IconComponent: Code,
    title: "Web Development",
    description: "Fast, secure, scalable websites built to drive conversions and growth.",
  },
  {
    IconComponent: View,
    title: "AR/VR Development",
    description: "Immersive experiences that engage customers and transform brand interactions.",
  },
  {
    IconComponent: Gamepad2,
    title: "Game Development",
    description: "Engaging games that entertain users and achieve your business objectives.",
  },
];

// --- MAIN REUSABLE COMPONENT ---
// (This section is unchanged)
export default function ServicesSection() {
  return (
    <section className={`py-16 bg-gray-50 ${kanit.className}`}>
      <div className="container mx-auto px-24">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-lg font-semibold uppercase tracking-wider mb-2">
            SERVICES
          </p>
          <h2 className="text-[48px] font-medium text-[rgb(30,55,90)] leading-[58px]">What We Deliver</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              IconComponent={service.IconComponent}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
