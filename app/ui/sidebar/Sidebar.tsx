"use client"
import Link from 'next/link';

export default function Sidebar() {

    return (
        <aside className="hidden sm:block h-full mt-14" aria-label="Sidebar">
            <ul className="space-y-2 font-medium">
                <li>
                    <Link href="#" className="flex items-center p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-600 dark:stroke-slate-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-600 dark:stroke-slate-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-600 dark:stroke-slate-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-600 dark:stroke-slate-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

