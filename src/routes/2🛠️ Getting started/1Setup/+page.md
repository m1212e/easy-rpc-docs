<script>
    import Code from '$lib/Code.svelte';
</script>

# Setting up easy-rpc

There are two ways to get started with easy-rpc. The template is a little easier, but doesn't teach you a lot about the file structure, configuration and setup. The step by step guide to create the project manually takes slightly more time but explains what needs to be where and how easy-rpc can be configured. For first time users it is recommended to create the project manually.

## Template

Clone it from **[here (https://github.com/m1212e/easy-rpc-project-template)](https://github.com/m1212e/easy-rpc-project-template)**.

The README.md files in the template explain the setup and what can be found where.

## Creating the project manually

First, choose a directory you want to create the project in. In this example we will create the directory `/webapp`.
  
Now think about which roles you need for this project. If you are not familiar with the concept of easy-rpc roles, you can read about them **[here](/easy-rpc-docs/3🎭%20Roles%20and%20Endpoints/)**. The question you need to ask yourself is: what entities exist in this project and what is their purpose. Depending on your scenario you can choose multiple browser and http-server roles. In our case we want a simple webapp setup consisting of one kind of server and one kind of client. We'll call them "Backend" and "Frontend". We create directories accordingly: `/webapp/frontend`, `/webapp/backend`.
  
After creating directories for our roles, we need a directory to store our source files which contain the information about the actual endpoints which are offered by each role. Both, frontend and backend can access the sources and generate the code to call the endpoints accordingly. In this example we will use the `/webapp/sources` directory for that.

Our current structure looks like this

<Code>

```
webapp
├── frontend
├── backend
└── sources
```

</Code>

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

The `api.erpc` file defines two endpoints, one on each role. If you are not familiar with easy-rpc syntax, see the **[syntax section](/easy-rpc-docs/4🖋%EF%B8%8F%20Syntax/)**. Ofcourse you can add more `.erpc` files or more endpoints to the `api.erpc` file to suit the needs of you app.

<Code filename="/webapp/sources/api.erpc">

```erpc
Backend ping(msg string) string
Frontend ping(msg string) string
```

</Code>

The sources directory is now set up. We configured two roles and gave them one endpoint each. The file structure now looks like this

<Code>

```
webapp
├── frontend
│
├── backend
│
└── sources
    ├── api.erpc
    └── roles.json
```

</Code>

### Backend
As configured in the sources directory, our backend will function as an http-server. To do this we need an npm package. Install it inside `/webapp/backend` with

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

<Code filename="`/webapp/backend/package.json">

```json
{
  "scripts": {
    "start": "npx ts-node main.ts"
  },
  "dependencies": {
    "@easy-rpc/node": "latest",
    "ts-node": "latest"
  }
}

```

</Code>

Now we create the `/webapp/backend/erpc.json`. This file tells easy-rpc that this directory is meant to be an easy-rpc role implementation. The file looks like this

<Code filename="/webapp/backend/erpc.json">

```json
{
    "sources": ["../sources"],
    "role": "Backend"
}

```

</Code>

In the sources array we can configure all source directories which should be used. In our case there is only one. The role parameter tells easy-rpc which role should be used for generation. It must match one of those configured in `/webapp/sources/roles.json`.
  
Finally, we create the `/webapp/backend/main.ts` and leave it empty for now.
  
The directory structure should now look like this

<Code>

```
webapp
├── frontend
│
├── backend
│   ├── node_modules
│   │   └── ...
│   ├── erpc.json
│   ├── main.ts
│   ├── package-lock.json
│   └── package.json
│
└── sources
    ├── api.erpc
    └── roles.json
```

</Code>

### Frontend
It's recommended to use a bundler tool which optimizes your project when you work on browser apps. In this example [vite](https://vitejs.dev/) is used, but you can use other frameworks or tools you prefer. Set up vite inside `/webapp/frontend` with
<Code>

```bash
npm create vite@latest . -- --template vanilla-ts
```

</Code>

You can just hit enter or customize the package name to your liking when vite asks for it after entering the create command.
  
The frontend was configured to be a browser. Therefore we need the `@easy-rpc/browser` package to run it. Import it with

<Code>

```bash
npm i @easy-rpc/browser
```

</Code>

Vite did create a few directories which will become handy when developing your webapp. Take a look at the `/webapp/frontend/src` directory, you will find a few files where we later on will put our code into. A small demo app is automatically created, feel free to delete it.
  
The directory structure should now look like this

<Code>

```
webapp
├── frontend
│   ├── node_modules
│   │   └── ...
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── counter.ts
│   │   ├── main.ts
│   │   ├── style.css
│   │   ├── typescript.svg
│   │   └── vite-env.d.ts
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── tsconfig.json
│
├── backend
│   ├── node_modules
│   │   └── ...
│   ├── erpc.json
│   ├── main.ts
│   ├── package-lock.json
│   └── package.json
│
└── sources
    ├── api.erpc
    └── roles.json
```

</Code>

### Vscode extension
Finally, we just need to install the transpiler. You can either find the binaries at **[https://github.com/m1212e/easy-rpc/releases](https://github.com/m1212e/easy-rpc/releases)**(instructions for running the binary can be found in the **[easy-rpc repository](https://github.com/m1212e/easy-rpc)**) or you can use the **[Vscode extension](https://marketplace.visualstudio.com/items?itemName=easy-rpc.easy-rpc)**. Just install it and you're good to go. 