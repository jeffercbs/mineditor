import type { Monaco } from '../types/preferences';

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

export function GetEditorOptions(opt: Monaco): any[] {
	const { theme, fontLigatures, fontSize, lineNumbers, minimap, glyphMargin, folding } = opt;
	const options = [
		{
			component: 'select',
			label: 'theme',
			name: 'theme',
			desc: 'Specifies the color theme used in the workbench.',
			options: ['vs-dark', 'vs-light', 'grovbox', 'github', 'dracula', 'sunburst'],
			value: theme
		},
		{
			component: 'select',
			label: 'fontLigatures',
			name: 'font ligatures',
			desc: 'Controls whether the ligatures is enabled.',
			options: ['true', 'false'],
			value: fontLigatures
		},
		{
			component: 'select',
			label: 'lineNumbers',
			name: 'line numbers',
			desc: 'Controls the display of line numbers',
			options: ['on', 'off', 'relative', 'interval'],
			value: lineNumbers
		},
		{
			component: 'input',
			type: 'number',
			label: 'fontSize',
			name: 'font size',
			desc: 'Controls the font size in pixels.',
			value: fontSize
		},
		{
			component: 'select',
			label: 'glyphMargin',
			name: 'glyph margin',
			desc: 'Controls whether the editor should render the vertical glyph margin',
			options: ['true', 'false'],
			value: glyphMargin
		},
		{
			component: 'select',
			label: 'folding',
			name: 'folding',
			desc: 'Controls whether the editor has code folding enabled.',
			options: ['true', 'false'],
			value: folding
		},
		{
			component: 'select',
			label: 'minimap',
			name: 'minimap',
			desc: 'Controls whether the minimap is shown.',
			options: ['true', 'false'],
			value: minimap
		}
	];
	return options;
}
