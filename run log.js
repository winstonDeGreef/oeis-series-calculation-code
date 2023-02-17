const UPTO_TERMS = 10_000
const OFFSET = 0n
func = 

terms = []
for (let n = 0n; n <= UPTO_TERMS; n++) {
    terms.push(func(n + OFFSET))
    console.log(n)
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

console.log(terms)