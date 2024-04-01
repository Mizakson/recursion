// non recursive fibonacci sequence
function fibs(num) {

    const arr = [0, 1]

    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    return arr
}

// console.log(fibs(8))
// [0, 1, 1, 2, 3, 5, 8, 13]


// recursive fibonacci sequence without array in solution
function noArrFibsRec(num) {
   if (num == 0) return 0
   if (num == 1) return 1
   return noArrFibsRec(num - 1) + noArrFibsRec(num - 2)
}

console.log(noArrFibsRec(0))
console.log(noArrFibsRec(1))
console.log(noArrFibsRec(2))
console.log(noArrFibsRec(8))
// [0, 1, 1, 2, 3, 5, 8, 13]