# JavaScript functions

## What are functions

Group of statements that are grouped together.

* All functions are defined with `function` keyword
* Two way of declaring Functions
    * FunctionalDeclaration: `function _Identifier_(ParameterList){FunctionBody}`
    * FunctionExpression: define function inside an expression `function [name_optional] (ParameterList){FunctionBody}`

```javascript
foo(); // no error
function foo(){
    //some code
}
functionFoo(); //error
var functionFoo = function(){
    //some code
}
```
Functions are first class - they can be values of variables:

```javascript
var f = function(x) {
    return x + 1;
};

console.log(typeof x); // "function"
```

__This means that functions can be passed as arguments to other functions and returned as results from functions.__

### Higher-order functions

Having first-class functions, we can make higher-order functions.

A higher-order function is a function that:

* Takes another function/s as an argument
* Returns a function as a result

__Example__

prints all elements from an array
```javascript
function printArray(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}
```
for doing something else we can parse function as argument

```javascript
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
var print = function(x){
    console.log(x);
}
forEach([1,3,4],print);
```


In JavaScript, we have `forEach`, `map`, `filter`, `reduce` and many other high-order functions, which gives us more expressive power and more abstraction over dealing with collections.

