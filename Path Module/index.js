const fs = require("fs");
const path = require('path');


const filePath = path.join('src','data','data.txt');
const filePathResolved = path.resolve('src','data','data.txt');

console.log(filePath);
console.log(filePathResolved);
console.log(path.extname(filePathResolved));



// Read data         //No need to hardcode the file path, as path module creates file path depending upon the platform i.e. windows,mac
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});


//  If you need only the path you've specified in your path, use path.join
//  If you want the absolute path for the path/file you've specified. use path.resolve

