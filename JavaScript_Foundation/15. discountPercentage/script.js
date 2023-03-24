const originalPrice=200;
const discountPrice=149.5;

let discountPercentage=(originalPrice, discountPrice)=>{
    let discountamount=originalPrice-discountPrice;
    let percentage= (discountamount/originalPrice)*100
    return percentage.toFixed(2)
}


const discountedPer=discountPercentage(originalPrice, discountPrice);
console.log(`You Save ${discountedPer}% `);