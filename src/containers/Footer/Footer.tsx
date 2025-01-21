import React from 'react';
import Menu from '../Menu/Menu';
import styles from './footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
    const { t } = useTranslation();

    const menuItems = [
        { href: '/', label: t('navigation.home') },
        { href: '/login', label: t('navigation.login') },
        { href: '/register', label: t('navigation.register') },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>{t('common.logo')}</div>
            <Menu items={menuItems} />
        </footer>
    );
};

export default Footer;
