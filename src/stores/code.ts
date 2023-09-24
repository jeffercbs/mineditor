import { writable } from 'svelte/store';
import { Base64 } from 'js-base64';
import { setlocalStorage } from './localStorage';
import type { Langs } from '../types/code';

const DEFAULT_CODE = JSON.parse(
	localStorage.getItem('code') ||
		JSON.stringify({
			html: '<h1>hello world</h1>',
			css: 'h1 { color: red}',
			javascript: 'console.log("hello world")'
		})
);

export const savedCode = writable<{ html: string; css: string; javascript: string }>(DEFAULT_CODE);

export function updateSavedCode(lang: Langs, content: string) {
	const code = Base64.encode(content);
	savedCode.update((c) => {
		const newCode = { ...c, [lang]: code };
		setlocalStorage('code', newCode);
		return newCode;
	});
}

export const decode = (code: string) => Base64.decode(code);

export function createHtml({
	html,
	css,
	javascript
}: {
	html: string;
	css: string;
	javascript: string;
}) {
	return `
        <html>
            <head>
                <style>
                    ${decode(css)}
                </style>
            </head>
            <body>
                ${decode(html)}
                <script type="module">
                    eval(${decode(javascript)})
                </script>
            </body>
        </html>
    `;
}
