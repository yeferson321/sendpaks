import { useTranslations } from 'next-intl';
/* 
import ChangeLanguage from '../ui/changeLanguage/ChangeLanguage';

import { Link, locales } from '../../navegación';
import NotFound from './not-found';

 */
export default function Home() {
  /*   const locales: string[] = ["en", "es", "pt"];
  
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) {
      console.log("hola");
     return NotFound();
    }
     */
  const t = useTranslations('Sidebar');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <a href="/support" className="rounded-full whitespace-nowrap px-3.5 py-2.5 text-sm font-semibold text-white bg-neutral-500 hover:bg-neutral-600 shadow-sm">{t('support')}</a>
      <h2 className='text-red-200'>gft</h2>

    </main>
  )
}
