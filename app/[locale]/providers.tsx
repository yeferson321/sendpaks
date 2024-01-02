"use client"
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </NextThemesProvider>
        </NextUIProvider>
    )
}