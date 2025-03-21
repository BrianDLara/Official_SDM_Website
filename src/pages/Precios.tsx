import React from 'react';
import PriceCard from '../components/PriceCard';

const pricingPlans = [
  {
    title: "Plan Básico",
    price: "99",
    cta: "Empieza ahora con el Plan Básico",
    features: [
      { name: "Acceso al CRM de Senda", included: true },
      { name: "Automatización de chatbot", included: true },
      { name: "Instalación inicial", included: true },
      { name: "1 video de publicidad (Meta Ads)", included: true },
      { name: "Acceso a la App Móvil", included: true },
      { name: "Soporte: Hasta 3 consultas al mes", included: true },
      { name: "Gestión de reputación", included: false },
      { name: "Chatbot con integración de IA con ChatGPT", included: false },
      { name: "Agenda de citas automática", included: false },
      { name: "Tutoriales básicos para Meta Ads", included: false },
      { name: "Publicaciones en Meta Ads", included: false },

    ],
  },
  {
    title: "Plan Pro",
    price: "149",
    cta: "Escala tu negocio con el Plan Pro",
    features: [
      { name: "Acceso al CRM de Senda", included: true },
      { name: "Automatización de chatbot", included: true },
      { name: "Instalación inicial", included: true },
      { name: "1 video de publicidad (Meta Ads)", included: true },
      { name: "Acceso a la App Móvil", included: true },
      { name: "Soporte: Hasta 5 consultas al mes", included: true },
      { name: "Gestión de reputación", included: true },
      { name: "Chatbot con integración de IA con ChatGPT", included: true },
      { name: "Agenda de citas automática", included: true },
      { name: "Tutoriales básicos para Meta Ads", included: true },
      { name: "Publicaciones en Meta Ads", included: false },
    ],
  },
  {
    title: "Plan Premium",
    price: "299",
    cta: "Domina el marketing con el Plan Elite",
    features: [
      { name: "Acceso al CRM de Senda", included: true },
      { name: "Automatización de chatbot", included: true },
      { name: "Instalación inicial", included: true },
      { name: "1 video de publicidad (Meta Ads)", included: true },
      { name: "Acceso a la App Móvil", included: true },
      { name: "Soporte: Ilimitado", included: true },
      { name: "Gestión de reputación", included: true },
      { name: "Chatbot con integración de IA con ChatGPT", included: true },
      { name: "Agenda de citas automática", included: true },
      { name: "Tutoriales básicos para Meta Ads", included: true },
      { name: "Publicaciones en Meta Ads", included: true },
    ],
  },
];

const Precios = () => {
  return (
    <div>
      <h1 className="text-3xl text-center md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Precios</h1>
      <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {pricingPlans.map((plan, index) => (
          <PriceCard key={index} title={plan.title} price={plan.price} cta={plan.cta} features={plan.features} />
        ))}
      </div>
    </div>
  );
};

export default Precios;
