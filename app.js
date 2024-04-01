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