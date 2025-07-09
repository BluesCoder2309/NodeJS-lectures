//Call airthmetic functions, get result and print the result on the terminal.

//ES6 import

// To import everything, do as
// import * as airthmeticModule from "./airthmetic.mjs"; //use .mjs as file format in ES6 or your file extension is .js but your project does not have "type": "module" in package.json.

// console.log(airthmeticModule);

// console.log(airthmeticModule.sum(10, 20));



// To import specific elements
import {sum} from "./airthmetic.js"

console.log(sum(10, 20));
console.log(sum(23,30));


