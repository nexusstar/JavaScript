/*
 * Print all numbers from 1 to 100 with three exceptions
 * if the number is divisible by 3, print fizz
 * if the number is divisible by 5 print buzz,
 * if the number is divisible by 3 AND 5 print fizzbuzz
 *
 */

for (var i = 0; i < 100; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log("fizbuzz");
    } else if ( i % 3 === 0) {
        console.log("fizz");
    } else if ( i % 5 === 0 ){
        console.log("buzz");
    } else {
        console.log(i)
    }
}

// paulirish
for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

// mobz
// smallest?
for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
