'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { MediaProps, TypeFile } from '@/app/lib/definitions/definitions';
import { IconSquares } from '@/app/lib/icons/SocialIcons';
import { IconByType } from '../iconByType/IconByType';
import { useRouter,usePathname } from 'next/navigation'
 

export default function Navigation({media}:  MediaProps) {
    const pathname = usePathname()
    const { profile, type } = useParams();
    const router = useRouter()
    const t = useTranslations('Navigation');
    const typeOrder: TypeFile[] = ['video', 'image', 'audio', 'file'];
    const uniqueTypes = typeOrder.filter(type => media.some(item => item.type === type));

/*     console.log("pathname", pathname)
 */
    const getTranslationsByType: Record<TypeFile, string> = {
        video: t('videos'),
        image: t('images'),
        audio: t('audios'),
        file: t('files'),
    };

    return (

        <nav className="border-t border-[rgb(219,219,219)] dark:border-[#262626]">


            <ul className="flex -mt-px text-sm font-medium text-light-neutral dark:text-dark-neutral">

                <li className="w-full">

                    <button onClick={()=> router.replace(`/${profile}`)} className={`w-full h-12 inline-flex items-center justify-center border-t ${!type ? 'border-blue-base dark:border-blue-base' : 'hover:bg-blue-base/5'}`}>

                        <IconSquares className={`w-7 h-7 ${!type ? 'stroke-blue-base' : 'stroke-light-neutral dark:stroke-dark-neutral'}`} />

                        <span className="max-xl:hidden xl:ms-3">{t('all')}</span>

                    </button>

                </li>

                {uniqueTypes.map((uniqueType, index) => (

                    <li key={index} className="w-full">

                        <Link href={`/${profile}/${uniqueType}`} className={`w-full h-12 inline-flex items-center justify-center border-t ${uniqueType === type ? 'border-blue-base dark:border-blue-base' : 'hover:bg-blue-base/5'}`}>

                            <IconByType type={uniqueType} className={`w-7 h-7 ${uniqueType === type ? 'stroke-blue-base' : 'stroke-light-neutral dark:stroke-dark-neutral'}`} />

                            <span className="max-xl:hidden xl:ms-3">{getTranslationsByType[uniqueType]}</span>

                        </Link>

                    </li>
                ))}


            </ul>

        </nav>

    )
};
