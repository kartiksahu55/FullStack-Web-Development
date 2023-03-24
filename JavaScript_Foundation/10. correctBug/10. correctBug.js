let  cart=[2,5,7,6,3,1];

let doubleCart=(cartValue)=>{
  for (let i=0; i<cartValue.length; i++){
    cartValue[i]*=2;
  }
  return cartValue;
}

let  cartFix=doubleCart(cart);
console.log(cartFix);