const customerCart = [{ price: 1000, quantity: 3 }, { price: 550, quantity: 2 }, { price: 290, quantity: 4 }, { price: 1500, quantity: 1 }];

let a = 0

const finalOrderPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < customerCart.length; i++){
        let item=customerCart[i];
        totalPrice+=item.price*item.quantity
    }
    return totalPrice
}

console.log(finalOrderPrice())