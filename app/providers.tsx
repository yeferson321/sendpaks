'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
/* import { Provider as ReduxProvider } from 'react-redux'; */
/* import { store } from '../redux/store'; */
import { useEffect, useState } from 'react';

/* import { useRef } from 'react';
import { Provider } from 'react-redux';
import  {makeStore, AppStore} from '@/app/lib/redux/store';
 */

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (<>{children}</>);

    /*     if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    } */

    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
           
                {children}
            
        </NextThemesProvider>
    )
}