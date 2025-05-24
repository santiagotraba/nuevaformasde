
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nfd-dark text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-display font-bold mb-4">
              Nuevas<span className="text-nfd-green">Formas</span>De
            </h2>
            <p className="text-white/70 max-w-sm">
              Inspirando soluciones innovadoras para un mundo más sostenible, 
              saludable y colaborativo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Pilares</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#salud" className="hover:text-nfd-green transition-colors">Salud</a></li>
                <li><a href="#nutricion" className="hover:text-nfd-green transition-colors">Nutrición</a></li>
                <li><a href="#educacion" className="hover:text-nfd-green transition-colors">Educación</a></li>
                <li><a href="#comunidades" className="hover:text-nfd-green transition-colors">Comunidades</a></li>
                <li><a href="#energia" className="hover:text-nfd-green transition-colors">Energía</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Sobre Nosotros</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#nosotros" className="hover:text-nfd-green transition-colors">Quiénes Somos</a></li>
                <li><a href="#nosotros" className="hover:text-nfd-green transition-colors">Filosofía</a></li>
                <li><a href="#contacto" className="hover:text-nfd-green transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Conéctate</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-nfd-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-nfd-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-nfd-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm">
            © {currentYear} NuevasFormasDe. Todos los derechos reservados.
          </div>
          <div className="flex space-x-4 text-sm text-white/50 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
