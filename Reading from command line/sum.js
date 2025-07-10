// 1. Import readline
const readline = require("readline");

// 2. Configure interface to connnect terminal
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); //as this returns a interface, we store it in a variable

// 3. Reading values from terminal
interface.question("Enter first number: ", (num1) => {
  // chaining callback by now asking for 2nd number
  interface.question("Enter the second number: ", (num2) => {
    // Access num1 num2 using closures where child func can take values from parent func
    const sum = Number(num1) + Number(num2);
    console.log(sum);
  });
});
