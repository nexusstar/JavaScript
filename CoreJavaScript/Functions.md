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

When we declare the function we use _parameters_ to specify function vars. And passing  _arguments_ when we call a function.

We could pass function as arugument to a function. There is a difference do we pass the return value of a function (do we call it) or the function e.g.

```JavaScript

foo( bar ); // pass function as argument

foo( bar() ) // pass return value as argument

```
## Arguments

__Function arguments are not required__

* All arguments are untyped 
* Like all variables in JS arguments are untyped
* Unspecified arguments become undefined
* Arguments are available through the `arguments` object

```JavaScript
    function sum( a, b, c ){
      return a + b + c;
    }
    console.log( sum(1,2,3));
    console.log( sum (1,2));
    console.log( sum(1,2,3,4));

    function sum(){
      var sum = 0;
      for ( var i = 0; i < arguments.length; i++ ){
        sum = sum + arguments[i];
      }
      return sum;
    }
```

## Scope

Hoisting is JavaScript's default behaviour of moving all declarations to the top of the current scope
JS has functional scope. That means that whenever declaration was not found in current function
program searches in parent and in its parent until declaration was found if not found is thrown
Reference error exception.

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

## Prototype

A function's prototype: A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor.
