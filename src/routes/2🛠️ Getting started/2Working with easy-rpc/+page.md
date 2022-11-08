<script>
    import Code from '$lib/Code.svelte';
</script>

# Working with easy-rpc

After you set up an easy-rpc project or cloned a template/existing project it is very easy to get started working with easy-rpc.
If you followed the manual setup from the previous step you probably already have the Vscode extension installed or downloaded the transpiler binary. If this is not the case, make sure to **[setup the transpiler](/easy-rpc-docs/2🛠%EF%B8%8F%20Getting%20started/1Setup#vscode-extension)** first.

## .erpc

The .erpc directory is where the actual magic happens. Whenever the running transpiler detects changes to your source files, it will generate the code required and put it into the `.erpc/generated` directory. You can import the generated clients from this directory, make calls on them or register handlers for incoming calls. The following examples refer to the manual setup from the previous section. If something is unclear, make sure to read it.

## Backend

While setting up our project we configured two roles: "Frontend" and "Backend". The first is a browser which has one endpoint, the second is an http-server which also has one endpoint. First we want to make sure that we can answer incoming requests on the backend. As you might remember, we declared a ping endpoint on the backend in our `/webapp/sources/api.erpc`, which takes a string parameter and returns a string: `Backend ping(msg string) string`. Now lets implement the handler for this endpoint.

<Code filename="/webapp/backend/main.ts">

```ts
/*
    first, we import the Backend class from the generated directory
*/
import Backend from './.erpc/generated/Backend';

/*
    Now we instantiate a server. The parameter object allows us to configure the server. Depending on the role the configuration options might differ.
    As a second parameter we could pass callback handlers, but this is optional. We will set the handlers later. Passing them as a parameter on creation has an advantage tough:
    TypeScript will let you know if a handler is not implemented since the types wont match. If this is important to you, you can decide to pass the handlers on creation.
*/
const backend = new Backend(
	{
		allowedCorsOrigins: ['*'],
		port: 1234
	} /*, { handlers could go here }*/
);

/*
  After we created a server object, we now want to register a handler to process incoming requests. Since we defined the endpoint in api.erpc it will live at the .api namespace on out backend object.
*/
backend.api.ping = async (msg) => {
	console.log('incoming ping request: ' + msg);
	return 'PONG';
};

/*
  After registering all out handlers, we can start the server. In many cases we need an async wrapper for top-level awaits.
*/
backend.run();
```

</Code>

If you run the app with the start script you should now see a console message which confirms the server is listening on the configured port.

## Frontend

Now we want to call the backend endpoint from the frontend.

<Code filename="/webapp/frontend/src/main.ts">

```ts
/*
    import the backend class
*/
import Backend from '../.erpc/generated/Backend';

/*
  Now we instantiate the target. In out case it lives on the local machine and listens to the 1234 port, which we configured earlier in the backend code.
*/
const backend = new Backend({
	address: 'http://localhost',
	port: 1234
});

/*
    After creating the target we can send requests to it. Just as we declared the handler on the backend object, now we call it on the backend object and await the response.
*/
console.log(await backend.api.ping('PING'));
```

</Code>

After starting the webapp and opening the browser, take a look at the console to see the reponse from the backend logged.

## Frontend endpoints

You might now wonder how you can use the second endpoint which we defined in the sources, the one on the frontend: `Frontend ping(msg string) string`. It too has one string parameter and a string return. But this time, the frontend is the role offering this endpoint.

Calling this endpoint is very similar to one on the backend. Internally, easy-rpc uses WebSockets to pass requests from the backend to the frontend.

Again we will first look at the backend.

<Code filename="/webapp/backend/main.ts">

```ts
import Backend from './.erpc/generated/Backend';
const backend = new Backend({
	allowedCorsOrigins: ['*'],
	port: 1234
});

backend.api.ping = async (msg) => {
	console.log('incoming ping request: ' + msg);
	return 'PONG';
};

/*
  We can register a callback to run whenever a client connects to our server. The callback gets the browser as a parameter, so you can perform calls on the target.
*/
backend.onConnection(async (target) => {
	console.log('Frontend connected!');
	// this calls the ping method on the frontend and awaits the result
	console.log(await target.api.ping('PING'));
});

backend.run();
```

</Code>

On the frontend, we obviously need to implement handlers for the offered endpoints.

<Code filename="/webapp/frontend/src/main.ts">

```ts
import Backend from '../.erpc/generated/Backend';
/*
  To do this, we need to import the frontend class
*/
import Frontend from '../.erpc/generated/Frontend';

const backend = new Backend({
	address: 'http://localhost',
	port: 1234
});

console.log(await backend.api.ping('PING'));

/*
  Creating a frontend instance to register the handlers on
*/
const frontend = new Frontend({});
frontend.api.ping = async (msg) => {
	console.log('incoming ping request: ' + msg);
	return 'PONG';
};

server.start();
```

</Code>

Now both roles can send requests to each other.