// ****************** Var vs Let ******************

// Var - can easily be overwritten and when working on large codebase its difficult to notice the error
// e.g;

var camper = "Douglas";
var camper = "Obara";
console.log(camper);

/* In the code above, the camper variable is originally declared as Douglas, 
and is then overridden to be Obara. The console then displays the string Obara.

let - was introduced by ES6 to solve this error by var keyword

If you replace var with let in the code above, it results in an error:
e.g
    let camper = "Douglas";
    let camper = "Obara";

N/B
So unlike var, when you use let, a variable with the same name can only be declared once.
*/
// Test Quiz
/* Update the code so it only uses the let keyword.

    var catName = "Daisy";
    var catSound = "Meow!";
*/

// Solution
let catName = "Daisy";
let catSound = "Meow!";
