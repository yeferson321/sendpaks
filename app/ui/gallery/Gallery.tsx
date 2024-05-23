'use client'
import Image from 'next/image';
import { MediaProps, TypeFile } from '@/app/lib/definitions/definitions';
import { IconByType } from '@/app/ui/iconByType/IconByType';
import { useParams } from 'next/navigation';
import Link from 'next/link';
/* 
const media: MediaProps["media"] = [
    { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "image" },
    { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "image" },
    { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "video", duration: "1:90" },
    { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "image" },
    { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "file" },
    { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "video", duration: "1:90" },
    { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "audio" }
]; */

export default function Gallery({ media, params }: {
    media: {
        url: string;
        type: TypeFile;
        duration?: string | undefined;
    }[], params?: { profile: string, type: string, modal: string }
}) {

    const { type, modal, profile } = useParams()

    const filteredMedia = type ? media.filter(item => item.type === type) : media;

    const validateClass = (media: number) => {
        if (media === 1) return 'relative w-10/12 mx-auto'
        return 'grid grid-cols-2'
    };

    console.log('filteredMedia', type, modal, 'hola')

    
    return (

        <div className={`grid ${validateClass(filteredMedia.length)} gap-4 xs:gap-6`}>

            {filteredMedia.map((media, index) => (

                <Link key={index} href={`/${profile}/${type}/1234`} className="relative rounded-2xl aspect-square overflow-hidden">

                    <Image fill src={media.url} alt="File representation" quality={80} priority={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk4AIAABAADApMaRMAAAAASUVORK5CYII=" />

                    <div className="absolute w-full h-full flex justify-center items-center">

                        <div className="inline-flex items-center">
                            
                            {`/${type}/12341`}

                            <IconByType type={media.type} strokeWidth={2} className="w-6 h-6 stroke-white" />

                            {media.duration && <span className="ml-3 text-base font-semibold text-white">{media.duration}</span>}

                        </div>

                    </div>

                </Link>


            ))}

        </div>

    )
};

