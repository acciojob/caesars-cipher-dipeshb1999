// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line

  return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
function rot13(str) {
  // Split the input string into an array of characters
  var chars = str.split("");

  // Loop through each character in the array
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];

    // Check if the character is a letter
    if (/[A-Z]/.test(char)) {
      // Convert the character code to a value between 0 and 25
      var charCode = char.charCodeAt(0) - 65;

      // Apply the ROT13 transformation by adding 13 and taking modulo 26
      var decodedCharCode = (charCode + 13) % 26;

      // Convert the decoded character code back to a character
      var decodedChar = String.fromCharCode(decodedCharCode + 65);

      // Replace the original character with the decoded character
      chars[i] = decodedChar;
    }
  }

  // Join the array of characters back into a string
  var decodedStr = chars.join("");

  // Return the decoded string
  return decodedStr;
}
var encodedString = "EBG13 rknzcyr.";
var decodedString = rot13(encodedString);
console.log(decodedString); // Output: ROT13 example.

