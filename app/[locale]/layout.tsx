import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/navegación';
import Providers from "./providers";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OnlyPaks',
  keywords: ['adultos', 'packs', 'onlypaks', 'onlypacks', 'exclusivo'],
  description: 'Explora el mejor contenido exclusivo para adultos solo en Onlypaks.com. Envía tokens a tu modelo favorito y descubre sus fotos y videos más destacados, o suscríbete para acceder a todo su contenido exclusivo de alta calidad. No hay otro lugar que ofrezca una experiencia superior. Navega por nuestra impresionante selección de contenido desde cualquier dispositivo y sumérgete en un mundo de placer y entretenimiento sin igual.',
};

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  };

  return (
    <html lang={locale}>
      <body className={`bg-white dark:bg-background-body ${inter.className}`}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
