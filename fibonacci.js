// non recursive fibonacci sequence
/* 
have an array of first two terms [0,1]

for loop
if the iterated value is less than the arg
return that many numbers in the fibonacci sequence
*/
function fibs(num) {
    var arr = [0, 1]

    for (let i = 2; i < num; i++) {
        let prev = arr[i - 1]
        let prevTwo = arr[i - 2]
        let next = prev + prevTwo
        arr.push(next)
    }

    return arr

}

console.log(fibs(8))
// [0, 1, 1, 2, 3, 5, 8, 13]


// recursive fibonacci sequence without array in solution
function fibsRec(num) {

}

// console.log(fibsRec(8))
// [0, 1, 1, 2, 3, 5, 8, 13]