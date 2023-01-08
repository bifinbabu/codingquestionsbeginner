arr = [ 1, 2, 3 ]

var dup = duplicate(arr)

function duplicate(ar) {
    return ar.concat(ar)
}

console.log(dup);