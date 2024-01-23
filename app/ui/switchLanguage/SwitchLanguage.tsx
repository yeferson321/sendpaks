"use client"
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { languages, useRouter, usePathname } from '@/navegación';
import { IconLanguage } from '@/app/lib/icons/SocialIcons';
import Modal from '../modals/Modal';

type LanguageProps = {
    buttonClass: React.ButtonHTMLAttributes<HTMLButtonElement>['className'];
    spanClass?: React.HTMLAttributes<HTMLSpanElement>['className'];
};

export default function SwitchLanguage({ buttonClass, spanClass }: LanguageProps) {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const pathname = usePathname();

    const locale = useLocale();

    const getCurrentLanguage = (locale: string) => languages.find(language => language.locale === locale)?.from ?? "English";

    const changeLocale = (locale: string) => {
        router.push(pathname, { locale: locale });
        setIsOpen(false);
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} buttonClass={buttonClass} spanClass={spanClass} spanText={getCurrentLanguage(locale)} IconSvg={<IconLanguage />} >

            <div className="flex items-center justify-between p-3 md:py-3 px-4 border-b rounded-t dark:border-neutral-700">

                <h3 className="text-lg sm:text-xl font-medium dark:font-semibold text-gray-900 dark:text-white">
                    Elige un idioma
                </h3>

                <button type="button" onClick={() => setIsOpen(false)} className="bg-transparent rounded-full h-8 w-8 inline-flex justify-center items-center focus:outline-none hover:bg-neutral-700/10 dark:hover:bg-neutral-700/70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 stroke-neutral-500 dark:stroke-neutral-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>

            </div>

            <div className="p-3 md:p-4">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                    {languages.map((language, index) => (
                        <li key={index}>
                            <button type='button' onClick={() => changeLocale(language.locale)} className={`${language.locale === locale && 'bg-neutral-700/10 dark:bg-neutral-700/70'} flex flex-col items-center justify-center w-full p-2.5 text-sm font-medium rounded-lg hover:bg-neutral-700/10 dark:hover:bg-neutral-700/70`}>
                                <span className="mb-2">{language.from}</span>
                                <span className="text-neutral-500 dark:text-neutral-400">{language.language}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </Modal >
    )
}