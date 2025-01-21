export interface RegisterPageData {
	message: string;
}

export const getRegisterPageData = (): Promise<RegisterPageData> => {
	return Promise.resolve({
		message: 'Register Page Data',
	});
};