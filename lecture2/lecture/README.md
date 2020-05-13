# Lecture 2 - React, Props, State

## Classes
Syntax introduced in ES6. Simplifies the defining of complex objects with their own prototypes.

**Classes vs. Instances**:
- Class - a blueprint or prototype from which objects are created
- Instance - a single and unique unit of a class

**Methods vs. Static Methods vs. Properties**:
- Method - Function that can be invoked on any of the instances
- Static Method - A Method that does not care about the particular instance of the class it is invoked on. For example ```Date.now()``` - we just get the current date and no specific instance of a class (a variable) is invoked upon.
- Properties - Like methods but are not function but just values

```new```, ```constructor```, ```extends```, ```super```:
- ```new``` - give me an instance of this particular class
- ```constructor``` - like a function that you define inside a class to construct an instance of this class when you invoke ```new```
- ```extends``` - extends another "base" class
- ```super``` - used to refer to the original base class when we ```extends```

# React
Allows us to write declarative views that “react” to changes in data. Allows us to abstract complex problems into smaller components. Allows us to write simple code that is still performant.

## Imperative vs Declarative
**How vs. What**
- **Imperative programming** outlines a series of steps to get to what you want
- **Declarative programming** just declares what you want

## React is Declarative
React allows us to write what we want, and the library will take care of the DOM manipulation

## React is Easily Componentized
Breaking a complex problem into discrete components. You can reuse these components (increases consistency and iteration speed). React’s declarative nature makes it easy to customize
components.

## React is Performant
We write what we want and React will do the hard work.

## Reconciliation
**Process by which React syncs changes in app state to the DOM:**
1. React utilizes virtual DOM which is a "copy" of the actual DOM.
2. On change, React then differentiates the virtual DOM against the actual DOM
3. React then makes the changes only where needed

## Writing React
- **JSX**
    * XML-like syntax extension of JavaScript
    * Transpiles to JavaScript
    * Lowercase tags are treated as HTML/SVG tags, uppercase are treated as custom components
- **Components are just functions**
    * Returns a node (something React can render, e.g. a ```<div />```)
    * Receives an object of the properties that are passed to the element

## Props
Passed as an object to a component and used to compute the returned node. Changes in these props will cause a recomputation of the returned node (“render”). Unlike in HTML, these can be any JS value.

## State
Adds internally-managed configuration for a component. ```this.state``` is a class property on the component instance. Can only be updated by invoking ```this.setState()```:
- Implemented in ```React.Component```
- ```setState()``` calls are batched and run asynchronously
- Pass an object to be merged, or a function of previous state

Changes in state also cause re-renders