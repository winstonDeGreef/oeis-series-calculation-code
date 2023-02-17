function A360502(n) {
    let r = ""
    for (let k = 1n; k <= n; k++) {
        r += k.toString(3)
    }
    return r
}