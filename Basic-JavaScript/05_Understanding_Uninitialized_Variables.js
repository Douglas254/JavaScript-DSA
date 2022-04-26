// ************************Understanding Uninitialized Variables************************
/*

When JavaScript variables are declared, they have an initial value of undefined.
If you do a mathematical operation on an undefined variable your result will be NaN 
which means "Not a Number". If you concatenate a string with an undefined variable, 
you will get a string of undefined.

*/

// Test Quiz
/* 
Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively 
so that they will not be undefined.
*/

// Solution
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a); // output: 6
console.log(b); // output: 15
console.log(c); // output: I am a String!

// *************************Understanding Case Sensitivity in Variables*************************
/*

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
e.g

    MYVAR is not the same as MyVar nor myvar

 ***Best Practice***

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
e.g

    var someVariable;
    var anotherVariableName;
    var thisVariableNameIsSoLong;

*/

// Test Quiz
/*
Modify the existing declarations and assignments so their names use camelCase.
Do not create any new variables.

// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

*/

// Solution***

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
