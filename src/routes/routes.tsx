import MainPage from '@/pages/MainPage/MainPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';

export const routes = [
	{ index: true, element: <MainPage /> },
	{ path: '/register', element: <RegisterPage /> },
	{ path: '/login', element: <LoginPage onSubmit={function (email: string, password: string): void {
		throw new Error('Function not implemented.');
	} }  /> }
];