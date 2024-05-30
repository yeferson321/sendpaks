export default function RootLayout({ children, gallery, modal }: { children: React.ReactNode, gallery: React.ReactNode, modal: React.ReactNode }) {
    return (
        <>
          {/*   {gallery}
            {modal} */}
            {children}
        </>
    )
}