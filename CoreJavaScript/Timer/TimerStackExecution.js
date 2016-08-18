'use strict';

function fn(){
    setTimeout(function(){console.log('Function 01');}, 0);
    setTimeout(function(){console.log('Function 02');}, 100);
    setTimeout(function(){console.log('Function 03');}, 0);
};

fn();
