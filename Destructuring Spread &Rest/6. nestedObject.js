const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    },
}

function nested(person) {
    const { name, address: { street } } = person;
    return { name, street };

    //    const name= person.name
    //    const street=person.address.street
    //     return {name, street}
};

console.log(nested(person));
