'use client'
import React from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { ThemeProps } from '@/app/lib/definitions/definitions';

export default function SwitchTheme({ buttonClass, spanClass, IconMoon, IconSun }: ThemeProps) {
    const { theme, setTheme } = useTheme();
    const t = useTranslations('Header');

    return (
        <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={buttonClass}>
            <span className="sr-only">Change language</span>
            {theme === "light" ? IconMoon : IconSun}
            <span className={spanClass}>{theme === 'light' ? t('darkMode') : t('lightMode')}</span>
        </button>
    )
};
