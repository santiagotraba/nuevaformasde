
import React from 'react';
import { cn } from "@/lib/utils";

type HeroProps = {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section 
      id="home" 
      className={cn(
        "min-h-screen relative flex flex-col justify-center items-center text-white overflow-hidden",
        className
      )}
    >
      {/* Video Background */}
      <div className="absolute inset-0 bg-nfd-dark/40 z-10"></div>
      <div className="absolute inset-0 z-0">
        {/* Video will be replaced with actual content */}
        <div className="w-full h-full bg-gradient-to-br from-nfd-dark via-nfd-green/30 to-nfd-rust/30 flex items-center justify-center">
          <span className="text-white/40 text-3xl font-light">Video de presentación</span>
        </div>
      </div>
      
      <div className="container relative z-20 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
            <span className="text-nfd-beige">Nuevas Formas</span>{" "}
            <span className="text-white">De</span>{" "}
            <span className="text-nfd-green">Transformar</span>{" "}
            <span className="text-white">El Mundo</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
            Inspirando a las personas a ser protagonistas de sus procesos, eligiendo, decidiendo y aplicando sus propias soluciones para un futuro más saludable, integrado y sustentable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pilares" 
              className="px-8 py-3 bg-nfd-green text-white rounded-lg font-medium hover-lift"
            >
              NUESTROS PILARES 
            </a>
            <a 
              href="#nosotros" 
              className="px-8 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Conoce Más
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center animate-bounce">
        <a href="#pilares" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
