let fibbonacciSaved = [0n, 1n]
function fibbonacci(n) {
    if (typeof fibbonacciSaved[n] !== "bigint") fibbonacciSaved[n] = fibbonacci(n-1n) + fibbonacci(n - 2n)
    return fibbonacciSaved[n]
}

function A057078(n) {
    return [1n, 0n, -1n][n % 3n]
}



function A360705(n) {
    if (n % 2n === 0n) return A057078(n / 2n)
    else return fibbonacci(n+1n)
}