/**
 * Created by p.nikov on 19.3.2015 г..
 */

"use strict";

var sumOfMinAndMax = require('./SumOfMinAndMax').sumOfMinAndMax;

exports.sumTestEmptyArray = function(test){
    debugger;
    test.equal(NaN, sumOfMinAndMax([]));
    test.done();
};
