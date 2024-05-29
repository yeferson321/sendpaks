import { IconAppSmall } from "@/app/lib/icons/SocialIcons";
import Link from "next/link";

export default function NotFound() {

    return (
        /*      <div className="flex flex-col justify-center items-center">
     
                 <div className="flex items-center justify-center">
                     <span className="sr-only">SendPaks logo</span>
                     <IconAppSmall className="w-14 h-14" />
                 </div>
     
                 <div className="mt-10 space-y-4">
     
                     <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-800">Página no disponible</h1>
     
                     <p className="text-base leading-7 text-neutral-500">Lo sentimos, esta publicación ha sido eliminada o ya no existe.</p>
     
                 </div>
     
                 <div className="mt-10 flex flex-col items-center space-y-6">
     
                     <Link locale="en" href="/" className="rounded-full whitespace-nowrap px-3.5 py-2.5 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 shadow-sm">
                         Go back home yes
                     </Link>
     
                     <Link locale="en" href="/support" className="text-sm font-semibold text-black dark:text-white ">Contact support</Link>
     
                 </div>
     
             </div>
      */
        <div className="min-h-full grid ">
            <div className="flex items-center justify-center">
                <span className="sr-only">SendPaks Icon</span>
                <IconAppSmall className="w-14 h-14" />
            </div>
            <div className="text-center mt-10 p-3 xs:p-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no disponible</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Lo sentimos, esta publicación ha sido eliminada o ya no existe.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Inicio</a>
                    <a href="#" className="text-sm font-semibold text-gray-900">Ayuda<span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </div>
    )
}