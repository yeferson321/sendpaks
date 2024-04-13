import './globals.css';

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {


  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
