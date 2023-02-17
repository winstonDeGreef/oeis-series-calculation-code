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

function A360699(n) {
    return sum(0n, n, (k) => {
        return multIntegerPow(
            binomial(k, n-2n*k),
            k,
            n-2n*k
        )
    })
}

function multIntegerPow(n, b, e) {
    if (e > 0n) return n * b ** e
    else return n / b ** -e
}