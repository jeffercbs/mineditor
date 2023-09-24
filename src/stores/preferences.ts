import { writable } from 'svelte/store';
import { EDITOR_DEFAULT_SETTINGS, GLOBAL_DEFAULT_SETTINGS } from '../constants';
import type { Global, Monaco } from '../types/preferences';
import { updateState } from './store';

const EDITOR_INITIAL_STATE: Monaco = JSON.parse(
	localStorage.getItem('editor preferences') || JSON.stringify(EDITOR_DEFAULT_SETTINGS)
);

const GLOBAL_INITIAL_STATE: Global = JSON.parse(
	localStorage.getItem('global preferences') || JSON.stringify(GLOBAL_DEFAULT_SETTINGS)
);

export const EditorPreferences = writable(EDITOR_INITIAL_STATE);
export const GlobalPreferences = writable(GLOBAL_INITIAL_STATE);

export const updateSettingsEditor = ({ key, value }: { key: string; value: string }) => {
	const updateStateEditor = updateState(EditorPreferences, 'editor preferences');
	return updateStateEditor(key, ParseValuePipe(value));
};

export const updateSettingsGlobal = ({ key, value }: { key: string; value: string }) => {
	const updateStateGlobal = updateState(GlobalPreferences, 'global preferences');
	return updateStateGlobal(key, ParseValuePipe(value));
};

export function updatePreferences({
	key,
	value,
	p
}: {
	key: string;
	value: string;
	p: 'editor' | 'global';
}) {
	console.log(key, value, p);
	if (p === 'editor') return updateSettingsEditor({ key, value });
	else if (p === 'global') return updateSettingsGlobal({ key, value });
	else throw new Error('Invalid preferences type');
}

function ParseValuePipe(value: string): string | number | boolean {
	const v = value.toLowerCase();
	if (v === 'false') {
		return false;
	} else if (v === 'true') {
		return true;
	} else if (!isNaN(Number(v))) {
		return Number(v);
	} else {
		return value;
	}
}
