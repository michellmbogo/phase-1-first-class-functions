// receivesAFunction
function receivesAFunction(callback) {
    callback();
}

// returnsANamedFunction
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function.");
    };
}

// returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}
