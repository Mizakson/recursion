// fibonacci merge sort
function mergeSort(arr) {

/* 
helper function to sort a list

return mergeFunc(arr1,arr2)

*/
    let layer2, layer3
    function merge(arr1,arr2) {
        let arr3 = []
        return [arr1,arr2]
    }

    let left,right
    if (arr.length > 1) {
        
        let m = Math.floor(arr.length / 2)
        const [left,right] = [arr.slice(0,m),arr.slice(m,arr.length)]

        while (left.length > 1 && right.length > 1) {
            layer2 = [mergeSort(left),mergeSort(right)]
            return layer2
        }

        if ((left.length === 1) && (right.length === 1)) {
            layer3 = [left[0],right[0]]
            if (left > right) {
                layer3.reverse()
            }
            // console.log(layer3[0],layer3[1])
            return layer3
        }

    }

    return arr
    // return arr

}

let testArr = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(testArr))
// [0, 1, 1, 2, 3, 5, 8, 13]