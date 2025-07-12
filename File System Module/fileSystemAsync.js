const fs = require("fs");

// Read data
// fs.readFile("data.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// Write data
fs.writeFile("employee.txt", "New Employee", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Written");
  }
});

// Update data
fs.appendFile("employee.txt", "\nAnother Employee", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Updated");
  }
});

// Delete data
fs.unlink("employee.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Deleted");
  }
});

console.log("This is another operation"); // Notice output as in previous examples with blocking code, this line was executed after the IO operation above finished.
