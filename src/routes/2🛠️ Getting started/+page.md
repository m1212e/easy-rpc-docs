<script>
    import Code from '$lib/Code.svelte';
</script>

# Getting started with easy-rpc

There are two ways to get started with easy-rpc. The template is a little easier, but doesn't teach you a lot about the file structure, configuration and setup. The step by step guide to create the project manually takes slightly more time but explains what needs to be where and how easy-rpc can be configured. For first time users it is recommended to create the project manually.

## Template

Clone it from [here (https://github.com/m1212e/easy-rpc-project-template)](https://github.com/m1212e/easy-rpc-project-template).

The README.md files in the template explain the setup and what can be found where.

## Creating the project manually

First, choose a directory you want to create the project in. In this example we will create the directory `/webapp`.
  
Now think about which roles you need for this project. If you are not familiar with the concept of easy-rpc roles, you can read about them **[here](/easy-rpc-docs/3🎭%20Roles%20and%20Endpoints/)**. The question you need to ask yourself is: what entities exist in this project and what is their purpose. Depending on your scenario you can choose multiple browser and http-server roles. In our case we want a simple webapp setup consisting of one kind of server and one kind of client. We'll call them "Backend" and "Frontend". We create directories accordingly: `/webapp/frontend`, `/webapp/backend`.
  
After creating directories for our roles, we need a directory to store our source files which contain the information about the actual endpoints which are offered by each role. Both, frontend and backend can access the sources and generate the code to call the endpoints accordingly. In this example we will use the `/webapp/sources` directory for that.

Our current structure looks like this:

```
webapp
├── frontend
├── backend
└── sources
```

### Sources

Adding the sources and configuring them is done quickly by creating two files: `/webapp/sources/api.erpc` and `/webapp/sources/roles.json`

The `roles.json` defines, which roles exist for this source directory. We tell easy-rpc that there are two roles and what type these roles have. See the **[syntax section](/easy-rpc-docs/4🖋%EF%B8%8F%20Syntax/)** for more information on what configuration options are possible and how the `roles.json` should be structured.

<Code filename="/webapp/sources/roles.json">

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

The `api.erpc` file defines two endpoints, one on each role. If you are not familiar with easy-rpc syntax, see the **[syntax section](/easy-rpc-docs/4🖋%EF%B8%8F%20Syntax/)**

<Code filename="/webapp/sources/api.erpc">

```erpc
Backend ping(msg string) string
Frontend ping(msg string) string
```

</Code>

The sources directory is now set up. We configured two roles and gave them one endpoint each. The file structure now looks like this

```
webapp
├── frontend
├── backend
└── sources
    ├── api.erpc
    └── roles.json
```

### Backend
As configured in the sources directory, out backend will function as an http-server. To do this we need an npm package. Install it inside `/webapp/backend` with

<Code>

```bash
npm i @easy-rpc/node
```

</Code>

This should create a `package.json` and `package-lock.json` file where you can see the added dependency. Internally, the server code is written in Rust. The installed package is an adapter to make the Rust code useable from JavaScript. The used native `.node` file will be downloaded and stored into your `node_modules` directory. Some bundlers cannot handle these kind of packages by default, keep this in mind when you use a bundler tool.
  
To make use of the generated TypeScript code, we need a way to run TypeScript. `ts-node` is a package which allows us to do this without much configuration. But you can use any other tool you want. The [template](#Template) uses `esbuild` to process and run TypeScript.
  
Install `ts-node` it with

<Code>

```bash
npm i ts-node
```

</Code>

For convenience you can add a script inside the `package.json` which will start a `main.ts` file which we still have to create. The whole `package.json` now looks like this

<Code filename="package.json">

```json
{
  "scripts": {
    "start": "npx ts-node main.ts"
  },
  "dependencies": {
    "ts-node": "^10.9.1"
  }
}

```

</Code>