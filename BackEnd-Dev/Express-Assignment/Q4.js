const express = require("express");

const app = express();

const PORT = 3000;

app.get("/random", (req, res) => {
  const random = Math.floor(Math.random() * 100);
  res.send({ random });
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost: ${PORT}`);
});
