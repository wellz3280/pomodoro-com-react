import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import React, { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('current-theme') as AvailableThemes || 'dark';
        return storageTheme;
    });
    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault(); // previne que o href seja executado
        setTheme(prevtheme => {
            const nextTheme = prevtheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    };

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('current-theme', theme);
    }, [theme]);

    return <nav className={styles.menu}>
        <a className={styles.menuLink} href="#" aria-label='Ir para Home' title='Ir para Home'><HouseIcon /></a>
        <a className={styles.menuLink} href="#" aria-label='Visualizar histórico' title='visualizar histórico'><HistoryIcon /></a>
        <a className={styles.menuLink} href="#" aria-label='Configurações' title='configurações'><SettingsIcon /></a>
        <a className={styles.menuLink} onClick={handleThemeChange} 
        href="#" aria-label='Alterar tema' title={`Alterar para tema ${theme === 'dark' ? 'Claro' : 'Escuro'}`}>
            {nextThemeIcon[theme]}
        </a>
    </nav>;
};