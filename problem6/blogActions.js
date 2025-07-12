// Do not change the pre-written code.
// Make the necessary imports here.
import path from "path";
import fs from "fs";

export const writeBlog = (filePath, name) => {
  // Write your code here.
  fs.appendFileSync(filePath, name, "utf-8");
};

export const publishBlog = (filePath) => {
  // Write your code here.
  return fs.readFileSync(filePath, "utf-8");
};
