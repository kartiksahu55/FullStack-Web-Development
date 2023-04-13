const getPerson=(person)=>{
    try{
        if(person.name && person.age){
            return `Name: ${person.name}, Age: ${person.age}`
        }
        throw new Error("Invalid Parameter type")
    }catch(error){
        return error.message;
    }
}

console. log(getPerson({ name: "Mithun", age: 20 }));
console.log(getPerson({ name: "Mithun" }));
console. log(getPerson(["name", "Mithun"]));