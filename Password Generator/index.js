

let generateBtn = document.getElementById('generatebtn');

const keys ={
    upperCase : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowerCase : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers : ["0","1","2","3","4","5","6","7","8","9"],
    symbols: ["!","@","#","$","%","^","&","*"]
}


const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function numbers() {
    return keys.numbers[Math.floor(Math.random() * keys.numbers.length)];
  },
  function symbols() {
    return keys.symbols[Math.floor(Math.random() * keys.symbols.length)];
  }
];


function createPassword() {

  const passwordBox = document.getElementById("password");
  const length = document.getElementById("length").value;
  console.log(length);
  
  if (length == false) {
    alert("Enter Length");
  }
  let password = "";
  while (length > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name);
    if (isChecked) {
      password += keyToAdd();
    }
  }
  console.log(password);
  passwordBox.innerText = password;
}

generateBtn.addEventListener('click',createPassword);
