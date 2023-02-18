// requires b356133.js and b285953.js
function V(n) {
    if (n === 1) return 1
    return b285953[n]// this series has offset one, but the array does not. These counteract eachother and thus no offset needs to be specified
}

function A360139(n) {
    n = Number(n)
    return V(b356133[n-1])// same as in V, but now the definition does not call for an offset
}