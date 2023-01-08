// for (var i = 0; i<=30; i++) {
//     if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     }
// }


for (var i = 1; i<=30; i++) {
    fizz = i % 3 == 0
    buzz = i % 5 == 0
    console.log(fizz ? (buzz ? 'fizzbuzz' : 'fizz') : buzz ? 'buzz' : i);
}