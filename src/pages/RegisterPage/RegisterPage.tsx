import React, { useState, useEffect } from 'react';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import RegisterForm from '../../screens/RegisterForm/RegisterForm';
import { getRegisterPageData, RegisterPageData } from '../../api/registerPage';

const RegisterPage: React.FC = () => {
    const [data, setData] = useState<RegisterPageData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        getRegisterPageData()
            .then(setData)
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, []);

    function handleRegisterSubmit(name: string, email: string, password: string, confirmPassword: string): void {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Implement your registration logic here
        console.log('Registration data:', { name, email, password });
        alert(`Registration successful for ${name}!`);
    }

    return (
        <Section>
            <Card>
                <RegisterForm 
                    {...formData}
                    onSubmit={handleRegisterSubmit}
                    onNameChange={(name) => setFormData(prev => ({...prev, name}))}
                    onEmailChange={(email) => setFormData(prev => ({...prev, email}))}
                    onPasswordChange={(password) => setFormData(prev => ({...prev, password}))}
                    onConfirmPasswordChange={(confirmPassword) => setFormData(prev => ({...prev, confirmPassword}))}
                />
            </Card>
            {error && <div>Error: {error}</div>}
        </Section>
    );
};

export default RegisterPage;