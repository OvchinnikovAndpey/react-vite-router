export type ActionProps = {
	type: 'button' | 'link';
	text: string;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
	href?: string;
};
