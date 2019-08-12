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

function isVowel(input) {
    if (isNaN(input) === false) {
        return false;
    } else if(input === 'boolean') {
        return false;
    } else if ("aeiouAEIOU".indexOf(input) != -1) {
        return true;
    } else {
        return false;
    }
}

function add(a, b) {
   if(isNumeric(a) && isNumeric(b)) {
       return +a + +b;
   } else if(value === "banana" || value === "split") {
       return NaN;
   } else {
       return false;
   }
}


function isNumeric(value) {
    return !isNaN(parseFloat(value));
}

console.log(isNumeric('5'));

//ON STEP 5!!!!