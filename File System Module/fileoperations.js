// 1. Import the file system module
const fs = require('fs');

// 2. Read file content using Blocking Code i.e operation managed by the main thread
console.log("Starting to raed");

const buffer = fs.readFileSync("data.txt");           //readFileSync returns a buffer whic is a temporary file storage for the information packets that have not been read yet due to difference in speeds.
// console.log(buffer); this just prints the buffer content as visible to the operating getSystemErrorMap, so 

console.log(buffer);
console.log(buffer.toString());
// To prevent this conversion of the buffer to string format, the 2nd param options in readfilesync is used


const buffer2 = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(buffer2);

console.log("This is a different operation being performed");

