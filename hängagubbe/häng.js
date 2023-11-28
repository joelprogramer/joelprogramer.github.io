const form = document.getElementById("text")
const svarText = document.getElementById("svar")
const ordText = document.getElementById("ordet")

let ordet = "tjena"
let gissaOrdetArray = Array.from(ordet)
let hemligaOrdetArray = hideTheWord(ordet)

allaGissningar = []

function hideTheWord(word) {
    ordArray = Array.from(word)
    gömdaOrdet = ""
    ordArray.forEach(element => {
        switch (element) {
            case " ":
                gömdaOrdet += "-"
                break;

            default:
                gömdaOrdet += "_"
                break;
        }
    });


    return gömdaOrdet
}



function gissaOrdet() {
    let nyaOrdet = ""
    allaGissningar.push(form.value)
    for(let i = 0; i < gissaOrdetArray.length; i++){
        ärGissat = false
        for(let y = 0; y <= allaGissningar.length; y++){
            switch (gissaOrdetArray[i]) {
                case allaGissningar[y]:
                    nyaOrdet += gissaOrdetArray[i]
                    console.log(nyaOrdet)
                    ärGissat = true
                    break;
            }
        }
        if (!ärGissat){
            switch (hemligaOrdetArray[i]) {
                case "-":
                    nyaOrdet += "-"
                    console.log(nyaOrdet)
                    break;
                case "_":
                    nyaOrdet += "_"
                    console.log(nyaOrdet)
                    break;
            }
        }
        
    }
    uText(nyaOrdet)
    console.log(nyaOrdet)
}

function uText(nyaOrdet) {
    ordText.innerHTML = nyaOrdet
}


form.addEventListener('text', function (event) {
    event.preventDefault();
    gissaOrdet();
});


ordText.innerHTML = hideTheWord(ordet)