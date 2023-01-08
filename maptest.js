var numbers = [ 4, 5, 6, 7 ]

var result = numbers.map(filtr)

console.log(result);

function filtr(num) {
    if (num > 5){
        return num
    }
}