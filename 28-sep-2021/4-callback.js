// Which of foo, bar, and baz are a callback?

// 1 min to respond

const foo = setInterval;

function bar(event) {
    event = event || {};
    event.timestamp = new Date();
    console.log('recieved', event);
}

function baz(n) {
    const x = Math.floor(2 * n / 3);
    return x * 3 / 2;
}


foo(bar, baz(1000));
