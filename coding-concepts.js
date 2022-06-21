// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: I was incorrect, it returned 5 which is the index. It adds elements to array but returns the lenght
// Question: why does it only return the lenght and not the element?

console.log(colors.push("indigo"))



// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: I was Incorrect again :( .lenghh on a string  returns the number of charaters within the string and spaces are considered characters

console.log(cohort.length)


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: Will log "o"
// b) Verify and explain: [4] in the case is refering to the index of the string "Hello World" and since indexs count start with 0 in this string its "o"

console.log(greeting[4])



// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Indexs always start with 0, [] contain arrays each element in the array are defined in "" and are counted as a valus


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())


// a) Your answer:"SATURDAY, "SUNDAY"
// b) Verify and explain: I got back an error message: weekendDays.toUpperCase is not a function. So tried troubleshooting but even trying to declare a function does not work.

function toUpperCase(weekendDays) {
   return weekendDays.toUpperCase("")
}
console.log(weekendDays.toUpperCase(""))


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)
console.log(typeof dataTypes.length)

// a) Your answer: 2
// b) Verify and explain: Incorrect, returned "number" my understanding .length returns the number of indexs in the array. Not sure what happen in this case. 
