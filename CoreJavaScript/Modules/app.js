var Calc = require('./calc.js');

// using module.exports = Calc;
// new Calc(0)
//     .add(1)
//     .add(2)
//     .equals(function(result){
//         console.log(result);
//     });
//

// using module.exports = {} to achieve fluent API
Calc
    .add(1,2)
    .multiply(3)
    .equals(function(result){
        console.log(result);
    });
