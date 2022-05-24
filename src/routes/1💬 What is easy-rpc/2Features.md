# Features
A short list of the most important easy-rpc features.
## Easy to learn syntax
The easy-rpc syntax is very easy to learn. If you've ever written TypeScript, JavaScript, Java, C#, Go, Rust or really any modern programming language you'll quickly get used to it. The syntax will be explained in detail in the **[syntax section](/easy-rpc-docs/2🖋%EF%B8%8F%20Syntax/)** of the documentation.

## Single source of truth
easy-rpc really shines when configured to share sources across projects. This can be done inside its configuration and is commonly done once when setting up a project. When sharing a single source of truth, mismatches between caller and reciever of a request are easily detected while devoloping or building the project. This is a difference to REST, where commonly the structure of requests is documented manually via OpenAPI or similar tools. With easy-rpc there is no documentation which can get out of sync.

## Language server and VSCode addon
The language server and VSCode addon provide help while developing with easy-rpc. Most important: They update the generated clients while you type your .erpc files. This ensures you never have to run the easy-rpc transpiler manually and provides a smooth developer experience. Just type out your definition and instantly start using it.

## Fast transpiler
The easy-rpc transpiler is written in Go and is optimized for concurrency and performance. It can handle hundreds of .erpc files in huge projects without a significant increase in build time. It's well suited for automated build pipelines and CI/CD workflows.

## Real time communication via WebSockets
easy-rpc uses roles to define entities which can communicate inside your application. Since easy-rpc is meant for Web Applications, it uses WebSockets to allow for endpoints defined inside the browser, callable from a server. All the socket handling is done under the hood. This is how easy WebSockets can be. Read more about Roles and Endpoints in **[their chapter](/easy-rpc-docs/2🎭%20Roles%20and%20Endpoints/)**.

## Remote sources
easy-rpc allows for importing remote sources from source control providers like github or custom hosted websites. This allows for easy usage of APIs provided by others.

# Philosophy
easy-rpc is meant to be simple and easy to use. Its goal is not to provide a solution for every problem that comes with web and web communication, but to make it easy, safe and accessible to write APIs for the web. Its highest priority is to provide a nice and clean developer experience and to make things enjoyable.

# Languages
easy-rpc is currently generating TypeScript code meant for usage with Node.js. Since generating the actual Clients from the .erpc files is a very complex task which takes a lot of time, it might take a while until other languages will be supported. But is is planned to bring easy-rpc to all the languages commonly used for web development.