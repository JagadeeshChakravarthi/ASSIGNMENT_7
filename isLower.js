// Write a Javascript function to test whether the first character of a string
// is lowercase.
function isLower(string) {
  return string === string.toLowerCase();
}
const string = "Hello world";

const isLowercase = isLower(string);

console.log(isLowercase); // false
