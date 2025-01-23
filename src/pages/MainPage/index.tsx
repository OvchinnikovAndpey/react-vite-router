import React from 'react';
import type { RouteObject } from 'react-router-dom';
import MainPage from './MainPage';

const route: RouteObject = {
	element: React.createElement(MainPage),
	loader: async () => {
		const { getMainPageData } = await import('../../api/mainPage');
		return getMainPageData();
	},
};

export default route;
