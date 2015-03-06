/*    Write a program that creates a string that represents an 8×8 grid,
 *    using newline characters to separate lines. At each position of the grid
 *    there is either a space or a “#” character.
 *    The characters should form a chess board.
 */
var size = 4;
var output = '';

//stright
for (var l = 0; l < size; l++){
    for(var c = 0; c < size; c++){
        if (l % 2 === 0 ){
            (c % 2 === 0)? output += '#' : output += ' ';
        } else{
            (c % 2 === 0)? output += ' ' : output += '#';
        }
    }
    output += '\n';
}

// better
for(var row = 0; row < size; row ++){
    for(var col = 0; col< size; col++){

        ((row + col) % 2 === 0 )? output += ' ': output += '#';
    }
    output += '\n';
}

console.log(output);