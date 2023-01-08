var fString = 'Mary'
var sString = 'Army'

function isAnag(fstr, sstr) {

    fstr = fstr.toLowerCase()
    sstr = sstr.toLowerCase()

    a = fstr.split('').sort().join('')
    b = sstr.split('').sort().join('')

    if (a === b) {
        console.log("strings are anagram");
    } else {
        console.log("Not anagram");
    }
}

isAnag(fString, sString)