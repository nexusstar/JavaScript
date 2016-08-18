
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
    };
    this.equals = function(callback){
        callback(start);
        return this;
    };
};

module.exports = Calc;

module.exports = {
    add: function(x, y){
        return new Calc(x).add(y || 0);
    },
    multiply: function(x,y){
        return new Calc(x).multiply(y || 1);
    }

};
