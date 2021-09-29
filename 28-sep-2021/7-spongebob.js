// Your coworker Charlie writes a function
// to make text appear like mocking spongebob.
//
// "here's some text!" -> "HeRe's sOmE TeXt!"
//
// https://knowyourmeme.com/photos/1253025-mocking-spongebob
//
// The only trouble is that there's sometimes a bug!
//
// Why is the error thrown and how can we fix it?

// 2 mins to read
// 1 min to respond


String.prototype.getCharAt = function(index) {
    if (index < 0 || this.length <= index) {
        return null;
    }
    return this.charAt(index);
}

function mockingSpongebob(word) {
    if (word.length == 0) {
        return word;
    }
    const first = word.getCharAt(0).toUpperCase();
    const second = word.getCharAt(1).toLowerCase();
    const rest = word.slice(2);
    return first + second + mockingSpongebob(rest);
}

console.log(mockingSpongebob('good job'));
// > GoOd jOb
console.log(mockingSpongebob('GOOD JOB'));
// > GoOd jOb
console.log(mockingSpongebob('gOoD JoB'));
// > GoOd jOb
console.log(mockingSpongebob('nice work!'))
// > NiCe wOrK!
console.log(mockingSpongebob('good work'));
// error!