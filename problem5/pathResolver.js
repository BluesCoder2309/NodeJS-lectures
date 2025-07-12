// Import the necessary modules here.
const fs = require("fs");
const path = require("path");

exports.getAbsolutePath = (filePath) => {
  // Write your code here
  return path.resolve(filePath);
};
