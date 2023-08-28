import type { PanelsType } from '$/types/layout';
import { writable } from 'svelte/store';

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
	},
	{
		panel: 'preview',
		content: '',
		view: false
	}
];

export const Panels = writable(PANELS);
