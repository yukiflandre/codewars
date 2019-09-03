// Given a positive integer N, return the largest integer k such that 3 ^ k < N.

// For example,

// largestPower(3) = 0
// largestPower(4) = 1
function largestPower(n) {
    return 3 ** parseInt(Math.pow(n, 1 / 3)) < n ? parseInt(Math.pow(n, 1 / 3)) : parseInt(Math.pow(n, 1 / 3)) - 1
}
largestPower(3)