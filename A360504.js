function A360504(n) {
    let r = ""
    for (let k = 1n; k <= n; k++) {
        r = k.toString(3) + r + k.toString(3)
    }
    return r
}