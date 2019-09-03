// A pair of gloves is constituted of two gloves of the same color.

// You are given an array containing the color of each glove.

// You must return the number of pair you can constitute.

// You must not change the input array.

//     Example :

// let myGloves = ['red', 'green', 'red', 'blue', 'blue'];
// numberOfPairs(myGloves) == 2;// red and blue

// let redGloves = ['red', 'red', 'red', 'red', 'red', 'red'];
// numberOfPairs(redGloves) == 3; // 3 red pairs
function numberOfPairs(gloves) {
    let count = 0
    // //方法1 首先分别算出重复元素的个数，组成数组
    Object.values(gloves.reduce((all_n, n) => {
        n in all_n ? all_n[n]++ : all_n[n] = 1
        return all_n
        //然后遍历这个数组
    }, {})).map(v => {
        //因为2个成一对，所以判断v是否为偶数，如果是偶数则直接除2，否则减一再除2
        v % 2 == 0 ? count += v / 2 : count += (v - 1)/2
    })
    return count
}
// 方法2 
function numberOfPairs(gloves) {
    // 首先给元素排序，使其相同的元素相邻
    gloves = gloves.sort();
    let count = 0;
    for (var i = 0; i < gloves.length; i++) {
        // 通过遍历，判断数组相邻元素是否相同
        if (gloves[i] === gloves[i + 1]) {
            count++ //相同就+1次
            i++ // 这个是为了跳过已经比对过的元素
        }
    }
    return count;
}
console.log(numberOfPairs(['red', 'green', 'red', 'blue', 'blue','red','blue']))