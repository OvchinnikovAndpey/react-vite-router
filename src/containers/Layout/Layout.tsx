import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutProps } from './types';
import styles from './layout.module.scss';

const Layout: React.FC<LayoutProps> = ({ children, wrapInMain = true }) => {
	return (
		<div className={styles.container}>
			<Header />
			{wrapInMain ? <main>{children}</main> : children}
			<Footer />
		</div>
	);
};

export default Layout;
