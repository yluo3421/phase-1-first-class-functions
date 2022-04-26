function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function goodTalk() {
        console.log('Such a nice talk!');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('how to call the inner function?');
    }
}