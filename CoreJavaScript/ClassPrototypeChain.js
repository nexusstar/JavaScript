'use strict';

class Animal{
    constructor(voice){
        this.voice = voice || 'grunt';
    }
    //add a method
    speak(){
        console.log(this.voice);
    }
}
class Cat extends Animal {
    constructor(name, color) {
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super('Bau');
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat('Fluffy', 'White');
var barky = new Dog('Barky', 'Brown');
fluffy.speak();
barky.speak();
console.log(barky);
console.log(fluffy);
console.log(barky.__proto__);
console.log(barky.__proto__.__proto__);
console.log(typeof(barky.constructor));
console.log(barky.constructor);
