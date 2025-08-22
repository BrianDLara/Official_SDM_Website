import React from "react";
import { Check, Minus } from "lucide-react";

type Feature = { name: string; included: boolean };

type PriceCardProps = {
  title: string;
  price: string;
  cta: string;
  features: Feature[];
  currency?: string;      // default: "USD"
  period?: string;        // e.g., "mes" (omit for one-time)
  offerNote?: string;     // small banner text
  badge?: string;         // small chip at top
  highlight?: boolean;    // special styling for main plan
  oneTime?: boolean;      // if true, shows "pago único"
  onCtaClick?: () => void;
  className?: string;     // allow parent to pass h-full, etc.
};

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  cta,
  features,
  currency = "USD",
  period,
  offerNote,
  badge,
  highlight = false,
  oneTime = false,
  onCtaClick,
  className = "",
}) => {
  return (
    <div
      className={[
        "w-full max-w-sm h-full rounded-2xl p-6",
        "flex flex-col backdrop-blur border shadow-sm",
        highlight
          ? "border-blue-400/50 bg-gradient-to-b from-white/70 to-white/40 dark:from-white/10 dark:to-white/[0.04]"
          : "border-white/10 bg-white/5",
        className,
      ].join(" ")}
    >
      {/* Badge */}
      {badge && (
        <div className="mb-3">
          <span className="inline-flex items-center rounded-full bg-blue-600/15 text-blue-700 dark:text-blue-200 ring-1 ring-inset ring-blue-400/30 px-3 py-1 text-xs font-semibold">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
          ${price}
        </span>
        <span className="text-sm opacity-80 text-gray-700 dark:text-white/80">
          {oneTime ? " pago único" : ` /${period ?? "mes"} ${currency}`}
        </span>
      </div>

      {/* Offer note */}
      {offerNote && (
        <p className="mt-3 text-xs text-amber-900 dark:text-amber-200 bg-amber-100/80 dark:bg-amber-900/30 border border-amber-400/30 rounded-md p-2">
          {offerNote}
        </p>
      )}

      {/* Features */}
      <ul className="mt-5 space-y-3 text-sm">
        {features.map((f, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 ${
              f.included ? "opacity-100" : "opacity-60 line-through"
            }`}
          >
            <span className="mt-0.5">
              {f.included ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Minus className="h-4 w-4 text-gray-400" />
              )}
            </span>
            <span className="text-gray-800 dark:text-white/90">{f.name}</span>
          </li>
        ))}
      </ul>

      {/* CTA pinned to bottom */}
      <div className="mt-auto">
        <button
          onClick={onCtaClick}
          className={[
            "w-full rounded-lg py-3 font-semibold transition mt-6",
            highlight
              ? "bg-blue-600 hover:bg-blue-500 text-white shadow"
              : "bg-gray-900/80 hover:bg-gray-900 text-white dark:bg-white/10 dark:hover:bg-white/20",
          ].join(" ")}
        >
          {cta}
        </button>
      </div>

      
    </div>
  );
};

export default PriceCard;
