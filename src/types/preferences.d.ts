export interface Monaco {
	theme: string;
	fontSize: number;
	fontLigatures: boolean;
	lineNumbers: 'on' | 'off' | 'relative' | 'interval';
	automaticLayout: boolean;
	fixedOverflowWidgets: boolean;
	scrollBeyondLastLine: boolean;
	minimap: boolean;
	glyphMargin: boolean;
	folding: boolean;
}
export interface Global {
	nameProject: string;
	fullscreen: boolean;
	accent: string;
	layout: 'vertical' | 'horizontal';
}
