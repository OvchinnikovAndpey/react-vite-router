import { HTMLAttributes, ElementType } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
	value: string;
	as?: ElementType;
}