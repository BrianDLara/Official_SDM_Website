import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { apiSendaForm } from '../globals';

const DesktopMockup = () => {
    const redirectToForm = () => {
        window.open(apiSendaForm, "_blank");
    };

    return (
        <div className='flex-auto'>
            <div className='pt-24 overflow-hidden'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='xl:grid lg:grid-cols-12 lg:gap-x-32 lg:gap-y-20 flex flex-col-reverse lg:flex-row items-center'>

                        {/* Desktop Mockup Container (Left) */}
                        <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 flex justify-center">
                            {/* Background Circles */}
                            <div className="absolute inset-0 flex justify-center items-center z-0 overflow-hidden">
                                <svg
                                    viewBox="0 0 1026 1026"
                                    fill="none"
                                    aria-hidden="true"
                                    className="absolute h-[450px] w-[450px] sm:h-[600px] sm:w-[600px] lg:h-[950px] lg:w-[950px] animate-spin-slow z-[-10]"
                                >
                                    <path
                                        d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                        stroke="#06b6d4"
                                        strokeOpacity="0.5"
                                        strokeWidth="5"
                                    ></path>
                                </svg>
                            </div>
                            <div className="absolute inset-0 flex justify-center items-center z-0 overflow-hidden">
                                <svg
                                    viewBox="0 0 1026 1026"
                                    fill="none"
                                    aria-hidden="true"
                                    className="absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[750px] lg:w-[750px] animate-spin-reverse z-[-9]"
                                >
                                    <path
                                        d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                        stroke="#f97316"
                                        strokeOpacity="0.7"
                                        strokeWidth="5"
                                    ></path>
                                </svg>
                            </div>

                            {/* Laptop Mockup */}
                            <div className="relative scale-95 sm:scale-110 md:scale-125 lg:scale-135 xl:scale-[1.4] w-full px-2 sm:px-0">
                                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] sm:h-[220px] sm:max-w-[400px] md:h-[294px] md:max-w-[512px]">
                                    <div className="rounded-lg overflow-hidden h-full bg-white">
                                        <video
                                            src=""
                                            className="h-full w-full rounded-lg"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/videos/demo_desktop.mp4" type="video/mp4" />
                                            Tu navegador no soporta el video.
                                        </video>
                                    </div>
                                </div>
                                <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                                </div>
                            </div>
                        </div>

                        {/* Sales Copy (Right) */}
                        <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 text-center lg:text-left'>
                            <h1 className="text-4xl font-bold tracking-tight text-[#FBB02E]">
                                <strong>¿Listo para llenar tu agenda de clientes?</strong>
                            </h1>
                            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                                Consigue más clientes y automatiza tu negocio
                            </h2>
                            <p className="mt-6 text-lg text-gray-600">
                                Con nuestra solución, llenamos tu agenda de citas automáticamente
                                para que te enfoques en atender clientes y hacer crecer tu negocio.
                            </p>
                            <ul className="mt-6 space-y-3 text-gray-600">
                                <li className="flex items-start text-left">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-3 mt-1" />
                                    <span className="text-lg"><strong>Publicidad dirigida</strong> para atraer clientes interesados</span>
                                </li>
                                <li className="flex items-start text-left">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-3 mt-1" />
                                    <span className="text-lg"><strong>Automatización de WhatsApp & SMS</strong> para agendar sin esfuerzo</span>
                                </li>
                                <li className="flex items-start text-left">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-3 mt-1" />
                                    <span className="text-lg"><strong>Recordatorios automáticos</strong> que reducen cancelaciones</span>
                                </li>
                                <li className="flex items-start text-left">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-3 mt-1" />
                                    <span className="text-lg"><strong>CRM inteligente</strong> para gestionar tu negocio en un solo lugar</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-lg font-bold text-gray-600">Empieza hoy y llena tu calendario de citas</p>

                            {/* Redirect Button */}
                            <button
                                onClick={redirectToForm}
                                className="cursor-pointer mt-6 bg-[#FBB02E] hover:bg-[#e09a2a] text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300"
                            >
                                Reserva una Demo Gratis
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopMockup;
