import React from 'react';
import Menu from '../Menu/Menu';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
	const { t } = useTranslation();

	const menuItems = [
		{ href: '/', label: t('navigation.home') },
		{ href: '/login', label: t('navigation.login') },
		{ href: '/register', label: t('navigation.register') },
	];

	return (
		<header className={styles.header}>
			<div className={styles.logo}>{t('common.logo')}</div>
			<Menu items={menuItems} />
		</header>
	);
};

export default Header;
