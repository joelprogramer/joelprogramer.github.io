const a = document.getElementById("inputA")
const b = document.getElementById("inputB")
const c = document.getElementById("inputC")
const result = document.getElementById("result")

function isValidPyth () {
    if (Math.pow(a.value, 2)+ Math.pow(b.value, 2) == Math.pow(c.value, 2) ) {
        console.log("test")
        result.innerHTML = "det är ju rätt"
    } else {
        result.innerHTML = "du har fel"
    }
}

