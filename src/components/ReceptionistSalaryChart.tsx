import React from "react";
import { apiSendaForm } from '../globals';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { CheckCircle, XCircle } from "lucide-react";

const ReceptionistSalaryChart: React.FC = () => {
  const baseSalary = 96000; // Sueldo anual base
  const growthRate = 0.045;
  const sendaMonthlyCost = 1899;

  const data = Array.from({ length: 10 }, (_, i) => {
    const year = 2025 + i;
    const recepcionistaAnual = baseSalary * Math.pow(1 + growthRate, i);
    const recepcionistaMensual = recepcionistaAnual / 12;
    return {
      year: year.toString(),
      recepcionista: Math.round(recepcionistaMensual),
      senda: sendaMonthlyCost,
      ahorro: Math.round(recepcionistaMensual - sendaMonthlyCost),
    };
  });

  const redirectToForm = () => {
    window.open(apiSendaForm, "_blank");
  };

  return (
    <div className='pt-4 pb-16 bg-gray-900'>
      {/* CTA SECCIÓN */}
      <div className="text-center bg-gray-800 px-4 sm:px-6 py-10 sm:py-12 rounded-2xl border border-gray-700 shadow-md mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-14 max-w-3xl mx-auto">
          {/* Imagen */}
          <div className="shrink-0 bg-gray-700 rounded-full p-3 sm:p-4">
            <img
              src="/images/recepcionista_crossed.png"
              alt="Recepcionista tachada"
              className="w-28 h-28 sm:w-40 sm:h-40 object-contain"
            />
          </div>

          {/* Texto CTA */}
          <div className="text-center md:text-left px-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ahorra más que contratando una recepcionista
            </h3>
            <p className="text-base sm:text-lg text-gray-300">
              Con Senda CRM automatizas tu atención al cliente por solo {" "}
              <strong className="text-white">$1,899 MXN</strong> al mes.
              Agenda, responde y da seguimiento sin contratar personal adicional.
            </p>

            {/* Botones */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={redirectToForm}
                className="w-full sm:w-auto bg-[#FBB02E] hover:bg-[#e09a2a] text-white font-bold py-3 px-6 rounded-lg text-base sm:text-lg transition-all duration-300"
              >
                Solicita una Demo Gratis
              </button>
              <a
                href="https://wa.me/5212713159509"
                target="_blank"
                className="text-sm sm:text-base underline text-[#93b4ff] hover:text-white font-medium"
              >
                O contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GRÁFICA */}
      <div className="w-full max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-center mb-2 text-white">
          Comparación mensual: Recepcionista dental vs Senda CRM
        </h3>
        <p className="text-sm text-center text-gray-400 mb-6">
          * Proyección basada en costos mensuales con un crecimiento salarial anual del 4.5%
        </p>

        <ResponsiveContainer width="100%" height={360}>
          <LineChart data={data} margin={{ top: 10, right: 35, left: 35, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="year" stroke="#ccc" dy={10} />
            <YAxis
              stroke="#ccc"
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              label={{
                value: 'Costo mensual (MXN)',
                angle: -90,
                position: 'insideLeft',
                offset: -25,
                style: { fill: '#ccc', fontSize: 16 },
                dy: 80,
              }}
              
            />
            <Tooltip
              formatter={(value) => `$${value.toLocaleString()}`}
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ color: '#fff' }} />
            <Line
              type="monotone"
              dataKey="recepcionista"
              stroke="#EF4444"
              strokeWidth={3}
              dot={{ r: 5 }}
              name="Recepcionista Dental (mensual)"
            />
            <Line
              type="monotone"
              dataKey="senda"
              stroke="#FBB02E"
              strokeWidth={3}
              dot={{ r: 5 }}
              name="Senda CRM (mensual)"
            />
            <Line
              type="monotone"
              dataKey="ahorro"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 5 }}
              strokeDasharray="5 5"
              name="Ahorro mensual"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReceptionistSalaryChart;
