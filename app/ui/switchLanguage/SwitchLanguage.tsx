"use client"
import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { languages, useRouter, usePathname } from '@/navegación';
import { IconMark } from '@/app/lib/icons/SocialIcons';
import Modal from '../modals/Modal';

type LanguageProps = {
    buttonClass: React.ButtonHTMLAttributes<HTMLButtonElement>['className'];
    spanClass?: React.HTMLAttributes<HTMLSpanElement>['className'];
    IconLanguage?: JSX.Element;
};

export default function SwitchLanguage({ buttonClass, spanClass, IconLanguage }: LanguageProps) {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('LanguageModal');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const getCurrentLanguage = (locale: string) => {
        const selectedLanguage = languages.find(language => language.locale === locale);
        const languageFrom = selectedLanguage?.from ?? "English";
        return languageFrom;
    };

    const changeLocale = (locale: string) => {
        router.push(pathname, { locale: locale });
        setIsOpen(false);
    };

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className={buttonClass}>
                <span className="sr-only">Open modal</span>
                {IconLanguage}
                <span className={spanClass}>{getCurrentLanguage(locale)}</span>
            </button>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>

                <div className="rounded-lg bg-white dark:bg-elevated-base">

                    <div className="flex items-center justify-between p-3 md:p-4 rounded-t border-b dark:border-neutral-border">

                        <h3 className="mr-3 text-lg md:text-xl font-medium dark:font-semibold text-neutral-800 dark:text-white">
                            {t('chooseLanguage')}
                        </h3>

                        <button type="button" onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                            <span className="sr-only">Close modal</span>
                            <IconMark strokeWidth={2} className="flex-shrink-0 w-7 h-7 stroke-neutral-800 dark:stroke-white group-hover:stroke-blue-500" />
                        </button>

                    </div>

                    <div className="p-3 md:p-4">
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                            {languages.map((language, index) => (
                                <li key={index}>
                                    <div onClick={() => changeLocale(language.locale)} className={`${language.locale === locale && 'bg-black/5 dark:bg-white/5'} flex flex-col py-2 px-2.5 md:px-3 text-sm md:text-base rounded-lg cursor-pointer hover:bg-black/10 dark:hover:bg-white/10`}>
                                        <span className="text-neutral-800 font-medium dark:text-white mb-1 truncate">{language.from}</span>
                                        <span className="text-neutral-500 dark:text-neutral-400 truncate">{language.language}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Modal >
        </>
    )
}