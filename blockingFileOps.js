const fs = require("fs");
const os = require("os");
console.log(os.cpus().length)
//Synchronous operation: Blocking
console.log("Task before file reading");
const res = fs.readFileSync("./contact.txt", "utf-8", (err, res) => {
  if (err) {
    console.log("Error!", err);
  } else {
    console.log(res);
  }
});
console.log(res);
console.log("After File reading task");

// Asynchronous operation: Non-Blocking
// console.log("Task before file reading");
// const res = fs.readFile("./contact.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log("Error!", err);
//   } else {
//     console.log(res);
//   }
// });
// console.log(res);
// console.log("After File reading task");
