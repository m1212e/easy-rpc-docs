
import { setDarkMode } from '../template/stores/DarkMode';
import { browser } from '$app/environment';
import '../app.css';

export async function load() {
	if (browser) {
		setDarkMode();
	}
	return {};
}
