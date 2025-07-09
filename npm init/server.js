console.log("Starting server...");

// Create a server using NodeJs

// 1. Import the library/module
const http = require("http");

//2. Create Server
const server = http.createServer((req, res) => {
  //Here comes the request
  res.end("Welcome to NodeJS Server");
});

//3. Specify a port to listen to client's request
server.listen(3100, () => {
  console.log("Server is listening on port: 3100");
});

// generate the package.json using npm init 