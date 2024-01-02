import { useTranslations } from 'next-intl';
import ChangeLanguage from '../ui/changeLanguage/ChangeLanguage';

import { locales } from '../../navegación';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*   <ChangeLanguage></ChangeLanguage>*/}

      <h2 className='text-red-200'>{locales}</h2>
    </main>
  )
}
