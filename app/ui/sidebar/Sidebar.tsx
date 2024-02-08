import { useTranslations } from 'next-intl';
import { IconOnly, IconOnlySmall, IconQuestion, IconMoon, IconSun, IconUser, IconExit, IconLock, IconLanguage } from '@/app/lib/icons/SocialIcons';
import SwitchTheme from '../switchTheme/SwitchTheme';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';
import Link from 'next/link';

export default function Sidebar() {
    const t = useTranslations('Sidebar');

    return (
        <>
            <aside className="fixed xs:sticky w-full bottom-0 z-20 xs:top-0 xs:overflow-y-auto xs:h-screen" aria-label="Sidebar">

                <div className="h-full p-2 xs:p-3 border-t xs:border-t-0 dark:border-neutral-border bg-white dark:bg-base xs:dark:bg-transparent">

                    <div className="hidden xs:flex xl:ps-2 mb-5">
                        <Link href="/">
                            <span className="hidden xl:block"><IconOnly /></span>
                            <span className="xl:hidden"><IconOnlySmall /></span>
                        </Link>
                    </div>

                    <ul className="grid grid-flow-col auto-cols-fr xs:grid-flow-row xs:auto-cols-auto xs:gap-5 text-lg font-medium">
                        <li>
                            <button type="button" className="flex items-center justify-center w-full p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <IconQuestion className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />
                                <span className="hidden xl:flex flex-1 ml-4 mr-3 whitespace-nowrap">{t('support')}</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="flex items-center justify-center w-full p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <IconUser className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />
                                <span className="hidden xl:flex flex-1 ml-4 mr-3 whitespace-nowrap">{t('login')}</span>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="flex items-center justify-center w-full p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <IconExit className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />
                                <span className="hidden xl:flex flex-1 ml-4 mr-3 whitespace-nowrap">{t('signIn')}</span>
                            </button>
                        </li>
                        <li>
                            <SwitchTheme
                                buttonClass="flex items-center justify-center w-full p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                                IconMoon={<IconMoon className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />}
                                IconSun={<IconSun className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />}
                                spanClass="hidden xl:flex flex-1 ml-4 mr-3 whitespace-nowrap">
                            </SwitchTheme>
                        </li>
                        <li className="xl:hidden">
                            <SwitchLanguage
                                buttonClass="flex items-center justify-center w-full p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                                spanClass="hidden"
                                IconLanguage={<IconLanguage className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />}>
                            </SwitchLanguage>
                        </li>
                    </ul>



                    <div className="hidden xl:block mt-8 space-y-5">

                        <div className="p-4 rounded-lg bg-base/5 dark:bg-base" role="alert">

                            <div className="flex items-center justify-between mb-3">
                                <span className="bg-green/10 text-green text-sm font-semibold me-2 px-2.5 py-0.5 rounded-full">{t('titleAlert')}</span>
                                <IconLock className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />
                            </div>

                            <p className="text-pretty text-sm text-neutral-500 dark:text-neutral-300">
                                {t('textAlert')}
                            </p>
                        </div>

                        <SwitchLanguage
                            buttonClass="inline-flex items-center justify-center h-10 w-full p-1 rounded-full text-white bg-blue-500 hover:bg-blue-600"
                            IconLanguage={<IconLanguage className="flex-shrink-0 w-5 h-5 stroke-white" />}
                            spanClass="flex ml-3 text-sm font-medium whitespace-nowrap">
                        </SwitchLanguage>

                    </div>

                </div>

            </aside >
        </>
    )
};

