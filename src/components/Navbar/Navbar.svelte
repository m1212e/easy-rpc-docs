<script>
	import Entry from './Entry.svelte';
	console.log($$slots)
</script>

<Entry href="/" title="Somethign">
	<Entry href="/something" title="Somethign">
		
	</Entry>
</Entry>
