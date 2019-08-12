// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === true) {
        return "Hello, World!";
    } else if(input === null) {
        return "That doesn't work!";
    }
    return "Hello, " + input + "!";
}

function isFive(input) {
    if (input === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
function sum(a, b) {
    if(b === "sheep") {
        return false;
    }
    return a + b;
}


//ON STEP 5!!!!