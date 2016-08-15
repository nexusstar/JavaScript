'use strict';

//using literal
var Dog ={
    name: "Buch",
    age: 3,
    speak: function(){
        console.log("bau bau");
    }
};

// using function
function Cat(name, age){
    this.name = "Fluffy";
    this.age = 3;
    this.speak = function(){
        console.log("Meauuu");
    }
};

// using Object.create
var bunny = Object.create(Object.prototype, {
    name:{
        value: "Fluffy",
        enumerable: true,
        writable: true,
        configurable: true
    },
    color:{
        value: "White",
        enumerable: true,
        writable: true,
        configurable: true
    }
});

// using ES6 classes
class Cat{
    constructor(name, color){
        this.name = name
        this.color = color
    }

    speak(){
        console.log("Meaooow");
    }
}
