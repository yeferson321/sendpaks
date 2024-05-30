import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

import {getMessages} from 'next-intl/server';
 
/* import { getTranslations } from 'next-intl/server'; */
import { locales } from '@/navegación';

import { notFound } from 'next/navigation';

import Providers from "./providers";

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
/*   const t = await getTranslations({ locale, namespace: 'Metadata' });
 */
  return {
    title: 'OnlyPaks',
    keywords: 't(keywords)',
    description: 't(description)'
  };
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  const messages = await getMessages();
 
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages} formats={{ number: { currency: { currencyDisplay: "code", style: "currency", currency: "USD" } } }}>
          <Providers>


              {children}

            
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
