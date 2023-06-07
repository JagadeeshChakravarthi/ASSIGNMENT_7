function removeWhitespaces(str) {
  // Create a regular expression that matches any whitespace character.
  const regex = /\s/g;

  // Replace all whitespace characters with an empty string.
  return str.replace(regex, '');
}

// Test the function.
const str = "Hii   Boy";
const newStr = removeWhitespaces(str);
console.log(newStr); // "HiiBoy"
