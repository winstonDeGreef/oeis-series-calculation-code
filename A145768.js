// NOTE: bigint is required for calculating A145768 as xor only works on numbers with 2 bits, but none of the numbers in A145768 are max than the safe integer (not the first 50 million) thus when calculating the square, normal js numbers can be used

let A145768 = [0n]
let current = 0n
let i = 1n
for (; i < 50_000_000n; i++) {
    current ^= i ** 2n
    A145768.push(current)
}

let A145829 = []
for (let i = 0; i < A145768.length; i++) {
    let n = Number(A145768[i])
    if (i % 100_000 === 0) console.log(i) 
    let sqrt = Math.sqrt(n)
    if (Math.round(sqrt) ** 2 === n) A145829.push(sqrt)
}

function bigintMax(n1, n2) {
    if (n1>n2) return n1
    return n2
}

function largeArrayMax(arr) {
    let r = arr[0]
    for (let num of arr) {
        r = bigintMax(r, num)
    }
    return r
}


console.log("the largest number in calculated in A145768 is: ", largeArrayMax(A145768), "  If this is more than", Number.MAX_SAFE_INTEGER, "the calculations may be incorrect")