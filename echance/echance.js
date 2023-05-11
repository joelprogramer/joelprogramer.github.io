class Pengar{
    constructor(antal, pengasort){
        this.antal = antal
        this.pengasort = pengasort
    }

}


/**
 * exChance
 * in: belop som ska växlas, Svalör på sedel
 * out: antal sedlar eller mynt
 */
function exChance(belop, sedel){
    return Math.floor(belop / sedel)
}

/**
 * getExChangeArray()
 * inbetalt belop
 * out: array innehåller antal mynt i varje valör
 */

function getExChangeArray(inbetalning, priset){

    let antal_mynt = 0
    let pengar_tilbaka

    sedlar_mynt_array = []

    //500---------------------------------
    pengar_tilbaka = inbetalning - priset
antal_mynt = exChance(pengar_tilbaka, 500)

console.log(`antal= ${antal_mynt}`)

}

const input_pris = document.getElementById("pris");
const input_inbet = document.getElementById("inbet");

const svardiv = document.getElementById("svar_div")

const kalkyleraknapp = document.getElementById("kalk_knapp")
kalkyleraknapp.addEventListener("click", kalkyleraClick)

function kalkyleraClick(e){

    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)

    getExChangeArray(t_inbet, t_pris)
    //console.log(`klick`)
}
