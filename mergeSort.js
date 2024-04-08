// fibonacci merge sort
function mergeSort(arr) {

    /* 
    find mid point of arr

    if lowest < highest -- arr.length >= 2
        f(low, midpoint)
        f(midpoint + 1, high)
        merge(both arrays)
    
    */


    let low = 1
    let high = arr.length
    let result = []
    
    if (low < high) {
        let mid = high / 2
        let left = arr.slice(0,mid)
        let right = arr.slice(mid,high)

        while (left.length > 1) {
            return mergeSort(left)
        }

        while (right.length > 1) {
            return mergeSort(right)
        }

        return [left,right]
    }

    // return result

}

let testArr = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(testArr))
// [0, 1, 1, 2, 3, 5, 8, 13]