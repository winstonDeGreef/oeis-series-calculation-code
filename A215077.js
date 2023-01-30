// write some javasript code which uses bigint to compute a(n) = Sum_{k=0..n} binomial(n,k)*Sum_{j=1..k} j^n;
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

function sumOfPowers(n, k) {
    let result = 0n;
    for (let i = 1n; i <= k; i++) {
        result += i ** n;
    }
    return result;
}

function A215077(n) {
    let result = 0n;
    for (let k = 0n; k <= n; k++) {
        result += binomial(n, k) * sumOfPowers(n, k);
    }
    return result;
}

let result = []
let i = 0n
while ((result.at(-1)?.toString() ?? "").length < 1000) {
    result.push(A215077(i))
    i++
}
result.pop()// remove the last result that has length larger than 1000