const fs = require("fs");

// Read file content

// Create and write a file
try {
  fs.writeFileSync(
    "employee.txt",
    "name: Harshita Srivastava, Department: Chemistry, position: Teacher"
  );
} catch (error) {
  console.log(error);
}

// Append another employee data to the above created file.
try {
  fs.appendFileSync(
    "employee.txt",
    "\nname: Harsh Srivastava, Department: Bank, position: Analyst" //Added \n to append data to a new line
  );
} catch (error) {
  console.log(error);
}

// Deleting a file
try {
  fs.unlinkSync("employee.txt");
} catch (error) {
  console.log("This file does not exist");
}

console.log("This is a different operation being performed");
