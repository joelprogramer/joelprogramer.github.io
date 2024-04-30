let lista = [1,4,8,3,6,5]
let result = [0,0]

for (let i=0; i< lista.length; i++) {
    if(lista[i] % 2 == 0) {
        result[0]+=lista[i]
    }
    else {
        result[1]+=lista[i]
        
    }
    console.log(result)
}