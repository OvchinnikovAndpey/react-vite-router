import React from 'react';
import type { RouteObject } from 'react-router-dom';
import LoginPage from './LoginPage';

const route: RouteObject = {
	element: React.createElement(LoginPage, {
		data: null,
		error: null,
		onSubmit: (email: string, password: string) => {
			console.log('Login attempt:', { email, password });
		},
	}),
	action: async ({ request }) => {
		const formData = await request.formData();
		return Object.fromEntries(formData);
	},
};

export default route;
