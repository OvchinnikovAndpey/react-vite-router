import React from 'react';
import { InputProps } from './types';
import styles from './Input.module.scss';

export const Input: React.FC<InputProps> = (props) => {
	return <input className={styles.input} {...props} />;
};

export const InputEmail: React.FC<Omit<InputProps, 'type'>> = (props) => (
	<Input type="email" {...props} />
);

export const InputPassword: React.FC<Omit<InputProps, 'type'>> = (props) => (
	<Input type="password" {...props} />
);

export const InputText: React.FC<Omit<InputProps, 'type'>> = (props) => (
	<Input type="text" {...props} />
);

export default Input;
