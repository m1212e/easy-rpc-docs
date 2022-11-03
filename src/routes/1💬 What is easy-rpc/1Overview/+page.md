<script>
    import Code from '$lib/Code.svelte';

</script>

# What is easy-rpc?

easy-rpc is a **r**emote **p**rocedure **c**all framework which focuses on ease of use. It uses a custom declaration language which functions as a single source of truth and enables auto generated clients on both, server and client side. It was designed for usage in web contexts but is not limited to that. It uses HTTP to send and recieve calls.

# What does it look like?

A few easy-rpc endpoints might look like this:
<Code filename="auth.erpc">

```erpc
/**
    This endpoint allows the user to log in with their credentials
*/
Server login(username string, password string) "success" | "wrongPassword" | "emailNotConfirmed"
```

<br>

```erpc
/**
    This endpoint allows the user to create a new account
*/
Server register(username string, password string) "success" | "passwordTooShort" | "emailTaken"
```

</Code>

They can be called like this:

<Code filename="browser.main.ts">

```ts
const server = new Server(/* here goes some config */);

const result = await server.auth.register('my.email.address@example.com', 'MyVerySecurePassword');
/*
    result is strongly typed as "success" | "passwordTooShort" | "emailTaken"
*/
console.log(result);
```

</Code>

The function for handling incoming requestst on the server can be defined like this:

<Code filename="server.main.ts">

```ts
const server = new Server(/* here goes some config */);

server.auth.register = async (username, password) => {
	if (password.length < 6) {
		return 'passwordTooShort';
	}

	if (checkIfEmailIsAlreadyRegistered(username)) {
		return 'emailTaken';
	}

	createUser(username, password);
	return 'success';
};

server.start();
```

</Code>

The request and response are strongly typed and intellisense is provided as you implement your calls. And because both client and server use the same .erpc source files they never get out of sync. Mismatching calls will be detected at build- and not runtime.
