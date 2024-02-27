let love = document.getElementById("love")
let answer = document.getElementById("answer")
let loveInput = document.getElementById("loveInput")
let finalAnswer = document.getElementById("finalAnswer")


function looping() {
    answer.innerHTML = ""
    let petalCount = Number(loveInput.value)
    console.log(petalCount)
    for (let i = 0; i < petalCount; i++) {
        let newP = document.createElement("p")
        if (i % 2== 0 ){
            newP.innerHTML= "älskar"
            console.log("älskar")
            finalAnswer.innerHTML = "Grattis du älskar dig själv"
        }else {
            newP.innerHTML= "älskar inte"
            console.log("älskar inte")
            finalAnswer.innerHTML = "du älskar dig inte"
        }
       answer.appendChild(newP)
    }
}

