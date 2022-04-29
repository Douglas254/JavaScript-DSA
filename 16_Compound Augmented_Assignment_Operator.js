/*
************Compound Assignment With Augmented Addition************

In programming, it is common to use assignments to modify the contents of a variable. 
Remember that everything to the right of the equals sign is evaluated first, so we can say:

    myVar = myVar + 5;

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a 
mathematical operation and assignment in one step.

One such operator is the += operator.

    let myVar = 1;
    myVar += 5;
    console.log(myVar);
6 would be displayed in the console.

// Test Quiz
Convert the assignments for a, b, and c to use the += operator.
*/

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;

// Solution
a += 12;
b += 9;
c += 7;
console.log(a);
console.log(b);
console.log(c);

/*
************Compound Assignment With Augmented Subtraction************

Like the += operator, -= subtracts a number from a variable.

    myVar = myVar - 5;

will subtract 5 from myVar. This can be rewritten as:

    myVar -= 5;

// Test Quiz
Convert the assignments for a, b, and c to use the -= operator.
*/

let d = 11;
let e = 9;
let f = 3;

// Only change code below this line
d = d - 6;
e = e - 15;
f = f - 1;

// Solution
d -= 6; // Output: 5
e -= 15; // Output: -6
f -= 1; // Output: 2

/*
************Compound Assignment With Augmented Multiplication************

The *= operator multiplies a variable by a number.

    myVar = myVar * 5;

will multiply myVar by 5. This can be rewritten as:

    myVar *= 5;

// Test Quiz
Convert the assignments for a, b, and c to use the *= operator.
*/
let g = 5;
let h = 12;
let i = 4.6;

// Only change code below this line
g = g * 5;
h = 3 * h;
i = i * 10;

// Solution
a *= 5; // Output: 25
b *= 3; // Output: 36
c *= 10; // Output: 46
