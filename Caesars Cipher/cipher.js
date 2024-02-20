const ordet = document.getElementById("text-input");
const krypter = document.getElementById("number-input");
const incryptText = document.getElementById("incryptedText");

const alfabet = Array.from("abcdefghijklmnopqrstuvwxyzåäö");

let input = "";
let steps = 0;

function cipher() {
  let output = "";
  input = ordet.value;
  steps = Number(krypter.value);

  console.log(input.length)

  for (i = 0; i < input.trim( ).length; i++) {
    if (input[i] == " ") {
        output += " "
    } else {
        let newIndex = alfabet.indexOf(input[i]) + steps;
        output += alfabet[newIndex];
    }
        
    

  }

  incryptText.innerHTML = output;


  console.log( input.trim())
  console.log( output)
}

