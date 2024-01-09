let total = 0;
let isPlayer_1 = true;
const result = document.getElementById("result");
const playerInput = document.getElementById("input");

function calc() {
  let number = Number(playerInput.value);
  if (number > 0 && number < 4) {
    total += number;
     if (total > 21) {
    result.innerHTML = "du förlorade din sopa";
  } else if (total == 21) {
    if (isPlayer_1) {
      result.innerHTML = "grattis du vann spelare 1";
    } else {
      result.innerHTML = "grattis du vann spelare 2";
    }
  } else {
    isPlayer_1 = !isPlayer_1;
    if (isPlayer_1) {
      result.innerHTML = `${total} din tur spelare 1`;
    } else {
      result.innerHTML = `${total} din tur spelare 2`;
    }
  }
  }
  else {
    result.innerHTML = "skriv ett godkännt nummer"
  }
}


function reset() {
    total = 0
    isPlayer_1 = true
    result.innerHTML = "";
    playerInput.value = "";
}