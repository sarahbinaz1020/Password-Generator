// Assignment Code

// Retreive a reference to the button with an id of generate
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = ["!", "@", "#", "$", "%", "&", "?" ]

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]

// Array of uppercase characters to be included in password
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

// Array of lowercase characters to be included in password
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

//Prompt user for password length
var userPassLength = prompt("Pick a password length between 8 and 128 characters"); 

// if (userPassLength >8 && userPassLength <128) {}

// Using a confirm prompt the user for special characters

var userSpecial = confirm ("Do you want special characters?");

// // Using a confirm prompt the user for numeric characters

var userNumeric = confirm ("Do you want numbers?" );

// // Using a confirm prompt the user for uppercase characters

var userUppercase = confirm ("Do you want uppercase values?");

// // Using a confirm prompt the user for lowercase characters

var userLowercase = confirm ("Do you want lowercase values?");

//set up the array
var bigArrayOfPossibilities = [ ];

if (userSpecial === true){
  // add stuff from an array to a different array
  bigArrayOfPossibilities.push(userSpecial);
  } 
if (userNumeric === true) {
  bigArrayOfPossibilities.push(userNumeric);
  } 
if (userUppercase === true) {
  bigArrayOfPossibilities.push(userUppercase);
  } 
if (userLowercase === true) {
  bigArrayOfPossibilities.push(userLowercase);
  }
//Algo for password generation goes below

var generatePassword = bigArrayOfPossibilities[Math.floor(Math.random() * bigArrayOfPossibilities.length)];

// run 
function generatePassword() {
for(let i = 0; i < userPassLength.length; i++); 
return password.slice(0, userPassLength);
} 
// var writePassword = generatePassword;

// Write password to the #password input
// function writePassword() {
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
// }

//return the build password
// return "Hello I am the password placeholder :)";   

// return "Password should go here";
// Add event listener to generate button
generateBtn.addEventListener("click", passwordText);

