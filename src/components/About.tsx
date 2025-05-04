
import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-nfd-dark text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
            Quiénes <span className="text-nfd-green">Somos</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-white/80 animate-fade-in">
            Somos un colectivo de pensadores, creadores y hacedores comprometidos con la transformación social
            a través de la innovación y el empoderamiento comunitario.
          </p>
          
          <div className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Nuestra Filosofía</h3>
            <p className="text-white/80 mb-6">
              Creemos en un mundo donde las personas son protagonistas de sus propias soluciones,
              donde la innovación nace desde las comunidades y donde la sostenibilidad es el eje central
              de nuestras acciones.
            </p>
            <p className="text-white/80">
              Trabajamos para impulsar nuevas formas de vivir, aprender, curarnos, alimentarnos y
              generar energía de manera más consciente, participativa y sustentable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg hover-lift">
              <h4 className="text-xl font-semibold mb-3">Visión</h4>
              <p className="text-white/70">
                Un mundo donde cada persona pueda participar activamente en la creación de soluciones
                a los desafíos globales desde lo local.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg hover-lift">
              <h4 className="text-xl font-semibold mb-3">Misión</h4>
              <p className="text-white/70">
                Inspirar, conectar y empoderar a las personas para crear nuevas formas de vivir más
                saludables, conscientes y sostenibles.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg hover-lift">
              <h4 className="text-xl font-semibold mb-3">Valores</h4>
              <p className="text-white/70">
                Autonomía, colaboración, innovación, diversidad y compromiso con el bien común y la
                regeneración de nuestro planeta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
