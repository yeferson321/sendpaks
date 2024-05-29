export default function TypeLayout({ children, gallery, modal }: { children: React.ReactNode, gallery:React.ReactNode, modal: React.ReactNode }) {
    return (
        <>
            {gallery}
            {modal}
            {children}
        </>
    )
}