import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from "./providers";
import { notFound } from 'next/navigation';
import { locales } from '@/navegación';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OnlyPaks',
  description: 'Los mejores packs y contenido exclusivo, Onlypaks es un servicio de suscripción de contenido, permite a los creadores recibir fondos directamente de sus fanes con una suscripción mensual',
}

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
 
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  };

  return (
    <html lang={locale}>
      <body className={`bg-white dark:bg-background-body ${inter.className}`}>
        <Providers>  
          {children}
        </Providers>
      </body>
    </html>
  )
}