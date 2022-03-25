// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialSymArray = ["!","@","#","$","%","^","&","*","(",")","-","+"];
var numbersCharArray = ["1","2","3","4","5","6","7","8","9","0"];
var upperChosen = false;
var lowerChosen = false;
var numberChosen = false;
var specialChosen = false;
var validChar = [];
var passLength = 0;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passLength = window.prompt("How long would you like your password? It must be between 8 and 128 characters");

  if(!passLength) {
    alert("Please enter a number between 8 and 128 characters");
    return generatePassword();
  }
  else if (passLength < 8 || passLength > 128) {
    alert("Your password must be at least 8 characters, try again.");
    return generatePassword();
  }
  else {
    passLength = parseFloat(passLength);
    askCharacters();
    generateArray();
    generateFinalPassword(passLength);
  }
}

function askCharacters() {
 do {
   upperChosen = window.confirm("Would you like password to include uppercase letters?");
   lowerChosen = window.confirm("Would you like password to include lowercase letters?");
   numberChosen = window.confirm("Would you like password to include numbers?");
   specialChosen = window.confirm("Would you like password to include special characters?");

   if (!upperChosen && !lowerChosen && !numberChosen && !specialChosen) {
     window.alert("You must choose at least one character to be include in your password. Try to do it correctly this time please.");
     return askCharacters();
   }
 }
while (!upperChosen && !lowerChosen && !numberChosen && !specialChosen);
}

function generateArray() {
  var validChar = [];
  if(upperChosen) {
    validChar = validChar.concat(upperCaseArray[Math.floor(Math.random() * 26)])
    console.log(validChar)
  }

  if(lowerChosen) {
    validChar = validChar.concat(lowerCaseArray[Math.floor(Math.random() * 26)])
    console.log(validChar)
  }

  if(numberChosen) {
    validChar = validChar.concat(numbersCharArray[Math.floor(Math.random() * 10)])
    console.log(validChar)
  }

  if(specialChosen) {
    validChar = validChar.concat(specialSymArray[Math.floor(Math.random() * 16)])
    console.log(validChar)
  }
}

function generateFinalPassword(passLength) {
  var finalPassword;
  for (let i = 0; i < passLength; i++) {
    finalPassword = Math.floor(Math.random() * validChar.length);
  }
  console.log(finalPassword)
  return finalPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}

