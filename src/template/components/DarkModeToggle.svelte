<script lang="ts">
	import { darkModeActive } from '../stores/DarkMode';

	import { MoonIcon, SunIcon } from 'svelte-feather-icons';

	function toggle() {
		darkModeActive.update((v) => !v);
	}
</script>

<span on:click={toggle} class="cursor-pointer">
	{#if $darkModeActive}
		<SunIcon class="hover:animate-spin" />
	{:else}
		<MoonIcon class="" />
	{/if}
</span>
