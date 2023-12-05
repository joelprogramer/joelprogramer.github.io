let rndInt = Math.floor(Math.random() * 3)
console.log(rndInt)

const jaLista = ["ja","aspelut","Yes Sir","deffenetivft"]
const kangeLista =  ["vi får se","vet inte","jag återkommer till det","ingen anning"]
const nejLista = ["Nej!","Aspelut inte","dra åt HELVETE gubbjävel!"]

if (rndInt == 0) {
    console.log(jaLista [Math.floor(Math.random()*jaLista.length)])
}
else if (rndInt == 1){
    console.log(kangeLista [Math.floor(Math.random()*kangeLista.length)])
}
else {
    console.log(nejLista [Math.floor(Math.random()*nejLista.length)])
}