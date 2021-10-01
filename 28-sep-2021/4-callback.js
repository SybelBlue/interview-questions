// Which of foo, bar, and baz are a callback?

// 1 min to respond

// const foo = setInterval;

// var bar = function(event) {
//     event = event || {};
//     event.timestamp = new Date();
//     console.log('recieved', event);
// };

function baz(n) {
    const x = Math.floor(2 * n / 3);
    return x * 3 / 2;
}


setInterval(function(event) {
    event = event || {};
    event.timestamp = new Date();
    console.log('recieved', event);
}, 1000);
