//Apply the correct asynchronous approach to ensure the read operation executes only after the write operation is completed.

const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", " new data", (data, err) => {
    if (err) {
      console.log(err);
    }
  });

  console.log("data successfully updated");

  const data = fs.readFile("note.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    }
  });
};
Solution();
module.exports = Solution;
