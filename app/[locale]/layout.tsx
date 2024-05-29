import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/navegación';
import Providers from "./providers";

import './globals.css';
import { notFound } from 'next/navigation';


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
  if (!locales.includes(locale as string)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning className="h-full">
      <body className={`bg-white dark:bg-body h-full ${inter.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages} formats={{ number: { currency: { currencyDisplay: "code", style: "currency", currency: "USD" } } }}>
          <Providers>


              {children}

            
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
