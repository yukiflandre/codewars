// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) => 3  # Because 3 * 9 = 27, 2 * 7 = 14, 1 * 4=4
// # and 4 has only one digit.

//     persistence(999) => 4 # Because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126,
// # 1 * 2 * 6 = 12, and finally 1 * 2 = 2.

// persistence(4) => 0   # Because 4 is already a one - digit number.
//     persistence(39) # returns 3, because 3 * 9=27, 2 * 7=14, 1 * 4=4
// # and 4 has only one digit

// persistence(999) # returns 4, because 9 * 9 * 9=729, 7 * 2 * 9=126,
// # 1 * 2 * 6=12, and finally 1 * 2=2

// persistence(4) # returns 0, because 4 is already a one - digit number

//递归
function persistence(num) {
    return `${num}`.length == 1 ? 0 : 1 + persistence(`${num}`.split('').reduce((a, b) => a * b))
}
//利用while循环 
function persistence_1(num) {
    let i = 0;
    while (num.toString().length !== 1) {
        num = num.toString().split("").reduce((a, b) => a * b);
        i++;
    }
    return i;
}
console.log(persistence(88))

