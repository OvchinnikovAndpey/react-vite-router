import { HTMLAttributes } from 'react';

export interface MenuProps extends HTMLAttributes<HTMLElement> {
	items: { href: string; label: string }[];
}
