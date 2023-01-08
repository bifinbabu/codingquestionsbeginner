var ages = [15, 16, 19, 21]

const result = ages.filter(ageFilter)

console.log(result);


function ageFilter (age) {
    if (age > 18) {
        return age
    }
}