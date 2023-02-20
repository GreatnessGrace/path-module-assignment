const fs = require("fs");
// import * as fs from 'fs';
const path = require("path");
// import * as path from 'path';

// Synchronous implementation

// Creating Folders at given path :
  if (!fs.existsSync(path.join(__dirname, "assets", "public"))) {
    fs.mkdirSync(path.join(__dirname, "assets", "public"), { recursive: true });
  }
  if (!fs.existsSync(path.join(__dirname, "assets", "public", "files"))) {
    fs.mkdirSync(path.join(__dirname, "assets", "public", "files"));
  }

  // Creating task.text file :
  let pathOfFile = path.join(__dirname, "assets", "public", "files", "task.txt");

  // Writing the Content
  let contentOfFile = `Introduction:
My name is Ankush Kumar.
I am student of B.E. CSE 4th Year in Ucoe, Punjabi University, PATIALA.
Now I'm working as an intren in Relinns Technology
I'm passionate about Web Development
\n\n\n\n\n 
Ankush Kumar.`;

  fs.writeFileSync(pathOfFile, contentOfFile, "utf8");

//Read the file and printout the content
  let content = fs.readFileSync(pathOfFile, "utf8");
  console.log(content);


  //Remove the file
  setTimeout(() => {
    try {     
      fs.unlinkSync(pathOfFile);
      console.log(`${pathOfFile} is deleted!`);
    } catch (error) {
      console.log(`Error deleting file: ${Error}`);
    }
  },1000 );
 



// Asynchronous implementation
const fs = require("fs");
const path = require("path");


// Creating Folders at given path :
fs.mkdir(
  path.join(__dirname, "assets", "public"),
  { recursive: true },
  (Error) => {
    if (Error) {
      console.log(Error);
      return;
    }
    fs.mkdir(path.join(__dirname, "assets", "public", "files"),{ recursive: true },  (Error) => {
      if (Error) {
        console.log(Error);
        return;
      }

        // Creating task.text file :
      let pathOfFile = path.join(__dirname,"assets","public","files","task.txt" );

      // Writing the Content
      let contentOfFile = `Introduction:
My name is Ankush Kumar.
I am student of B.E. CSE 4th Year in Ucoe, Punjabi University, PATIALA.
Now I'm working as an intren in Relinns Technology
I'm passionate about Web Development
\n\n\n\n\n
Ankush Kumar.`;
      fs.writeFile(pathOfFile, contentOfFile, (Error) => {
        if (Error) {
          console.log(Error);
          return;
        }

        //Read the file and printout the content
        fs.readFile(pathOfFile, "utf8", (error, content) => {
          if (error) {
            console.log(error);
            return;
          }
          console.log(content);

            //Remove the file
          setTimeout(() => {
            try {
              fs.unlinkSync(pathOfFile);
              console.log(`${pathOfFile} is deleted!`);
            } catch (error) {
              console.log(`Error deleting file: ${error}`);
            }
          }, 3000);
        });
      });
    });
  }
);