import React from 'react';
import clsx from 'clsx';
import styles from './Field.module.scss';

interface FieldProps {
	label: string;
	name: string;
	required?: boolean;
	className?: string;
	error?: string;
	helperText?: string;
	children: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({
	label,
	name,
	required,
	className,
	error,
	helperText,
	children,
}) => {
	return (
		<div className={clsx(styles.field, className)}>
			<label className={styles.field__label} htmlFor={name}>
				{label}
				{required && <span className={styles.field__required}>*</span>}
			</label>

			{React.cloneElement(children as React.ReactElement, {
				id: name,
				name,
				className: clsx(styles.field__input, {
					[styles['field__input--error']]: error,
				}),
			})}

			{helperText && <span className={styles.field__helper}>{helperText}</span>}

			{error && <span className={styles.field__error}>{error}</span>}
		</div>
	);
};

Field.displayName = 'Field';
