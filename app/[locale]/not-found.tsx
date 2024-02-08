import { Link } from "@/navegación";
import { useLocale } from "next-intl";


export default function NotFound() {
    const locale = useLocale();
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-blue-500">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-800 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-neutral-500">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex flex-col gap-6">
                    <Link locale="en" href="/" className="rounded-full whitespace-nowrap px-3.5 py-2.5 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 shadow-sm">
                        Go back home 
                    </Link>
                    <Link locale="en" href="/support" className="rounded-full whitespace-nowrap px-3.5 py-2.5 text-sm font-semibold text-white bg-neutral-500 hover:bg-neutral-600 shadow-sm">Contact support</Link>
                </div>
            </div>
        </main>
    )
}