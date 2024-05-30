
import { IconMark } from '@/app/lib/icons/SocialIcons';
import Link from 'next/link';
import Image from 'next/image';
export default function IDmedia({ params }: { params: { profile: string, type: string, galleryId: string } }) {

    return (

        <div className="rounded-lg bg-white dark:bg-red-400">

            <Link href={`/${params.profile}`} scroll={false}>Link del Perfil</Link>

            <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-200 dark:border-neutral-border">


                <h3 className="text-red-300 mr-3 text-lg md:text-xl font-medium dark:font-semibold dark:text-white">


                    El ID es: {params.galleryId}
                </h3>

                <button type="button" className="p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                    <span className="sr-only">Close modal</span>
                    <IconMark strokeWidth={2} className="flex-shrink-0 w-7 h-7 stroke-neutral-800 dark:stroke-white group-hover:stroke-blue-500" />
                </button>

            </div>

     {/*        <Image width={100} height={100} src="https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp" alt="File representation" quality={100} priority={true} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk4AIAABAADApMaRMAAAAASUVORK5CYII=" />

 */}
        </div>

    )
}