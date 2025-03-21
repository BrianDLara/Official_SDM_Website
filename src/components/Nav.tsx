import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router";

const Nav: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle smooth scrolling (works from any page)
    const scrollToSection = (id: string) => {
        if (location.pathname !== "/") {
            navigate("/"); // Redirect to the homepage before scrolling
            setTimeout(() => {
                scrollToElement(id);
            }, 500); // Give time for navigation
        } else {
            scrollToElement(id);
        }
        setOpen(false);
    };

    // Smooth scroll to section
    const scrollToElement = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Redirect to GoHighLevel Form
    const redirectToForm = () => {
        window.location.href = "https://api.leadconnectorhq.com/widget/form/3OwmhQaqezp2bcbzkxBg";
    };

    return (
        <div className="relative items-center pb-2">
            {/* Logo */}
            <div className="absolute left-10 ml-4 z-10 md:block hidden">
                <a href="/">
                    <img src="/images/logo_2.png" alt="Logo" className="h-26 w-26" />
                </a>
            </div>

            {/* Navbar */}
            <div className="text-center pt-6 navbar-shadow">
                <div className="mt-4 flex flex-col sm:flex-row xl:justify-end xl:items-center text-center">
                    <div className="w-full xl:w-1/3 space-y-4 xl:space-y-0 xl:space-x-16 text-center justify-center">
                        
                        {/* Hamburger menu */}
                        <div className="flex relative bottom-2 justify-end items-center mr-8 xl:hidden mt-4">
                            <button onClick={() => setOpen(!open)} className="text-2xl">
                                {open ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>

                        {/* Nav Links */}
                        <div className={`text-gray-900 flex flex-col xl:flex-row xl:space-x-8 space-y-2 xl:space-y-0 xl:justify-center ${open ? "block" : "hidden"} xl:block`}>
                            <button onClick={() => scrollToSection("servicios")} className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">
                                SERVICIOS
                            </button>
                            <button onClick={() => scrollToSection("precios")} className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">
                                PRECIOS
                            </button>
                            <button onClick={() => scrollToSection("conocenos")} className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">
                                CONÓCENOS
                            </button>
                            
                            {/* Redirect to GoHighLevel Form */}
                            <button 
                                onClick={redirectToForm} 
                                type="button" 
                                className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                CONSULTA GRATIS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
