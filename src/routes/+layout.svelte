<script lang="ts">
	import { darkModeActive } from '../template/stores/DarkMode';
	import { GithubIcon, MenuIcon } from 'svelte-feather-icons';
	import TableOfContent from '../template/components/TableOfContent.svelte';
	import DarkModeToggle from '../template/components/DarkModeToggle.svelte';
	import Navbar from '../template/components/Navbar/Navbar.svelte';
	import { navbarVisible } from '../template/components/Navbar/state';
	import { fly } from 'svelte/transition';

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class:dark={$darkModeActive} class="w-screen h-screen">
	<div
		class="flex flex-col bg-white dark:bg-gray-900 text-black dark:text-gray-300 duration-200 w-full h-full"
	>
		<!-- heading -->
		<span class="p-3 flex justify-between items-center head">
			<span class="flex items-center">
				<button class="block md:hidden" on:click={() => ($navbarVisible = !$navbarVisible)}>
					<MenuIcon />
				</button>
				<a class="ml-4" href="/easy-rpc-docs/"> <span class="text-3xl font-bold">easy-rpc</span></a>
			</span>
			<span class="flex items-center space-x-4">
				<a href="https://github.com/m1212e/easy-rpc"><GithubIcon /></a>
				<DarkModeToggle />
				<!-- Search disabled until sveltekit provides a way to get component routes at compile time -->
				<!-- <Search /> -->
			</span>
		</span>

		<!-- content -->
		<div class="flex content">
			{#if $navbarVisible || innerWidth > 768}
				<nav class="navbarWidth" transition:fly={{ x: -100, duration: 400 }}>
					<Navbar />
				</nav>
			{/if}
			<main class="grow overflow-scroll mb-5">
				<slot />
			</main>
			<section class="hidden md:block toc">
				<TableOfContent />
			</section>
		</div>
	</div>
</div>

<style>
	.head {
		height: 6%;
	}
	.content {
		height: 94%;
	}

	.navbarWidth {
		width: 180rem;
	}

	.toc {
		width: 50rem;
	}

	@media (min-width: 768px) {
		.navbarWidth {
			width: 70rem;
		}
	}
</style>
