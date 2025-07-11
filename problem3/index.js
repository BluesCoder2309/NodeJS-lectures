// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
  // Write your code here

  try {
    fs.writeFileSync("notes.txt", "The world has enough coders");
  } catch (error) {
    console.log(error);
  }
  console.log(fs.readFileSync("notes.txt", { encoding: "utf-8" }));

  fs.appendFileSync(
    "notes.txt",
    "\nThe world has enough coders BE A CODING NINJA!"
  );

  console.log(fs.readFileSync("notes.txt", { encoding: "utf-8" }));
};
Solution();
module.exports = Solution;
