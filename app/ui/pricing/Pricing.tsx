'use client'
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

export default function Pricing() {
    const [selected, setSelected] = useState(1);
    const t = useTranslations('Sidebar');

    /*     const getCurrentTime = () => {
            const currentDate = new Date();
            return currentDate.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
        } */

    return (
        <>
            <aside className="fixed xs:sticky  bottom-3 z-20 w-full xs:overflow-y-auto xs:h-screen px-4" aria-label="Sidebar">
                {/*             fixed xs:sticky w-full z-20 xs:top-0 xs:overflow-y-auto xs:h-screen        overflow-y-auto h-screen sticky top-0 */}
                <div className="p-3 rounded-xl bg-[#ffffff] shadow-lg shadow-black/20 dark:bg-elevated-base">

                    <div className="hidden xs:flex gap-2.5">

                        <div className="relative flex-none">
                            <Image src="https://profile.onlypaks.com/sofiatabares01/vw42w84n5yr.jpg" alt="Profile Picture" width={36} height={36} priority={true} className="rounded-full" />
                            <span className="top-[26px] right-1 absolute w-1.5 h-1.5 bg-green-400 border-white dark:border-gray-950 rounded-full"></span>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold whitespace-nowrap text-gray-900 dark:text-white">Sofia Tabares</span>
                                <span className="text-sm font-normal whitespace-nowrap text-gray-500 dark:text-gray-400">343</span>
                            </div>
                            <div className="leading-1.5 px-3 py-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                                <p className="text-sm font-normal text-gray-900 dark:text-white">Puede que sea virgen😈 pero no soy tan inocente como podrías pensar 😉 ¡¡¡CONTENIDO TOTALMENTE DESNUDO DISPONIBLE!!! 💓</p>
                            </div>
                            <span className="text-xs font-medium whitespace-nowrap text-blue-600 dark:text-blue-500">hace unos segundos</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="flex flex-col mx-2 whitespace-nowrap">
                            <p className="text-2xl font-bold text-neutral-800 dark:text-white truncate">USD $3 <span className="text-base text-neutral-500 dark:text-neutral-300">/mes</span></p>
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-300 truncate">Pago seguro</p>
                        </div>
                        <button type="button" className="text-base font-semibold h-full w-full p-2 rounded-xl whitespace-nowrap truncate text-white bg-blue-500 hover:bg-blue-600">
                            Pagar para ver
                        </button>
                    </div>


                    {/* <p className="text-xs leading-5 text-gray-600">Utilizamos las últimas tecnologías de cifrado para proteger sus datos bancarios y garantizar transacciones seguras.</p>

                    <div className="w-full flex flex-col ">
                        <span className=" text-sm text-center text-gray-500  dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Onlypaks™</a>. All Rights Reserved.
                        </span>
                        <ul className="grid grid-cols-3 justify-items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline ">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div> */}
                </div>



                {/* <div className="w-full flex flex-col items-center">
                    <span className="text-sm text-gray-500  dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div> */}



            </aside>

            {/* <div class="space-y-2 font-medium"> */}
            {/*  <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li> */}
            {/* </div> */}
            {/*  <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                        <div class="flex items-center mb-3">
                            <span class="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                        </p>
                        <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                    </div> */}

            {/*  <aside className="p-2 xs:p-3 xs:rounded-lg border-t xs:border-none dark:border-gray-600 bg-white dark:bg-background-base"> */}


            {/*  <div className="flex items-center">
                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap text-gray-500 dark:text-gray-400 ">Tienes 20 tokens</span>
                    </div> */}

            {/*    <div className="flex flex-wrap mt-3 w-full p-1 rounded-lg dark:bg-gray-800">
                        <button type="button" onClick={() => setSelected(1)} className={`flex-1 text-center font-medium rounded-lg p-px ${selected === 1 ? 'bg-gray-700 dark:text-white' : 'text-gray-300 dark:hover:text-white'}`}>
                            Suscripcion
                        </button>
                        <button type="button" onClick={() => setSelected(2)} className={`flex-1 text-center font-medium rounded-lg p-px ${selected === 2 ? 'bg-gray-700 dark:text-white' : 'text-gray-300 dark:hover:text-white'}`}>
                            Tokens
                        </button>
                    </div> */}




            {/*   <div class="w-full p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">

                    <div class="flex items-center">
                        <div class="relative inline-block shrink-0">
                            <img class="w-12 h-12 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image" />
                            <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                                <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                    <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                                    <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                                </svg>
                                <span class="sr-only">Message icon</span>
                            </span>
                        </div>
                        <div class="ms-3 text-sm font-normal">                    
                            <div class="text-sm font-normal">Puede que sea virgen😈 pero no soy tan inocente como podrías pensar 😉

¡¡¡CONTENIDO TOTALMENTE DESNUDO DISPONIBLE!!! 💓</div>
                            <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                        </div>
                    </div>
                </div>
 */}

            {/* 
                <div class="flex gap-2.5">
                    <img class="w-8 h-8 rounded-full" src="https://profile.onlypaks.com/sofiatabares01/vw42w84n5yr.jpg" alt="Jese image" />
                    <div class="flex flex-col gap-1 w-full max-w-[320px]">
                        <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            <span class="text-sm font-semibold text-gray-900 dark:text-white">Sofia Tabares</span>
                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{getCurrentTime()}</span>
                        </div>
                        <div class="flex flex-col leading-1.5 px-3 py-2  border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <p class="text-sm font-normal text-gray-900 dark:text-white">Puede que sea virgen😈 pero no soy tan inocente como podrías pensar 😉 ¡¡¡CONTENIDO TOTALMENTE DESNUDO DISPONIBLE!!! 💓</p>
                        </div>
                        <span class="text-xs font-medium text-blue-600 dark:text-blue-500">hace unos segundos</span>
                    </div>

                </div> */}


            {/* <div className="space-y-2 mt-3"> */}
            {/*   <h5 className="whitespace-nowrap text-xl font-medium text-gray-500 dark:text-gray-400">Tokens plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        
                    </div> */}


            {/* </div> */}
            {/*   <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-0 focus:outline-none rounded-lg px-5 py-2.5 whitespace-nowrap flex justify-between items-center w-full">
                   
                    <span className="text-sm font-medium ">Obtén acceso </span>

                    <div className="space-x-1">
                        <span className="text-lg"> $2</span>
                        <span className="text-sm font-normal">por 60 dias</span>
                    </div>

                </button>

               
 */}
            {/*   <ul role="list" className="space-y-2 my-3 text-sm font-normal">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
                        </li>
                    </ul> */}





        </>
    )
};
