
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Roxana María Colabufo",
      image: "/lovable-uploads/9ff1870c-6db8-4df1-af0b-e2e78d513d25.png",
      description: "Profesora de Educación Física. Terapeuta en Medicina China, Naturópata. Maestra Instructora y Terapeuta en el Sistema Biogénesis.",
      role: "Co-fundadora"
    },
    {
      id: 2,
      name: "Emiliano Rossotti",
      image: "/lovable-uploads/422cc480-aaaa-4744-90af-f294d0f69c13.png",
      description: "Arquitecto UBA, especialista en arquitectura social y participativa, aprendiz de Permacultura. Co-autor del proyecto Comunidad Barrios Soberanos, un proyecto social y autogestivo que busca co-crear nuevas comunidades en armonía con la naturaleza.",
      role: "Co-fundador"
    },
    {
      id: 3,
      name: "Alguien",
      image: "/lovable-uploads/bfe79540-3e1a-4cb6-ad2c-236104fdb583.png",
      description: "Alguien representa a todas las personas que se suman a nuestros eventos. No es una figura pasiva, sino el creador de su propia realidad. Esta figura poética simboliza la comunidad que co-creamos: auténtica, valiente y comprometida con un cambio consciente.",
      role: "Comunidad"
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-nfd-dark text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
        
        {/* Team Section */}
        <div className="pt-16 border-t border-white/10">
          <h3 className="text-3xl font-bold mb-12 text-center">Nuestro <span className="text-nfd-green">Equipo</span></h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center animate-fade-in">
                <div className="mb-6 relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-nfd-green/40 hover-lift">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                <h4 className="text-2xl font-semibold mb-2 text-nfd-beige">{member.name}</h4>
                <p className="text-nfd-green mb-4 font-medium">{member.role}</p>
                <p className="text-white/80">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
