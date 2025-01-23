import React from 'react';
import clsx from 'clsx';
import styles from './Form.module.scss';
import { FormProps } from './types';

export const Form: React.FC<FormProps> = ({ 
    className,
    children,
    onSubmit,
    ...props 
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSubmit?.(data);
    };

    return (
        <form 
            className={clsx(styles.form, className)}
            onSubmit={handleSubmit}
            {...props}
        >
            {children}
        </form>
    );
};
