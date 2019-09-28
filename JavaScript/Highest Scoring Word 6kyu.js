// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x) {
    const list = x.split(' ').map(r => [...r].map(n => n.charCodeAt(0)-96))
    const sum = list.map(v => v.reduce((p, c) => p + c,0))
    return x.split(' ')[sum.indexOf(Math.max(...sum))]
}

function high(s) {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0)
    );
    return s.split(' ')[as.indexOf(Math.max(...as))];
}

function high(x) {
    let arr = x.split(' '), numArr = []

    for (let i = 0; i < arr.length; i++) {
        let total = 0
        let letters = arr[i].split('')

        for (let j = 0; j < letters.length; j++) {
            total += letters[j].charCodeAt() - 96
        }
        numArr.push(total)
    }

    return arr[numArr.indexOf(Math.max.apply(null, numArr))]
}

console.log(high('what time are we climbing up the volcano'))

