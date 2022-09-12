<script>
	import { darkModeActive } from '../template/stores/DarkMode';
	import { GithubIcon, MenuIcon } from 'svelte-feather-icons';
	import TableOfContent from '../template/components/TableOfContent.svelte';
	import DarkModeToggle from '../template/components/DarkModeToggle.svelte';
	import Navbar from '../template/components/Navbar/Navbar.svelte';
	import { fly } from 'svelte/transition';

	let showNavbar = true;
</script>

<div class:dark={$darkModeActive} class="w-screen">
	<div
		class="flex flex-col bg-white dark:bg-gray-900 text-black dark:text-gray-300 duration-200 h-full w-full"
	>
		<!-- heading -->
		<span class="p-3 flex justify-between items-center">
			<span class="flex items-center">
				<button class="block md:hidden" on:click={() => (showNavbar = !showNavbar)}>
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
		<div class="flex h-full">
			{#if showNavbar}
				<nav class="w-full" transition:fly={{ x: -100 }}>
					<Navbar />
				</nav>
			{/if}
			<!-- <main class="w-8/12 md:w-6/12 pb-20"> -->
			<main class="grow pb-20">
				<slot />
			</main>
			<section class="w-full">
				<TableOfContent />
			</section>
		</div>
	</div>
</div>
