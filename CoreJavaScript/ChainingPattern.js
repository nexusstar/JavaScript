/*
*
* new Calc(0)
* .add(1)
* .add(2)
* .multiply(3)
* .equals(function (result){
*       console.log(result);
*       }); // returns 9
*
*/

var Calc = function(start){
    this.add = function(x) {
        start = start + x;
        return this;
    };
    this.multiply = function(x){
        start = start * x;
        return this;
    };
    this.divide = function(x){
        start = start / x;
        return this;
    }
    this.equals = function(callback){
        callback(start);
        return this;
    };
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .divide(3)
    .multiply(3)
    .equals(function(result) {
        console.log(result);
    });
