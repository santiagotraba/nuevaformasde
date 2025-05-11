
import React from 'react';
import { cn } from "@/lib/utils";

type PillarProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  color: string;
  index: number;
}

const Pillar = ({ id, title, description, imageSrc, color, index }: PillarProps) => {
  const isEven = index % 2 === 0;
  
  const getColorClass = (baseClass: string) => {
    switch (color) {
      case 'nfd-green':
        return `${baseClass}-nfd-green`;
      case 'nfd-orange':
        return `${baseClass}-nfd-orange`;
      case 'nfd-rust':
        return `${baseClass}-nfd-rust`;
      case 'nfd-beige':
        return `${baseClass}-nfd-beige`;
      default:
        return `${baseClass}-nfd-green`;
    }
  };
  
  return (
    <section 
      id={id}
      className={cn(
        "section-padding",
        isEven ? "bg-white" : "bg-gray-50"
      )}
    >
      <div className="container">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-10",
          isEven ? "" : "md:flex-row-reverse"
        )}>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden h-[400px]">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageSrc})` }}
              >
                {/* Placeholder for when we have actual images */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nfd-dark/20 to-transparent">
                  <span className="text-white/20 text-2xl">{title}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2 animate-fade-in">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6 inline-block",
              `text-${color}`
            )}>
              {title}
              <div className={cn("h-1 w-1/3 mt-2", `bg-${color}`)}></div>
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className={cn(
                "px-4 py-2 rounded-full text-white text-sm font-medium",
                getColorClass("bg")
              )}>
                Innovación
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
                Autonomía
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
                Comunidad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillar;
