import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AnchorProvider } from './components/Anchor/AnchorContext';
import i18n from './i18n';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import Layout from './containers/Layout/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <AnchorProvider LinkElement={Link}>
          <Layout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage data={null} error={null} onSubmit={function (email: string, password: string): void {
                throw new Error('Function not implemented.');
              } } />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Layout>
        </AnchorProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
