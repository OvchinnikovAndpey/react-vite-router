import React from 'react';
import { TypographyProps } from './types';

export const Title: React.FC<TypographyProps> = ({
	value,
	as: Tag = 'h1',
	...props
}) => {
	return <Tag {...props}>{value}</Tag>;
};

export const Text: React.FC<TypographyProps> = ({
	value,
	as: Tag = 'p',
	...props
}) => {
	return <Tag {...props}>{value}</Tag>;
};
