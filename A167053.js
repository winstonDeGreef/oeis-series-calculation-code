previousFactorial = {n: 1n, v: 1n}
function factorial(n) {
    if (n === 0n) return 1n
    if (previousFactorial.n > n) previousFactorial = {n: 1n, v: 1n}
    let r = previousFactorial.v
    for (let i = previousFactorial.n+1n; i <= n; i++) r *= i
    previousFactorial = {n, v: r}
    return r
}

function binarryGCD(a, b) {
    if (a < 0n) a = -a;
    if (b < 0n) a = -b;
  
    if (b > a) {
      var temp = a;
      a = b;
      b = temp;
    }
    while (true) {
      if (b == 0n) return a;
      a %= b;
      if (a == 0n) return b;
      b %= a;
    }
  }

function modA073829(n, mod) {
    let r = 4n
    for (let i = 1n; i < n; i++) {
        console.log(i)
        r *= i
        r = r % mod

    }
    return (4n + r + n) % mod// 4n * (factorial(n-1n) + 1n) + n
}

let c = 3n
function nnext(m) {
    return 1n + m + binarryGCD(
        m * (m+2n),
        modA073829(m, m * (m+2n))
    )
}

function calcMax(func, start=1n, itterative = false) {
    let r = []
    let n = start
    while ((r.at(-1) ?? 0n).toString().length + n.toString().length <= 999) {
        r.push(func(n))
        console.log(r.at(-1))
        if (itterative) n = r.at(-1)
        else n++
    }
    r.pop()
    return r
}

// let n = 0n
// for (; n < 200n; n++) {
//     c = nnext(c)
//     console.log(n, c)
// }

