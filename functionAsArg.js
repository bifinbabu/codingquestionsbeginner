function greet(name) {
    return `Ji ${name}`
}

function greetMsg (greeting, message, name) {
    console.log(`${greeting(name)} ${message}` );
}

greetMsg(greet, "Welcome", "ABC")