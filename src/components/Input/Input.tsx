import React from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ type, value, onChange }) => {
	return <input type={type} value={value} onChange={onChange} />;
};

export default Input;