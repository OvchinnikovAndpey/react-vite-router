import { Field } from '../../containers/Field/Field';
import Button from '@/containers/Button/Button';
import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface RegisterFormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    onNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onConfirmPasswordChange: (confirmPassword: string) => void;
    onSubmit: (name: string, email: string, password: string, confirmPassword: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    name,
    email,
    password,
    confirmPassword,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
}) => {
    const { t } = useTranslation();
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validateForm = (): boolean => {
        const newErrors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        let isValid = true;

        // Валидация имени
        if (!name.trim()) {
            newErrors.name = 'Имя обязательно';
            isValid = false;
        } else if (name.length < 2) {
            newErrors.name = 'Имя должно содержать минимум 2 символа';
            isValid = false;
        }

        // Валидация email
        if (!email) {
            newErrors.email = 'Email обязателен';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Неверный формат email';
            isValid = false;
        }

        // Валидация пароля
        if (!password) {
            newErrors.password = 'Пароль обязателен';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
            isValid = false;
        }

        // Валидация подтверждения пароля
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Подтвердите пароль';
            isValid = false;
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validateForm()) {
            console.log('Отправка данных формы:', {
                name,
                email,
                password,
                confirmPassword,
                timestamp: new Date().toISOString()
            });
            onSubmit(name, email, password, confirmPassword);
        } else {
            console.log('Ошибки валидации:', errors);
        }
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onNameChange(event.target.value);
        if (errors.name) {
            setErrors(prev => ({ ...prev, name: '' }));
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

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onConfirmPasswordChange(event.target.value);
        if (errors.confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: '' }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Field
                label={t('form.nameLabel')}
                type="text"
                placeholder={t('form.namePlaceholder')}
                value={name}
                onChange={handleNameChange}
                name="register-name"
                error={errors.name}
            />
            <Field
                label={t('form.emailLabel')}
                type="email"
                placeholder={t('form.emailPlaceholder')}
                value={email}
                onChange={handleEmailChange}
                name="register-email"
                error={errors.email}
            />
            <Field
                label={t('form.passwordLabel')}
                type="password"
                placeholder={t('form.passwordPlaceholder')}
                value={password}
                onChange={handlePasswordChange}
                name="register-password"
                error={errors.password}
            />
            <Field
                label={t('form.confirmPasswordLabel')}
                type="password"
                placeholder={t('form.confirmPasswordPlaceholder')}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                name="register-confirm-password"
                error={errors.confirmPassword}
            />
            <Button type="submit">{t('form.registerButton')}</Button>
        </form>
    );
};

export default RegisterForm;