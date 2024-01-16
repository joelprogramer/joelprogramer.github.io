const text = document.getElementById("textId");
const bottSvar = document.getElementById("bott_svar");
const vemVann = document.getElementById("vem_vann");
const point = document.getElementById("point");

let alt = ["sten", "sax", "påse"];
let playerPoints = 0;
let botPoints = 0;

function compare() {
  let playerGuess = text.value.toLowerCase();
  let aiGuess = alt[Math.floor(Math.random() * alt.length)];
  bottSvar.innerHTML = aiGuess;
  if (playerGuess == "sten" && aiGuess == "sax") {
    vemVann.innerHTML = "spelare vann omgången";
    playerPoints += 1;
    botPoints = 0;
  } else if (playerGuess == "sax" && aiGuess == "påse") {
    vemVann.innerHTML = "spelare vann omgången";
    playerPoints += 1;
    botPoints = 0;
  } else if (playerGuess == "påse" && aiGuess == "sten") {
    vemVann.innerHTML = "spelare vann omgången";
    playerPoints += 1;
    botPoints = 0;
  } else if (playerGuess == aiGuess) {
    vemVann.innerHTML = "det blev lika";
  } else {
    vemVann.innerHTML = "bott vann omgången";
    botPoints += 1;
    playerPoints = 0;
  }

  point.innerHTML = "spelare: " + playerPoints + " bot: " + botPoints;

  if (playerPoints>2) {
    alert ("spelare vann")
  }
  if (botPoints>2) {
    alert ("spelare vann")
  }
}
