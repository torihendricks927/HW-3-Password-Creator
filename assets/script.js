// Assignment Code
var generateBtn = document.querySelector("#generate");
//created variables for all selected character options
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialSymArray = ["!","@","#","$","%","^","&","*","(",")","-","+"];
var numbersCharArray = ["1","2","3","4","5","6","7","8","9","0"];
var upperChosen = "";
var lowerChosen = "";
var numberChosen = "";
var specialChosen = "";
var storeChar = [];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passLength = window.prompt("How long would you like your password? It must be between 8 and 128 characters");
//secure measure to make sure the amount of characters is correct
  if(!passLength) {
    alert("Please enter a number between 8 and 128 characters");
    return generatePassword();
  }
  else if (parseInt(passLength < 8 || passLength > 128)) {
    alert("Your password must be at least 8 characters, try again.");
    return generatePassword();
  }
  else {
  }

//popup for person to decide what to include in password
   upperChosen = window.confirm("Would you like password to include uppercase letters?");
   lowerChosen = window.confirm("Would you like password to include lowercase letters?");
   numberChosen = window.confirm("Would you like password to include numbers?");
   specialChosen = window.confirm("Would you like password to include special characters?");

   if(!upperChosen && !lowerChosen && !numberChosen && !specialChosen) {
     alert("You must choose add least one option. Try again.");
   }

 //part of function that concat random character choices
  if (upperChosen) {
    storeChar = storeChar.concat(upperCaseArray[Math.floor(Math.random() * 26)])
    console.log(storeChar)
  }
  if (lowerChosen) {
   storeChar = storeChar.concat(lowerCaseArray[Math.floor(Math.random() * 26)])
    console.log(storeChar)
  }
  if (numberChosen) {
    storeChar = storeChar.concat(numbersCharArray[Math.floor(Math.random() * 10)])
    console.log(storeChar)
  }
  if (specialChosen) {
    storeChar = storeChar.concat(specialSymArray[Math.floor(Math.random() * 16)])
    console.log(storeChar)
  }
// created variable to store characters in loop that are chosen for password
  var finalPassword = "";
//creating the loop to go through arrays and create random password
  for (var i = 0; i < passLength; i++) {
    finalPassword += storeChar[Math.floor(Math.random() * storeChar.length)];
  }
  console.log(finalPassword)
return finalPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}
  


