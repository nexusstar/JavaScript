/**
 * Created by p.nikov on 19.3.2015 г..
 */
/*
* Write a function countBs that takes a string as its only argument
* and returns a number that indicates how many uppercase “B”
* characters are in the string.
* */


function countBs(str){
    var sum = 0;
    for(var i = 0, l = str.length; i < l; i++){
        if (str[i]=== 'B'){
            sum += 1;
        }
    }
    return sum;
}

function countChar(str, ch){
    var sum = 0;
    for(var i = 0, l = str.length; i < l; i++){
        if(str[i] === ch){
            sum += 1;
        }
    }
    return sum;
}