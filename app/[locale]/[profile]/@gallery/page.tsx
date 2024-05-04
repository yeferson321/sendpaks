import Image from 'next/image';
import Link from 'next/link';
import { MediaProps } from '@/app/lib/definitions/definitions';
import { IconFile, IconAudio, IconImage, IconVideo, IconSquares } from '@/app/lib/icons/SocialIcons';

export default function Gallery({ media }: MediaProps) {

    const getIconByTyp = (strokeWidth: number, className: string, type: string) => {

        const getIconByType: Record<string, JSX.Element> = {
            video: <IconVideo strokeWidth={strokeWidth} className={className} />,
            image: <IconImage strokeWidth={strokeWidth} className={className} />,
            audio: <IconAudio strokeWidth={strokeWidth} className={className} />,
            file: <IconFile strokeWidth={strokeWidth} className={className} />,
        };

        return getIconByType[type];
    }

    const getIconByType: Record<string, JSX.Element> = {
        video: <IconVideo strokeWidth={2} className="w-6 h-6 stroke-white" />,
        image: <IconImage strokeWidth={2} className="w-6 h-6 stroke-white" />,
        audio: <IconAudio strokeWidth={2} className="w-6 h-6 stroke-white" />,
        file: <IconFile strokeWidth={2} className="w-6 h-6 stroke-white" />,
    };


    const validateClass = (media: number) => {
        if (media === 1) return 'relative w-10/12 mx-auto'
        return 'grid grid-cols-2'
    };

    const uniqueTypes = Array.from(new Set(media.map(item => item.type)));
    const filteredMedia = media.filter(item => item.type === "image");

    const ruta  = "image"

    return (

        <>
            <ul className="flex border-t border-[#dbdbdb] dark:border-[#262626] text-sm font-medium text-light-neutral dark:text-dark-neutral">

                {uniqueTypes.map((type, index) => (
                    <li key={index} className="w-full">

                        <Link href={`sofia/${type}`} className={`w-full h-[50px] inline-flex items-center justify-center ${type === ruta ? 'border-t border-black dark:border-white' : ''}`}>
     

                            {getIconByTyp(1.5, `${type === ruta ? 'stroke-blue-base' : 'stroke-light-neutral dark:stroke-dark-neutral hover:stroke-blue-base dark:hover:stroke-blue-base' } w-7 h-7` , type)}

                            <span className="max-xl:hidden xl:ms-3">{type}</span>

                        </Link>
                    </li>
                ))}


                {/*    <li className="w-full">
                    <Link href="/VIDEO" className="w-full h-[50px] inline-flex items-center justify-center">
                        <IconVideo className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral hover:stroke-blue-base dark:hover:stroke-blue-base" />
                        <span className="max-xl:hidden xl:ms-3">Videos</span>

                    </Link>
                </li> */}

            </ul>


            <div className={`grid ${validateClass(filteredMedia.length)} gap-4 xs:gap-6`}>

                {filteredMedia.map((item, index) => (

                    <div key={index} className="relative rounded-2xl aspect-square overflow-hidden">

                        <Image fill src={item.url} alt="File representation" quality={80} priority={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk4AIAABAADApMaRMAAAAASUVORK5CYII=" />

                        <div className="absolute w-full h-full flex justify-center items-center">

                            <div className="inline-flex items-center">

                                {getIconByType[item.type]}

                                {item.duration && <span className="ml-3 text-base font-semibold text-white">{item.duration}</span>}
                            </div>

                        </div>

                    </div>


                ))}

            </div>
        </>


    )
};