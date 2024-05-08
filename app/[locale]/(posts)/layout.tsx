import Navbar from "@/app/ui/navbar/Navbar";
import Sidebar from "@/app/ui/sidebar/Sidebar";

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {

    return (
        <div className="h-full mx-auto max-w-[43rem] lg:max-w-[65rem] xl:max-w-[84rem] px-4">

            <div className="h-full grid max-xs:grid-rows-[auto,_1fr] xs:grid-cols-[auto,_1fr] max-xs:gap-y-4 xs:gap-x-6">

                <Navbar className="xs:hidden" />

                <Sidebar className="hidden xs:block" />

                {children}

            </div>

        </div>
    )

}    