// What string method can be used to check the occurrence of a specified
// text in a string?
  
// indexOf() method: 
// This method returns the index of the first occurrence of the specified text in the string. 
// If the specified text is not found, the method returns -1.

// proof:

const string = "This is a string";
const text = "is";

const index = string.indexOf(text);

console.log(index); // 2
