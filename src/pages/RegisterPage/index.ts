import React from 'react';
import type { RouteObject } from 'react-router-dom';
import RegisterPage from './RegisterPage';

const route: RouteObject = {
	element: React.createElement(RegisterPage),
	loader: async () => {
		const { getRegisterPageData } = await import('../../api/registerPage');
		return getRegisterPageData();
	},
};

export default route;
