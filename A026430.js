// relies on b001285.js
function A026430(n) {
    return sumArray(b001285.slice(0, Number(n)))
}

function sumArray(arr) {
    let r = 0
    for (let v of arr) r += v
    return r
}