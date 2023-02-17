function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

function binomial(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}
// min and max are inclusive
function sum(min, max, func) {
    let r = 0n
    for (let n = min; n <= max; n++) {
        r += func(n)
    }
    return r
}

function A360709(n) {
    if (n===0n) return 1n
    return sum(1n, n/3n, (k) => {
        return k ** (n-3n*k) * binomial(n-k*2n-1n, k-1n)
    })
}