function privt() {
    var priv = "private variable"

    return function() {
        return priv
    }
}

getPrivate = privt()
console.log(getPrivate());
console.log(privt()());