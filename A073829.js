previousFactorial = {n: 0n, v: 1n}
function factorial(n) {
    if (previousFactorial.n === n-1n) {
        previousFactorial = {n, v: previousFactorial.v * n}
        return previousFactorial.v
    }
    let r = 1n
    for (let i = 1n; i <= n; i++) r *= i
    previousFactorial = {n, v: r}
    return r
}

function A073829(n) {
    return 4n * (factorial(n-1n) + 1n) + n
}


function calcMax(func, start=1n) {
    let r = []
    let n = start
    while ((r.at(-1) ?? 0n).toString().length + n.toString().length <= 999) {
        r.push(func(n))
        n++
    }
    r.pop()
    return r
}

calcMax(A073829)