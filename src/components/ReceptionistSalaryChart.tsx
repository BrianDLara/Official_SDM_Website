import React, { useEffect, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useNavigate } from "react-router-dom";

type RateCache = {
  rate: number;
  fetchedAt: number; // epoch ms
};

type ViewMode = "monthly" | "yearly";

const ReceptionistSalaryChart: React.FC = () => {
  const navigate = useNavigate();

  // ===== Config precio Senda (se muestra en USD; se convierte a MXN para calcular) =====
  const SENDA_USD = 175;

  // ===== Tipo de cambio USD->MXN (con caché local y fallback) =====
  const FALLBACK_USD_MXN = 18.6;
  const [usdMxn, setUsdMxn] = useState<number>(FALLBACK_USD_MXN);
  const [rateUpdatedAt, setRateUpdatedAt] = useState<Date | null>(null);
  const [loadingRate, setLoadingRate] = useState<boolean>(true);

  useEffect(() => {
    const CACHE_KEY = "usd_mxn_rate_cache_v1";
    const MAX_AGE_MS = 12 * 60 * 60 * 1000; // 12 horas

    const fromCache = (): RateCache | null => {
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const parsed: RateCache = JSON.parse(raw);
        if (!parsed?.rate || !parsed?.fetchedAt) return null;
        if (Date.now() - parsed.fetchedAt > MAX_AGE_MS) return null;
        return parsed;
      } catch {
        return null;
      }
    };

    const saveCache = (rate: number) => {
      try {
        const payload: RateCache = { rate, fetchedAt: Date.now() };
        localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
      } catch {
        // ignore
      }
    };

    const useRate = (rate: number, fetchedAtMs?: number) => {
      setUsdMxn(rate);
      setRateUpdatedAt(fetchedAtMs ? new Date(fetchedAtMs) : new Date());
    };

    const init = async () => {
      setLoadingRate(true);
      const cached = fromCache();
      if (cached) {
        useRate(cached.rate, cached.fetchedAt);
        setLoadingRate(false);
      }
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 7000);
        const res = await fetch(
          "https://api.exchangerate.host/latest?base=USD&symbols=MXN",
          { signal: ctrl.signal }
        );
        clearTimeout(t);
        if (!res.ok) throw new Error("Bad response");
        const data = await res.json();
        const freshRate = Number(data?.rates?.MXN);
        if (freshRate && isFinite(freshRate)) {
          useRate(freshRate);
          saveCache(freshRate);
        } else if (!cached) {
          useRate(FALLBACK_USD_MXN);
        }
      } catch {
        if (!cached) useRate(FALLBACK_USD_MXN);
      } finally {
        setLoadingRate(false);
      }
    };

    void init();
  }, []);

  // ===== Formateadores =====
  const formatMXN0 = (value: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    }).format(value);

  const formatMXN = (value: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(value);

  const sendaPriceTxtUSD = `$${SENDA_USD} USD`;

  // ===== Conversiones dinámicas =====
  const sendaMonthlyCostMXN = useMemo(
    () => Math.round(SENDA_USD * usdMxn),
    [SENDA_USD, usdMxn]
  );
  const sendaYearlyCostMXN = useMemo(
    () => Math.round(sendaMonthlyCostMXN * 12),
    [sendaMonthlyCostMXN]
  );

  // ===== Datos base recepcionista (anual) =====
  const baseSalaryAnnualMXN = 96000; // sueldo anual base en MXN
  const growthRate = 0.045;

  // ===== View mode (mensual/anual) =====
  const [mode, setMode] = useState<ViewMode>("monthly");

  // ===== Dataset según modo =====
  const data = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => {
      const year = 2025 + i;
      const recepcionistaAnual = baseSalaryAnnualMXN * Math.pow(1 + growthRate, i);
      const recepcionistaMensual = recepcionistaAnual / 12;

      if (mode === "monthly") {
        const ahorroMensual = recepcionistaMensual - sendaMonthlyCostMXN;
        return {
          year: year.toString(),
          recepcionista: Math.round(recepcionistaMensual),
          senda: sendaMonthlyCostMXN,
          ahorro: Math.round(ahorroMensual),
        };
      } else {
        const ahorroAnual = recepcionistaAnual - sendaYearlyCostMXN;
        return {
          year: year.toString(),
          recepcionista: Math.round(recepcionistaAnual),
          senda: sendaYearlyCostMXN,
          ahorro: Math.round(ahorroAnual),
        };
      }
    });
  }, [mode, baseSalaryAnnualMXN, growthRate, sendaMonthlyCostMXN, sendaYearlyCostMXN]);

  const redirectToWebinar = () => {
    navigate({ pathname: "/webinar/", hash: "#top" });
  }; 

  // ===== Textos dependientes del modo =====
  const axisLabel =
    mode === "monthly" ? "Costo mensual (MXN)" : "Costo anual (MXN)";
  const chartTitle =
    mode === "monthly"
      ? "Comparación mensual: Recepcionista dental vs Senda"
      : "Comparación anual: Recepcionista dental vs Senda";
  const receptionistLegend =
    mode === "monthly" ? "Recepcionista Dental (MXN/mes)" : "Recepcionista Dental (MXN/año)";
  const sendaLegend =
    mode === "monthly"
      ? `Senda (${sendaPriceTxtUSD} ≈ ${formatMXN0(sendaMonthlyCostMXN)}/mes)`
      : `Senda (${sendaPriceTxtUSD} ≈ ${formatMXN0(sendaMonthlyCostMXN)} x 12 = ${formatMXN0(sendaYearlyCostMXN)}/año)`;
  const ahorroLegend =
    mode === "monthly" ? "Ahorro mensual" : "Ahorro anual";

  return (
    <div className="pt-4 pb-16 bg-gray-900">
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
              Con Senda CRM automatizas tu atención al cliente por solo{" "}
              <strong className="text-white">{sendaPriceTxtUSD}</strong> al mes.
              Agenda, responde y da seguimiento sin contratar personal adicional.
            </p>

            {/* Botones */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={redirectToWebinar}
                className="w-full sm:w-auto bg-[#FBB02E] hover:bg-[#e09a2a] text-white font-bold py-3 px-6 rounded-lg text-base sm:text-lg transition-all duration-300"
              >
                Solicita una Demo Gratis
              </button>
              <a
                href="https://wa.me/5212713159509"
                target="_blank"
                rel="noreferrer"
                className="text-sm sm:text-base underline text-[#93b4ff] hover:text-white font-medium"
              >
                <span className="flex items-center">
                  O contáctanos por &nbsp;
                  <FaWhatsapp className="text-[#25D366]" />
                  <p className="pl-1">WhatsApp</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TOGGLE Mensual/Anual */}
      <div className="w-full max-w-4xl mx-auto mt-10 px-4 sm:px-0 flex items-center justify-center">
        <div className="inline-flex rounded-xl border border-gray-700 bg-gray-800 p-1">
          <button
            type="button"
            onClick={() => setMode("monthly")}
            aria-pressed={mode === "monthly"}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
              mode === "monthly"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-200 hover:text-white hover:bg-gray-700"
            }`}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setMode("yearly")}
            aria-pressed={mode === "yearly"}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
              mode === "yearly"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-200 hover:text-white hover:bg-gray-700"
            }`}
          >
            Anual
          </button>
        </div>
      </div>

      {/* GRÁFICA */}
      <div className="w-full max-w-4xl mx-auto mt-6">
        <h3 className="text-2xl font-bold text-center mb-2 text-white px-3">
          {chartTitle}
        </h3>
        <p className="text-sm text-center text-gray-400 mb-6">
          * Proyección basada en costos {mode === "monthly" ? "mensuales" : "anuales"} con un crecimiento salarial anual del 4.5%
        </p>

        <ResponsiveContainer width="100%" height={360}>
          <LineChart data={data} margin={{ top: 10, right: 35, left: 35, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="year" stroke="#ccc" dy={10} />
            <YAxis
              stroke="#ccc"
              tickFormatter={(value) => formatMXN(Number(value))}
              label={{
                value: axisLabel,
                angle: -90,
                position: "insideLeft",
                offset: -25,
                style: { fill: "#ccc", fontSize: 16 },
                dy: 80,
              }}
            />
            <Tooltip
              formatter={(value: number) => formatMXN(Number(value))}
              contentStyle={{
                backgroundColor: "#1f2937",
                borderColor: "#374151",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Line
              type="monotone"
              dataKey="recepcionista"
              stroke="#EF4444"
              strokeWidth={3}
              dot={{ r: 5 }}
              name={receptionistLegend}
            />
            <Line
              type="monotone"
              dataKey="senda"
              stroke="#FBB02E"
              strokeWidth={3}
              dot={{ r: 5 }}
              name={sendaLegend}
            />
            <Line
              type="monotone"
              dataKey="ahorro"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 5 }}
              strokeDasharray="5 5"
              name={ahorroLegend}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Nota de conversión */}
        <p className="text-center text-xs text-gray-400 mt-3 px-4">
          * Senda CRM mostrado en USD. Conversión aproximada:{" "}
          <strong>
            {formatMXN0(sendaMonthlyCostMXN)} / mes
            {"  "}
            ({formatMXN0(sendaYearlyCostMXN)} / año)
          </strong>
          {rateUpdatedAt ? (
            <> — tipo de cambio {usdMxn.toFixed(4)} MXN/USD, actualizado {rateUpdatedAt.toLocaleString()}.</>
          ) : (
            <> — tipo de cambio {usdMxn.toFixed(4)} MXN/USD.</>
          )}
          {loadingRate && " Actualizando tipo de cambio…"}
        </p>
      </div>
    </div>
  );
};

export default ReceptionistSalaryChart;
