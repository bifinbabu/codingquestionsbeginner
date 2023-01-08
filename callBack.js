var arr = [ 1, 2, 3, 4 ]

function modifyArray (arr, callback) {
    arr.push(100)
    callback()
}

modifyArray (arr, function() {
    console.log("the function has been modified", arr);
})