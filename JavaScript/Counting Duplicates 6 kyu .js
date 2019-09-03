// Count the number of Duplicates
// Write a function that will return the count of distinct case -insensitive alphabetic characters and numeric digits that occur more than once in the input string.The input string can be assumed to contain only alphabets(both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text) {
    text = text.toLowerCase().split("")
    let result = 0 //初始化结果 
    //计算数组中每个元素出现的次数，通过Object.values数组化reduce函数计算的对象结果
    const objArr = Object.values(text.reduce((all_n, n) => {
        n in all_n ? all_n[n]++ : all_n[n] = 1
        return all_n
    }, {}))
    //循环数组，其重复的元素都记为1（无论该元素重复多少次都只记一次，未重复记0）
    objArr.forEach(ele => {
        if(ele == 1){
            ele = 0
        }else{
            ele = 1
        }
        result += ele
    })
    return result
}
console.log(duplicateCount(""))