'use client'
import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (<>{children}</>);

    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            <ReduxProvider store={store}>
                {children}
            </ReduxProvider>
        </NextThemesProvider>
    )
}