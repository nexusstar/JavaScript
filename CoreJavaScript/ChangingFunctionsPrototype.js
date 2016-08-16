'use strict';

function Cat(name, color){
    this.name  = name;
    this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Muffin', 'Black');

Cat.prototype = { age: 5 }

var snowbell = new Cat('Snowbell', 'White');

console.log(fluffy.age); // 4
console.log(muffin.age); // 4
console.log(snowbell.age); // 5
console.log(Cat.prototype.age); // 5

function Animal(voice){
    this.voice = voice || 'Bau';

}

Animal.prototype.speak = function(){
    console.log(this.voice);
}

function Dog(name, color){
    Animal.call(this, 'Djaff');
    this.name = name;
    this.color = color;
}
// Assign Animal as prototype of Dog
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var barky = new Dog('Barky', 'Brown');
barky.speak();
console.log(barky.__proto__);
console.log(barky.__proto__.__proto__);
