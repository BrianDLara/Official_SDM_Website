import React from 'react'

const Mission = () => {
  return (
    <div className='flex-auto py-12'>
        <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='xl:grid lg:grid-cols-12 lg:gap-x-32 lg:gap-y-20'>
                    
                    {/* Mission statement container */}
                    <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
                        <h1 className="text-4xl font-bold tracking-tight text-[#FBB02E]">
                            <strong>Haz Crecer Tu Negocio con Marketing Digital Efectivo</strong>
                        </h1>
                        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                            <strong>Más Visibilidad. &nbsp; Más Clientes. &nbsp; Menos Complicaciones.</strong>
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Sabemos que <strong>administrar un negocio es un reto</strong>. Conseguir clientes no debería serlo.  
                            Te ayudamos a crecer con <strong>estrategias de marketing digital simples y efectivas</strong>.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Con <strong>publicidad inteligente y automatización</strong>, conectamos tu negocio con 
                            <strong> las personas adecuadas en el momento justo</strong>, sin que gastes <strong>tiempo ni dinero de más</strong>.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            Ya sea que <strong>estés comenzando o quieras expandirte</strong>, te damos las herramientas necesarias 
                            para <strong>atraer más clientes y mantenerlos</strong>.
                        </p>
                    </div>

                    {/* Phone Container with Background Animation */}
                    <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6"> 

                        {/* Animated Background SVG - Large */}
                        <div className="absolute inset-0 flex justify-center items-center z-0">
                            <svg
                              viewBox="0 0 1026 1026"
                              fill="none"
                              aria-hidden="true"
                              className="absolute inset-0 h-full w-full animate-spin-slow z-[-10]"
                            >
                                <path
                                    d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                    stroke="#D4D4D4"
                                    strokeOpacity="0.7"
                                    strokeWidth="3"
                                ></path>
                                <path
                                    d="M513 1025C230.23 1025 1 795.77 1 513"
                                    stroke="url(#gradient-1)"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                ></path>
                                <defs>
                                    <linearGradient id="gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#06b6d4"></stop>
                                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Animated Background SVG - Small (Opposite Direction) */}
                        <div className="absolute inset-0 flex justify-center items-center z-0">
                            <svg
                              viewBox="0 0 1026 1026"
                              fill="none"
                              aria-hidden="true"
                              className="absolute w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] animate-spin-reverse z-[-9]"
                            >
                                <path
                                    d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                                    stroke="#FBB02E"
                                    strokeOpacity="0.5"
                                    strokeWidth="3"
                                ></path>
                                <path
                                    d="M513 1025C230.23 1025 1 795.77 1 513"
                                    stroke="url(#gradient-2)"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                ></path>
                                <defs>
                                    <linearGradient id="gradient-2" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FBB02E"></stop>
                                        <stop offset="1" stopColor="#FBB02E" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Phone Mockup */}
                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                            <video className=" w-full h-full rounded-[2rem] object-cover" autoPlay loop muted playsInline>
                                <source src="/videos/video1.mp4" type="video/mp4" />
                                    Tu navegador no soporta el video.
                            </video>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>  
    </div>
  )
}

export default Mission
