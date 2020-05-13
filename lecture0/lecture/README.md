# Lecture 0 - Overview, Javascript

## JavaScript is Interpreted
Each browser has its own JavaScript engine, which either interprets the code, or uses some sort of lazy compilation.
They each implement the ECMAScript standard, but may differ for anything not defined by the standard.
- V8: Chrome and Node.js
- SpiderMonkey: Firefox
- JavaScriptCore: Safar
- Chakra: Microsoft Edge/IE

## Types
- **Dynamic typing**
- Primitive types (no methods, immutable)
    * ```undefined```
    * ```null```
    * ```boolean```
    * ```number```
    * ```string```
    * ```(symbol)```
- ```Objects```

## Typecasting, Coercion
**Explicit vs. Implicit coercion:**
- ```const x = 42;```
- ```const explicit = String(x); // explicit === "42"```
- ```const implicit = x + ""; // implicit === "42"```

```==``` vs. ```===``` [(Equality Table)](https://github.com/dorey/JavaScript-Equality-Table)
- ```==``` coerces the types
- ```===``` requires equivalent types



**Falsy values:**
- ```undefined```
- ```null```
- ```false```
- ```+0```, ```-0```, ```Nan```
- ```""```

**Truthy values:**
- ```{}```
- ```[]```
- *Everything else*

## Primitives vs. Objects
- Primitives are immutable.
- Objects are mutable and stored by reference.

Therefore a large importance is Passing by reference vs. Passing by value.

## Prototypal Inheritance
Non-primitive types have a few properties/Methods associated with them:
- ```Array.prototype.push()```
- ```String.prototype.toUpperCase()```

Each object stores a reference to its prototype. Properties/Methods defined most tightly to the instance have priority.

Most primitive types have **object wrappers**:
- ```String()```
- ```Number()```
- ```Boolean()```
- ```Object()```
- ```(Symbol())```

JS will automatically "box" (wrap) primitive values so you have access to methods
- ```42.toString() // Errors```
- ```const x = 42;```
- ```x.toString() // "42"```
- ```x.__proto__ // [Number: 0]```
- ```x instanceof Number // false```

## Scope
**Variable lifetime:**
- Lexical scoping (```var```): from when they’re declared until when their function ends.
- Block scoping (```const```, ```let```): until the next ```}``` is reached

Function definitions are hoisted, but not lexically-scoped initializations

## JS Engine
Before executing the code, the engine reads the entire file and will throw a syntax error if one is found.
1. Any function definitions will be saved in memory
2. Variable initializations will not be run, but lexically-scoped variable names will be declared

## The Global Object
All variables and functions are actually parameters and methods on the global object.
- Browser global object is the ```window``` object.
- Node.js global object is the ```global``` object