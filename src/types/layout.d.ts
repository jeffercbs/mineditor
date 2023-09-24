import type { Langs } from './code';

export interface PanelsType {
	panel: Langs | 'preview';
	content: string;
	view: boolean;
}
