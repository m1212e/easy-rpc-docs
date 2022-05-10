<script context="module">
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Search from '../components/Search/Search.svelte';
	import DarkModeToggle from '../components/DarkModeToggle.svelte';
	import { darkModeActive, setDarkMode } from '../stores/DarkMode';
	import { GithubIcon } from 'svelte-feather-icons';
	import { browser } from '$app/env';
	import '../app.css';

	export async function load() {
		if (browser) {
			setDarkMode();
		}
		return {};
	}
</script>

<div class:dark={$darkModeActive}>
	<div
		class="w-screen h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-300 duration-200"
	>
		<span class="p-3 flex justify-between items-center">
			<span class="text-3xl font-bold"> easy-rpc </span>
			<span class="flex items-center space-x-4">
				<a href="https://github.com/m1212e/easy-rpc"><GithubIcon /></a>
				<DarkModeToggle />
				<Search />
			</span>
		</span>
		<span class="flex w-screen">
			<nav class="w-1/5">
				<Navbar />
			</nav>
			<main class="w-4/5 pl-4">
				<slot />
			</main>
		</span>
	</div>
</div>
