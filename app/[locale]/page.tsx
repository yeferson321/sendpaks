export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  /*   const t = await getTranslations({ locale, namespace: 'Metadata' });
   */
  return {
    title: 'OnlyPaks',
    keywords: 't(keywords)',
    description: 't(description)'
  };
};

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href={`${locale}/daniela`} className="rounded-full whitespace-nowrap px-3.5 py-2.5 text-sm font-semibold text-white bg-neutral-500 hover:bg-neutral-600 shadow-sm">Esta pagina es para subir contendio multimedia</a>
    </main>
  )
}
