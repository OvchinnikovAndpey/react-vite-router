import React, { useState, useEffect } from 'react';
import Section from '@/containers/Section/Section';
import { Action } from '@/components/Action/Action';
import Modal from '../../containers/Modal/Modal';
import LoginForm from '../../screens/LoginForm/LoginForm';
import { RegisterForm } from '../../screens/RegisterForm/RegisterForm';
import { MainPageData, getMainPageData } from '../../api/mainPage';
import { useTranslation } from 'react-i18next';
import { Card } from '../../containers/Card/Card';
import styles from './MainPage.module.scss';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' }
];

const MainPage: React.FC = () => {
    const [data, setData] = useState<MainPageData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { t, i18n } = useTranslation();

    const changeLanguage = async (lng: string) => {
        try {
            await i18n.changeLanguage(lng);
        } catch (err) {
            console.error('Error changing language:', err);
        }
    };

    useEffect(() => {
        getMainPageData()
            .then(setData)
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, []);

    const handleLoginSubmit = (formData: { email: string; password: string }) => {
        console.log('Данные для входа:', formData);
        alert(`Данные для входа:\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    };

    const handleRegisterSubmit = (formData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string
    }) => {
        console.log('Данные регистрации:', formData);
        alert(`Данные регистрации:\nИмя: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    };

    return (
        <Section>
            <Card>
                <div className={styles.container}>
                    <h3 className={styles.title}>{t('titles.languageSwitch')}</h3>
                    <div className={styles.languageSelector}>
                        {languages.map((lng) => (
                            <Action
                                key={lng.code}
                                type="button"
                                disabled={lng.code === i18n.language}
                                text={lng.label}
                                onClick={() => changeLanguage(lng.code)}
                                aria-label={`Switch to ${lng.label}`}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.container}>
                    <h3 className={styles.title}>{t('titles.authorization')}</h3>
                    <div className={styles.authButtons}>
                        <Modal.Trigger text={t('demo.logIn')}>
                            <LoginForm onSubmit={handleLoginSubmit} />
                        </Modal.Trigger>

                        <Modal.Trigger text={t('demo.signUp')}>
                            <RegisterForm onSubmit={handleRegisterSubmit} />
                        </Modal.Trigger>
                    </div>
                </div>
            </Card>
            {error && <div>Error: {error}</div>}
        </Section>
    );
};

export default MainPage;

