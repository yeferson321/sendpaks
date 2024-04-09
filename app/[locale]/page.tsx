import { locales } from '@/navegación';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';

/* import notFound from '../../[...notFound]/not-found'; */
/* 
import ChangeLanguage from '../ui/changeLanguage/ChangeLanguage';

import { Link, locales } from '../../navegación';


 */
export default function Home({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  /*   const locales:NotFound string[] = ["en", "es", "pt"];
  
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) {
      console.log("hola");
     return NotFound();
    }
     */
  /*   const t = useTranslations('Sidebar');
   */

  console.log("Pague", locale)

/*   if ("es" === locale)  notFound();
 */
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <a href="/support" className="rounded-full whitespace-nowrap px-3.5 py-2.5 text-sm font-semibold text-white bg-neutral-500 hover:bg-neutral-600 shadow-sm">yessss</a>
      <h2 className='text-red-200'>gft</h2>

    </main>
  )
}
