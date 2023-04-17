function greet(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === 'string' && name.length > 0) {
            resolve(`Hello, ${name}!`);
        } else {
            reject (new Error("Invalid name!, please enter a valid name."));
        };
    });
};

greet("Mithun").then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error.message);
})