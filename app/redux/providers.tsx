"use client"
import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';

type ProviderProps = {
    children: React.ReactNode;
};

export default function ReduxProvider({ children }: ProviderProps) {

    const defineTheme = () => {
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
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