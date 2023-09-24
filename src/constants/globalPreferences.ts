import type { Global } from '../types/preferences';

export const GLOBAL_DEFAULT_SETTINGS = {
	nameProject: 'Project',
	fullscreen: false,
	accent: 'amber',
	layout: 'vertical'
};


export function GetGlobalOptions(opt: Global): any[] {
    const { fullscreen, accent } = opt;
    
	const options = [
		{
			component: 'radius',
			label: 'accent',
			name: 'accent',
			desc: 'Specifies the color theme used in the workbench.',
			options: ['green', 'blue', 'red', 'yellow'],
			value: accent
		},
		{
			component: 'select',
			label: 'fullscreen',
			name: 'accent',
			desc: 'Specifies the color theme used in the workbench.',
			options: ['true', 'false'],
			value: fullscreen
		}
	];
	return options;
}

