#JS introduction

#### <a name='b1'>Hello world JS style</a>
```javascript
    // Hello World JS
    alert('Hello World');
    document.write('Hello World');
    console.log('Hello World');
```
#### <a name='b2'>Types and values</a>
* JavaScript have primitive types and object types
* Any JavaScript value that is not a `number`, `string`, `boolean` or `null` or `undefined` is an object. 
* An object (that is a member of the type object) is a collection of properties where each property has a name and a value.
JavaScript object is an unordered collection of named values.
* `function` is a special kind of object that has executable code associated with it. 
A function may be invoked to run that executable code and return a computed value.
* `[]` array is a special kind of object that represents an ordered collection of numbered values.

#####<a name='b201'>Null and Undefined</a>

* `null` indicates absence of value and is used to indicate "no value" for `number` `string` or `object` 
```javascript
typeof(null); //-> "object"
```
* `undefined` indicates absence of existence. This is something that is not initialized.
```javascript
typeof(undefined); //-> "undefined"
```

#### <a name='b3'>Truthy and Falsy values</a>

The following values are always falsy:

* false
* 0 (zero)
* "" (empty string)
* null
* undefined
* NaN (not a number) 

All other values are truthy including empty arrays and empty objects.
