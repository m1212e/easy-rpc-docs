<script>
    import Code from '$lib/Code.svelte';

</script>

# What is easy-rpc?

easy-rpc is a **r**emote **p**rocedure **c**all framework which focuses on ease of use. It uses a custom declaration language which allows for a single source of truth and auto generated clients on both, server and client side. It was designed for usage in web contexts but is not limited to that. It uses HTTP to send and recieve calls.
<br>
It aims to be an addition to or a replacement of other web communication protocols like REST or gRPC.

## What does it look like?
A few defined easy-rpc endpoints might look like this:
<Code filename="source.erpc">
// A simple notification <br>
server startTimer()<br>
</Code>
