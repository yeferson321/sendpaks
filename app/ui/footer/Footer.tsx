import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ClassProps } from '@/app/lib/definitions/definitions';

export default function Footer({ className }: ClassProps) {
  const t = useTranslations('Footer');
  const getCurrentYear = () => new Date().getFullYear();;

  return (
    <footer className={`${className}`}>
      <hr className="my-4 mx-3 border-gray-200 dark:border-neutral-border" />
      <ul className="flex justify-evenly text-[13px] font-medium text-neutral-500 dark:text-neutral-300">
        <li>
          <Link href="about" className="hover:underline">{t('about')}</Link>
        </li>
        <li>
          <Link href="privacy" className="hover:underline">{t('privacy')}</Link>
        </li>
        <li>
          <Link href="terms" className="hover:underline">{t('terms')}</Link>
        </li>
      </ul>
      <span className="block mt-3 text-center text-[13px] font-medium text-neutral-500 dark:text-neutral-300">
        © {getCurrentYear()} <a href="https://onlypaks.com/" className="hover:underline">OnlyPaks™</a>. {t('rights')}
      </span>
    </footer>
  )
};