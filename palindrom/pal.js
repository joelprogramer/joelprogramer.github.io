let wordInput = document.getElementById("text-input");
let checkWord = document.getElementById("check");
let reverseWord = document.getElementById("reverse-word");
let answer = document.getElementById("svar");

let output = "";

function reverse() {
  output = "";

  if(wordInput.value.length < 2){
    answer.innerHTML = "Du måste skriva mer än 1 bokstav"
    return
  }

  for (let i = wordInput.value.length - 1; i >= 0; i--) {
    output += wordInput.value[i];
  }
    
  reverseWord.innerHTML = output;
   


  if (wordInput.value == output) {
        answer.innerHTML = "Grattis det är en palindrom";
    } else {
        answer.innerHTML = "Det är inte en palindrom din sopa";
  }
  
}
