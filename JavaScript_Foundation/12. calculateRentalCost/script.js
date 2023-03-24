let numOfDays = 2;
let rentalType = { Economy: 4000, Midsize: 10000, Luxury: 20000 }
let myRental = "Economy"

let totalCost = (days, rentalType, rental) => {
    let key = Object.keys(rentalType)
    let value = Object.values(rentalType)

    for (let i = 0; i < key.length; i++) {
        if (key[i] !== rental) {
            continue
        }
        return days * value[i]
    }
}

// let finaltotalCost = totalCost(numOfDays, rentalType, myRental);
// if(finaltotalCost==undefined){
//     console.log("No Such Rental Type available")
// }
// else{
//     console.log(finaltotalCost);
// }