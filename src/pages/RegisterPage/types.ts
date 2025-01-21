export interface RegisterFormProps {
	onSubmit: (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => void;
}