// Assignment code here
// javascript error : generatePassword is not defined.

var passwordLength = 8;
var choiceArr = [];

var specialOptions = ["!", "#", "$", "%", "~", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "|"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // targets generate ID in html

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // there is no generatePassword 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password; //displays it onto the screen

}

function generatePassword() {
    console.log("test")

    return "Password test";
}

function userPrompts () {
    passwordLength = prompt("How many characters would you like your password to contain?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when someone clicks the button it will call the writePassword function
