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

let upper = document.getElementById('upperCase').checked;
let lower = document.getElementById('lowerCase').checked;
let number = document.getElementById('number').checked;
let symbol = document.getElementById('symbol').checked;

function createPassword() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
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