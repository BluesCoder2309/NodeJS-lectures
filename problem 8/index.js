// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if (req.method == "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        fs.appendFileSync("data.txt", body);

        const newContent = fs.readFileSync("data.txt", { encoding: "utf-8" });

        console.log(newContent);
        res.end("Data Received");
      } catch (error) {
        console.log(error);
        res.end("Server Error");
      }
    });
  } else {
    res.end("Not a post request");
  }
});

export default server;
