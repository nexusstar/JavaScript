# Data types and Variables

## Data types

### Primitive types

Numbers, string, boolean, null, undefined

#### Numbers

JavaScript does not make destinction between integer values and floating-point values.

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

### Object types

Any JavaScript value that is not a number, string, boolean or null or undefined is an object.
An object is a collection of properties where each property has name and a value.

## Declaring and using variables