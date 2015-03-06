/**
 * Created by p.nikov on 3.11.2014 г..
 *
 *  N-th Fibonacci
 The most annoying problem of all.
 Implement a function, called `fib(n)` that returns the n-th fibonacci number, given by the argument.
 */
"use strict";

var nthFibonacci = function(n){
    if(n < 3){
        return 1;
    }
    return fib(n-1) + fib(n-2);
};

exports.nthFibonacci = nthFibonacci;