"use client"

import Link from 'next/link';
import { useState } from 'react';


import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { changeTheme } from '../../redux/features/theme';

export default function Sidebar() {

    const theme = useAppSelector(state => state.theme.theme);
    const dispatch = useAppDispatch();

    return (
        <aside className="hidden sm:block h-full mt-14" aria-label="Sidebar">
            <ul className="space-y-2 font-medium">
                <li>
                    <Link href="#" className="flex items-center w-full p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-600 dark:stroke-slate-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex items-center w-full p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-gray-600 dark:stroke-slate-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Acerca de</span>
                    </Link>
                </li>
                <li>
                    <button type="button" onClick={() => dispatch(changeTheme())} className="flex items-center w-full p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        {theme ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-600 dark:stroke-slate-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                               <span className="flex-1 ms-3 whitespace-nowrap">Modo oscuro</span>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Modo claro</span>
                                
                            </>
                        )}
                    </button>
                </li>
                <li>
                    <Link href="#" className="flex items-center w-full p-1.5 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-black/10 dark:hover:bg-slate-100/10 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-gray-600 dark:stroke-slate-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span className="flex-1 ms-3 whitespace-nowrap">Iniciar sesion</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
};

