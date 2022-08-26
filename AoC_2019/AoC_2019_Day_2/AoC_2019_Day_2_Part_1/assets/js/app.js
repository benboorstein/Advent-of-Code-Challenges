let input = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,10,23,1,23,13,27,1,6,27,31,1,9,31,35,2,10,35,39,1,39,6,43,1,6,43,47,2,13,47,51,1,51,6,55,2,6,55,59,2,59,6,63,2,63,13,67,1,5,67,71,2,9,71,75,1,5,75,79,1,5,79,83,1,83,6,87,1,87,6,91,1,91,5,95,2,10,95,99,1,5,99,103,1,10,103,107,1,107,9,111,2,111,10,115,1,115,9,119,1,13,119,123,1,123,9,127,1,5,127,131,2,13,131,135,1,9,135,139,1,2,139,143,1,13,143,0,99,2,0,14,0'

let inputArr = input.split(',').map(str => +str)

inputArr[1] = 12
inputArr[2] = 2

for (let i = 0; inputArr[i] !== 99; i += 4) {
    if (inputArr[i] === 1) {
        inputArr[inputArr[i + 3]] = inputArr[inputArr[i + 1]] + inputArr[inputArr[i + 2]]
    } else if (inputArr[i] === 2) {
        inputArr[inputArr[i + 3]] = inputArr[inputArr[i + 1]] * inputArr[inputArr[i + 2]]
    } else {
        console.log('something went wrong')
    }
}

console.log(inputArr[0]) // 7210630 // correct

// My pseudocode (keep):

    // loop through input array and set the rules for what's to be done.

        // if the opcode is 1...
        // ...go to the next position, see what number it is there, find the position that that number guides you to, get that number but treat it as a value, and ADD that value to...
        // ...go to the NEXT position (two positions from the opcode), see what number it is there, find the position that that number guides you to, get that number but treat it as a value, and ADD that value to the previous value you got. And then...
        // ...go to the NEXT position (three positions from the opcode), see what number it is there, find the position that that number guides you to, and store the sum value there, overwriting what's currently in that position.

        // if the opcode is 2, then...
        // ...do the same thing as for opcode 1, but instead of add, MULTIPLY, and instead of sum, PRODUCT.

        // if the opcode is 99, then...
        // ...stop the program.

        // if the opcode is neither 1 nor 2 nor 99, then console.log('something went wrong').

        // then, go to the NEXT position (four positions from the opcode) to find the next opcode, and repeat the process.