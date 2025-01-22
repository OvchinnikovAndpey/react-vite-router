import React from 'react';
import Section from '../../containers/Section/Section';
import Card from '../../containers/Card/Card';
import LoginForm from '../../screens/LoginForm/LoginForm';
import { LoginPageProps } from './types';

const LoginPage: React.FC<LoginPageProps> = ({ data, error }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Section>
      <Card>
        <LoginForm 
          onSubmit={handleSubmit}
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
        />
      </Card>
      {data && <div>{data.message}</div>}
      {error && <div>Error: {error}</div>}
    </Section>
  );
};

export default LoginPage;