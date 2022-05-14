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

<div class:dark={$darkModeActive} class="h-screen">
	<div
		class="bg-white dark:bg-gray-900 text-black dark:text-gray-300 duration-200 grid-container h-screen"
	>
		<span class="p-3 flex justify-between items-center head">
			<span class="text-3xl font-bold"> easy-rpc </span>
			<span class="flex items-center space-x-4">
				<a href="https://github.com/m1212e/easy-rpc"><GithubIcon /></a>
				<DarkModeToggle />
				<Search />
			</span>
		</span>
		<nav class="nav">
			<Navbar />
		</nav>
		<main class="page overflow-y-auto h-full">
			<slot />
		</main>
		<section class="toc">
			TABLE OF CONTENT TABLE OF CONTENT TABLE OF CONTENT TABLE OF CONTENT TABLE OF CONTENT
		</section>
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 0.6fr 1.8fr 0.6fr;
		grid-template-rows: 0.2fr 1.8fr;
		grid-auto-columns: 1fr;
		gap: 0em 1em;
		grid-auto-flow: row;
		grid-template-areas:
			'head head head'
			'nav page toc';
	}

	.head {
		grid-area: head;
	}

	.nav {
		grid-area: nav;
	}

	.page {
		grid-area: page;
	}

	.toc {
		grid-area: toc;
	}

	.overflow-y-auto::-webkit-scrollbar {
		display: none;
	}
	.overflow-y-auto {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
