import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Demo = () => {
    // Redirect to GoHighLevel Form
    const redirectToForm = () => {
        window.location.href = "https://api.leadconnectorhq.com/widget/form/3OwmhQaqezp2bcbzkxBg";
    };

    return (
        <div className='flex-auto'>
            <div className='pt-24 pb-18 overflow-hidden'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='xl:grid lg:grid-cols-12 lg:gap-x-32 lg:gap-y-20 flex flex-col-reverse lg:flex-row items-center'>

                        {/* Desktop Mockup Container (Left) */}
                        <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 flex justify-center"> 
                            {/* Background Circles */}
                            <div className="absolute inset-0 flex justify-center items-center z-0">
                                <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                                    className="absolute h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] lg:h-[890px] lg:w-[890px] animate-spin-slow z-[-10]"
                                >
                                    <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                        stroke="#06b6d4" strokeOpacity="0.5" strokeWidth="5"
                                    ></path>
                                </svg>
                            </div>
                            <div className="absolute inset-0 flex justify-center items-center z-0">
                                <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                                    className="absolute h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[650px] lg:w-[650px] animate-spin-reverse z-[-9]"
                                >
                                    <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                        stroke="#f97316" strokeOpacity="0.7" strokeWidth="5"
                                    ></path>
                                </svg>
                            </div>
                            {/* Laptop Mockup */}
                            <div className="relative scale-110 md:scale-125 lg:scale-135 xl:scale-[1.4]">
                                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                                        <video src="" className="h-[156px] md:h-[278px] w-full rounded-lg" autoPlay loop muted playsInline>
                                            <source src="/videos/demo_desktop.mp4" type="video/mp4" />
                                            Tu navegador no soporta el video.
                                        </video>
                                    </div>
                                </div>
                                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
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
                            <ul className="mt-6 text-lg text-gray-600 space-y-3">
                                <li className="flex items-center">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-2"/> 
                                    <strong>Publicidad dirigida&nbsp;</strong> para atraer clientes interesados
                                </li>                            
                                <li className="flex items-center">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-2"/> 
                                    <strong>Automatización de WhatsApp & SMS&nbsp;</strong> para agendar sin esfuerzo
                                </li>
                                <li className="flex items-center">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-2"/> 
                                    <strong>Recordatorios automáticos&nbsp;</strong> que reducen cancelaciones
                                </li>
                                <li className="flex items-center">
                                    <IoIosCheckmarkCircle size="1.5rem" className="text-green-700 mr-2"/> 
                                    <strong>CRM inteligente&nbsp;</strong> para gestionar tu negocio en un solo lugar
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
    );
}

export default Demo;
