'use client'
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Pricing() {
    const [selected, setSelected] = useState(1);
    const t = useTranslations('Sidebar');

    return (
        <>
            <aside className="fixed xr:relative w-full bottom-0 z-10" aria-label="Sidebar">

                <div className="p-2 xr:p-3  xr:rounded-lg border-t xr:border-none dark:border-gray-600 bg-white dark:bg-background-base">


                    <div className="flex items-center">
                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap text-gray-500 dark:text-gray-400 ">Tienes 20 tokens</span>
                    </div>

                    <div className="grid md:grid-cols-2 mt-3 w-full p-1 rounded-lg dark:bg-gray-800">
                        <button type="button" onClick={() => setSelected(1)} className={`text-center font-medium rounded-lg p-px ${selected === 1 ? 'bg-gray-700 dark:text-white' : 'text-gray-300 dark:hover:text-white'}`}>
                            Suscripcion
                        </button>
                        <button type="button" onClick={() => setSelected(2)} className={`text-center font-medium rounded-lg p-px ${selected === 2 ? 'bg-gray-700 dark:text-white' : 'text-gray-300 dark:hover:text-white'}`}>
                            Tokens
                        </button>
                    </div>


                    <div className="space-y-2 mt-3">
                        <h5 className="whitespace-nowrap text-xl font-medium text-gray-500 dark:text-gray-400">Tokens plan</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">2</span>
                            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">USD</span>
                        </div>
                        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center whitespace-nowrap w-full text-center">Comprar Tokens</button>
                    </div>

                    <p className="mt-4 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>


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




                </div>

            </aside >
        </>
    )
};

