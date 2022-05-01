/*
********************Escaping Literal Quotes in Strings********************
In JavaScript, you can escape a quote from considering it as an end of string quote by placing a 
backslash (\) in front of the quote.
e.g

    const sampleStr = "Basil said, \"Douglas is learning JavaScript\".";

This signals to JavaScript that the following quote is not the end of the string, but should instead 
appear inside the string. So if you were to print this to the console, you would get:

    Basil said, "Douglas is learning JavaScript".

Test Quiz
Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, 
you would see:

    I am a "double quoted" string inside "double quotes".

const myStr = ""; // Change this line

*/
// Solution
// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
