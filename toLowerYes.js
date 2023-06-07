// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

// I convert a string to lower case if he enter any combination of "yes", "YES","Yes"

function getVerdict(userInput) {
  // Convert the user input to all lowercase.
  userInput = userInput.toLowerCase();

  // Check if the user input is equal to "yes".
  if (userInput === "yes") {
    return "yes";
  }

  // Check if the user input is equal to "no".
  else if (userInput === "no") {
    return "no";
  }

  // Otherwise, the user input is not equal to "yes" or "no".
  else {
    return "not sure";
  }
}
