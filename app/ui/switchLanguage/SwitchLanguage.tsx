"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { languages, usePathname, useRouter } from '@/navegación';

export default function SwitchLanguage() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className="flex items-center w-full bg-background-elevated-base p-1.5 text-neutral-500 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Español</span>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>

                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">

                        <div className="flex min-h-full items-center justify-center">

                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">

                                <Dialog.Panel className="w-full max-w-xl rounded-lg bg-white dark:bg-background-elevated-base transform transition-all">

                                    <div className="flex items-center justify-between p-3 md:py-3 px-4 border-b rounded-t dark:border-neutral-700">

                                        <h3 className="text-lg sm:text-xl font-medium dark:font-semibold text-gray-900 dark:text-white">
                                            Elige un idioma
                                        </h3>

                                        <button type="button" onClick={() => setIsOpen(false)} className="bg-transparent rounded-full h-8 w-8 inline-flex justify-center items-center  focus:outline-none hover:bg-neutral-700/10 dark:hover:bg-neutral-700/70">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 stroke-neutral-500 dark:stroke-neutral-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>

                                    </div>

                                    <div className="p-3 md:p-4">
                                        <ul className="grid grid-cols-2 sm:grid-cols-3">
                                            {languages.map((language, index) => (
                                                <li key={index}>
                                                    <button type='button' onClick={() => router.push(pathname, { locale: language.locale })} className="flex flex-col items-center justify-center w-full p-2.5 text-sm font-medium rounded-lg hover:bg-neutral-700/10 dark:hover:bg-neutral-700/70">
                                                        <span className="mb-2">{language.from}</span>
                                                        <span className="text-neutral-500 dark:text-neutral-400">{language.language}</span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>

                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>

    )
}
