import React from 'react';
import { SectionProps } from './types';
import styles from './section.module.scss';

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
	return (
		<section className={styles.section} {...props}>
			<div className={styles.container}>{children}</div>
		</section>
	);
};

export default Section;