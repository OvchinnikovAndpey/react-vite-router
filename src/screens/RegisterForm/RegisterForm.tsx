import { Form } from '@/containers/Form/Form';
import { Field } from '@/containers/Field/Field';
import { InputText, InputEmail, InputPassword } from '@/components/Input/Input';
import { Button } from '@/containers/Button/Button';
import { useTranslation } from 'react-i18next';

export interface RegisterFormProps {
    onSubmit: (data: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const { t } = useTranslation();

    return (
        <Form onSubmit={onSubmit}>
            <Field 
                label={t('form.nameLabel')}
                name="name"
                required
            >
                <InputText 
                    name="name"
                    placeholder={t('form.namePlaceholder')}
                />
            </Field>

            <Field 
                label={t('form.emailLabel')}
                name="email"
                required
            >
                <InputEmail 
                    name="email"
                    placeholder={t('form.emailPlaceholder')}
                />
            </Field>

            <Field 
                label={t('form.passwordLabel')}
                name="password"
                required
            >
                <InputPassword 
                    name="password"
                    placeholder={t('form.passwordPlaceholder')}
                />
            </Field>

            <Field 
                label={t('form.confirmPasswordLabel')}
                name="confirmPassword"
                required
            >
                <InputPassword 
                    name="confirmPassword"
                    placeholder={t('form.confirmPasswordPlaceholder')}
                />
            </Field>

            <Button type="submit">
                {t('form.registerButton')}
            </Button>
        </Form>
    );
};
