// 10. Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.

// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string

function convertStringToUpperCase(s) {
  return s.toUpperCase();
}

function convertFirstCharacterToUpperCase(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function convertStringToLowerCase(s) {
  return s.toLowerCase();
}

function breakStringIntoTwoHalvesAndSwapThem(s) {
  const middleIndex = Math.floor(s.length / 2);
  const firstHalf = s.slice(0, middleIndex);
  const secondHalf = s.slice(middleIndex);
  return secondHalf + firstHalf;
}

function countRepeatingCharacters(s) {
  const counts = {};
  for (const c of s) {
    if (c in counts) {
      counts[c]++;
    } else {
      counts[c] = 1;
    }
  }
  return counts;
}

function reverseString(s) {
  return s.split("").reverse().join("");
}
const s = "Hello, world!";

// Convert the string to upper case.
const upperCaseS = convertStringToUpperCase(s);
console.log(upperCaseS); // HELLO, WORLD!

// Convert only the first character to uppercase.
const firstCharacterToUpperCaseS = convertFirstCharacterToUpperCase(s);
console.log(firstCharacterToUpperCaseS); // Hello, world!

// Convert the string to lower case.
const lowerCaseS = convertStringToLowerCase(s);
console.log(lowerCaseS); // hello, world!

// Break the string into two halves and swap them.
const swappedS = breakStringIntoTwoHalvesAndSwapThem(s);
console.log(swappedS); // !dlrow ,olleH

// Count the repeating characters.
const repeatingCharacters = countRepeatingCharacters(s);
console.log(repeatingCharacters); // {'l': 2, 'o': 2, 'e': 1, 'h': 1, 'w': 1, 'r': 1, 'd': 1, '!': 1}

// Reverse the string.
const reversedS = reverseString(s);
console.log(reversedS); // !dlrow ,olleH
