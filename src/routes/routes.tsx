import main from '../pages/MainPage';
import login from '../pages/LoginPage';
import register from '../pages/RegisterPage';

export const routes = [
	{ index: true, ...main },
	{ path: '/login', ...login },
	{ path: '/register', ...register },
];
