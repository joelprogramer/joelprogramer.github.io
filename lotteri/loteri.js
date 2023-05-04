const svar_div = document.getElementById("svar_div");

const antal_vinster = document.getElementById("input_antal_vinster");

const vinster = ["gossedjur",
"monster",
"flak latitude 65",
"hellcat",
"lambo",
"snus",
"snaps",
"putin",
"råtto",
"gym kort NPC",
"vin Guld Kula",
"kommu manifest",
"robux",
]

function slumpaclick() {

    //console.log(`click ${antal_vinster.value}`)

    let vinst = `<h3> vinster; </h3>`
    let antalv = antal_vinster.value
    let int_antalv = parseInt(antalv)

    for (i=0; i<int_antalv; i++){
        let slumptal = Math.floor(Math.random() * 12)

        let t_vinst = vinster[slumptal]

        vinst += `<p> ${t_vinst} </p>`
    }

    svar_div.innerHTML = vinst
}