// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setlocalStorage = (key: string, value: any) =>
	localStorage.setItem(key, JSON.stringify(value));
