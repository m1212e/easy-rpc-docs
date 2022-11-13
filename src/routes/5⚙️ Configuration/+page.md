<script>
    import Code from '$lib/Code.svelte';
</script>

# Configuration
To configure easy-rpc you can adjust two files. The `erpc.json` inside a project directory or a `roles.json` inside a source directory.

> If you are unfamiliar with the project structure of an easy-rpc setup, see the **[setup guide in the getting started section](/easy-rpc-docs/2🛠️%20Getting%20started/1Setup)**

## erpc.json
The `erpc.json` tells the transpiler that the current directory is a project directory for a role. It defines the used role with a `"role"` property. This string must match one of the roles configured in the used sources. The `"sources"` property is an array of source directories which should be used. The path can be relative to the `erpc.json` or absolute.

<Code filename="erpc.json">

```json
{
    "sources": ["../sources"],
    "role": "Backend"
}

```

</Code>

## roles.json
The `roles.json` lives inside a source directory and specifies which roles are available to declare endpoints on. 

<Code filename="roles.json">

```json
[
	{
		"name": "Frontend",
		"types": ["browser"]
	},
	{
		"name": "Backend",
		"types": ["http-server"]
	}
]

```

</Code>