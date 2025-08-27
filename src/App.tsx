import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ correct source

// Component Imports
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import PoliticaPrivacidad from "../src/pages/PoliticaPrivacidad";
import TerminosCondiciones from "../src/pages/TerminosCondiciones";
import Webinar from "../src/pages/Webinar";
import StickyWebinarButton from "./components/StickyWebinarButton";

import GTMPageView from "./GTMPageView"; 

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="h-dvh bg-white">
      <header className="py-4 mb-0 xl:mb-4">
        <Nav />
      </header>
      <main className="bg-white mt-0 xl:mt-4">
    
        <GTMPageView />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/webinar" element={<Webinar />} />
        </Routes>
        <StickyWebinarButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
