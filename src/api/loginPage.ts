export interface LoginPageData {
	message: string;
}

export const getLoginPageData = (): Promise<LoginPageData> => {
	return Promise.resolve({
		message: 'Login Page Data',
	});
};