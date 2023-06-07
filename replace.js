// Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”

function replaceChar(string, oldChar, newChar) {
  return string.replace(oldChar, newChar);
}

const string = "apple";
const oldChar = "a"; //or string[0]
const newChar = "x";

const newString = replaceChar(string, oldChar, newChar);

console.log(newString); // xpple
