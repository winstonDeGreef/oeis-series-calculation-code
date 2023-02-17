function checkA127821(n) {
    let k = 1
    while (k < 1_000_000_000) {
        if (k % 1_000_000 === 0) console.log(k)
        let r = (13 ** k) % k
        if (r === n) return k
        k++
    }
}