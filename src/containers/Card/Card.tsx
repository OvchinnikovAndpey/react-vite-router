import React from 'react';
import clsx from 'clsx';
import styles from './card.module.scss';
import { CardProps } from './types';

/**
 * Компонент карточки
 */
export const Card: React.FC<CardProps> & {
	Body: React.FC<CardProps>;
} = ({ children, className, ...props }) => {
	return (
		<div className={clsx(styles.card, className)} {...props}>
			{children}
		</div>
	);
};

/**
 * Компонент тела карточки
 */
export const CardBody: React.FC<CardProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div className={clsx(styles.card__body, className)} {...props}>
			{children}
		</div>
	);
};

// Регистрация составной части
Card.Body = CardBody;

export default Card;
