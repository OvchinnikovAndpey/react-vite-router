import React from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AnchorProvider } from './components/Anchor/AnchorContext';
import i18n from './i18n';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import Layout from './containers/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <LoginPage 
          data={null} 
          error={null} 
          onSubmit={(email: string, password: string) => {
            throw new Error('Function not implemented.');
          }} 
        />
      </Layout>
    ),
  },
  {
    path: '/register',
    element: (
      <Layout>
        <RegisterPage />
      </Layout>
    ),
  },
]);

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <AnchorProvider LinkElement={Link}>
        <RouterProvider router={router} />
      </AnchorProvider>
    </I18nextProvider>
  );
};

export default App;
