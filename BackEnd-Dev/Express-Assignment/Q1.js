const http = require("http");

const PORT = 3002;
const hostname = "localhost";

const menProducts = [
  {
    id: "1",
    name: "Men's T-Shirt",
    brand: "ABC",
    price: "20",
    color: "Blue",
    size: "M",
    Category: "Clothing",
  },
  {
    id: "2",
    name: "Men's T-Shirt",
    brand: "ABC",
    price: "25",
    color: "Black",
    size: "xl",
    Category: "Clothing",
  },
  { id: 3, name: "Men Product 3", brand: "ABC", price: 18 },
  { id: 4, name: "Men Product 4", brand: "ABC", price: 25 },
  { id: 5, name: "Men Product 5", brand: "ABC", price: 44 },
  { id: 6, name: "Men Product 6", brand: "ABC", price: 57 },
  { id: 7, name: "Men Product 7", brand: "ABC", price: 20 },
  { id: 8, name: "Men Product 8", brand: "ABC", price: 45 },
  { id: 9, name: "Men Product 9", brand: "ABC", price: 35 },
  { id: 10, name: "Men Product 10", brand: "ABC", price: 18 },
];

const womenProducts = [
  { id: 1, name: "Women Product 1", brand: "ABC", price: 14 },
  { id: 2, name: "Women Product 2", brand: "ABC", price: 24 },
  { id: 4, name: "Women Product 4", brand: "ABC", price: 31 },
  { id: 5, name: "Women Product 5", brand: "ABC", price: 18 },
  { id: 6, name: "Women Product 6", brand: "ABC", price: 40 },
  { id: 7, name: "Women Product 7", brand: "ABC", price: 35 },
  { id: 8, name: "Women Product 8", brand: "ABC", price: 45 },
  { id: 9, name: "Women Product 9", brand: "ABC", price: 50 },
  { id: 10, name: "Women Product 10", brand: "ABC", price: 55 },
];

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Men & Women Dummy Data");
  } else if (req.url == "/men") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(menProducts));
  } else if (req.url == "/women") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(womenProducts));
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found");
  }
});

server.listen(PORT);
