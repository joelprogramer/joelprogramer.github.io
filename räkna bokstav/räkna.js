let input = document.getElementById('input-text')




let dictionary = {}

function visaSvar() {
    dictionary = {}
    let sentence = input.value.toUpperCase()
    for (let i = 0; i< sentence.length; i++) {
        if (dictionary[sentence[i]] != undefined) {
            dictionary[sentence[i]] += 1;
        } else {
            dictionary[sentence[i]] = 1;
        }
    }
    console.log(dictionary)
}
