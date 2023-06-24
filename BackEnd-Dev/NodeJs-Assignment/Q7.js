const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.write(
      "<h2>I Am Happy To Learn Full Stack Web Development From PW Skills!</h2>"
    );
  }

  response.end();
});

server.listen(3000);
console.log("The http server is running on port 3000");
