function A014050(n) {
    return (n ** 2n + 1n) ** n
}
let i = 0n
let r = []
while ((r.at(-1)?.toString() ?? "").length < 1000) {
    r.push(A014050(i))
    i++
}