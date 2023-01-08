var strong = "Welcome to this interview"

function ReverseString(str) {
    return str.split('').reverse().join('')
}

const res = ReverseString(strong)

var reverseEachWord = reverseBySeparator(res);

function reverseBySeparator(string, separator) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseEachWord);

console.log(res);