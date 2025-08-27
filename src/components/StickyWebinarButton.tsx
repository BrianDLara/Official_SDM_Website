import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const SHOW_AFTER_PX = 220;

const StickyWebinarButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false); // reappears on refresh
  const navigate = useNavigate();
  const location = useLocation();

  const onWebinar =
    location.pathname === "/webinar" || location.pathname === "/webinar/";

  // Show/hide with scroll (all pages except /webinar/)
  useEffect(() => {
    if (onWebinar || dismissed) {
      setVisible(false);
      return;
    }
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > SHOW_AFTER_PX);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onWebinar, dismissed]);

  const goToWebinar = () => {
    (window as any).dataLayer ||= [];
    (window as any).dataLayer.push({
      event: "cta_click",
      cta_name: "sticky_webinar",
      dest: "/webinar/#top",
      page: location.pathname,
    });
    navigate({ pathname: "/webinar/", hash: "#top" });
  };

  const close = () => {
    setDismissed(true); // no persistence → will reappear on refresh
    setVisible(false);
  };

  if (onWebinar || dismissed) return null;

  return (
    <div
      className={[
        "fixed z-50",
        "left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6",
        "pb-[env(safe-area-inset-bottom,0)]",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      <div className="mx-auto sm:mx-0 sm:w-auto">
        {/* ✅ Wrap CTA so the pill can anchor to its corner */}
        <div className="relative inline-block w-full sm:w-auto">
          <button
            onClick={goToWebinar}
            aria-label="Ir al webinar"
            className={[
              "w-full sm:w-auto",
              "inline-flex items-center justify-center gap-3",
              "rounded-full bg-[#FBB02E] text-white font-bold",
              "px-5 py-3 sm:px-5 sm:py-3",
              "text-base sm:text-sm tracking-wide",
              "shadow-lg shadow-black/20 backdrop-blur",
              "hover:bg-[#e09a2a] hover:scale-[1.02]",
              "active:scale-[0.99]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FBB02E]",
              "transition-transform duration-200",
            ].join(" ")}
          >
            <span className="inline-grid place-items-center w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/20">
              <FaPlay className="translate-x-[1px]" />
            </span>
            <span>Webinar Gratis</span>
          </button>

          {/* ✅ Close pill in CTA’s top-right corner */}
          <button
            onClick={close}
            aria-label="Ocultar botón de webinar"
            className={[
              "absolute",
              "top-0 right-0",
              // Nudge it slightly outside the corner on larger screens
              "translate-x-1/4 -translate-y-1/4 sm:translate-x-1/3 sm:-translate-y-5/8",
              "inline-flex items-center gap-1",
              "px-2.5 py-1.5 rounded-full",
              "text-xs font-medium",
              "bg-gray-200/95 text-gray-800",
              "border border-black/10 shadow-md",
              "hover:bg-gray-400 hover:text-black",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400",
            ].join(" ")}
            title="Ocultar"
          >
            <span aria-hidden>✕</span>
            <span className="sr-only">Cerrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyWebinarButton;
