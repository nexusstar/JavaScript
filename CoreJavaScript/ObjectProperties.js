'use strict';

var cat = {
    name: "Fluffy",
    color: "White"
};

console.log(cat.name);
//or
console.log(cat['name']);

// every property have a property descriptor
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

// Writeable attribute
Object.defineProperty(cat, 'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

// cat.name = 'Scratchy'; //error in strict mode silent fails otherwise

// but if name property is pointer
var astroCat = {
    name: {first: "Fluffy", last: "LaBeouf"},
    color: "Space Gray"
};

Object.defineProperty(astroCat, 'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(astroCat, 'name'));

astroCat.name.first = "Scratchy"; // no problem here
console.log(Object.getOwnPropertyDescriptor(astroCat, 'name'));

// to prevent this from happening we can freeze the property
Object.freeze(astroCat.name);

// Using the Enumerable attribute
//
console.log("for in loop over astroCat object and Object.keys");
for (var propertyName in astroCat){
    console.log(propertyName + ':' + astroCat[propertyName]);
}
console.log(Object.keys(astroCat));

Object.defineProperty(astroCat, 'name', {enumerable: false});

console.log("\n name property enumerable is set to false ");

for (var propertyName in astroCat){
    console.log(propertyName + ':' + astroCat[propertyName]);
}
console.log( Object.keys(astroCat) );


