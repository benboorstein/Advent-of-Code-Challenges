// Note: The point of doing it this way is to make it WAY faster: The 'while' loop runs just 4060 times instead of almost 500,000 times! (Remember that the main difference between a 'for' loop and a 'while' loop is that with a 'while' loop we get to choose, in the body of the loop, when i is iterated.)

// Note: Robert's original instructions are below the code


function day4P1(input) {
    const [minStr, maxStr] = input.split('-')
    const min = +minStr
    const max = +maxStr
    let i = min
    let validPs = [] // aka matches
    let numTimesRan = 0
    while (i < max) { // e.g., go through the program with 108457 as i (the second time through the while loop, i will be 111111, as will make sense once you've taken 108457 all the way through the while loop)
        numTimesRan++ // 1 (when going through with 108457) and 2 (when going through the second time with 111111)
        const iStr = i.toString() // iStr is '108457', then iStr is '111111'
        let pivot = 0 // can think of pivot as a number representing "the index we care about"
        for (let j = 1; j < iStr.length; j++) {
            if (+iStr[j] < +iStr[j - 1]) { // +iStr[j] is 0
                pivot = j // j as 1 is stored in pivot (i.e., pivot is updated)
                break // breaking out of loop if condition is ever met (i.e., with 108457, the condition is met and it breaks out of the loop)
            }
        }
        if (pivot == 0) { // for '111111', pivot is still 0
            let numOfPairs = 0
            for (let j = 1; j < iStr.length; j++) {
                if (+iStr[j] == +iStr[j - 1]) { // with '111111', the condition is met 
                    numOfPairs++ // 1
                    break
                }
            }
            if (numOfPairs > 0) {
                validPs.push(i) // at this point, we know that i passes BOTH rules/tests (nondecreasing digits in i AND at least one digit pair in i)
            }
            i++    
        } else if (pivot > 0) { // this line is for if the number didn't pass EITHER rule/test // pivot is 1 as of now (going through with 108457)
            i = Number(iStr.slice(0, pivot).concat(iStr.slice(pivot - 1, pivot).repeat(iStr.length - pivot))) // going through with 108457, i is now 111111, and it goes back to line 10 (the beginning of the while loop)  
        }
    }
    return { // an object literal with no formal name
        matchesFound: validPs.length,
        timesRan: numTimesRan
    }
}

