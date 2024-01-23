const form = document.getElementById("gissning")
const kod = document.getElementById("koden");

let koden = generateCode();
let hiddenCode = hideCode(koden);

allaGissningar = [];

function generateCode(){
    let aiGuess = [];
    while(aiGuess.length<4) {
        let newNumber = Math.floor(Math.random() * 10).toString();
        if (!aiGuess.includes(newNumber)){
            aiGuess.push(newNumber)
        }
    }
    return aiGuess;
}

function hideCode(code){
    let newList = []
    code.forEach(element => {
        newList.push("x")
    });
    return newList
}

function gissaKod() {
  let nyaKoden = [];
  allaGissningar.push(form.value);
  for (let i = 0; i < koden.length; i++) {
    ärGissat = false;
    for (let y = 0; y < allaGissningar.length; y++) {
        if (koden[i] == allaGissningar[y]){
            nyaKoden.push(koden[i]);
            console.log(nyaKoden);
            ärGissat = true;
        }
    }
    if (!ärGissat) {
      nyaKoden.push("x")
    }
  }
  updateText(nyaKoden);
  console.log(nyaKoden);
}

function updateText(nyaKoden) {
    kod.innerHTML = ""
    for(i=0;i<nyaKoden.length;i++){
        kod.innerHTML += nyaKoden[i];
        if(i != nyaKoden.length -1){
            kod.innerHTML += "-"
        }
    }
}

form.addEventListener("text", function (event) {
  event.preventDefault();
  gissaKod();
});

updateText(hiddenCode);