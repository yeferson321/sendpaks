
export default async function RootLayout({ children, gallery, modal, params }: { children: React.ReactNode, gallery: React.ReactNode, modal: React.ReactNode, params: { profile: string, type: string } }) {


    return (

        <>



          
                        {children}
                        {gallery}

                       


               
        </>


    )

}