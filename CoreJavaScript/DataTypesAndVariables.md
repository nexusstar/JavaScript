# Data types and Variables

## Data types

### Primitive types

Primitive types in JavaScript are
numbers, string, boolean, null, undefined

#### Numbers

JavaScript does not make distinction between integer values and floating-point values.

All numbers are represented as floating point values.
 
The JavaScript number format allows you to exactly represent all integers between −9007199254740992 (−253) and 9007199254740992 (253), inclusive.

Operations in JavaScript (such as array indexing and the bitwise operators) are performed with 32-bit integers.

Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero. When the result of a numeric operation is larger than the largest representable number (overflow), the result is a special infinity value, which JavaScript prints as Infinity.

#### String

JavaScript uses the UTF-16 encoding of the Unicode character set, and JavaScript strings are sequences of unsigned 16-bit values.

JavaScript escape sequences

`\0`  The NUL character (\u0000)

`\b`  Backspace (\u0008)

`\t`  Horizontal tab (\u0009)

`\n`  Newline (\u000A)

`\v`  Vertical tab (\u000B)

`\f`  Form feed (\u000C)

`\r`  Carriage return (\u000D)

`\"`  Double quote (\u0022)

`\'`  Apostrophe or single quote (\u0027)

`\\`  Backslash (\u005C)

`\x` XX   The Latin-1 character specified by the two hexadecimal digits XX

`\u` XXXX The Unicode character specified by the four hexadecimal digits XXXX

If the` \ ` character precedes any character other than those the backslash is simply ignored.

Pattern matching text between a pair of slashes constitutes a regular expression literal second slash can be followed
by one or more letters, which modify the meaning of the pattern.
`/^HTML/i` 

__JavaScript strings are immutable, and all string methods that appear to return a modified string are, in fact, returning a new string value.__

```javascript
var s = "hello";   // Start with some lowercase text
s.toUpperCase();   // Returns "HELLO", but doesn't alter s
s                  // => "hello": the original string has not changed
```

#### Boolean

There are two reserved words `true` and `false`.

Also any JavaScript value can be converted to a boolean value.
The following values are false:

` undefined , null, 0, -0, NaN, "" //empty string `

All other values convert to and work like, true.


#### null and undefined

`null` is a language keyword that evaluates to a special value that is usually used to indicate the absence of a value.
```javascript
typeof(null); //returns 'object'
```
`undefined` represent a deeper kind of absence. It is the value of a variables that haven ot been initialized and the value you get when you query the value of an object property or array element that does not exist.. 


### Object types

Any JavaScript value that is not a number, string, boolean, null or undefined is an object.
An object is a collection of properties where each property has name and a value.

## Type Conversions

JavaScript converts the type of values it requires.

If boolean value is expected JavaScript will convert it as needed.
Truthy values convert to true falsy values convert to false.

If Javascript wants a string, it will convert whatever value you give it to a string.

```javascript
10 + " objects"     // => "10 objects".  Number 10 converts to a string
[] + []             //=> "" . Empty string
[1] + [2]           //=> "12" Number 1 as string concatenated with Number 2 as string
{} + {}             //=> NaN in Chrome, '[object Object][object Object]' in node.js
```

If JavaScript wants a number, it will try to convert the value to a number or NaN.

```javascript
'7' * '3'           // => 21 as Number
var n = 1 - "x";    // => NaN: string "x" can't convert to a number
n + " objects"      // => "NaN objects": NaN converts to string "NaN"
```

## Declaring and using variables