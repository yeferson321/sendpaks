"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

type ThemeProps = {
    buttonClass: React.ButtonHTMLAttributes<HTMLButtonElement>['className'];
    spanClass?: React.HTMLAttributes<HTMLSpanElement>['className'];
    IconMoon: JSX.Element;
    IconSun: JSX.Element;
};

export default function SwitchTheme({ buttonClass, spanClass, IconMoon, IconSun }: ThemeProps) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const t = useTranslations('Sidebar');

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <button type="button" className={buttonClass}>
            <span className="sr-only">Change language</span>
            {IconMoon}
            <span className={spanClass}>{t('darkMode')}</span>
        </button>
    );

    return (
        <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={buttonClass}>
            <span className="sr-only">Change language</span>
            {theme === "light" ? IconMoon : IconSun}
            <span className={spanClass}>{theme === 'light' ? t('darkMode') : t('lightMode')}</span>
        </button>
    )
};
