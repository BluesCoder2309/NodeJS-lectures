import http from "http";

const server = http.createServer((req, res) => {
  res.write("This is coming from NodeJS Server. ");
  console.log(req.url);

  if (req.url === "/first") {
    return res.end("This is First Response. "); // Here either you can use return keyword with res.end, to terminate the func here and prevent it from going to the next res.end. Or you can simply put the following res.end statement into the else case to prevent error.
  }
  res.end("Hello from NodeJS");
});

server.listen(3200, (req, res) => {
  console.log("Server is listening at 3200...");
});
