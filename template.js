// creates the b file itself
function createFile(code, terms, offset = 0) {
    return code.split("\n").map(s => "# " + s).join("\n") +
           "\n" +
           terms.map((value, i) => (i + offset) + " " + value).join("\n") +
           "\n"
}

