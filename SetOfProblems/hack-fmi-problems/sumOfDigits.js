/**
 * Created by p.nikov on 4.11.2014 г..
 * Given an integer, implement a function, called `sumOfDigits(n)` that calculates the sum of the digits of n.
 * If a negative number is given, the function should work as if it was positive.
 */
"use strict";

var sumOfDigits = function(n){
    var sum = 0;
    if(n < 0){
        n = n * -1
    }
    while (n != 0){
        sum += n % 10;
        n = n / 10;
        //n = n | 0; //Nice but Bitwise operators treat their operands as a sequence of 32 bits
        n = Math.floor(n);
    }
    return sum;
};

var sumOfDigitsTwo = function(n){
   var sum = 0, currentDigit;

   return sum;
};

var sumOfDigitsThree = function(n){
    var sum = 0;
    forEach(n.toString().split(''), function(number){
        number *= 1;
        if (number === number){
            sum += number;
        }
    });
    return sum;
};


//global Methods
function forEach(array, action){
    for (var i = 0; i<array.length; i++){
        action(array[i]);
    }
}
