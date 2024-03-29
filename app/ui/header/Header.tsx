'use client'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { HeaderProps } from '@/app/lib/definitions/definitions';
import { IconApp, IconMark, IconAppSmall, IconQuestion, IconMoon, IconSun, IconUser, IconLock, IconLanguage } from '@/app/lib/icons/SocialIcons';
import SwitchTheme from '../switchTheme/SwitchTheme';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';
import PopoverInfo from '@/app/lib/popovers/PopoverInfo';

export default function Header({ className, setIsOpen }: HeaderProps) {
    const t = useTranslations('Header');

    return (

        <header className={`${className} xs:sticky xs:top-0 w-[270px] xs:w-min xl:w-[260px] h-screen`} aria-label="header">

            <div className="h-full p-4 overflow-y-auto shadow-xl xs:shadow-none bg-white dark:bg-base xs:dark:bg-transparent">

                <div className="flex xs:hidden xl:flex items-center justify-between">
                    <Link href="/" className="ml-1">
                        <span className="sr-only">Sendhud logo</span>
                        <IconApp className="fill-neutral-500 dark:fill-white" />
                    </Link>
                    <button type="button" onClick={() => setIsOpen && setIsOpen(false)} className="xl:hidden p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                        <span className="sr-only">Close panel</span>
                        <IconMark strokeWidth={1.5} className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-custom-blue" />
                    </button>
                </div>

                <ul className="mt-5 xs:mt-0 xl:mt-5 space-y-3 text-base font-medium">
                    <li className="hidden xs:block xl:hidden">
                        <Link href="/" className="flex items-center justify-center">
                            <span className="sr-only">Sendhud logo</span>
                            <IconAppSmall className="flex-shrink-0" />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-custom-blue dark:hover:text-custom-blue hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                            <IconUser className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-custom-blue" />
                            <span className="ms-3 me-3 text-nowrap xs:hidden xl:block">{t('login')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-custom-blue dark:hover:text-custom-blue hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                            <IconQuestion className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-custom-blue" />
                            <span className="ms-3 me-3 text-nowrap xs:hidden xl:block">{t('support')}</span>
                        </Link>
                    </li>
                    <li>
                        <SwitchTheme
                            buttonClass="w-full xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-custom-blue dark:hover:text-custom-blue hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                            IconMoon={<IconMoon className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-custom-blue" />}
                            IconSun={<IconSun className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-custom-blue" />}
                            spanClass="ms-3 me-3 text-nowrap xs:hidden xl:block"
                        />
                    </li>
                    <li>
                        <SwitchLanguage
                            buttonClass="w-full xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-custom-blue dark:hover:text-custom-blue hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                            IconLanguage={<IconLanguage className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-custom-blue" />}
                            spanClass="ms-3 me-3 text-nowrap xs:hidden xl:block"
                        />
                    </li>

                    <li className="hidden xs:block xl:hidden">

                        <PopoverInfo
                            buttonClass="p-1.5 rounded-full hover:bg-green/10 group"
                            IconPopover={<IconLock className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-green" />}
                            panelClass="absolute z-20 inline-block p-2 ml-3 w-56 rounded-lg bg-base/5 dark:bg-elevated-base">

                            <div className="flex items-center justify-between mb-2">

                                <span className="mr-3 py-0.5 px-2 rounded-full text-green text-xs font-medium bg-green/10">{t('titleAlert')}</span>

                                <IconLock className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-white" />

                            </div>

                            <p className="text-pretty text-xs text-neutral-500 dark:text-white">
                                {t('textAlert')}
                            </p>

                        </PopoverInfo>

                    </li>


                </ul>

                <div className="xs:hidden xl:block p-3 xl:p-4 mt-8 rounded-lg bg-base/5 dark:bg-elevated-base xl:dark:bg-base" role="alert">

                    <div className="flex items-center justify-between mb-3">

                        <span className="mr-3 py-0.5 px-2 rounded-full text-green text-sm font-medium bg-green/10">{t('titleAlert')}</span>

                        <IconLock className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-white" />

                    </div>

                    <p className="text-pretty text-[13px] text-neutral-500 dark:text-white">
                        {t('textAlert')}
                    </p>

                </div>


            </div>

        </header>

    )
};

