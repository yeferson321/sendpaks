"use client"
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';



type ProviderProps = {
    children: React.ReactNode;
};

export default function ReduxProvider({ children }: ProviderProps) {


    const defineTheme = () => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        };
    };

    useEffect(() => {
        defineTheme();
    }, []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}