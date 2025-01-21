import React, { useState, useEffect } from 'react';
import Section from '@/containers/Section/Section';
import { Action } from '@/components/Action/Action';
import Modal from '../../containers/Modal/Modal';
import LoginForm from '../../screens/LoginForm/LoginForm';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { MainPageData, getMainPageData } from '../../api/mainPage';
import { useTranslation } from 'react-i18next';
import { Card } from '../../containers/Card/Card';
import styles from './MainPage.module.scss';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' }
];

const MainPage: React.FC = () => {
    const [logInModalVisible, setLogInModalVisible] = useState(false);
    const [regModalVisible, setRegModalVisible] = useState(false);
    const [data, setData] = useState<MainPageData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { t, i18n } = useTranslation();

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

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
                        <Action type="button" text={t('demo.logIn')} onClick={() => setLogInModalVisible(true)} />
                        <Action type="button" text={t('demo.signUp')} onClick={() => setRegModalVisible(true)} />
                    </div>
                </div>
            </Card>

            {logInModalVisible && (
                <Modal onClose={() => setLogInModalVisible(false)}>
                    <LoginForm
                        email={loginFormData.email}
                        password={loginFormData.password}
                        onEmailChange={(email) => setLoginFormData(prev => ({...prev, email}))}
                        onPasswordChange={(password) => setLoginFormData(prev => ({...prev, password}))}
                        onSubmit={() => {
                            alert(`Данные для входа:\nEmail: ${loginFormData.email}\nPassword: ${loginFormData.password}`);
                            console.log('Данные для входа:', {
                                email: loginFormData.email,
                                password: loginFormData.password
                            });
                            setLogInModalVisible(false);
                        }}
                    />
                </Modal>
            )}

            {regModalVisible && (
                <Modal onClose={() => setRegModalVisible(false)}>
                    <RegisterForm
                        {...registerFormData}
                        onNameChange={(name) => setRegisterFormData(prev => ({...prev, name}))}
                        onEmailChange={(email) => setRegisterFormData(prev => ({...prev, email}))}
                        onPasswordChange={(password) => setRegisterFormData(prev => ({...prev, password}))}
                        onConfirmPasswordChange={(confirmPassword) => setRegisterFormData(prev => ({...prev, confirmPassword}))}
                        onSubmit={() => {
                            alert(`Данные регистрации:\nИмя: ${registerFormData.name}\nEmail: ${registerFormData.email}\nPassword: ${registerFormData.password}`);
                            console.log('Данные регистрации:', {
                                name: registerFormData.name,
                                email: registerFormData.email,
                                password: registerFormData.password
                            });
                            setRegModalVisible(false);
                        }}
                    />
                </Modal>
            )}

            {error && <div>Error: {error}</div>}
        </Section>
    );
};

export default MainPage;