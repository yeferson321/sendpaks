import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from './redux/providers';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OnlyPaks',
  description: 'Los mejores packs y contenido exclusivo, Onlypaks es un servicio de suscripción de contenido, permite a los creadores recibir fondos directamente de sus fanes con una suscripción mensual',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`bg-white dark:bg-gray-950 ${inter.className}`}>
        <ReduxProvider >
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}