console.log("Server Starting");

const http = require("http");

//Need to import the File System module for it to read files
const fs = require("fs");

const server = http.createServer((req, res) => {
  // use readFileSync function by specifying a file path that needs to be displayed
  //fs.readFileSync will return us data so store in a variable
  const data = fs.readFileSync("index.html").toString();

  res.end(data);
});

server.listen(3500);

console.log("Server is listening on port: 3500");


//NOTE: This only helps to render static pages with hardcoded html. Rendering dynamic pages comes later...