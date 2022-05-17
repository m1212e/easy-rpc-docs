import { writable } from 'svelte/store';

const localStorageName = 'darkModeDeactivated';
export const darkModeActive = writable(true);

export function setDarkMode() {
	if (localStorage.getItem(localStorageName) == 'true') {
		darkModeActive.set(false);
	}

	darkModeActive.subscribe((isActive) => {
		if (isActive) {
			localStorage.removeItem(localStorageName);
		} else {
			localStorage.setItem(localStorageName, 'true');
		}
	});
}
