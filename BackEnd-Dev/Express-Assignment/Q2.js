const express = require("express");
const app = express();

const PORT = 3000;
let counter = 0;

app.get("/", (req, res) => {
  res.send({ counter });
});

app.get("/increment", (req, res)=>{
    counter++;
    res.send({ counter });
})

app.get("/decrement", (req, res)=>{
    counter--;
    res.send({ counter });
})

app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT}`);
});
