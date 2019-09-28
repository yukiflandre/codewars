// An array is circularly sorted if the elements are sorted in ascending order, but displaced, or rotated, by any number of steps.

// Complete the function/method that determines if the given array of integers is circularly sorted.

// Examples
// These arrays are circularly sorted(true):

// [2, 3, 4, 5, 0, 1]-- > [0, 1] + [2, 3, 4, 5]
// [4, 5, 6, 9, 1]-- > [1] + [4, 5, 6, 9]
// [10, 11, 6, 7, 9]-- > [6, 7, 9] + [10, 11]
// [1, 2, 3, 4, 5]-- > [1, 2, 3, 4, 5]
// [5, 7, 43, 987, -9, 0]-- > [-9, 0] + [5, 7, 43, 987]
// While these are not(false):

// [4, 1, 2, 5]
// [8, 7, 6, 5, 4, 3]
// [6, 7, 4, 8]
// [7, 6, 5, 4, 3, 2, 1]

// function isCircleSorted(arr) {
//     const arrMin = Math.min(...arr)
//     const index = arr[0] == arrMin && arr[arr.length - 1] == arrMin ? arr.lastIndexOf(arrMin) : arr.indexOf(arrMin)
//     const newArr = [...arr.slice(index), ...arr.slice(0, index)]
//     for (let i = 0; i < newArr.length; i++) {
//         if (i + 1 == newArr.length) {
//             break
//         }
//         if (newArr[i] > newArr[i + 1]) return false
//     }
//     return true
// }

function isCircleSorted(arr) {
    let jumped = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[(i + 1) % arr.length]) {
            if (jumped) {
                return false;
            }
            jumped = true;
        }
    }
    return true;
}
// function isCircleSorted(arr) {
//     var a = arr.slice().sort((x, y) => x - y) + "", b = "" + arr + "," + arr;
//     return b.indexOf(a) > -1;
// }
console.log(isCircleSorted([4,5,6,1,2]))

