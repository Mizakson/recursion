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

// console.log(fibs(8))
// [0, 1, 1, 2, 3, 5, 8, 13]


// recursive fibonacci sequence solution
/* 
base:
if arr len = 0 return 0
if arr len = 1 return 1

recursive:
if arr len >= 2
prev = f(n -1) + f(n - 2)
arr.push(prev)
return arr

*/
function fibsRec(num) {

    if (num == 0) return [0]
    if (num == 1) return [0, 1]
    const arr = fibsRec(num - 1)
    // return copy of main arr (arr), next value is f(n-1) + f(n-2)
    // use of spread operator (...) to copy arr
    return [...arr, arr[num - 1] + arr[num - 2]]
    
}

console.log(fibsRec(8))
// [0, 1, 1, 2, 3, 5, 8, 13]