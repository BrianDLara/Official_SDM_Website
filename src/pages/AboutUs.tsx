import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Toggle FAQ dropdown
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-16 pb-20">
      <h1 className='text-3xl text-center md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>Conócenos</h1>
      <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
      <div className="w-full sm:w-4/5 lg:w-3/5 max-w-6xl bg-white border border-gray-300 rounded-lg shadow-md mt-10 pb-4 mb-10 mx-auto">
        
        {/* Tabs Navigation */}
        <ul className="text-md font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex">
          <li className="w-full">
            <button
              onClick={() => setActiveTab("about")}
              className={`inline-block w-full p-4 ${
                activeTab === "about" ? "text-[#597EBE] font-bold" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              Sobre Nosotros
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => setActiveTab("services")}
              className={`inline-block w-full p-4 ${
                activeTab === "services" ? "text-[#597EBE] font-bold" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              Servicios
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => setActiveTab("faq")}
              className={`inline-block w-full p-4 ${
                activeTab === "faq" ? "text-[#597EBE] font-bold" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              Preguntas Frecuentes
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="p-6">
          {/* TAB 1: SOBRE NOSOTROS */}
          {activeTab === "about" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">¿Quiénes Somos?</h2>
              <p className="text-gray-600">
                En <span className="font-semibold">Senda Digital Marketing</span>, ayudamos a pequeños y medianos negocios a
                organizar sus conversaciones, agendar más citas y mejorar su reputación en línea. Combinamos
                <span className="font-semibold"> automatización</span>, <span className="font-semibold">CRM</span> y flujos
                conversacionales para captar y atender clientes sin fricción.
              </p>

              <p className="text-gray-600 mt-4">
                Entendemos los desafíos de operar en mercados competitivos. Nuestro enfoque une creatividad, datos e
                inteligencia artificial para que cada interacción con tus clientes sea más efectiva, medible y escalable.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Nuestra Misión</h3>
              <p className="text-gray-600">
                Ayudar a las empresas a escalar de forma sostenible mediante estrategias digitales y automatizaciones que
                mejoren la eficiencia, reduzcan costos y aumenten la conversión de oportunidades en ventas reales.
              </p>

              <p className="text-gray-600 mt-4">
                Utilizamos herramientas líderes para entregar resultados medibles: embudos de conversión, CRM, flujos en
                WhatsApp y gestión de reputación, todo conectado para que tu operación sea más simple.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Nuestra Visión</h3>
              <p className="text-gray-600">
                Ser la referencia en soluciones de automatización y CRM para PyMEs en Latinoamérica, empoderando a los
                negocios con tecnología accesible y enfocada en resultados.
              </p>

              <p className="text-gray-600 mt-4">
                Creemos que cualquier negocio puede crecer exponencialmente con la estrategia correcta. Diseñamos planes
                a la medida para que cada acción tenga impacto real en tus ingresos.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Nuestros Valores</h3>
              <ul className="list-disc ml-6 text-gray-600">
                <li className="mb-2"><span className="font-semibold">Resultados Medibles:</span> trabajamos con métricas claras.</li>
                <li className="mb-2"><span className="font-semibold">Innovación Constante:</span> adoptamos tecnologías útiles, no modas.</li>
                <li className="mb-2"><span className="font-semibold">Compromiso:</span> soluciones personalizadas a tus necesidades.</li>
                <li className="mb-2"><span className="font-semibold">Crecimiento Escalable:</span> estandarizamos y automatizamos.</li>
                <li className="mb-2"><span className="font-semibold">Transparencia:</span> promesas realistas y ejecución responsable.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">¿Por Qué Elegirnos?</h3>
              <p className="text-gray-600">
                A diferencia de otros proveedores, no nos enfocamos en anuncios. Implementamos <span className="font-semibold">CRM</span>,
                <span className="font-semibold"> automatizaciones</span>, <span className="font-semibold">atención por WhatsApp</span>,
                <span className="font-semibold"> agenda</span> y <span className="font-semibold">reputación</span> para que tus
                clientes reciban una experiencia consistente y tú tengas una operación eficiente.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Casos de Éxito</h3>
              <p className="text-gray-600">
                Hemos trabajado con múltiples empresas logrando, entre otros:
              </p>
              <ul className="list-disc ml-6 text-gray-600">
                <li className="mb-2">Incremento notable en <span className="font-semibold">reservas</span> en las primeras semanas.</li>
                <li className="mb-2">Reducción del <span className="font-semibold">tiempo administrativo</span> con flujos automatizados.</li>
                <li className="mb-2">Mejoras en la <span className="font-semibold">reputación online</span> con más reseñas positivas.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">¿Cómo Podemos Ayudarte?</h3>
              <p className="text-gray-600">
                Ofrecemos una consulta gratuita para diagnosticar tu operación y proponer un plan de implementación
                claro (CRM, WhatsApp, agenda y reputación).
              </p>
            </div>
          )}

          {/* TAB 2: SERVICIOS (sin Ads) */}
          {activeTab === "services" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Nuestros Servicios</h2>

              <p className="text-gray-600">
                Soluciones digitales para captar, atender y fidelizar clientes con tecnología: automatización,
                mensajería y CRM, todo medible y conectado a tus objetivos de negocio.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Automatización en WhatsApp y Redes</h3>
              <p className="text-gray-600">
                Implementamos chatflows y asistentes que responden FAQs, califican prospectos y agendan citas 24/7.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Creación de Páginas Web y Landing Pages</h3>
              <p className="text-gray-600">
                Sitios y landing pages orientados a conversión, integrados con formularios, pagos y WhatsApp.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Gestión de CRM y Automatización de Procesos</h3>
              <p className="text-gray-600">
                Configuramos pipelines, segmentación y reportes en tiempo real para que tu operación sea predecible.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Reservación de Citas y Agenda Automatizada</h3>
              <p className="text-gray-600">
                Agenda integrada con recordatorios por WhatsApp/SMS para reducir ausencias y mejorar la asistencia.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Email Marketing y Embudos</h3>
              <p className="text-gray-600">
                Secuencias automatizadas para nutrir leads y fidelizar clientes con contenido relevante.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Gestión de Reputación y Reseñas</h3>
              <p className="text-gray-600">
                Solicitud de reseñas, monitoreo y respuesta centralizada para potenciar tu presencia local.
              </p>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Integraciones y Automatización de Negocio</h3>
              <p className="text-gray-600">
                Conectamos pagos, agendas, mensajería y analítica para que todo fluya sin trabajo manual.
              </p>

              <p className="text-gray-600 mt-6">
                Implementamos, medimos y optimizamos tus procesos sin depender de campañas de anuncios.
              </p>
            </div>
          )}

          {/* TAB 3: FAQ (Preguntas Frecuentes) */}
          {activeTab === "faq" && (
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Preguntas Frecuentes</h2>
              <p className="text-gray-600 pb-10">
                Aquí respondemos dudas comunes sobre implementación, costos y operación diaria.
              </p>

              {[
                { 
                  question: "¿Cuánto tiempo tardaré en ver resultados?",
                  answer:
                    "Normalmente habilitamos los primeros flujos (WhatsApp, agenda y reseñas) en 3–7 días. Las citas confirmadas y la reducción de tareas manuales suelen notarse en la primera o segunda semana, dependiendo del volumen de mensajes y del sector."
                },
                { 
                  question: "¿Necesito conocimientos previos en marketing o tecnología?",
                  answer:
                    "No. Nos encargamos de la implementación y dejamos tu CRM y automatizaciones listos. También te capacitamos para que tu equipo pueda operarlo a diario sin complicaciones."
                },
                { 
                  question: "¿Cómo puedo empezar?",
                  answer:
                    "Agenda una consulta gratuita. Evaluamos tu operación actual y definimos un plan de implementación con objetivos claros (WhatsApp, CRM, agenda y reputación)."
                },
                { 
                  question: "¿Cuáles son los costos de sus servicios?",
                  answer:
                    "Senda CRM tiene un costo de $175 USD al mes. La implementación inicial y módulos adicionales (sitio web, integraciones, email marketing) se cotizan según tu caso."
                },
                { 
                  question: "¿Por qué es más barato elegir a Senda que contratar una recepcionista?",
                  answer:
                    "Senda automatiza tareas clave (agendar, confirmar, responder FAQs y solicitar reseñas) por $175 USD/mes. Una recepcionista a tiempo completo suele superar los $8,000 MXN mensuales, sin contar prestaciones ni ausencias. Con Senda tienes atención 24/7 y procesos estandarizados."
                },
                { 
                  question: "¿Qué diferencia a Senda de otras agencias?",
                  answer:
                    "No gestionamos anuncios. Nos enfocamos en estandarizar tu operación con CRM, automatizaciones y atención por WhatsApp, para que no dependas de campañas pagadas y puedas sostener resultados."
                },
                { 
                  question: "¿Ofrecen soporte continuo después de contratar?",
                  answer:
                    "Sí. Incluye soporte y asesoría. Según el plan, agregamos optimizaciones periódicas, reportes y ajustes de flujos."
                },
                { 
                  question: "¿Puedo cancelar el servicio en cualquier momento?",
                  answer:
                    "Sí. Manejamos planes flexibles sin contratos forzosos. Recomendamos mantener al menos 3 meses para consolidar resultados y equipo."
                },
                { 
                  question: "¿Puedo usar mi número actual de WhatsApp?",
                  answer:
                    "Sí. En la mayoría de los casos podemos trabajar con tu número actual. Dependiendo del proveedor, puede requerir WhatsApp Business y ciertos pasos de verificación; te guiamos en todo el proceso."
                },
                { 
                  question: "¿Qué tipo de negocios pueden beneficiarse?",
                  answer:
                    "Clínicas y consultorios, restaurantes, servicios locales, retail y más. Cualquier negocio con citas, mensajería frecuente o necesidad de seguimiento y reseñas."
                },
                { 
                  question: "¿Cómo protegen mis datos y la información de mis clientes?",
                  answer:
                    "Aplicamos buenas prácticas de seguridad, control de accesos y cumplimiento de privacidad. Te ayudamos a configurar roles y respaldos adecuados."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between w-full py-4 text-left text-gray-600 font-bold focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <p className="py-4 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
