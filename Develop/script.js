// Assignment code here
// javascript error : generatePassword is not defined.

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // targets generate ID 

function generatePassword() {
    console.log("test")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // there is no generatePassword 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password; //displays it onto the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when someone clicks the button it will call the writePassword function
