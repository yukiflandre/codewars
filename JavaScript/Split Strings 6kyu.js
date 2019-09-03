// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

//Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    if(!str) return []
    const arr = str.split("")
    const result = []
    for(let i=0;i<arr.length;i=i+2){
        if(arr[i+1] == undefined){
            arr[i+1] = '_'
        }
        result.push(arr[i]+arr[i+1])
    }
    return result
}

function solution(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
}
console.log(solution('abcdef'))