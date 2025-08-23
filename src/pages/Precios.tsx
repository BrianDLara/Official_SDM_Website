import React from 'react';
import PriceCard from '../components/PriceCard';
import { useNavigate } from 'react-router-dom';

const Precios: React.FC = () => {
  const navigate = useNavigate();
  const goToWebinar = () => navigate('/webinar#top'); // or '/webinar#booking'

  const planUnico = {
    title: "Plan Único",
    price: "175",
    currency: "USD",
    period: "mes",
    cta: "Regístrate en el webinar",
    offerNote:
      "Asiste al webinar y obtén $100 USD de descuento/mes durante el primer año (pagarás $75/mes por 12 meses).",
    badge: "Mejor para empezar",
    features: [
      { name: "Acceso al CRM de Senda", included: true },
      { name: "Agente de IA en WhatsApp", included: true },
      { name: "Automatizaciones (recordatorios, pipelines, tareas)", included: true },
      { name: "Agenda de citas automática", included: true },
      { name: "Gestión de reputación", included: true },
      { name: "App móvil (iOS/Android)", included: true },
      { name: "Formularios y páginas simples", included: true },
      { name: "Soporte: hasta 3 consultas al mes", included: true },
    ],
    highlight: true,
  };

  const addonSetup = {
    title: "Add-on: Setup Profesional",
    price: "1,500",
    currency: "USD",
    oneTime: true, // pago único
    cta: "Quiero el Setup (ver webinar)",
    badge: "Implementación 100% lista",
    offerNote: "Incluye auditoría, estrategia personalizada y entrega llave en mano.",
    features: [
      { name: "Automatizaciones Personalizadas", included: true },
      { name: "Estrategia 100% Personalizada", included: true },
      { name: "Diseño de Embudo de Ventas", included: true },
      { name: "Desarrollo Web / Landing Page", included: true },
      { name: "Conexión con WhatsApp y CRM", included: true },
      { name: "Capacitación inicial al equipo", included: true },
    ],
  };

  return (
    <div className="pb-12">
      {/* Banner de oferta */}
      <div className="mx-auto max-w-4xl my-6 rounded-xl border border-amber-300/40 bg-amber-50 text-amber-900 px-4 py-3 text-center">
        <p className="text-sm md:text-base font-medium">
          🎁 Oferta por tiempo limitado: <strong>$100 USD de descuento/mes por 12 meses</strong> si te registras y asistes al webinar.
          <span className="hidden sm:inline"> — Precio regular: $175/mes · Primer año: <strong>$75/mes</strong>.</span>
        </p>
      </div>

      <h1 className="text-3xl text-center md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        Precios
      </h1>
      <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6 rounded-full"></div>

      {/* 🔹 SINGLE CONTAINER: both cards side-by-side on md+ */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {/* Plan Único */}
          <PriceCard
            title={planUnico.title}
            price={planUnico.price}
            cta={planUnico.cta}
            features={planUnico.features}
            currency={planUnico.currency}
            period={planUnico.period}
            offerNote={planUnico.offerNote}
            badge={planUnico.badge}
            highlight={planUnico.highlight}
            onCtaClick={goToWebinar}
          />

          {/* Add-on (one-time) — note: no period prop */}
          <PriceCard
            title={addonSetup.title}
            price={addonSetup.price}
            cta={addonSetup.cta}
            features={addonSetup.features}
            currency={addonSetup.currency}
            offerNote={addonSetup.offerNote}
            badge={addonSetup.badge}
            oneTime={addonSetup.oneTime}
            onCtaClick={goToWebinar}
          />
        </div>
      </div>
    </div>
  );
};

export default Precios;
