import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const pathWithSlash =
  location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";

window.dataLayer.push({
  event: "page_view",
  page_path: pathWithSlash + location.search + location.hash,
  page_title: document.title || undefined,
});

const GTMPageView: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const page_path = location.pathname + location.search + location.hash;

    // Ensure dataLayer exists (GTM snippet must be in index.html)
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      event: "page_view",
      page_path,
      page_title: document.title || undefined,
    });
  }, [location]);

  return null;
};

export default GTMPageView;
