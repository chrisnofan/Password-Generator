// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

  var allCharacters;
  var newPassword = "";
  var charNum = 10;

// Function to prompt user for password options
function getPasswordOptions() {
  
   allCharacters = [];
    charNum = prompt("How many characters would you like to include?");
    if (charNum < 10 || charNum > 64) {
      alert("The number of characters should be between 8 and 128")
      return
    }
    if (confirm("Click OK to include upper case characters")) { 
      allCharacters = allCharacters.concat(upperCasedCharacters) 
    };
    if (confirm("Click OK to include lower case characters")) {
       allCharacters = allCharacters.concat(lowerCasedCharacters) 
      };
    if (confirm("Click OK to include numeric characters")) { 
      allCharacters = allCharacters.concat(numericCharacters) 
    };
    if (confirm("Click OK to include special characters")) {
      allCharacters = allCharacters.concat(specialCharacters) 
    };
  //check if no option was selected
    if (allCharacters.length === 0) {
    alert("You must select at least one option from the prompt!")
    return
    }
    console.log(allCharacters);
    console.log(charNum);
    getRandom();
  }



// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < charNum; i++) {
      // console.log("----------");
      // console.log(allCharacters[i]);
      newPassword = newPassword + allCharacters[Math.floor(Math.random() * allCharacters.length)];
      // console.log("-----------");
      // console.log(newPassword);
    }
}

// Function to generate password with user input
function generatePassword() {
      getPasswordOptions();
    return newPassword;
  
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
