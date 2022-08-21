let generateBtn = document.getElementById('generatebtn')

const keys ={
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    numbers : "0123456789",
    symbols: "!@#$%^&*"
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
  const upper = document.getElementById("upperCase");
  const lower = document.getElementById("lowerCase");
  const number = document.getElementById("number");
  const symbol = document.getElementById("symbol");
  if (upper + lower + number + symbol === 0) {
    alert("Please check atleast one box!");
    return;
  }
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;
}

generateBtn.addEventListener('click',createPassword());
