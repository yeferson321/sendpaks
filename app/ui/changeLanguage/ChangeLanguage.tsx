'use client'

import { Link, usePathname, useRouter } from "@/navegación"

export default function ChangeLanguage() {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div className="flex justify-center mt-6">
            {/* 
<Link href={pathname} locale='en' className='text-red-200'>Switch to English</Link>
      <Link href={pathname} locale='es' className='text-red-200'>Switch to Español</Link>
  */}
            <button onClick={() => router.push(pathname, { locale: "en" })} className='text-red-200'>Switch to English</button>
            <button onClick={() => router.push(pathname, { locale: "es" })} className='text-red-200'>Switch to Español</button>
        </div>
    )
};
