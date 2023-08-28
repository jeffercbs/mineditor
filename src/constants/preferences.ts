/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Monaco, Global } from '../types/preferences';

export const EDITOR_DEFAULT_SETTINGS: Monaco = {
	theme: 'vs-dark',
	fontSize: 16,
	fontLigatures: false,
	automaticLayout: true,
	lineNumbers: 'off',
	fixedOverflowWidgets: true,
	scrollBeyondLastLine: false,
	minimap: false,
	glyphMargin: false,
	folding: false
};

export const GLOBAL_DEFAULT_SETTINGS = {
	nameProject: 'Project',
	fullscreen: false,
	accent: 'green',
	layout: 'vertical'
};

export function globalOptions(opt: Global): any {
	const { fullscreen, accent } = opt;
	const options = [
		{
			component: 'radius',
			key: 'accent',
			options: ['green', 'blue', 'red', 'yellow'],
			value: accent
		},
		{
			component: 'select',
			key: 'fullscreen',
			options: ['true', 'false'],
			value: fullscreen
		}
	];
	return options;
}
export function editorOptions(opt: Monaco): any {
	const { theme, fontLigatures, fontSize, lineNumbers, minimap, glyphMargin, folding } = opt;
	const options = [
		{
			component: 'select',
			key: 'theme',
			options: ['vs-dark', 'vs-light', 'codesandbox', 'github-dark', 'dracula', 'sunburst'],
			value: theme
		},
		{
			component: 'select',
			key: 'fontLigatures',
			options: ['true', 'false'],
			value: fontLigatures
		},
		{
			component: 'select',
			key: 'lineNumbers',
			options: ['on', 'off', 'relative', 'interval'],
			value: lineNumbers
		},
		{
			component: 'input',
			type: 'number',
			key: 'fontSize',
			value: fontSize
		},
		{
			component: 'select',
			key: 'glyphMargin',
			options: ['true', 'false'],
			value: glyphMargin
		},
		{
			component: 'select',
			key: 'folding',
			options: ['true', 'false'],
			value: folding
		},
		{
			component: 'select',
			key: 'minimap',
			options: ['true', 'false'],
			value: minimap
		}
	];
	return options;
}
