export const runtime = 'edge' // 'nodejs' (default) | 'edge'
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/navegación';
import Providers from "./providers";
import NotFound from './not-found';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: 'OnlyPaks',
    keywords: t('keywords'),
    description: t('description')
  };
};

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) NotFound();

  return (
    <html lang={locale}>
      <body className={`bg-white dark:bg-body ${inter.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
