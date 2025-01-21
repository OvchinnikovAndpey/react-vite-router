import { Field } from '../../containers/Field/Field';
import Button from '@/containers/Button/Button';
import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface LoginFormProps {
    email: string;
    password: string;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
}) => {
    const { t } = useTranslation();
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateForm = (): boolean => {
        const newErrors = { email: '', password: '' };
        let isValid = true;

        if (!email) {
            newErrors.email = 'Email обязателен';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Неверный формат email';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Пароль обязателен';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            console.log('Отправка данных формы:', {
                email,
                password,
                timestamp: new Date().toISOString()
            });
            onSubmit(email, password);
        } else {
            console.log('Ошибка валидации:', errors);
        }
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onEmailChange(event.target.value);
        if (errors.email) {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onPasswordChange(event.target.value);
        if (errors.password) {
            setErrors(prev => ({ ...prev, password: '' }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Field
                label={t('form.emailLabel')}
                type="email"
                placeholder={t('form.emailPlaceholder')}
                value={email}
                onChange={handleEmailChange}
                name="login-email"
                error={errors.email}
            />
            <Field
                label={t('form.passwordLabel')}
                type="password"
                placeholder={t('form.passwordPlaceholder')}
                value={password}
                onChange={handlePasswordChange}
                name="login-password"
                error={errors.password}
            />
            <Button type="submit">{t('demo.logIn')}</Button>
        </form>
    );
};

export default LoginForm;