# JavaScript short

### Hello world JS style

```javascript
    // Hello World JS
    alert('Hello World');
    document.write('Hello World');
    console.log('Hello World');
```
* Statements - set of words and symbols that express single idea

```javascript
foo = boo + 1;
```
that is assignment statement.

RHS is the source and LHS is the target.

* Expressions - are the composition part of statements

_literal value expresion_ `2`

_indentifier expression_ `boo`

_aritmitic expression_ `boo + 1`

_assignment expression_ `foo = boo + 1;` and also a statement

### Operators

There are more than 30 operators in [ JS ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)


### Types and values

* JavaScript have primitive types and object types

* Any JavaScript value that is not a `number`, `string`, `boolean` or `null` or `undefined` is an object.

* An object (that is a member of the type object) is a collection of properties where each property has a name and a value.

JavaScript object is an unordered collection of named values.
* `function` is a special kind of object that has executable code associated with it.

A function may be invoked to run that executable code and return a computed value.
* `[]` array is a special kind of object that represents an ordered collection of numbered values.

#### Null and Undefined

* `null` indicates absence of value and is used to indicate "no value" for `number` `string` or `object`

```javascript
typeof(null); //-> "object"
```
* `undefined` indicates absence of existence. This is something that is not initialized.

```javascript
typeof(undefined); //-> "undefined"
```
## Conditional Statements

```JavaScript
if(condition){ /*something*/}
```

### Truthy and Falsy values

The following values are always _falsy_:

* `false`
* `0` (zero)
* `""` (empty string)
* `null`
* `undefined`
* `NaN` (not a number)

_All other values are truthy including empty arrays and empty objects._


### Type conversions

Some surprising conversions

```javascript
[1] - [2]       //=> -1 as Number
'7' * 2         //=> 14 as Number
[1] + [2]       //=> 12 as String
{} + {}         //=> NaN in Chrome, '[object Object][object Object]' in node.js
Number([""]);   //=> 0 as a number;
```

Numbers Conversion

```javascript
var valueDouble = 1.2;
var valueInt = valueDouble | 0;         //=> 8
var valueIntRounded = (valueDouble + 0.5) | 0;  //=> 9
var valueString = '1234';
var valueInt = parseInt(valueString);   //=> 1234
var valueInt = valueString | 0;         //=> 1234
```