<script lang="ts">
	import { darkModeActive } from '../template/stores/DarkMode';
	import { GithubIcon, MenuIcon } from 'svelte-feather-icons';
	import TableOfContent from '../template/components/TableOfContent.svelte';
	import DarkModeToggle from '../template/components/DarkModeToggle.svelte';
	import Navbar from '../template/components/Navbar/Navbar.svelte';
	import { navbarVisible } from '../template/components/Navbar/state';
	import { horizontaSlide } from '../template/transitions/slide';

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<!-- reacting to darkmode changes -->
<div class:dark={$darkModeActive}>
	<!-- setting some style defaults -->
	<div
		class="flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-gray-300 duration-200 w-full h-full"
	>
		<!-- heading -->
		<span
			class="p-3 flex justify-between items-center h-12 fixed w-full bg-white dark:bg-gray-900 z-10"
		>
			<span class="flex items-center">
				<button class="block md:hidden" on:click={() => ($navbarVisible = !$navbarVisible)}>
					<MenuIcon />
				</button>
				<a class="ml-4 text-2xl font-bold pb-1" href="/easy-rpc-docs/"> easy-rpc</a>
			</span>
			<span class="flex items-center space-x-4">
				<a href="https://github.com/m1212e/easy-rpc"><GithubIcon /></a>
				<DarkModeToggle />
				<!-- Search disabled until sveltekit provides a way to get component routes at compile time -->
				<!-- <Search /> -->
			</span>
		</span>

		<!-- content -->
		<div class="flex relative">
			<nav
				style={$navbarVisible || innerWidth > 1200
					? 'left: 0;'
					: 'left: -30rem;'}
				class="fixed top-12  duration-300 nav-width z-10 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-2xl md:shadow-none"
				transition:horizontaSlide
			>
				<Navbar />
			</nav>
			<main class="p-5 content-width min-h-screen">
				<slot />
			</main>
			<section class="hidden md:block fixed w-56 right-0 top-12">
				<TableOfContent />
			</section>
		</div>
	</div>
</div>

<style>
	.nav-width {
		width: 20vw;
		max-width: 20rem;
	}

	.content-width {
		width: 45rem;
	}

	@media (max-width: 1200px) {
		.nav-width {
			width: 30rem;
			max-width: 90vw;
		}

		.content-width {
			width: 95vw;
		}
	}
</style>
