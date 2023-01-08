function isInt (num) {
    return num % 1 === 0
}

console.log(isInt(4));
console.log(isInt(12.2));
console.log(isInt(0.3));