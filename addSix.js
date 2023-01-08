var addSix = createBase(6);
addSix(10);
addSix(21);

function createBase(base) {
    return function (number) {
        return base + number
    }
}

console.log(addSix(10));