/* 
Not only is the keyword let a new way to declare variables. 
The const keyword can also be used to declare variables in ES6.

const has all of the great features of let, plus the added benefit of making variables declared 
with const read-only. They have a constant value, which means they can't be reassigned once 
they've been assigned with const:
e.g 

    const FAV_PET = "Cats";
    FAV_PET = "Dogs"

Due to the reassignment of the value of FAV_ PET, the console will report an error.

The const keyword should always be used to designate variables that you don't want to reassign.
This is useful if you unintentionally try to reassign a variable that is supposed to remain constant.
Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or
camelCase for mutable values (objects and arrays).
*/

// Test Quiz
/*
Change the code so that all variables are declared using let or const. Use let when you want the variable to
change, and const when you want the variable to remain constant. Also, rename variables declared with 
const to conform to common practices.

// var fCC = "freeCodeCamp"; // Change this line
// var fact = "is cool!"; // Change this line
// fact = "is awesome!";
// console.log(fCC, fact); // Change this line

*/

// Solution
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
