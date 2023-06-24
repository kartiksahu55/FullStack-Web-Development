const fs = require("fs");

const addData =
  " It uses an event-driven, non-blocking I/O model, making it efficient and lightweight for building scalable network applications. Node.js is built on the V8 JavaScript engine, which is known for its high performance. Node.js is designed to handle concurrent connections efficiently, making it highly scalable. Node.js runs on multiple platforms, including Windows, macOS, and Linux, providing flexibility in deployment options.";

fs.appendFileSync("nodejs_architecture.txt", addData);

const readData = fs.readFileSync("nodejs_architecture.txt");

console.log(readData.toString());