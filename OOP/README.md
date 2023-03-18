## Objects, Prototype chain and Inheritance.

According to the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) docs:

> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime.

### `__proto__`, `[[prototype]]`,  `getPrototypeOf()` and `function.prototype`
`obj.__proto__` is same as `obj.[[prototype]]` which also corresponds to `Object.getPrototype(obj)`. `func.prototype` specifies all the `[[Prototype]]` to be assigned to all instances of objects created by the given function when used as a constructor.

> JavaScript objects are dynamic "bags" of properties (referred to as own properties).

Crazy definition but very intuitive definition. :fire: