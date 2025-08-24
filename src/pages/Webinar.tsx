import React, { useEffect } from "react";

const WIDGET_SRC =
  "https://links.sendadigitalmarketing.com/widget/booking/gbj123qZpfsTUcUxbPuG";
const EMBED_SCRIPT_SRC =
  "https://links.sendadigitalmarketing.com/js/form_embed.js";

const Webinar: React.FC = () => {
  useEffect(() => {
    // Evitar cargar el script dos veces
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT_SRC}"]`
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT_SRC;
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const AVATAR_URL = "https://i.imgur.com/iRPlsA7.png";

  // ================== NUEVO: constantes de descuento ==================
  const DISCOUNT_MONTHLY_USD = 100;
  const DISCOUNT_MONTHS = 12;
  const DISCOUNT_TOTAL_USD = DISCOUNT_MONTHLY_USD * DISCOUNT_MONTHS;
  // ====================================================================

  return (
    <main id="top" className="bg-gray-900 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-500/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10 md:py-14">

          {/* 🎁 PROMO BAR: descuento por asistir */}
          <div className="mb-5 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-amber-200">
            <span className="text-sm md:text-base">
              🎁 <span className="font-semibold">Bono para asistentes:</span>{" "}
              si te unes al webinar y te registras, obtienes{" "}
              <b>${DISCOUNT_MONTHLY_USD} USD/mes</b> de descuento por{" "}
              <b>{DISCOUNT_MONTHS} meses</b> (ahorro total{" "}
              <b>${DISCOUNT_TOTAL_USD} USD</b>).
            </span>
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center rounded-lg bg-amber-400/20 px-4 py-2 text-sm font-semibold text-amber-100 ring-1 ring-inset ring-amber-300/40 hover:bg-amber-400/30 transition"
            >
              Aprovechar descuento
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-200 ring-1 ring-inset ring-blue-400/30">
                Webinar gratis • Cupo limitado
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Senda CRM para pequeños negocios: más clientes con WhatsApp + IA
              </h1>
              <p className="mt-3 text-white/80">
                En 60 minutos te mostramos cómo <span className="font-semibold">Senda</span> centraliza tus
                conversaciones de WhatsApp, automatiza el seguimiento y mejora tu reputación online.
                Sin anuncios, sin complejidad.
              </p>
              <ul className="mt-6 space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Agente de IA en WhatsApp: respuestas rápidas 24/7.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Automatizaciones: recordatorios, confirmaciones y tareas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Gestión de reputación: más reseñas positivas, menos no-shows.</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold shadow hover:bg-blue-500 transition"
                >
                  Reserva tu lugar gratis
                </button>
                <a
                  href="#agenda"
                  className="text-sm text-white/80 underline underline-offset-4 hover:text-white"
                >
                  Ver agenda y requisitos
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60">
                <span>⏱ 60 min</span>
                <span>•</span>
                <span>🧩 Requisitos mínimos: WhatsApp + tu negocio</span>
                <span>•</span>
                <span>💬 Q&A al final</span>
              </div>
            </div>

            {/* Prueba social / highlights */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-sm text-white/80">
                “Con <b>Senda</b> organizamos WhatsApp, automatizamos recordatorios y subimos la tasa de asistencia.
                Menos mensajes manuales, más tiempo atendiendo clientes.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={AVATAR_URL}
                  alt="Dental Inn JL"
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                  onError={(e) => {
                    // Fallback visual si la imagen falla
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.className =
                      "h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400";
                    el.parentElement?.insertBefore(fallback, el);
                  }}
                />
                <div>
                  <p className="text-sm font-semibold">Dental Inn JL</p>
                  <p className="text-xs text-white/60">Clínica Dental</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 rounded-lg border border-white/10 bg-white/5 text-center">
                <div className="px-3 py-4">
                  <p className="text-xl font-bold">5×</p>
                  <p className="text-[11px] text-white/60">Respuestas más rápidas</p>
                </div>
                <div className="px-3 py-4">
                  <p className="text-xl font-bold">30%+</p>
                  <p className="text-[11px] text-white/60">Mejor asistencia</p>
                </div>
                <div className="px-3 py-4">
                  <p className="text-xl font-bold">24/7</p>
                  <p className="text-[11px] text-white/60">Atención con IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📌 BOOKING ARRIBA (justo después del hero) */}
      <section id="booking" className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pt-4 pb-10 md:pb-12">
        <div className="mb-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Reserva tu lugar</h2>
          <p className="mt-2 text-white/80">
            Elige fecha y hora. Recibirás confirmación y recordatorios.
          </p>

          {/* 🎁 Nota de descuento en booking */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs md:text-sm text-amber-100">
            🎁 Bono asistente: <b className="ml-1">-${DISCOUNT_MONTHLY_USD} USD/mes</b> por{" "}
            <b>{DISCOUNT_MONTHS} meses</b> (ahorro total ${DISCOUNT_TOTAL_USD} USD) al registrarte tras el webinar.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-2 md:p-3">
          <iframe
            src={WIDGET_SRC}
            id="gbj123qZpfsTUcUxbPuG_1755957012785"
            title="Senda – Reserva Webinar"
            scrolling="no"
            loading="lazy"
            className="w-full min-h-[640px] md:min-h-[720px] lg:min-h-[760px] overflow-hidden rounded-xl"
          />
        </div>

        <p className="mt-3 text-center text-xs text-white/60">
          ¿Problemas para ver el calendario? Recarga la página.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center">¿Qué te llevas del webinar?</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Senda CRM: visión general", d: "Cómo centraliza WhatsApp y simplifica tu operación." },
            { t: "Agente de IA", d: "Agendar citas, responder FAQs y capturar datos 24/7." },
            { t: "Automatizaciones", d: "Confirmaciones, recordatorios, tareas y promociones." },
            { t: "Gestión de reputación", d: "Solicita reseñas, monitorea y responde desde un lugar." },
            { t: "Mensajería efectiva", d: "Guiones de contacto y seguimiento listos para usar." },
            { t: "Checklist de implementación", d: "Pasos claros para operar sin anuncios ni fricción." },
          ].map((item) => (
            <div key={item.t} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold">{item.t}</h3>
              <p className="mt-2 text-sm text-white/75">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA INTERMEDIA */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold">Asegura tu lugar — es gratis</h3>
          <p className="mt-2 text-white/90">
            Para dueños y equipos de <b>pequeños negocios</b>. Solo necesitas <b>WhatsApp</b> y tu negocio en marcha.
          </p>
          {/* 🎁 Badge pequeño en la CTA */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
            🎁 Bono: -${DISCOUNT_MONTHLY_USD} USD/mes por {DISCOUNT_MONTHS} meses (ahorro total ${DISCOUNT_TOTAL_USD} USD)
          </div>
          <button
            onClick={scrollToBooking}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90 transition"
          >
            Reservar en el calendario
          </button>
        </div>
      </section>

      {/* AGENDA + REQUISITOS + PRESENTADOR */}
      <section id="agenda" className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Agenda</h2>
            <ol className="mt-5 space-y-4 text-white/80">
              <li><b>00:00</b> — Introducción a Senda CRM.</li>
              <li><b>05:00</b> — Demostración: Agente de IA en WhatsApp.</li>
              <li><b>20:00</b> — Automatizaciones: confirmaciones y seguimiento.</li>
              <li><b>35:00</b> — Gestión de reputación: reseñas y monitoreo.</li>
              <li><b>50:00</b> — Q&A en vivo.</li>
            </ol>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Requisitos mínimos</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• WhatsApp</li>
                <li>• Un pequeño negocio en operación (servicios, retail, restauración, salud, etc.)</li>
                <li>• Ganas de estandarizar y automatizar procesos.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Presentador</h3>
            <div className="mt-4 flex items-center gap-4">
              <img
                src="https://i.imgur.com/bFssI9J.png"
                alt="Pablo Lara"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="font-semibold">Brian Lara</p>
                <p className="text-sm text-white/70">
                  Fundador de Senda Digital Marketing • CRM, IA y Automatizaciones
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Brian liderará la demostración de <b>Senda CRM</b>, mostrando cómo conectar
              WhatsApp, aprovechar la IA, implementar automatizaciones y gestionar tu
              reputación online.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-4 md:pb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Lo que dicen pequeños negocios</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            { q: "“El agente de IA filtra preguntas repetidas y agenda más rápido.”", a: "Visión Clara Óptica" },
            { q: "“Las reseñas subieron y ahora nos encuentran más.”", a: "La Casona del Sabor" },
          ].map((t, i) => (
            <figure key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <blockquote className="text-white/90">{t.q}</blockquote>
              <figcaption className="mt-3 text-xs text-white/60">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {[
            { q: "¿El webinar tiene costo?", a: "No. Es 100% gratuito." },
            { q: "¿Para quién es?", a: "Para pequeños negocios de cualquier rubro." },
            { q: "¿Qué necesito para aplicar lo aprendido?", a: "Solo WhatsApp y tu negocio en marcha." },
            // NUEVA: descuento por asistir
            { q: "¿Hay algún descuento si asisto al webinar y me registro?", a: `Sí. Los asistentes que se registren obtienen un descuento de $${DISCOUNT_MONTHLY_USD} USD al mes por ${DISCOUNT_MONTHS} meses (ahorro total $${DISCOUNT_TOTAL_USD} USD) en el plan anual.` },
          ].map((f) => (
            <details key={f.q} className="group p-4">
              <summary className="cursor-pointer list-none font-semibold marker:content-none">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {f.q}
                </span>
                <span className="float-right text-white/50 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-2 text-white/80">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold shadow hover:bg-blue-500 transition"
          >
            Reservar ahora
          </button>
          <p className="mt-2 text-xs text-white/60">Toma menos de 60 segundos.</p>
        </div>
      </section>
    </main>
  );
};

export default Webinar;
