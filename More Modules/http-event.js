// Creating POST request in NodeJS

import http from "http";

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    // expecting data from the client.
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(body);
      res.end("Data is received");
    });
  } else {
    console.log("Function ends here");
    res.end("Welcome to NodeJS Server");
  }
});

server.listen(3100);
console.log("Server listening on port 3100");
