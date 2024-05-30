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

export default function Gallery({ media }: {
    media: {
        url: string;
        id: number;
        type: TypeFile;
        duration?: string | undefined;
    }[]
}) {

    const { type, modal, gallery, galleryId, profile } = useParams()

   /*  const filteredMedia = galleryId ? media.filter(item => item.type === galleryId) : media;
 */

    const hola = () => {
        if (type) {
            const dataFilter = media.filter(item => item.type === type)
            if (dataFilter.length) {
                return dataFilter
            } else {
                return media
            }
        } else {
            return media
        }
    }

    const validateClass = (media: number) => {
        if (media === 1) return 'relative w-10/12 mx-auto'
        return 'grid grid-cols-2'
    };

/* 
    const typeOrder: TypeFile[] = ['video', 'image', 'audio', 'file'];

    function containsType(word: string): boolean {
        return !typeOrder.some(type => word.includes(type));
    } */

  
/*     function generateRandomNumbersString(): string {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
    }
 */

    return (

        <div className={`grid ${validateClass(hola().length)} gap-4 xs:gap-6`}>

            {hola().map((media, index) => (

                <Link key={index} href={`/${profile}/${type ?? 'gallery'}/${media.id}`} scroll={false} className="relative rounded-2xl aspect-square overflow-hidden">

                    <Image 
                    fill 
                
                    src={media.url} 
                    alt="File representation" 
                    quality={80} 
                    priority={true} 
                    placeholder="blur" 
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk4AIAABAADApMaRMAAAAASUVORK5CYII="
                    
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                     />

                   {/*  <img src={media.url} alt="File representation"></img> */}
                    <div className="absolute w-full h-full flex justify-center items-center">

                        <div className="inline-flex items-center">
                            
                            <IconByType type={media.type} strokeWidth={2} className="w-6 h-6 stroke-white" />

                            {media.duration && <span className="ml-3 text-base font-semibold text-white">{media.duration}</span>}

                        </div>

                    </div>

                </Link>


            ))}

        </div>

    )
};

