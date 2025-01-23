export interface MainPageData {
	message: string;
}

export const getMainPageData = (): Promise<MainPageData> => {
	return Promise.resolve({
		message: 'Main Page Data',
	});
};
