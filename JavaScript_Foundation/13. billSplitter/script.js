const menuCard = { Biriyani: 120, ChickenCurry: 90, MuttonCurry: 160, VegThali: 80, FishCurry: 60 };
const numOfPeople = 4;
const dish = ["FishCurry", "VegThali", "Biriyani", "FishCurry"]

function table() {
    let dishType = Object.keys(menuCard);
    let dishCost = Object.values(menuCard);
    let itemCost=0;
    let totalBill= new Object()

    for (let i = 0; i < dishType.length; i++) {
        for (let j=0; j<dish.length; j++){
            if (dishType[i]==dish[j]){
                itemCost+= dishCost[i]; 
            };
            
        };
    };
    totalBill.Total_Bill=itemCost*numOfPeople;
    totalBill.Cost_Per_Head=itemCost;
    return totalBill;

}

console.log(table());