console.log(day4P1('108457-562041')) // {matchesFound: 2779, timesRan: 4060} // note that 2779 is the actual answer // correct
  
  
  //---------------------------------------------------------
  
  
  // Test:
  // Expect the function day4P1 to return 
  // 2779 matches and
  // 4060 times run
  // when called with argument "108457-562041"
  // 1 line
  /* CODE HERE */
  
  // Define function day4P1
  // It expects one argument, a string, that it will refer to as input
  // 2 lines, including the opening-closing brackets
  /* CODE HERE */
  
    // To operate on input, we must extract its two numbers
    // All we can assume is that a minimum boundary
    // and a maximum boundary
    // will be separated by a dash character, -
    // 3 lines
    /* CODE HERE */
  
    // Now that we have the minimum number
    // and the maximum number stored as constants
    // we want to set some values that we will use in each iteration of a loop we are about to make
  
    // 1. An iterator that will start out matching our minimum number
    // 2. An array that will eventually store each number that matches all of the challenge's specified rules
    // 3. A counter that will tell us how our loop performed: how many numbers it checked while iterating
  
    // 3 lines
    /* CODE HERE */
  
    // Time to make the loop
    // It can't be a 'for' loop because we can't depend on the iterator changing by the same amount each time
    // The condition upon which this loop ends must be
    // as soon as our iterator number has reached or surpassed the maximum number from the function's input
    // While this condition is true, our loop should continue iterating
    // 2 lines, including the opening-closing brackets
    /* CODE HERE */
      // First, since the loop is running again,
      // let's increment our counter from step 3. above
      // 1 line
      /* CODE HERE */
  
      // Next, the purpose of this loop
      // is to check each digit in the number of the current iteration
      // and perform a few tests
      // In order to iterate through the digits of a number
      // We have to coerce it to a different type: a string
      // Let's do that and store it in a constant
      // 1 line
      /* CODE HERE */
  
      // Also, before we iterate through each digit
      // We need a way to record which, if any, digit was the first to pass or fail one of our tests
      // For instance:
      // With the number 123123
      // As we iterate through each digit
      // Checking each one for whether it is smaller than the preceding digit
      // We want to save the first one that is smaller
      // AND we want to know if none of the digits pass that test
      // like in the case of the number 123456
      // or the number 222222
      //
      // We should expect this number to be 0
      // if none of the digits pass the test
      // and expect this number to be greater than 0 if one does
      // 1 line
      /* CODE HERE */
  
      // Alas, let's iterate through each digit - except the first one -
      // in the number of the current iteration of the loop
      // 2 lines, including the opening-closing brackets
      /* CODE HERE */
  
        // And check whether that digit is less than the preceding one
        // 2 lines, including the opening-closing brackets
        /* CODE HERE */
  
          // And if it is, do two things:
          // 1. Update the variable referenced above so it is equal to the number representing the index of the digit that passes this test
          // 2. Break out of this loop because we found the first instance of what we were looking for, and therefore the number that - if properly altered - will help us skip the most amount of unimportant numbers within our input range: that being, numbers that we can be certain are decreasing
          // 2 lines
          /* CODE HERE */
          
  
      // Now that we're done iterating through each digit
      // We can trust that the variable we set up
      // To store a number representing the result of our test
      // has been updated based on the condition we set inside the loop above
      // We want to do something if there were no matches
      // and therefore it is still 0
      // and we want to do something else if there was a match
      // and therefore it is greater than 0
      // 4 lines, including two conditions, each with opening-closing brackets
      /* CODE HERE */
  
        // In the case of no matches
        // We can deduce that the number in the current iteration
        // of the loop contains non-decreasing digits
  
        // Now, we have to test whether there's a pair among those digits
        // Before we iterate through them again
        // Let's setup another variable
        // that will represent the number of pairs
        // we find by the time this new loop is finished
        // 1 line
        /* CODE HERE */
  
        // Good, now it's time to loop through the digits again - except the first one
        // Exactly as we did above
        // 2 lines, including opening-closing brackets
        /* CODE HERE */
  
          // This time, we're checking for a different test to pass
          // Is the current digit equal to the preceding one?
          // 2 lines, including opening-closing brackets
          /* CODE HERE */
  
            // Then update our variable to record this identified match
            // And immediatey break out of this loop
            // Because we only need to find a single pair to pass the challenge's test
            // 2 lines
            /* CODE HERE */
  
        // Now let's check the value of that variable
        // And see whether it found any matches
        // 2 lines, including the opening-closing brackets
        /* CODE HERE */
  
          // As long as it did
          // We know that the number from the current iteration of our outer loop passes each of the tests from our challenge
          // And therefor
          /* CODE HERE */
  
        // Lastly, inside this condition...
        // Since we know the number from the current iteration
        // contains non-decreasing numbers
        // we just have to be sure to increment the number by 1
        // so that the next iteration uses a number
        // that is drawing closer to the maximum number in the input range
        // 1 line
        /* CODE HERE */
        
        // This line is inside of the other branch of our conditional logic
        // Which checks whether our variable that tracks
          // the first decreasing digit..found one.
        
        // This line is run when it found one
        // Like in the number 123123, it found the second 1
          // Or like in 108457, it found the 0
        
        // This line is the important part
        // that enables our loop to jump ahead several numbers
        // by overwriting the number in the current iteration
        // to become the next non-decreasing set of digits
        // Like changing 123123 to the number 123333
        /* CODE HERE */
  
    // Finally, this function must return two things
    // 1. the number of matches found
    // 2. the number of times the outer loop ran