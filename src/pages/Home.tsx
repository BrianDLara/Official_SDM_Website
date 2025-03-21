import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

// Component Imports
import Mission from "../components/Mission";
import Demo from "../components/Demo";
import Servicios from "./Servicios";
import Precios from "./Precios";
import AboutUs from "./AboutUs"
import Team from "./Team"

const Home = () => {
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
        <div>
            <section className="py-8">
                <Mission />
            </section>
            <section id="servicios" className='bg-gray-900'>
                <Servicios/>
            </section>
            <section className="bg-white">
                <Demo />
            </section>
            <section id="precios" className="py-8 bg-gray-900 text-black">
                <Precios />
            </section>
            <section id="conocenos" className=" bg-white text-black">
                <AboutUs />
            </section>
            <section id="team" className="">
                <Team />
            </section>
        </div>
    );
};

export default Home;
