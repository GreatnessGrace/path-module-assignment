"use strict";
const fs = require("fs");
// import * as fs from 'fs';
const path = require("path");
// import * as path from 'path';
// Synchronous implementation
try {
    if (!fs.existsSync(path.join(__dirname, "assets", "public"))) {
        fs.mkdirSync(path.join(__dirname, "assets", "public"), { recursive: true });
    }
    if (!fs.existsSync(path.join(__dirname, "assets", "public", "files"))) {
        fs.mkdirSync(path.join(__dirname, "assets", "public", "files"));
    }
    let filePath = path.join(__dirname, "assets", "public", "files", "task.txt");
    let fileContent = `My introduction:
I am Ankush Kumar.
I am student of B.E. CSE 4th Year in Ucoe, PANJABI UNIVERSITY, PATIALA.
I like playing Cricket, coding, reading books, etc.
I am dedicated to learn new things.
In free time I spend time with my family and discover some new things.
\n\n\n\n\n
I am Ankush Kumar.`;
    fs.writeFileSync(filePath, fileContent, "utf8");
    let content = fs.readFileSync(filePath, "utf8");
    console.log(content);
    setTimeout(() => {
        try {
            fs.unlinkSync(filePath);
            console.log(`${filePath} is deleted!`);
        }
        catch (err) {
            console.error(`Error deleting file: ${err}`);
        }
    }, 10000);
}
catch (err) {
    console.error(`Error occurred: ${err}`);
}
// Asynchronous implementation
// fs.mkdir(
//   path.join(__dirname, "assets", "public"),
//   { recursive: true },
//   (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     fs.mkdir(path.join(__dirname, "assets", "public", "files"), (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       let filePath = path.join(
//         __dirname,
//         "assets",
//         "public",
//         "files",
//         "task.txt"
//       );
//       let fileContent = `My introduction:
// I am Ankush Kumar.
// I am student of B.E. CSE 4th Year in Ucoe, PANJABI UNIVERSITY, PATIALA.
// I like playing Cricket, coding, reading books, etc.
// I am dedicated to learn new things.
// In free time I spend time with my family and discover some new things.
// \n\n\n\n\n
// I am Ankush Kumar.`;
//       fs.writeFile(filePath, fileContent, (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         fs.readFile(filePath, "utf8", (err, content) => {
//           if (err) {
//             console.error(err);
//             return;
//           }
//           console.log(content);
//           setTimeout(() => {
//             try {
//               fs.unlinkSync(filePath);
//               console.log(`${filePath} is deleted!`);
//             } catch (err) {
//               console.error(`Error deleting file: ${err}`);
//             }
//           }, 10000);
//         });
//       });
//     });
//   }
// );
