const SERIES = ""
const CODE = ""
const TYPE = "length"// | terms
const OFFSET = 0n
const UPTO_TERMS = 10_000
const UPTO_LENGTH = 999
func = 

terms = []
if (TYPE === "terms") {
    for (let n = 0n; n <= UPTO_TERMS; n++) {
        terms.push(func(n + OFFSET))
        console.log(n)
    }
} else if (TYPE === "length") {
    let n = 0n
    while ((terms.at(-1)?.toString() ?? "").length + n.toString().length <= UPTO_LENGTH) {
        terms.push(func(n + OFFSET))
        n++
        console.log(n, (terms.at(-1)?.toString() ?? "").length + n.toString().length)
    }
    terms.pop()
} else {
    throw "invalid type"
}

// creates the b file itself
function createFile(code, terms, offset = 0) {
    return (code ? code.split("\n").map(s => "# " + s).join("\n") +
           "\n" : "") +
           terms.map((value, i) => (i + offset) + " " + value).join("\n") +
           "\n\n"
}

function save(string, name) {
    const link = document.createElement("a");
    const file = new Blob([string], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = name;
    link.click();
    URL.revokeObjectURL(link.href);
}

save(
    createFile(CODE, terms, Number(OFFSET)),
    "b" + SERIES.slice(1)
)