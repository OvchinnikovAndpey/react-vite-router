import { Form } from '@/containers/Form/Form';
import { Field } from '@/containers/Field/Field';
import { InputEmail, InputPassword } from '@/components/Input/Input';
import { Button } from '@/containers/Button/Button';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
	onSubmit: (data: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const { t } = useTranslation();

	return (
		<Form onSubmit={onSubmit}>
			<Field label={t('form.emailLabel')} name="email" required>
				<InputEmail name="email" placeholder={t('form.emailPlaceholder')} />
			</Field>

			<Field label={t('form.passwordLabel')} name="password" required>
				<InputPassword
					name="password"
					placeholder={t('form.passwordPlaceholder')}
				/>
			</Field>

			<Button type="submit">{t('demo.logIn')}</Button>
		</Form>
	);
};

export default LoginForm;
