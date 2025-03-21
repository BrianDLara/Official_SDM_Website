import React from 'react';
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Team = () => {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Conoce a Nuestro Equipo
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg">
            Detrás de Senda Digital Marketing hay un equipo apasionado por la innovación, la automatización y el crecimiento empresarial. 
            Nuestros fundadores combinan experiencia en odontología y desarrollo de software para ofrecer soluciones digitales 
            que transforman negocios.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Team Member 1 - Pablo Lara */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img 
                src="/images/team_1.png" 
                alt="Pablo Lara" 
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a href="#" className="bg-white text-[#597EBE] p-2 rounded-full hover:bg-[#597EBE] hover:text-white transition-colors duration-200">
                    <FaLinkedinIn size={18} />
                  </a>
                  <a href="#" className="bg-white text-[#597EBE] p-2 rounded-full hover:bg-[#597EBE] hover:text-white transition-colors duration-200">
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Pablo Lara</h3>
              <p className="text-[#597EBE] font-medium">CEO & Fundador</p>
              <p className="text-gray-400 mt-2">
                Cirujano dentista y emprendedor, Pablo Lara descubrió que el crecimiento de su clínica no dependería de los métodos tradicionales. 
                A través de estrategias digitales y automatización, logró llenar su agenda de clientes y decidió fundar Senda Digital Marketing 
                para ayudar a otros negocios a lograr lo mismo.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 - Brian Lara */}
          <div className="group">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img 
                src="/images/team_2.png" 
                alt="Brian Lara" 
                className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <div className="flex space-x-4">
                  <a href="#" className="bg-white text-[#597EBE] p-2 rounded-full hover:bg-[#597EBE] hover:text-white transition-colors duration-200">
                    <FaLinkedinIn size={18} />
                  </a>
                  <a href="#" className="bg-white text-[#597EBE] p-2 rounded-full hover:bg-[#597EBE] hover:text-white transition-colors duration-200">
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Brian Lara</h3>
              <p className="text-[#597EBE] font-medium">CTO & Co-Fundador</p>
              <p className="text-gray-400 mt-2">
                Ingeniero en software con una pasión por la automatización, Brian ha sido clave en el desarrollo de 
                la infraestructura digital de Senda. Gracias a su experiencia en tecnología, ha creado sistemas eficientes 
                que permiten a las empresas optimizar sus procesos y obtener mejores resultados con menos esfuerzo.
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Team;
