/**
 * Created by p.nikov on 19.3.2015 г..
 */

"use strict";

var sumOfMinAndMax = require('./sumOfMinAndMax').sumOfMinAndMax;

exports.sumTesEmptyArray = function(test){
    debugger;
    test.equal('Error: empty array', sumOfMinAndMax([]));
    test.done();
};

exports.sumTestOne = function(test){
    debugger;
    test.equal(10, sumOfMinAndMax([1,2,3,4,5,6,7,8,9]));
    test.done();
};
