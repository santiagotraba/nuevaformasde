
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pillar from '@/components/Pillar';
import About from '@/components/About';
import InstagramFeed from '@/components/InstagramFeed';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PrimeraConvencion from '@/components/PrimeraConvencion';

const Index = () => {
  const pillars = [
    {
      id: "salud",
      title: "Nuevas Formas de Salud",
      description: "Alentamos y promovemos un enfoque de salud integral, articulando/integrando los mejores saberes ancestrales con los más actuales y avanzados descubrimientos científicos, enfocándonos en el bienestar de las personas y de las comunidades. Impulsamos una medicina de calidad, que incorpora desde el inicio el aprendizaje sobre la prevención y los hábitos, así como la participación activa, permitiendo alcanzar soluciones para cada realidad individual.",
      imageSrc: "https://via.placeholder.com/800x600",
      color: "nfd-green"
    },
    {
      id: "nutricion",
      title: "Nuevas Formas de Nutrición",
      description: "Fomentamos sistemas alimentarios sustentables basados en principios agroecológicos, integrándolos al sistema de salud preventiva, respetando la biodiversidad, e impulsando especialmente la soberanía alimentaria. Todo ello amparado en el consumo consciente, incorporando aprendizajes que permitan un máximo aprovechamiento tanto de los recursos locales y como los de temporada.",
      imageSrc: "https://via.placeholder.com/800x600",
      color: "nfd-orange"
    },
    {
      id: "educacion",
      title: "Nuevas Formas de Educación",
      description: "Impulsamos modelos educativos enfocados en el desarrollo permanente del pensamiento crítico, en la creatividad, y el aprendizaje experiencial sumado a una integración e intercambio que respete la diferencia como un recurso de enriquecimiento mutuo. Creemos en espacios de aprendizaje horizontal, colaborativo y conectado a los desafíos reales de nuestro tiempo.",
      imageSrc: "https://via.placeholder.com/800x600",
      color: "nfd-rust"
    },
    {
      id: "comunidades",
      title: "Nuevas Formas de Comunidad",
      description: "Promovemos modos de organización social basados en la cooperación, la equidad y el cuidado mutuo. Alentamos los procesos de participación ciudadana que desarrolla y fortalece el tejido comunitario basado en la reciprocidad del respeto, aceptación de las diferencias, y finalmente la toma de decisiones colectivas, partiendo desde un mínimo de acuerdos troncales/centrales.",
      imageSrc: "https://via.placeholder.com/800x600",
      color: "nfd-green"
    },
    {
      id: "energia",
      title: "Nuevas Formas de Energía",
      description: "Nos identificamos y apoyamos una transición hacia sistemas energéticos renovables, descentralizados y soberanos, desarrollados y gestionados por las comunidades. Promovemos la eficiencia energética como un principio de aprendizaje e interiorización de la conciencia orientada al cuidado medioambiental, promoviendo así la responsabilidad sobre nuestros consumos.",
      imageSrc: "https://via.placeholder.com/800x600",
      color: "nfd-orange"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Pilares Section Header */}
      <section id="pilares" className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestros <span className="text-nfd-green">Pilares</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Trabajamos en cinco áreas clave de transformación social para construir 
              un futuro más sostenible, saludable y colaborativo.
            </p>
            
            <div className="mt-12 flex justify-center">
              <div className="inline-flex flex-wrap justify-center gap-4">
                {pillars.map((pillar) => (
                  <a 
                    key={pillar.id}
                    href={`#${pillar.id}`}
                    className="px-5 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-nfd-green hover:text-white transition-colors"
                  >
                    {pillar.title.split(' ').pop()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pillars */}
      {pillars.map((pillar, index) => (
        <Pillar
          key={pillar.id}
          {...pillar}
          index={index}
        />
      ))}
      
      {/* PrimeraConvencion */}
      <PrimeraConvencion />

      {/* Quotes Section */}
      <section className="section-padding bg-nfd-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Voces de <span className="text-nfd-rust">Cambio</span>
            </h2>
            <p className="text-gray-600">Frases destacadas de nuestras entrevistas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <div className="text-4xl text-nfd-green mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                La verdadera innovación ocurre cuando las comunidades tienen el poder de crear 
                soluciones adaptadas a sus realidades específicas.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-medium">María González</div>
                  <div className="text-sm text-gray-500">Activista Comunitaria</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <div className="text-4xl text-nfd-green mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                El futuro de la educación está en la creación de espacios de aprendizaje
                horizontales, donde todos somos simultáneamente aprendices y maestros.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-medium">Carlos Mendoza</div>
                  <div className="text-sm text-gray-500">Educador</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1">
              <div className="text-4xl text-nfd-green mb-4">"</div>
              <p className="text-gray-700 italic mb-6">
                La salud es un derecho, pero también es una responsabilidad compartida. Necesitamos
                sistemas de salud que empoderen a las personas a cuidar de sí mismas y de sus comunidades.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-medium">Ana Ruiz</div>
                  <div className="text-sm text-gray-500">Médica comunitaria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <InstagramFeed />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
