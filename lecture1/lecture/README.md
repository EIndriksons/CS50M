# Lecture 1 - Javascript, ES6

## ES5, ES6, ES2016, ES2017, ES.Next
- ECMAScript vs JavaScript
- Transpilers (Babel, TypeScript, CoffeeScript, etc.)

## Closures
Functions that refer to variables declared by parent function still have access to those variables. This is possible because of JavaScript’s scoping.

## Immediately Invoked Function Expression
A function expression that gets invoked immediately. Creates a closure and doesn’t add to or modify global object.

## First-Class Functions
Functions are treated the same way as any other value:
- Can be assigned to variables, array values, object values
- Can be passed as arguments to other functions
- Can be returned from functions

This allows for the creation of **higher-order functions**:
- Either takes one or more functions as arguments or returns a function
- ```map()```, ```filter()```, ```reduce()```

## Synchronous? Async? Single-Threaded?
JavaScript is a single-threaded, synchronous language. A function that takes a long time to run will cause a page to become unresponsive. JavaScript has functions that act asynchronously

But it can be both synchronous and asynchronous by utilizing:
- Execution stack - Functions invoked by other functions get added to the call stack. When functions complete, they are removed from the stack and the frame below continues executing.
- Browser APIs
- Function queue
- Event loop

**Asynchronous functions:**
- ```setTimeout()```
- ```XMLHttpRequest()```, ```jQuery.ajax()```, ```fetch()```
- Database calls

## Callbacks vs. Promises vs. Async/Await
With **Callbacks** you can control the flow with asynchronous calls. Execute function once asynchronous call returns value so that the program doesn’t have to halt and wait for value. This however can create a "callback hell". [Example here.](/a-callbackAuth.js)

With **Promises** you alleviate "callback hell" by allowing you to write code that assumes a value is returned within a success function. This needs only single error handler. [Example here.](/a-promiseAuth.js)

**Async/Await** introduced in ES2017 allows people to write asyinc code as if it were synchronous. [Example here.](/a-asyncAwaitAuth.js)

## this
Refers to an object that’s set at the creation of a new execution context (function invocation). In the global execution context, refers to global object. If the function is called as a method of an object, ```this``` is bound to the object the method is called on.

Setting ```this``` manually:
- ```bind()```, ```call()```, ```apply()```
- ES6 arrow notation

## Browsers and the DOM
Browsers render HTML to a webpage. HTML defines a tree-like structure. Browsers construct this tree in memory before painting the page. Tree is called the DOM (Document Object Model). The DOM can be modified using JavaScript.


