console.log("Starting server...");

// 1. Import the library/module
const http = require("http");

//2. Create Server
const server = http.createServer((req, res) => {
  console.log(req.url);

  //Need to check the URL of the request to then send the related info back to client
  if (req.url == "/product") {

    // response given with .write can be modified later 
    res.write('Welcome to my Application. ');

    //response ends here with res.end, now the response can not be modified or changed.
    res.end("This is the Product Page.");
  } else if (req.url == "/user") {
    res.end("This is the User Page.");
  } else {
    res.end("This is the Node Server.");
  }
});

//3. Specify a port to listen to client's request
server.listen(3100, () => {
  console.log("Server is listening on port: 3100");
});
