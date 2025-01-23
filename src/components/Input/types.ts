export interface InputProps {
	/** Тип поля ввода */
	type?: 'text' | 'email' | 'password';

	/** Значение поля */
	value?: string;

	/** Обработчик изменения значения */
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

	/** Текст подсказки */
	placeholder?: string;

	/** Дополнительные CSS классы */
	className?: string;

	/** Отключение поля ввода */
	disabled?: boolean;

	/** Атрибут name */
	name?: string;

	/** Идентификатор поля */
	id?: string;

	/** Автофокус при монтировании */
	autoFocus?: boolean;

	/** Режим автозаполнения */
	autoComplete?: string;
}
