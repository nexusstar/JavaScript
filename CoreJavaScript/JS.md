#JavaScript short

#### Hello world JS style
```javascript
    // Hello World JS
    alert('Hello World');
    document.write('Hello World');
    console.log('Hello World');
```
#### Types and values
* JavaScript have primitive types and object types
* Any JavaScript value that is not a `number`, `string`, `boolean` or `null` or `undefined` is an object. 
* An object (that is a member of the type object) is a collection of properties where each property has a name and a value.
JavaScript object is an unordered collection of named values.
* `function` is a special kind of object that has executable code associated with it. 
A function may be invoked to run that executable code and return a computed value.
* `[]` array is a special kind of object that represents an ordered collection of numbered values.

##### Null and Undefined

* `null` indicates absence of value and is used to indicate "no value" for `number` `string` or `object` 
```javascript
typeof(null); //-> "object"
```
* `undefined` indicates absence of existence. This is something that is not initialized.
```javascript
typeof(undefined); //-> "undefined"
```

#### Truthy and Falsy values

The following values are always falsy:

* false
* 0 (zero)
* "" (empty string)
* null
* undefined
* NaN (not a number) 

All other values are truthy including empty arrays and empty objects.


#### Type conversions
Some surprising conversions
```javascript
[1] - [2]       //=> -1 as Number
'7' * 2         //=> 14 as Number
[1] + [2]       //=> 12 as String
{} + {}         //=> NaN in Chrome, '[object Object][object Object]' in node.js
```