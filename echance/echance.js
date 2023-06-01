class Pengar {
    constructor(antal, pengasort) {
        this.antal = antal
        this.pengasort = pengasort
    }

}


/**
 * exChance
 * in: belop som ska växlas, Svalör på sedel
 * out: antal sedlar eller mynt
 */
function exChance(belop, sedel) {
    return Math.floor(belop / sedel)
}

/**
 * getExChangeArray()
 * inbetalt belop
 * out: array innehåller antal mynt i varje valör
 */

function getExChangeArray(inbetalning, priset) {

    let antal_mynt = 0
    let pengar_tilbaka

    sedlar_mynt_array = []

    //500---------------------------------
    pengar_tilbaka = inbetalning - priset
    antal_mynt = exChance(pengar_tilbaka, 500)
    pengar_tilbaka = pengar_tilbaka % 500


    let t_pengar = new Pengar(0, 500)

    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)
    console.log(`t_pengar= ${antal_mynt}`)

    //100---------------------------------
    antal_mynt = exChance(pengar_tilbaka, 100)
    pengar_tilbaka = pengar_tilbaka % 100


    t_pengar = new Pengar(0, 100)



    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)

    //50---------------------------------
    antal_mynt = exChance(pengar_tilbaka, 50)
    pengar_tilbaka = pengar_tilbaka % 50


    t_pengar = new Pengar(0, 50)



    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)


    //20---------------------------------
    antal_mynt = exChance(pengar_tilbaka, 20)
    pengar_tilbaka = pengar_tilbaka % 20


    t_pengar = new Pengar(0, 20)



    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)


    //10---------------------------------
    antal_mynt = exChance(pengar_tilbaka, 10)
    pengar_tilbaka = pengar_tilbaka % 10


    t_pengar = new Pengar(0, 10)



    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)



    //5---------------------------------
    antal_mynt = exChance(pengar_tilbaka, 5)
    pengar_tilbaka = pengar_tilbaka % 5


    t_pengar = new Pengar(0, 5)



    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)



    //2---------------------------------
    antal_mynt = exChance(pengar_tilbaka, 2)
    pengar_tilbaka = pengar_tilbaka % 2


    t_pengar = new Pengar(0, 2)



    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)


    //1---------------------------------
    antal_mynt = exChance(pengar_tilbaka, 1)
    pengar_tilbaka = pengar_tilbaka % 1


    t_pengar = new Pengar(0, 1)



    if (antal_mynt > 0) {
        t_pengar.antal = antal_mynt
    }
    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)

        return sedlar_mynt_array


}





const input_pris = document.getElementById("pris");
const input_inbet = document.getElementById("inbet");

const svardiv = document.getElementById("svar_div")

const kalkyleraknapp = document.getElementById("kalk_knapp")
kalkyleraknapp.addEventListener("click", kalkyleraClick)

function kalkyleraClick(e) {

    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)

    if(t_pris > t_inbet){
        alert("varan kostar mer än du betalat")

    }
else {
   let  exchange_array = getExChangeArray(t_inbet, t_pris)

svardiv.innerHTML = `<br><hr><h3>växel tillbaka</h3>
femhundringar = ${exchange_array[0].antal} st <br>
100 lappar = ${exchange_array[1].antal} st <br>
50 lappar = ${exchange_array[2].antal} st <br>
20 lappar = ${exchange_array[3].antal} st <br>
10 lappar = ${exchange_array[4].antal} st <br>
5 lappar = ${exchange_array[5].antal} st <br>
2 lappar = ${exchange_array[6].antal} st <br>
1 lappar = ${exchange_array[7].antal} st <br>
`


}

    

    //console.log(`klick`)
}
