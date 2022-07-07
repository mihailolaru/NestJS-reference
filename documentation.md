# NestJs and project documentation

GENERAL
-> List the available nest js schemas generator available commands:
$ nest g --help

CONTROLLERS
"Controllers are responsible for handling incoming requests and returning responses to the client"
->

PROVIDERS
"The basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other"
-> Can be injected intro constructors  if decorated as an @Injectable.
-> Not all providers are services.
-> Is a common programming concept not related specifically to NestJS.
-> Is a singleton when wrapped with @Injectable(). Same instance is shared across the application acting a single source of truth.
-> The main source of business logic. For example can be called inside a controller to validate data, create an item and return a response etc.
 

MODULES
"Used to organize the application structure"
-> Generate a module from the cli:
$ nest g module module-name
If you do not want the test s generated add --no-spec flag.

MIDDLEWARE
"Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle"
->

EXCEPTION FILTERS
"Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response"
->

PIPES
"Pipes have two typical use cases:
-transformation: transform input data to the desired form (e.g., from string to integer)
-validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect"

GUARDS
"Guards have a single responsibility. They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time"

INTERCEPTORS
"Interceptors have a set of useful capabilities which are inspired by the Aspect Oriented Programming (AOP) technique. They make it possible to:
-bind extra logic before / after method execution
-transform the result returned from a function
-transform the exception thrown from a function
-extend the basic function behavior
-completely override a function depending on specific conditions (e.g., for caching purposes)"

DTO
-> Common concept not related to NestJS
-> Has no behavior except for storage, retrieval, serialization and deserialization of its own data.
-> Can be used for data validation.
-> DTO is not a model definition. It defines the shape of data for a specific case, like creating a new task.
-> Can be defined using interface ar a class.
