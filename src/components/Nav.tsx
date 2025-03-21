import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router";

const Nav: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id: string) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollToElement(id);
            }, 500);
        } else {
            scrollToElement(id);
        }
        setOpen(false);
    };

    const scrollToElement = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const redirectToForm = () => {
        window.location.href = "https://api.leadconnectorhq.com/widget/form/3OwmhQaqezp2bcbzkxBg";
    };

    return (
        <div className="relative items-center pb-2">
            {/* Top section: Logo + Burger menu (mobile only) */}
            <div className="flex items-center justify-between px-4 xl:px-10 pt-4 xl:hidden">
                <div className="z-10">
                    <a href="/">
                        <img src="/images/logo_2.png" alt="Logo" className="h-14 xl:h-26 w-auto" />
                    </a>
                </div>
                <div>
                    <button onClick={() => setOpen(!open)} className="text-2xl">
                        {open ? <FaTimes size="1.7rem" className="text-black" /> : <FaBars size="1.7rem" className="text-black" />}
                    </button>
                </div>
            </div>

            {/* Desktop logo (hidden on mobile) */}
            <div className="absolute left-4 xl:left-10 ml-2 xl:ml-4 z-10 hidden xl:block">
                <a href="/">
                    <img src="/images/logo_2.png" alt="Logo" className="h-14 xl:h-26 w-auto" />
                </a>
            </div>

            {/* Navbar Links */}
            <div className="text-center pt-0 xl:pt-6 navbar-shadow">
                <div className="mt-4 flex flex-col sm:flex-row xl:justify-end xl:items-center text-center">
                    <div className="w-full xl:w-1/3 space-y-4 xl:space-y-0 xl:space-x-16 text-center justify-center">
                        <div className={`text-gray-900 flex flex-col xl:flex-row xl:space-x-3 space-y-2 xl:space-y-0 xl:justify-center items-center ${open ? "flex" : "hidden"} xl:block`}>
                            <button onClick={() => scrollToSection("servicios")} className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">
                                SERVICIOS
                            </button>
                            <button onClick={() => scrollToSection("precios")} className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">
                                PRECIOS
                            </button>
                            <button onClick={() => scrollToSection("conocenos")} className="cursor-pointer font-1-semibold text-lg text-custom-red hover:text-custom-blue transition-colors duration-700 underline-effect">
                                CONÓCENOS
                            </button>
                            <button
                                onClick={redirectToForm}
                                type="button"
                                className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
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
