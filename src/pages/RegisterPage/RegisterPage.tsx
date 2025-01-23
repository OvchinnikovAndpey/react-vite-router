import React, { useState, useEffect } from 'react';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import { RegisterForm } from '../../screens/RegisterForm/RegisterForm';
import { getRegisterPageData, RegisterPageData } from '../../api/registerPage';

const RegisterPage: React.FC = () => {
	const [data, setData] = useState<RegisterPageData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		getRegisterPageData()
			.then(setData)
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	const handleRegisterSubmit = (formData: {
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
	}) => {
		if (formData.password !== formData.confirmPassword) {
			alert('Passwords do not match!');
			return;
		}
		console.log('Registration data:', formData);
		alert(`Registration successful for ${formData.name}!`);
	};

	return (
		<Section>
			<Card>
				<RegisterForm onSubmit={handleRegisterSubmit} />
			</Card>
			{error && <div>Error: {error}</div>}
		</Section>
	);
};

export default RegisterPage;
