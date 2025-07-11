// Import required module
const { stdout } = require("process");
const readline = require("readline");

const Solution = () => {
  // Write your code here
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  qInterface.question("Enter the first number: ", (num1) => {
    qInterface.question("Enter the second number: ", (num2) => {
      Number(num1) > Number(num2)
        ? console.log("The maximum of the two numbers is: ", num1)
        : console.log("The maximum of the two numbers is: ", num2);
    });
  });
};

Solution();
