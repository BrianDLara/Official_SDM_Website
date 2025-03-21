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
      <h1 className='text-3xl text-center md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>Conocenos</h1>
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
      En <span className="font-semibold">Senda Digital Marketing</span>, nos especializamos en ayudar a pequeños y medianos negocios a aumentar su visibilidad en línea y atraer más clientes. A través de estrategias de marketing digital altamente optimizadas, automatización y herramientas de CRM avanzadas, permitimos que nuestros clientes no solo consigan más leads, sino que también optimicen su gestión y fidelización.
    </p>

    <p className="text-gray-600 mt-4">
      Entendemos los desafíos que enfrentan los emprendedores y empresas en un entorno cada vez más competitivo. Nuestro enfoque combina creatividad, datos e inteligencia artificial para maximizar el retorno de inversión (ROI) y hacer que cada campaña publicitaria sea más efectiva. Nos dedicamos a ofrecer soluciones integrales que permitan a nuestros clientes centrarse en lo que realmente importa: hacer crecer su negocio.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Nuestra Misión</h3>
    <p className="text-gray-600">
      Nuestra misión es clara: ayudar a negocios a escalar de manera sostenible mediante estrategias de marketing digital avanzadas. Creemos en la importancia de la automatización para mejorar la eficiencia, reducir costos y aumentar la conversión de clientes potenciales en ventas reales.
    </p>

    <p className="text-gray-600 mt-4">
      En Senda Digital Marketing, utilizamos herramientas líderes en la industria para ofrecer resultados medibles y optimizados. A través de publicidad digital segmentada, embudos de conversión inteligentes y automatización de procesos, logramos que nuestros clientes obtengan más citas, ventas y reconocimiento de marca.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Nuestra Visión</h3>
    <p className="text-gray-600">
      Aspiramos a ser la agencia líder en marketing digital para pequeñas y medianas empresas en Latinoamérica. Nuestra visión es empoderar a los negocios con las herramientas necesarias para competir en el mundo digital y convertirlos en referentes dentro de su industria.
    </p>

    <p className="text-gray-600 mt-4">
      Creemos que cualquier negocio, sin importar su tamaño, puede crecer exponencialmente si cuenta con la estrategia digital correcta. Nos enfocamos en brindar soluciones personalizadas que se adapten a cada empresa, asegurando que cada acción tenga un impacto real en sus ingresos y crecimiento.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Nuestros Valores</h3>
    <ul className="list-disc ml-6 text-gray-600">
      <li className="mb-2"><span className="font-semibold">Resultados Medibles:</span> Creemos en la importancia de la analítica y los datos. Todo lo que hacemos está basado en métricas y rendimiento.</li>
      <li className="mb-2"><span className="font-semibold">Innovación Constante:</span> Nos mantenemos a la vanguardia de las nuevas tecnologías y tendencias digitales para ofrecer las mejores estrategias.</li>
      <li className="mb-2"><span className="font-semibold">Compromiso con Nuestros Clientes:</span> Nos enfocamos en entender las necesidades específicas de cada negocio para diseñar soluciones personalizadas.</li>
      <li className="mb-2"><span className="font-semibold">Crecimiento Escalable:</span> No solo buscamos generar más clientes para tu negocio, sino ayudarte a estructurar un crecimiento sostenible a largo plazo.</li>
      <li className="mb-2"><span className="font-semibold">Transparencia y Ética:</span> Nos regimos por prácticas honestas y transparentes. No prometemos resultados inalcanzables, sino estrategias probadas con datos concretos.</li>
    </ul>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">¿Por Qué Elegirnos?</h3>
    <p className="text-gray-600">
      A diferencia de otras agencias que ofrecen soluciones genéricas, en Senda Digital Marketing personalizamos cada estrategia según las necesidades y objetivos de cada cliente. Nuestra experiencia nos permite optimizar campañas publicitarias en Meta Ads y Google Ads, diseñar embudos de conversión efectivos y mejorar la interacción con clientes mediante automatización de respuestas y CRM.
    </p>

    <p className="text-gray-600 mt-4">
      Nuestro equipo de expertos en marketing digital, diseño web y automatización trabaja de la mano con cada cliente para garantizar los mejores resultados. Si buscas una agencia que realmente entienda cómo hacer crecer tu negocio en el mundo digital, Senda Digital Marketing es la mejor opción.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Casos de Éxito</h3>
    <p className="text-gray-600">
      Hemos trabajado con múltiples empresas en diferentes industrias, logrando:
    </p>
    <ul className="list-disc ml-6 text-gray-600">
      <li className="mb-2">Un <span className="font-semibold">incremento del 300%</span> en las reservas de citas para una clínica dental en menos de 60 días.</li>
      <li className="mb-2">Reducción del <span className="font-semibold">50% en el costo por adquisición</span> de clientes para una empresa de servicios locales.</li>
      <li className="mb-2">Automatización de seguimiento y gestión de leads, permitiendo un ahorro de más de <span className="font-semibold">10 horas semanales</span> en tareas administrativas.</li>
    </ul>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">¿Cómo Podemos Ayudarte?</h3>
    <p className="text-gray-600">
      Si deseas impulsar tu negocio al siguiente nivel, estamos listos para ayudarte. Contamos con una consulta gratuita en la que analizamos tu situación actual y diseñamos un plan de acción estratégico.
    </p>

    <p className="text-gray-600 mt-4">
      <span className="font-semibold">¿Listo para crecer?</span> Contáctanos hoy y comencemos a transformar tu negocio con estrategias digitales de alto impacto.
    </p>
  </div>
)}


         {/* TAB 2: SERVICIOS */}
{activeTab === "services" && (
  <div>
    <h2 className="mb-4 text-2xl font-bold text-gray-900">Nuestros Servicios</h2>

    <p className="text-gray-600">
      En Senda Digital Marketing, ofrecemos soluciones digitales diseñadas para atraer más clientes, automatizar procesos y optimizar la conversión de leads en ventas reales. Nos enfocamos en estrategias basadas en datos y tecnología avanzada para garantizar resultados medibles y un crecimiento sostenido para tu negocio.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Publicidad en Meta Ads y Google Ads</h3>
    <p className="text-gray-600">
      Diseñamos y gestionamos campañas publicitarias altamente segmentadas en plataformas como Facebook, Instagram y Google. Nuestro equipo se encarga de optimizar cada anuncio para maximizar el retorno de inversión, asegurando que llegues al público adecuado en el momento oportuno. A través de pruebas A/B, segmentación precisa y optimización continua, logramos aumentar el tráfico y las conversiones de tu negocio.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Automatización de Respuestas en WhatsApp y Messenger</h3>
    <p className="text-gray-600">
      Sabemos que la comunicación rápida y eficiente con los clientes es clave para el éxito de cualquier negocio. Implementamos chatbots y flujos automatizados en WhatsApp, Messenger y otras plataformas para responder a preguntas frecuentes, gestionar reservas y mantener la interacción con clientes sin necesidad de intervención manual. Esto permite aumentar la eficiencia y mejorar la experiencia del cliente.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Creación de Páginas Web y Landing Pages</h3>
    <p className="text-gray-600">
      Un sitio web es la carta de presentación digital de tu empresa. Diseñamos páginas web optimizadas para la conversión, asegurándonos de que sean atractivas, funcionales y fáciles de navegar. Nuestras landing pages están diseñadas específicamente para capturar leads y generar ventas, integrándose con herramientas como formularios inteligentes, WhatsApp y pagos en línea para maximizar la conversión.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Gestión de CRM y Automatización de Procesos</h3>
    <p className="text-gray-600">
      Implementamos sistemas de CRM personalizados que permiten gestionar clientes, hacer seguimiento a prospectos y automatizar procesos de venta. Con paneles de control intuitivos, segmentación de clientes y reportes en tiempo real, facilitamos la organización y el crecimiento estructurado de tu negocio.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Reservación de Citas y Agenda Automatizada</h3>
    <p className="text-gray-600">
      Ofrecemos sistemas de agendamiento automático que sincronizan las reservas de citas en tiempo real. Esto incluye la integración con calendarios digitales, envíos automáticos de recordatorios por WhatsApp o SMS y la optimización del proceso de reservas para evitar cancelaciones y ausencias.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Estrategias de Email Marketing y Embudos de Venta</h3>
    <p className="text-gray-600">
      Diseñamos campañas de email marketing automatizadas para nutrir a los clientes potenciales y mejorar la fidelización. A través de embudos de venta personalizados, guiamos a los usuarios desde el primer contacto hasta la conversión final, utilizando contenido relevante y estrategias de segmentación avanzadas.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Gestión de Reputación y Reseñas Online</h3>
    <p className="text-gray-600">
      La confianza es clave para la conversión de clientes. Ayudamos a mejorar tu reputación digital mediante estrategias automatizadas para solicitar reseñas en Google y redes sociales. También gestionamos respuestas a comentarios y elaboramos estrategias para mejorar la percepción de tu marca en línea.
    </p>

    <h3 className="mt-6 text-xl font-semibold text-gray-900">Integraciones y Automatización de Negocios</h3>
    <p className="text-gray-600">
      Conectamos diferentes herramientas digitales para que tu negocio funcione de manera fluida. Desde la integración con plataformas de pago hasta la automatización de seguimiento de clientes, optimizamos cada aspecto del marketing y la gestión operativa para que tu negocio crezca sin complicaciones.
    </p>

    <p className="text-gray-600 mt-6">
      En Senda Digital Marketing, combinamos estrategia, tecnología y automatización para llevar tu negocio al siguiente nivel. Nuestro enfoque basado en datos nos permite ofrecer soluciones efectivas y escalables que garantizan resultados reales.
    </p>
  </div>
)}


          {/* TAB 3: FAQ (Accordion Style) */}
          {/* TAB 3: FAQ (Preguntas Frecuentes) */}
{activeTab === "faq" && (
  <div>
    <h2 className="mb-4 text-2xl font-bold text-gray-900">Preguntas Frecuentes</h2>
    <p className="text-gray-600 pb-10">
      Si tienes dudas sobre cómo trabajamos, qué ofrecemos o qué esperar de nuestros servicios, aquí respondemos algunas de las preguntas más comunes.
    </p>

    {[
      { 
        question: "¿Cuánto tiempo tardaré en ver resultados?", 
        answer: "La mayoría de nuestros clientes comienzan a ver resultados en la primera semana después del lanzamiento de las campañas publicitarias. Sin embargo, la velocidad depende del sector, el presupuesto y la estrategia utilizada. Realizamos ajustes constantes para maximizar los resultados."
      },
      { 
        question: "¿Necesito conocimientos previos en marketing digital?", 
        answer: "No, nuestro equipo se encarga de todo. Diseñamos y gestionamos estrategias completas para que solo tengas que enfocarte en atender a tus clientes. Nos aseguramos de que la implementación sea simple y efectiva sin requerir conocimientos técnicos por tu parte."
      },
      { 
        question: "¿Cómo puedo empezar?", 
        answer: "El primer paso es agendar una consulta gratuita con nuestro equipo. Analizaremos tu negocio, identificaremos tus necesidades y te presentaremos una estrategia personalizada que se adapte a tu mercado y objetivos."
      },
      { 
        question: "¿Cuáles son los costos de sus servicios?", 
        answer: "Nuestros precios varían según el tipo de servicio que necesites. Ofrecemos paquetes flexibles y opciones personalizadas para ajustarnos a cualquier tipo de negocio. Contáctanos para recibir una cotización específica basada en tus requerimientos."
      },
      { 
        question: "¿Qué diferencia a Senda Digital Marketing de otras agencias?", 
        answer: "Nos enfocamos en la automatización y en resultados medibles. No solo creamos campañas publicitarias, sino que también automatizamos procesos para que cada cliente sea atendido eficientemente sin perder oportunidades de venta. Además, nuestros servicios están diseñados con tecnología de CRM integrada, permitiéndote tener un control total de tu negocio en un solo lugar."
      },
      { 
        question: "¿Ofrecen soporte continuo después de contratar sus servicios?", 
        answer: "Sí, ofrecemos soporte y asesoría continua para garantizar que las estrategias implementadas sigan generando resultados. Dependiendo del paquete que elijas, podemos proporcionar optimización constante, informes detallados y ajustes en las campañas según las métricas de desempeño."
      },
      { 
        question: "¿Puedo cancelar el servicio en cualquier momento?", 
        answer: "Sí, trabajamos con planes flexibles sin contratos forzosos. Puedes cancelar o ajustar tu servicio en cualquier momento según las necesidades de tu negocio. Sin embargo, recomendamos mantener al menos tres meses de actividad para ver resultados sólidos y consistentes."
      },
      { 
        question: "¿Mis anuncios aparecerán en las primeras posiciones de Google y Facebook?", 
        answer: "Nuestro equipo de expertos optimiza cada campaña para maximizar la visibilidad y conversión. Aunque no podemos garantizar una posición exacta (ya que los algoritmos de anuncios cambian constantemente), utilizamos estrategias avanzadas de segmentación y optimización para obtener los mejores resultados posibles."
      },
      { 
        question: "¿Qué tipo de negocios pueden beneficiarse de sus servicios?", 
        answer: "Trabajamos con todo tipo de negocios, desde pequeños emprendimientos hasta empresas consolidadas. Hemos ayudado a clínicas dentales, restaurantes, tiendas en línea, consultorios médicos, gimnasios y muchas más industrias a aumentar sus clientes y mejorar su rentabilidad mediante estrategias digitales efectivas."
      },
      { 
        question: "¿Cómo protegen mis datos y la información de mis clientes?", 
        answer: "La seguridad de la información es una prioridad para nosotros. Implementamos medidas estrictas de protección de datos y cumplimos con las regulaciones de privacidad para garantizar que tu información y la de tus clientes esté protegida en todo momento."
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
