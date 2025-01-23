import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	ElementType,
	ReactNode,
} from 'react';

/** Стилевые варианты кнопки */
export type ButtonAppearance = 'filled' | 'outlined' | 'ghost' | 'link';

/** Цветовые темы кнопки */
export type ButtonTheme =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger';

/** Размеры кнопки */
export type ButtonSize = 'sm' | 'md' | 'lg';

/** Базовые пропсы кнопки */
export interface ButtonBaseProps {
	/** HTML тип кнопки */
	type?: 'button' | 'submit' | 'reset';

	/** Внешний вид кнопки */
	appearance?: ButtonAppearance;

	/** Цветовая тема */
	theme?: ButtonTheme;

	/** Размер кнопки */
	size?: ButtonSize;

	/** Состояние блокировки */
	disabled?: boolean;

	/** Состояние загрузки */
	loading?: boolean;

	/** Обработчик клика */
	onClick?: () => void;

	/** Дополнительные CSS классы */
	className?: string;

	/** Содержимое кнопки */
	children?: ReactNode;

	/** Текст кнопки */
	text?: string;

	/** URL для кнопки-ссылки */
	href?: string;
}

/** Пропсы для кнопки-ссылки */
export type ButtonAsAnchorProps = ButtonBaseProps &
	AnchorHTMLAttributes<HTMLAnchorElement>;

/** Пропсы для обычной кнопки */
export type ButtonAsButtonProps = ButtonBaseProps &
	ButtonHTMLAttributes<HTMLButtonElement>;

/** Общие пропсы кнопки */
export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;
