import React from 'react';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import  LoginForm  from '../../screens/LoginForm/LoginForm';
import { LoginPageProps } from './types';

const LoginPage: React.FC<LoginPageProps> = ({ data, error }) => {
  const handleSubmit = (formData: { email: string; password: string }) => {
    console.log('Form submitted:', formData);
  };

  return (
    <Section>
      <Card>
        <LoginForm onSubmit={handleSubmit} />
      </Card>
      {data && <div>{data.message}</div>}
      {error && <div>Error: {error}</div>}
    </Section>
  );
};

export default LoginPage;
