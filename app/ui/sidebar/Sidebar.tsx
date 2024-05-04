'use client'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { SidebarProps } from '@/app/lib/definitions/definitions';
import { IconApp, IconMark, IconAppSmall, IconQuestion, IconMoon, IconSun, IconUser, IconLock, IconLanguage } from '@/app/lib/icons/SocialIcons';
import SwitchTheme from '../switchTheme/SwitchTheme';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';
import PopoverAlert from '@/app/lib/popovers/PopoverAlert';
/* import Popover from '../radix-ui/popover/Popover'; */

export default function Sidebar({ className, setIsOpen }: SidebarProps) {
    const t = useTranslations('Header');

    return (

        <aside className={`${className}  h-full  w-[270px] xs:w-min xl:w-[260px] `} aria-label="Sidebar">

            <div className="sticky top-0  h-screen overflow-y-auto p-4   bg-white dark:bg-base xs:dark:bg-transparent">

                <div className="flex xs:max-xl:hidden items-center justify-between">
                    <Link href="/" className="ml-1">
                        <span className="sr-only">SendPaks logo</span>
                        <IconApp />
                    </Link>
                    <button type="button" onClick={() => setIsOpen && setIsOpen(false)} className="xl:hidden p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                        <span className="sr-only">Close panel</span>
                        <IconMark strokeWidth={1.5} className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                    </button>
                </div>

                <ul className="mt-5 xs:max-xl:mt-0 space-y-3 text-base font-medium">
                    <li className="hidden xs:max-xl:block">
                        <Link href="/" className="flex items-center justify-center">
                            <span className="sr-only">SendPaks logo</span>
                            <IconAppSmall />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-light-neutral dark:text-dark-neutral hover:text-blue-base dark:hover:text-blue-base hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                            <IconUser className="w-7 xs:w-8 h-7 xs:h-8 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                            <span className="ms-3 me-3 text-nowrap xs:max-xl:hidden">{t('login')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-light-neutral dark:text-dark-neutral hover:text-blue-base dark:hover:text-blue-base hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                            <IconQuestion className="w-7 xs:w-8 h-7 xs:h-8 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                            <span className="ms-3 me-3 text-nowrap xs:max-xl:hidden">{t('support')}</span>
                        </Link>
                    </li>
                    <li>
                        <SwitchTheme
                            buttonClass="w-full xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-light-neutral dark:text-dark-neutral hover:text-blue-base dark:hover:text-blue-base hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group"
                            IconMoon={<IconMoon className="w-7 xs:w-8 h-7 xs:h-8 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />}
                            IconSun={<IconSun className="w-7 xs:w-8 h-7 xs:h-8 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />}
                            spanClass="ms-3 me-3 text-nowrap xs:max-xl:hidden"
                        />
                    </li>
                    <li>
                        <SwitchLanguage
                            buttonClass="w-full xl:w-min flex items-center p-1.5 xl:p-1 rounded-full text-light-neutral dark:text-dark-neutral hover:text-blue-base dark:hover:text-blue-base hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group"
                            IconLanguage={<IconLanguage className="w-7 xs:w-8 h-7 xs:h-8 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />}
                            spanClass="ms-3 me-3 text-nowrap xs:max-xl:hidden"
                        />
                    </li>

                    <li className="hidden xs:max-xl:block">

                      {/*   <Popover side="right" align="start" sideOffset={10} timer={30000} arrowPadding={10} arrowClass="fill-blue-base"

                            IconPopover={
                                <div className="p-1.5 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                                    <IconLock className="w-8 h-8 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                                </div>
                            }>

                            <div className="max-w-56 p-3 rounded-lg text-sm font-medium text-white bg-blue-base">
                                <div className="flex items-center justify-between">

                                    <span className="mr-3 py-0.5 px-1.5 rounded-full text-xs font-medium text-green bg-green/10">{t('titleAlert')}</span>

                                    <IconLock className="w-5 h-5 stroke-light-neutral dark:stroke-white" />

                                </div>

                                <p className="mt-2 text-pretty text-xs">
                                    {t('textAlert')}
                                </p>

                            </div>

                        </Popover> */}

                        {/* <PopoverAlert
                            buttonClass="p-1.5 rounded-full hover:bg-green/10 group"
                            IconPopover={<IconLock className=" w-8 h-8 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-green" />}

                            panelClass="fixed z-10 inline-block p-2 ml-4 w-56 rounded-lg bg-base/5 dark:bg-elevated-base xl:dark:bg-base">


                            <div className="flex items-center justify-between">

                                <span className="mr-3 py-0.5 px-1.5 rounded-full text-xs font-medium text-green bg-green/10">{t('titleAlert')}</span>

                                <IconLock className="w-5 h-5 stroke-light-neutral dark:stroke-white" />

                            </div>

                            <p className="mt-2 text-pretty text-xs text-light-neutral dark:text-white">
                                {t('textAlert')}
                            </p>




                        </PopoverAlert> */}

                    </li>


                </ul>

                <div className="xs:max-xl:hidden p-3 xl:p-4 mt-8 rounded-lg bg-base/5 dark:bg-elevated-base xl:dark:bg-base" role="alert">

                    <div className="flex items-center justify-between">

                        <span className="mr-3 py-0.5 px-2 rounded-full text-sm font-medium text-green bg-green/10">{t('titleAlert')}</span>

                        <IconLock className="w-6 h-6 stroke-light-neutral dark:stroke-white" />

                    </div>

                    <p className="mt-3 text-pretty text-sm text-light-neutral dark:text-white">
                        {t('textAlert')}
                    </p>

                </div>


            </div>

        </aside>

    )
};

