// fibonacci merge sort
function mergeSort(arr) {

    /* 
    find mid point of arr

    if lowest < highest -- arr.length >= 2
        f(low, midpoint)
        f(midpoint + 1, high)
        merge(both arrays)
    
    */
    let result = []
    let mid = Math.ceil(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    while (mid != 1) {
        return [mergeSort(left), mergeSort(right)]
    }

    return arr

}

let testArr = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(testArr))
// [0, 1, 1, 2, 3, 5, 8, 13]