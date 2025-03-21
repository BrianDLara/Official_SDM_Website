import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router';

// Component Imports
import Nav from "../src/components/Nav"
import Footer from "../src/components/Footer"
import Home from "../src/pages/Home";
import PoliticaPrivacidad from "../src/pages/PoliticaPrivacidad"
import TerminosCondiciones from "../src/pages/TerminosCondiciones"



const App = () => {
    const location = useLocation(); // Get current URL

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Small delay ensures the section is available
        }
    }, [location]); // Runs when URL changes

    return (
      <div className='h-dvh bg-white'>
        <header className='py-4 mb-0 xl:mb-4'>
          <Nav/>
        </header>
        <main className='bg-white mt-0 xl:mt-4'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad/>}/>
            <Route path="/terminos-condiciones" element={<TerminosCondiciones/>}/>
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
};

export default App;
