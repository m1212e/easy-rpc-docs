<script>
    import Code from '$lib/Code.svelte';
</script>

# Roles and endpoints
The concept of roles and their endpoints is what easy-rpc resolves around. It tries to look at all components of your app and interconnects them. Every entity of your project has a role. An example for this might be a small chat app. Imagine we need to following parts in our app:

**User management server**
  
Manages accounts and auth, creates sessions

**Message server**
  
Allows users to send and recieve messages

**Client**
  
Uses the app to chat, needs to be notified of new messages
  
  
In an easy-rpc setup, each of these entities would have its own role. A `roles.json` for this setup could look like this:

<Code filename="roles.json">

```json
[
	{
		"name": "Client",
		"types": ["browser"]
	},
	{
		"name": "UserManagementServer",
		"types": ["http-server"]
	},
	{
		"name": "MessageServer",
		"types": ["http-server"]
	}
]
```

</Code>

On these three roles we can now declare some endpoints. Endpoints always belong to a role and can be called by other roles.
  
> If you are unsure about where to put the files easy-rpc uses, take a look at the **[setup guide in the getting started section](/easy-rpc-docs/2🛠️%20Getting%20started/1Setup)**. If you need more info about the available configuration options for the `roles.json`, see **[syntax section](/easy-rpc-docs/5%E2%9A%99%EF%B8%8F%20Configuration/#rolesjson)**.

We create two `.erpc` files to split up the endpoints by their category.
  
First, the user management:

<Code filename="users.erpc">

```erpc
UserManagementServer login(username string, password string) "Ok" | "WrongPassword"
UserManagementServer register(username string, password string) "Ok" | "UsernameAlreadyTaken"
```

</Code>

Second, the messages:

<Code filename="messages.erpc">

```erpc
// can be called to send a new message to all other participants
MessageServer sendMessage(message string, timestamp int32)

// can be called to send a message to a specific client
Client showNewMessage(message string, timestamp int32)
```

</Code>

And thats it. easy-rpc will generate the clients according to your source files and allow the roles in your project to connect to each other via the endpoints you declared.