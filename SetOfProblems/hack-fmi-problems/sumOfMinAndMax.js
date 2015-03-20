/**
 * Created by p.nikov on 19.3.2015 г..
 */
/*
 * Given an array of integers, implement a function, called `sumOfMinAndMax(arr)`,
 * that calculates and returns the sum of the largest and the smallest integers in the array.
 Don't bother for the case when the array is empty.
 * */

"use strict";

var sumOfMinAndMax = function (arr){
    if (arr.length === 0){
        return 'Error: empty array';
    }

    var min = arr[0],
        max = arr[0];

    for(var i = 0, l = arr.length; i < l; i++){
        if( arr[i] < min ){
            min = arr[i];
        } else if( arr[i] > max ){
            max = arr[i];
        }
    }
    return min + max;
};

exports.sumOfMinAndMax = sumOfMinAndMax;