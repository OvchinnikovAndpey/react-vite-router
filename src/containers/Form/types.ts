export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	/** Дополнительные CSS классы */
	className?: string;

	/** Дочерние элементы формы */
	children: React.ReactNode;

	/** Обработчик отправки формы */
	onSubmit?: (data: any) => void;
}
