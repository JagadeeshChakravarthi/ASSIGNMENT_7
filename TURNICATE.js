function truncateString(str) {
  if (str.length > 4) {
    return str.slice(0, 4);
  } else {
    return (str);
  }
}

function main() {
  // Get the input string from the user
  let str = "Icecream";

  // Check the length of the string
  if (str.length > 4) {
    // Truncate the string and output the result
    let truncatedStr = truncateString(str);
    console.log("The truncated string is: " + truncatedStr+"...");
  } else {
    // The string is 4 characters or less, so just output it
    let truncatedStr = truncateString(str);
     console.log("The truncated string is: " + truncatedStr);
   
  }
}

main();
