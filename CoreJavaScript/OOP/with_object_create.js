/**
 * Created by nexusstar on 06.04.15.
 */

var p = {
    key: 'value',
    method: function () {
        return this.key;
    }
}, o = Object.create(p); // create an object with p as it's prototype

console.log(p.key); // returns 'value'
console.log(p.method()); // returns 'value'

console.log(o.key); // returns 'value'
o.method(); // calling a method is a read, returns 'value'

o.key = 'other'; // assign as o's own member!
console.log(o.key); // returns 'other'
p.key; // returns 'value'

o.method();// returns 'other', because the method
           // is evaluated with o bound to this, even
           // though the method actually is on p

delete o.key;
console.log(o.key); // returns 'value', after deletion the member
       // is no longer found on o, but still on p, when
       // traversing the prototype chain.

p.key = 'changed';
console.log(o.key); // returns 'changed', the prototype chain is
       // evaluated each time a property is read from.