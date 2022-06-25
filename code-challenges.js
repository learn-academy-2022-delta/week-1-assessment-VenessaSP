// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
//Using given variables
// Declare a function called stringCombo
// Set parameters (string1, string2)
// Use a conditional statement to compare passed in strings
    // if string1 is greater than string2 -- we will return string 1
    // use else or else if to evaluate the opposite and return the other string
    // Class example- thanks elyse

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
const stringCombo = (string1, string2) => {
    if(string1.length > string2.length) {
        return string1
    } else if(string1.length < string2.length) {
        return string2
    } else {
        return "Oops, neither are greater"
    }
}
console.log(stringCombo(fruit1, fruit2)) // returned banana
console.log(stringCombo(fruit3, fruit4)) // returned cherry

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
//Create function name degrees
//defined parameter as temp
// did conditional statements to compare the parameter of temp to 212
//used string interpolation to return the value of the the variable and a string
//catch all statement (else) to return the value of the temp3
//console.log the name of the function with the variables

const temp1 = 42   
const temp2 = 350
const temp3 = 212

const degrees = (temp) => { 
    if (temp < 212) {
    return `${temp1}` + ` below boiling point`
  } else if (temp === 212) {
  return `${temp2}` +  ` is at boiling point`
  } else  
   return `${temp3}` + ` is above boiling point`
  }
console.log(degrees(temp1))
console.log(degrees(temp2))
console.log(degrees(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// First with the .unshift to add myNumbers2 to the first part of myNumbers1
//  - Input: myNumbers1.unshift(myNumbers2) 
//  - Expected output: 8, -7, 42, 9, 13, 3, 7, 0, 36, -9 

//myNumbers1.unshift(myNumbers2)
//console.log(myNumbers1)
//Output: [ [ 8, -7, 42, 9, 13 ], 3, 7, 0, 36, -9 ]

//Second, since I added myNumbers2 to myNumbers1 should be able to get the correct length
//  - Input: console.log(myNumbers1.length)    
//  - Expected output: 10 

// console.log(myNumbers1.length)
// Incorrect output: 6

//Troubleshoot, so according to my notes, turns out the correct way to combine Arrays is the .conact THEN the .length. (ツ)

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
 
console.log(myNumbers1.concat(myNumbers2).length)
//Output:10 
//only took my about a good 45mins :(  



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: 
//Declare a function,
//name the function reverse
//hard coded parameter with currentCohort
//returned the output of currentCohort using methods
// .split- by turning characters in string to arrays
// .reverse- reverses items in string
// .join- puts the array back to a string
// then console.log: the name of the functionwith the const variable as parameter  


const currentCohort = "Delta 2022"
function reverse(currentCohort) {
    return currentCohort.split('').reverse().join('')
}


console.log(reverse(currentCohort))




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: // tried destructing it first

const myArray = [13, 34, 5, 10, 27, 42]

//for(let index = 0; index < 5; index = index + 1 ) why use strict versus loose equality's
//create a loop for the variable const myArray
//start with index 0
//run the lenght of the array
//incriment up with the i++
// write conditionalals using modules to evaluate if odd or even
// if statment used for the even numbesr
//console.log even
//else to say everything else is odd
// then console.log the array

for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] % 2 === 0) { 
        console.log('even')
    } else 
    console.log('odd')
}
console.log(myArray)



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: Had a very hard time with understanding where to start 
//create a function named numbers
//made a parameters of digit1 and digit2
//did a conditional statement to evaluate if a digit was greater than the other
//did the catch all other possibilities 

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

function numbers (digit1, digit2) {
    if(digit1 < digit2) { 
        return digit2 - digit1 
    } else // this is evaluating if digit1 is > digit 2
    return digit1 - digit2   
}
console.log(numbers(number1, number2))
console.log(numbers(number3, number4))
