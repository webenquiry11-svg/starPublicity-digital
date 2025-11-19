import React from "react";
import { Monitor, Palette, Code, View, Gamepad2 } from "lucide-react";

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
    group relative flex flex-col items-center text-center p-8 rounded-lg shadow-sm max-w-[280px] mx-auto overflow-hidden isolate
    transition-all duration-300 ease-out transform
    bg-white hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-2
  `;

  const iconContainerClasses = `
    w-20 h-20 rounded-full flex items-center justify-center mb-4
    transition-all duration-300 ease-out
    bg-[#4cb0de]/10
    group-hover:bg-white
    group-hover:scale-110
  `;

  const iconClasses = `
    h-10 w-10
    transition-all duration-300 ease-out
    text-[#4cb0de]
    group-hover:text-[#3a8cae]
  `;

  return (
    <div className={cardClasses}>
      {/* Slide-in Background Effect */}
      <div className="absolute inset-x-0 bottom-0 h-0 w-full bg-[#4cb0de] transition-all duration-300 ease-out group-hover:h-full -z-10"></div>

      <div className={iconContainerClasses}>
        <IconComponent className={iconClasses} strokeWidth={2} />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300 ease-out">
        {title}
      </h3>
      <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300 ease-out">
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
    <section className={`py-16 bg-gray-50`}>
      <div className="container mx-auto px-24">
        <div className="text-center mb-12">
          <p className="text-[#4cb0de] text-lg font-semibold uppercase tracking-wider mb-2">
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
