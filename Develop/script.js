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

}

function userPrompts () {
    passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));

    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { //NaN --- not a number
        alert("Password length needs to be a number between 8 - 128 digits. Try again.");
        return false;
    }

   if (confirm("Click OK to confirm including special characters.")) {
    choiceArr = choiceArr.concat(specialOptions);
   }
   if (confirm("Click OK to confirm including numeric characters.")) {
    choiceArr = choiceArr.concat(numOptions);
   }
   if (confirm("Click OK to confirm including upperase characters.")) {
    choiceArr = choiceArr.concat(upperCase);
   }
   if (confirm("Click OK to confirm including lowercase characters.")) {
    choiceArr = choiceArr.concat(lowerCase);
   }
   return true;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when someone clicks the button it will call the writePassword function
