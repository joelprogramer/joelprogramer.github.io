const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgissningar = 0;

console.log("slumptalet: " + slumptal)

function gissaTal(){
console.log("click")

let textfelt_gissa =document.getElementById("gissa").value;
let gissa_int = Number(textfelt_gissa);
let vinn = false;
let p_svar = document.getElementById("p_svar");

if (antalgissningar < 3) {
    if (slumptal === gissa_int){
        console.log("RÄTT! antalgissningar= $(antalgissningar)");
        vinn = true;
        p_svar.innerHTML= "you're a winner";
        antalgissningar = 3;

    }
    else {
        console.log('FEL! antalgissningar= $(antalgissningar)');

        if (antalgissningar === 2)
        p_svar.innerHTML='LOOSER!';
        else
        //p_svar.innerHTML= (textfelt_gissa)+ ' är FEL! gissning nr ' +$(antalgissningar+1)+ ' av 3';
        p_svar.innerHTML=(`${textfelt_gissa} är FEL! gissning nr ${antalgissningar+1} av 3 `)

        document.getElementById("gissa").value="";
        document.getElementById("gissa").focus();
    }
    antalgissningar++;
}
else{
    p_svar.innerHTML='LOOSER!';
}
}
