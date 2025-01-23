import React from 'react';
import { ButtonAsButtonProps, ButtonAsAnchorProps } from './types';
import styles from './button.module.scss';
import clsx from 'clsx';

type Props = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	Props
>((props, ref) => {
	const {
		type = 'button',
		appearance = 'filled',
		theme = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		onClick,
		className,
		children,
		text,
		href,
		...rest
	} = props;

	const commonProps = {
		className: clsx(
			styles.button,
			styles[`button--${appearance}`],
			styles[`button--${theme}`],
			styles[`button--${size}`],
			{
				[styles['button--disabled']]: disabled,
				[styles['button--loading']]: loading,
			},
			className
		),
		onClick,
	};

	const content = (
		<>
			{loading && <span className={styles['button__loader']} />}
			{text}
			{children}
		</>
	);

	return href ? (
		<a
			{...(rest as ButtonAsAnchorProps)}
			{...commonProps}
			href={href}
			ref={ref as React.Ref<HTMLAnchorElement>}
		>
			{content}
		</a>
	) : (
		<button
			{...(rest as ButtonAsButtonProps)}
			{...commonProps}
			type={type}
			disabled={disabled}
			ref={ref as React.Ref<HTMLButtonElement>}
		>
			{content}
		</button>
	);
});

Button.displayName = 'Button';
export default Button;
