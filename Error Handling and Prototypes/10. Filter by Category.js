function filterByCategory(products) {
    return function (myCategory) {
        let singleProducts=[]
        for (let el in products) {
            let singleProduct = products[el]
            if (singleProduct.category === myCategory) {
                singleProducts.push(singleProduct);
            }
        }
        return singleProducts
    }
}


var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Paints", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" }
];

var clothingProduct = filterByCategory(products)("Clothing");

console.log(clothingProduct);