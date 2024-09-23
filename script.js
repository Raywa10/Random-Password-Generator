const passwordBox = document.getElementById("password");
const length = 12;//password length

//-----------different characters that is allowed in the password---
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol = "@#%^&*()_+~|}{][></-=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password ="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];// math.floor is used to roundoff the number
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    // Math.random() in JavaScript always generates a random decimal number between 0 (inclusive) and 1 (exclusive). This means the value will always be:
   //Greater than or equal to 0 ,Less than 1
   




// We want our password to have a length of 12 (as defined by `const length = 12`).
// Initially, we generate only 4 characters (one from each set: upperCase, lowerCase, number, symbol).
// To reach a total of 12 characters, we use a `while` loop to randomly select additional characters
// from the `allChars` string until the password reaches the desired length of 12.
   while (length> password.length){
    password += allChars [Math.floor(Math.random() * allChars.length)];
}
passwordBox.value =password;
}

function copyPassword(){
    passwordBox.select();// Selects the text inside the input field (passwordBox).
    document.execCommand("copy");//Copies the selected text to the clipboard.
}
