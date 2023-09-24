import { setlocalStorage } from './localStorage';
import type { Monaco, Global } from '../types/preferences';
import type { PanelsType } from '../types/layout';
import type { Writable } from 'svelte/store';

export function updateState(state: Writable<Global | Monaco | PanelsType>, keyStorage: string) {
	return (key: string, value: string | number | boolean) => {
		state.update((oldState): Global | Monaco | PanelsType => {
			const newState: Global | Monaco | PanelsType = { ...oldState, [key]: value };

			setlocalStorage(keyStorage, newState);
			return { ...newState };
		});
	};
}
