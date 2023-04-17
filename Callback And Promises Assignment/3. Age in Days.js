const person = {
    "first name": "Mithun",
    "last name": "S",
    age: 20
}

function ageInDays(obj, message) {
    const fullName=obj["first name"]+" "+obj["last name"];
    const ageInDays=obj.age*365;
    message(fullName, ageInDays)
}

ageInDays(person, logResult);
function logResult (fullName, ageInDays){
    return console.log(`The person's full name is ${fullName}, and their age in days is ${ageInDays}.`);
}