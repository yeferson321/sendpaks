import Image from 'next/image';
import { IconFile, IconAudio, IconImage, IconVideo } from '@/app/lib/icons/SocialIcons';
import { MediaProps } from '@/app/lib/definitions/definitions';

export default function Gallery({ params }: { params: { profile: string, type: string } }) {

    const media: MediaProps["media"] = [
        { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "image" },
        { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "image" },
        { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "video", duration: "1:90" },
        { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "image" },
        { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "file" },
        { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "video", duration: "1:90" },
        { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: "audio" }
    ];

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

    function filteredMedia() {
        if (!params.type) {
            return media; // Devuelve una copia del array media
        } else {
            return media.filter(item => item.type === params.type);
        }
    }


    return (

            <div className={`grid ${validateClass(filteredMedia().length)} gap-4 xs:gap-6`}>

                {filteredMedia().map((item, index) => (

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

    )
};


