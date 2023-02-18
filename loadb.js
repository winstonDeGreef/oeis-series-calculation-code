const SERIES = ""
let s = document.body.innerText
let values = s.split("\n").filter(l => l.match(/^\d+ \d+$/)).map(line => line.split(/\s/)).map(line => line[1])
console.log("let b" + SERIES.slice(1) + " = JSON.parse('[" + values  + "]')")