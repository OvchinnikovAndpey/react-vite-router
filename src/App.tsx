import React from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AnchorProvider } from './components/Anchor/AnchorContext';
import i18n from './i18n';
import { routes } from './routes/routes';
import Layout from './containers/Layout/Layout';
import type { RouteObject, IndexRouteObject } from 'react-router-dom';

const routesWithLayout = routes.map((route) => {
	if (route.index) {
		return {
			...route,
			element: <Layout>{route.element}</Layout>,
		} as IndexRouteObject;
	}
	return {
		...route,
		element: <Layout>{route.element}</Layout>,
	} as RouteObject;
});

const router = createBrowserRouter(routesWithLayout);

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
