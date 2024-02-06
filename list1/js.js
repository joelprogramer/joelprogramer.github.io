let list1 = [1,2,4,0,6,-5,-7,-3]
let posNum = []
let negNum = []


for (let i = 0; i < list1.length; i++) {
    if (list1[i] < 0) {
        negNum.push(list1[i])
    } else {
        posNum.push(list1[i])
    }
}