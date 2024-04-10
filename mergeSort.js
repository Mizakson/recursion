// fibonacci merge sort
function mergeSort(arr) {

    if (arr.length < 2) return arr

    else {
        let mid = Math.ceil(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        return merge(mergeSort(left), mergeSort(right))
    }

}

function merge(l, r) {

    let result = []

    while (l.length > 0 && r.length > 0) {
        
        // if left > right -- push right to result
        // else push left to result

        l[0] > r[0]
        ? result.push(r.shift())
        : result.push(l.shift());
    }

    return [...result, ...l, ...r]

}

let testArr = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(testArr))
// [0, 1, 1, 2, 3, 5, 8, 13]