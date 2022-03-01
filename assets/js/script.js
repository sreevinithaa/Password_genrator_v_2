// Assignment Code
var generateBtn = document.querySelector("#generate");


var password_length;
var includeUpperCase;
var includeLowerCase;
var includeNumber;
var includeSymbol;

// assign charector set to constant variable
const UpperCaseValue = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
const LowerCaseValue = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const Symbols = "~!@#$%^&*()?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//this method helps to check the value is number
function isNumeric(value) {
  return /^\d+$/.test(value);
}

//this method helps to check the value empty of null
function isEmpty(value) {
  return value == null || value.length === 0;
}

//Which will generate password based to cretieria.
function generatePassword()
{
  var charset = "";
  var password = "";
  password_length = window.prompt("Enter the length of password at least 8 characters and no more than 128 characters");
  if(isNumeric(password_length)){
    if(parseInt(password_length)>=8&&parseInt(password_length)<=128)
    {
      includeUpperCase=window.confirm("Do you wish to include Uppercase in your password ?");
      includeLowerCase=window.confirm("Do you wish to include Lowercase in your password ?");
      includeNumber=window.confirm("Do you wish to include numbers in your password ?");
      includeSymbol=window.confirm("Do you wish to include symbols in your password ?");

      console.log(password_length,includeUpperCase,includeLowerCase,includeNumber,includeSymbol)
      charset=GenerateCharectorSet();
      console.log(charset);
      if (isEmpty(charset)) {
        alert("Please check atleast on option!");
        return;
      }
      
      for (var i = 0; i < parseInt(password_length); i++) {
        var random_index = Math.floor(Math.random() * charset.length);
    
        password = password + charset.charAt(random_index);
      }
      console.log(password);
      return password;
    }
   else{
    alert("Invalide password length!")
   }
   }else{
    alert("Invalide password length!")
   }
   return password;
}

//Generate charector set based on selected criteria
function GenerateCharectorSet() {
  var charset = "";
  
  
  if (includeUpperCase) {
    charset = charset + UpperCaseValue;
  }
  if (includeLowerCase) {
    charset = charset + LowerCaseValue;
  }
  if (includeNumber) {
    charset = charset + Numbers;
  }
  if (includeSymbol) {
    charset = charset + Symbols;
  }
  return charset;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
