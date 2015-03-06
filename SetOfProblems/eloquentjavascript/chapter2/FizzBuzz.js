
/*
 * Write a program that uses console.log to print all the numbers from 1 to 100,
 * with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
 * and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 * When you have that working, modify your program to print "FizzBuzz", for numbers
 * that are divisible by both 3 and 5
 * (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 */

// straight
for(var num = 1; num <= 100; num++){

    if( num % 3 === 0){
        if(num % 5 === 0) console.log('FizzBuzz');
        console.log('Fizz');
    } else if(num % 5 === 0){
        console.log('Buzz');
    } else{
        console.log(num);
    }
}

// smart
for (var n = 1; n <= 100; n++ ){
    var log = '';
    if (n % 3 === 0 ){
        log += 'Fizz'
    }
    if( n % 5 === 0 ){
        log += 'Buzz'
    }
    console.log(log || n);
}