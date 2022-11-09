<script>
    import Code from '$lib/Code.svelte';
</script>
# easy-rpc Syntax
easy-rpc uses a custom declaration language to specify the endpoints. In this section this language will be explained.

## Endpoints
Endpoints allways consist of at least a role and a name. This is the absolute minumum for a valid endpoint:

<Code filename="example.erpc">

```erpc
Backend ping()
```

</Code>

Endpoints can have parameters and return types. These can be any valid [easy-rpc type](#Types).


<Code filename="example.erpc">

```erpc
// Endpoint with a parameter
Backend logToServerConsole(message string)

// Endpoint with a return type
Backend getCurrentTime() int32

// Endpoint with a signle parameter and return type
Backend echo(echoMessage string) string

// Endpoint with multiple parameters and a return type
Backend sendMessageTo(message string, userId int) string
```

</Code>

## Types
There are three kinds of types in easy-rpc.

### Primitive types
As in many other languages, easy-rpc knows a fixed set of primitive types.

| Identifier | Description |
| ----------- | ----------- |
| boolean | A value which can be `true` or `false` |
| int   | A whole number (16bit) |
| int8   | A whole number (8bit) |
| int16   | A whole number (16bit) |
| int32   | A whole number (32bit) |
| int64   | A whole number (64bit) |
| float   | A floating point number (32bit) |
| float32   | A floating point number (32bit) |
| float64   | A floating point number (64bit) |
| string   | A string of characters |

### Enum types
An enum value is a value which is one of a fixed set. Values are separated by a `|`.

<Code filename="example.erpc">

```erpc
Backend example(enumParameter "example" | 420 | true) "success" | "error"
```

</Code>

Enums can only contain primitive literals. The value must explicitly be stated. `string` or `int` are not allowed, `"test"` or `69` are.

### Custom types
Custom types are user defined types consisting of other user defined types or primitive types.

<Code filename="example.erpc">

```erpc
type ExampleType {
    field1 string
    field2 "ex" | "ample"
}

type AnotherType {
    field1 ExampleType
}
```

</Code>

### Arrays
Primitive or user defined types can be arrays. Arrays are marked via a `[]` behind the type. Arrays can have a fixed size.

<Code filename="example.erpc">

```erpc
type Player {
    name string
    achievements string[]
    levelsCompleted boolean[99]
}
```

</Code>

### Comments
easy-rpc allows for two kinds of comments: Disposeable and documentational. Disposeable comments are ignored while transpiling. Documentational comments are transferred into the generated types and methods.

<Code filename="example.erpc">

```erpc
/**
    This represents a player of the game
*/
type Player {
    /**
        This comment will be documentational
    */
    name string
    /*
        This one will be ignored
    */
    achievements string[]
    // I'm going to be ignored
    levelsCompleted boolean[99]
    # Me too
}

/**
    This returns the player by their name
*/
Backend getPlayer(name string) Player

```

</Code>

configuration structure (json files)