/**
 * Created by p.nikov on 19.3.2015 г..
 */
/*Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

 Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

 */

/*
 * input positive number
 * return boolean
 * */
function isEven(x){
    if(x === 0){
        return true;
    } else if (x === 1){
        return false;
    }
    if (x < 0 ){
        return isEven(2 - x)
    }else {

        return isEven(x - 2);
    }
}