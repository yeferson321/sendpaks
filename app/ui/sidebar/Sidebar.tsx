import { useTranslations } from 'next-intl';
import { IconOnly, IconQuestion, IconMoon, IconSun, IconUser, IconExit } from '@/app/lib/icons/SocialIcons';
import SwitchTheme from '../switchTheme/SwitchTheme';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';

export default function Sidebar() {
    const t = useTranslations('Sidebar');

    return (
        <>
            <aside className="fixed xr:relative w-full bottom-0 z-10" aria-label="Sidebar">

                <div className="p-2 xr:p-3 xr:rounded-lg border-t xr:border-none dark:border-gray-600 bg-white dark:bg-background-base">

                    <a href="https://onlypaks.com/" className="hidden md:flex items-center ps-2 mb-5">
                        <IconOnly />
                    </a>

                    <div className="grid justify-items-center md:justify-items-stretch grid-flow-col xr:grid-flow-row auto-cols-fr xr:auto-cols-auto xr:gap-4 text-lg font-medium">

                        <button type="button" className="flex items-center justify-center md:justify-normal p-1 rounded-full text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/5 group">
                            <IconQuestion />
                            <span className="hidden md:flex flex-1 ms-3 me-2 whitespace-nowrap">{t('support')}</span>
                        </button>

                        <button type="button" className="flex items-center justify-center md:justify-normal p-1 rounded-full text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/5 group">
                            <IconUser />
                            <span className="hidden md:flex flex-1 ms-3 whitespace-nowrap">{t('login')}</span>
                        </button>

                        <button type="button" className="flex items-center justify-center md:justify-normal p-1 rounded-full text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/5 group">
                            <IconExit />
                            <span className="hidden md:flex flex-1 ms-3 whitespace-nowrap">{t('signIn')}</span>
                        </button>

                        <SwitchTheme
                            buttonClass="flex items-center justify-center md:justify-normal p-1 rounded-full text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/5 group"
                            spanClass="hidden md:flex flex-1 ms-3 whitespace-nowrap"
                            IconMoon={<IconMoon />}
                            IconSun={<IconSun />}>
                        </SwitchTheme>

                        <div className="hidden md:flex p-4 my-2 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                            <p className="text-sm text-blue-800 dark:text-blue-400">
                                {t('alert')}
                            </p>
                        </div>

                        <div className="flex items-center justify-center md:justify-normal">
                            <SwitchLanguage
                                buttonClass="flex items-center justify-center md:justify-normal w-10 md:w-full h-10 p-1 rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-0 focus:outline-none"
                                spanClass="hidden md:block flex-1 mx-3 text-base font-medium whitespace-nowrap" >
                            </SwitchLanguage>
                        </div>

                    </div>

                </div>

            </aside >
        </>
    )
};

