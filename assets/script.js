// Assignment code here
//var password = document.getElementById("password");
//var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var passwordLength = 12;
//var password = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function() {

const userInput = prompt('Choose length of password between 8 - 128 characters');
if (userInput >= 8 ) {
  userInputTwo = prompt('Select character types to include in your password');
}
console.log(userInput);

//if (response )
});