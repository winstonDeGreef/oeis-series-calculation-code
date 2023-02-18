function A360504(n) {
    let r = n.toString(3)
    for (let k = n-1n; k > 0; k--) {
        r = k.toString(3) + r + k.toString(3)
    }
    return r
}