import React from 'react';
import { RiAdvertisementFill, RiRobot2Fill, RiAiGenerate2 } from "react-icons/ri";
import { SiPagespeedinsights, SiAmazonsimpleemailservice } from "react-icons/si";
import { TbCalendarUser } from "react-icons/tb";
import { FaChartLine, FaRankingStar } from "react-icons/fa6";

const Servicios = () => {
    // Redirect to GoHighLevel Form
    const redirectToForm = () => {
        window.location.href = "https://api.leadconnectorhq.com/widget/form/3OwmhQaqezp2bcbzkxBg";
    };

    return (
        <div className='pb-16'>
            <h1 className='pt-20 text-center text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>
                Servicios
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 rounded-full"></div>

            {/* Grid Layout */}
            <div className="text-white grid max-w-screen-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto items-start text-gray-900 dark:text-white sm:p-8 relative py-20 bg-gray-900 text-white bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('/images/logo_hero.png')" }}>
                {[
                    { icon: <RiAdvertisementFill size='3rem' />, title: "Publicidad en Meta Ads", desc: "Atrae más clientes con anuncios altamente segmentados en Facebook, Instagram y Google. Optimización constante para mejorar conversiones y reducir costos." },
                    { icon: <RiAiGenerate2 size='3rem' />, title: "Automatización de Respuestas", desc: "Responde automáticamente a clientes en WhatsApp, Messenger y Email. Automatiza seguimientos, agendamientos y gestiona clientes desde un solo panel." },
                    { icon: <SiPagespeedinsights size='3rem' />, title: "Creación de Páginas Web", desc: "Diseño de páginas web optimizadas para convertir visitantes en clientes. Integradas con WhatsApp, formularios y pagos en línea." },
                    { icon: <RiRobot2Fill size='3rem' />, title: "WhatsApp Marketing y Chatbots", desc: "Envía mensajes automáticos y personaliza respuestas en WhatsApp. Conéctalo con tu CRM y mejora la atención al cliente sin esfuerzo." },
                    { icon: <SiAmazonsimpleemailservice size='3rem' />, title: "Embudos de Ventas y Automatización de Correos", desc: "Nutre leads con secuencias de emails automatizados y embudos de conversión. Atrae, educa y convierte clientes potenciales en compradores." },
                    { icon: <TbCalendarUser size='3rem' />, title: "Reservación de Citas Online", desc: "Simplifica la gestión de citas con un sistema de reservas online. Envía recordatorios automáticos y reduce cancelaciones." },
                    { icon: <FaChartLine size='3rem' />, title: "CRM y Panel de Control Empresarial", desc: "Gestiona clientes, pagos y métricas en un solo lugar. Visualiza reportes en tiempo real e integra tu negocio con automatizaciones." },
                    { icon: <FaRankingStar size='3rem' />, title: "Gestión de reputación", desc: "Aumenta tus reseñas en Google con automatización. Responde opiniones y mejora la imagen de tu negocio fácilmente." }
                ].map((service, index) => (
                    <div key={index} className="border rounded mx-4 p-6 flex flex-col h-full justify-between backdrop-blur-2xl" style={{ backgroundColor: "rgba(17, 24, 39, 0.7)" }}>
                        <div className='pb-4'>{service.icon}</div>
                        <dt className="mb-2 text-2xl font-extrabold">{service.title}</dt>
                        <dd className="text-gray-300 grow">{service.desc}</dd>
                    </div>
                ))}
            </div>

            {/* Contact Button - Redirect to GHL Form */}
            <div className="flex justify-center">
                <button
                    onClick={redirectToForm}
                    className="cursor-pointer mt-6 bg-[#FBB02E] hover:bg-[#e09a2a] text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300"
                >
                    Contáctanos Para Más Información
                </button>
            </div>
        </div>
    );
}

export default Servicios;
