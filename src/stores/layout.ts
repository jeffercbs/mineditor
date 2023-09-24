import type { PanelsType } from '$/types/layout';
import { writable } from 'svelte/store';

export const L = {
	vertical: 'vertical',
	horizontal: 'horizontal',
	grid: 'grid'
};

const PANELS: PanelsType[] = [
	{
		panel: 'html',
		content: '<h1>Hello World</h1>',
		view: true
	},
	{
		panel: 'css',
		content: 'h1 { color: red; }',
		view: true
	},
	{
		panel: 'javascript',
		content: 'console.log("Hello World")',
		view: true
	}
];

export const Panels = writable(PANELS);
