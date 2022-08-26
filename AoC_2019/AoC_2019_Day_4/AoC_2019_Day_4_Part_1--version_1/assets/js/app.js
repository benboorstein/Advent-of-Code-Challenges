/* VERSION 5 (much faster runtime version!):

  First a little exercise:

  What is the next non-decreasing number?

  108457
  - 111111

  200000
  - 222222

  123123
  - 123333

  245728
  - 245777

  334482
  - 334488

  134098
  - 134444

  466656
  - 466666

  For the Version 5 code, refer to my folder called: AoC_2019_Day_4_Part_1--version_2
*/


/* VERSION 4 (final version for the much slower runtime versions):

function matchesRule1(num) {
    return num.toString().length == 6
}

// Note that a matchesRule2 function is not needed because this rule is taken care of in the for loop conditions of the masterFunc function.

function matchesRule3(num) {
    let numStr = num.toString()

    return numStr[0] == numStr[1] || numStr[1] == numStr[2] || numStr[2] == numStr[3] || numStr[3] == numStr[4] || numStr[4] == numStr[5]
}

function matchesRule4(num) {
    let numStr = num.toString()

    return numStr[0] <= numStr[1] && numStr[1] <= numStr[2] && numStr[2] <= numStr[3] && numStr[3] <= numStr[4] && numStr[4] <= numStr[5]
}

function masterFunc() {

    let validPs = []

    let providedInput = "108457-562041"
    let [firstNumStr, finalNumStr] = providedInput.split('-')
    let firstNum = +firstNumStr
    let finalNum = +finalNumStr

    // Additional questions from Robert (inserted here because this is the appropriate place, given none of the code above this point needs to be changed in order to answer his questions):

    // **First question:
    // 108457 is the first number you check
    // What is the first number after that whose digits are non-decreasing?
    //     MY GUESS: 111111, because...
    //       if (matchesRule4(i)) {
    //         console.log(i)
    //         break
    //       }
    // CORRECT ANSWER: Yes

    // **Second question:
    // How many times does your for loop run before reaching 111111?
    //     MY GUESS: 2654, because...
    //       if (matchesRule4(i)) {
    //         console.log(i - firstNum)
    //         break
    //       }
    // CORRECT ANSWER: Yes

    // **Third question:
    // What is the first number after 200000 whose digits are non-decreasing?
    //     MY GUESS: 222222, because...
    //       for (let i = 200000; i <= finalNum; i++) {
    //         if (matchesRule4(i)) {
    //           console.log(i)
    //           break
    //         }
    //       }
    //     ...and because, just like with the first question, it's obvious if you think about it.
    // CORRECT ANSWER: Yes

    // **Fourth question:
    // How many times does your for loop run before reaching 222222?
    //     MY GUESS: 22222, because...
    //       for (let i = 200000; i <= finalNum; i++) {
    //         if (matchesRule4(i)) {
    //           console.log(i - 200000)
    //           break
    //         }
    //       }
    // CORRECT ANSWER: Yes

    // **Fifth question:
    // How many times does your loop run currently?
    //     MY GUESS: 453585, because...
    //       finalNum - firstNum = 453584,
    //       but for loops are inclusive of first and final numbers
    //       and subtraction is not.
    //       Using a for loop:
    //         let counter = 0
    //         for (let i = firstNum; i <= finalNum; i++) {
    //           counter++
    //         }
    //         return counter
    // CORRECT ANSWER: Yes

    for (let i = firstNum; i <= finalNum; i++) {
        if (matchesRule1(i)
            && matchesRule3(i)
            && matchesRule4(i)) {
            validPs.push(i)
        }
    }

    return validPs.length
}

console.log(masterFunc()) // 2779 // correct

*/


/* VERSION 3:

function getInputArr(firstNum, finalNum) {
    let inputArr = []

    for (let i = firstNum; i <= finalNum; i++) {
        inputArr.push(i)
    }
    
    return inputArr
}

function matchesRule1(num) {
    return num.toString().length == 6
}

function matchesRule2(num) { // Note that I think this function is probably not necessary given I have the getInputArr function.
    return num >= 108457 && num <= 562041
}

function matchesRule3(num) {
    let numStr = num.toString()

    return numStr[0] == numStr[1] || numStr[1] == numStr[2] || numStr[2] == numStr[3] || numStr[3] == numStr[4] || numStr[4] == numStr[5]
}

function matchesRule4(num) {
    let numStr = num.toString()

    return numStr[0] <= numStr[1] && numStr[1] <= numStr[2] && numStr[2] <= numStr[3] && numStr[3] <= numStr[4] && numStr[4] <= numStr[5]
}

function masterFunc(arr) {
    let validPs = []

    for (let i = 0; i < arr.length; i++) {
        if (matchesRule1(arr[i])
            && matchesRule2(arr[i])
            && matchesRule3(arr[i])
            && matchesRule4(arr[i])) {
            validPs.push(arr[i])
        }
    }

    return validPs.length
}

console.log(masterFunc(getInputArr(108457, 562041))) // 2779 // correct

*/


/* VERSION 2:

function getInputArr(firstNum, finalNum) {
    let inputArr = []

    for (let i = firstNum; i <= finalNum; i++) {
        inputArr.push(i)
    }

    return inputArr
}

function matchesRule1(num) {
    let numStr = num.toString()

    if (numStr.length == 6) {
        return true // +numStr
    } else {
        return 'wrong'
    }
}

function matchesRule2(num) { // Note that I think this function is probably not necessary given I have the getInputArr function.

    if (num >= 108457 && num <= 562041) {
        return true // num
    } else {
        return 'wrong'
    }
}

function matchesRule3(num) {
    let numStr = num.toString()

    if (numStr[0] == numStr[1] || numStr[1] == numStr[2] || numStr[2] == numStr[3] || numStr[3] == numStr[4] || numStr[4] == numStr[5]) {
        return true // +numStr
    } else {
        return 'wrong'
    }
}

function matchesRule4(num) {
    let numStr = num.toString()

    if (numStr[0] <= numStr[1] && numStr[1] <= numStr[2] && numStr[2] <= numStr[3] && numStr[3] <= numStr[4] && numStr[4] <= numStr[5]) {
        return true // +numStr
    } else {
        return 'wrong'
    }
}

function masterFunc(arr) {
    let validPs = []

    for (let i = 0; i < arr.length; i++) {
        if (matchesRule1(arr[i]) == true
            && matchesRule2(arr[i]) == true
            && matchesRule3(arr[i]) == true
            && matchesRule4(arr[i]) == true) {
            validPs.push(arr[i])
        }
    }

    return validPs.length
}

console.log(masterFunc(getInputArr(108457, 562041))) // 2779 // correct

*/


/* VERSION 1:

function getInputArr(firstNum, finalNum) {
    let inputArr = []

    for (let i = firstNum; i <= finalNum; i++) {
        inputArr.push(i)
    }

    return inputArr
}

function getValidPs(arr) {
    let validPs = []

    for (let i = 0; i < arr.length; i++) {
        let numStr = arr[i].toString()
        if ((numStr[0] <= numStr[1] && numStr[1] <= numStr[2] && numStr[2] <= numStr[3] && numStr[3] <= numStr[4] && numStr[4] <= numStr[5]) && (numStr[0] === numStr[1] || numStr[1] === numStr[2] || numStr[2] === numStr[3] || numStr[3] === numStr[4] || numStr[4] === numStr[5])) {
            validPs.push(arr[i])
        }
    }
    
    return validPs.length
}

console.log(getValidPs(getInputArr(108457, 562041))) // 2779 // correct

*/