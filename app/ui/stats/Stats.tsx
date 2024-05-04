import { useLocale, useTranslations } from 'next-intl';
import { StatsProps } from '@/app/lib/definitions/definitions';
import { copyUrl } from '@/app/lib/utils/copyUrl';
import { IconVideo, IconImage, IconAudio, IconFile, IconHeart, IconShare, IconInstagram, IconFacebook, IconTwitter, IconOnlyfans, IconSquares, IconCheck } from '@/app/lib/icons/SocialIcons';
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverPortal } from '../radix-ui/popover/Popover';

export default function Stats({ stats }: StatsProps) {
    const t = useTranslations('Stats');
    const locale = useLocale();

    const getIconByType: Record<string, JSX.Element> = {
        total_videos: <IconVideo className="w-5 h-5 stroke-light-neutral dark:stroke-dark-neutral" />,
        total_images: <IconImage className="w-5 h-5 stroke-light-neutral dark:stroke-dark-neutral" />,
        total_audios: <IconAudio className="w-5 h-5 stroke-light-neutral dark:stroke-dark-neutral" />,
        total_files: <IconFile className="w-5 h-5 stroke-light-neutral dark:stroke-dark-neutral" />,
        total_likes: <IconHeart className="w-5 h-5 stroke-light-neutral dark:stroke-dark-neutral" />
    };

    const formatNumberWithSeparator = (number: number) => {
        return new Intl.NumberFormat(locale, { "notation": "compact" }).format(number)
    }

    return (
        <>

            <div className="space-y-2 mt-4">



                <span className="py-0.5 px-2 rounded-full text-sm font-medium text-green bg-green/10">Perfil Verificado</span>


                <div className="flex justify-between items-center space-x-3">


                    <div className="inline-flex items-center text-2xl font-semibold">
                        Sofia
                        <IconCheck strokeWidth={2} className="w-6 h-6 ms-2 stroke-blue-base" />
                    </div>


                    <div className="flex space-x-3">

                        <div className="p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                            <IconOnlyfans className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                        </div>

                        <div className="p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                            <IconTwitter className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                        </div>

                        <div className="p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                            <IconInstagram className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                        </div>

                        <Popover timer={9000} event={copyUrl}>
                            <PopoverTrigger className="p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">
                                <span className="sr-only">Open main menu</span>
                                <IconShare className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
                            </PopoverTrigger>
                            <PopoverPortal>
                                <PopoverContent align="end" sideOffset={5} arrowPadding={10} className="p-3 rounded-lg text-sm font-medium text-white bg-blue-base">
                                    {t('clipboardSuccessMessage')}
                                    <PopoverArrow className="fill-blue-base"></PopoverArrow>
                                </PopoverContent>
                            </PopoverPortal>
                        </Popover>

                    </div>



                </div>






                <div className="min-w-0 flex-1 ">

                    <ul className="flex flex-nowrap items-center space-x-3 text-sm overflow-x-auto hidden-scrollbar touch-pan-x">
                        {Object.entries(stats).map(([statKey, statValue]) => (
                            statValue && (
                                <li key={statKey} className="inline-flex items-center text-light-neutral dark:text-dark-neutral">
                                    {getIconByType[statKey]}
                                    <span className="ms-2">{formatNumberWithSeparator(statValue)}</span>
                                </li>
                            )
                        ))}
                    </ul>

                </div>


               

                

            </div>


        </>

    )
};