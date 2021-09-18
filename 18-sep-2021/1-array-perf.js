// James and Joyce each wrote a function
// that does the same thing to myArray
//
// Which one is slower to run? Why?

// 30 sec to read
// 30 sec to respond

var myArray = ['a', 'b', 'c', 'd'];

function joycesBookend() { // fast
    // look up 'modify-in-place'
    myArray.push('end')
    
    myArray.unshift('start')
}

function jamesBookend() { // slow!
    // makes a whole new array, then
    // copies old array into the new array, then
    // reassigns into the old one
    myArray = ['start', ...myArray, 'end']
}
