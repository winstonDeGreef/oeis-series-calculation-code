function save(string, name) {
    const link = document.createElement("a");
    const file = new Blob([string], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = name;
    link.click();
    URL.revokeObjectURL(link.href);
}

