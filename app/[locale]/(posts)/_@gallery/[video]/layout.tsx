export default async function TypeLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <>
            {modal}
            {children}
        </>
    )
}