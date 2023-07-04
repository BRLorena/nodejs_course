const fs = require("fs");
const path = require("path");

// create folder
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Folder sucessfully created!");
// });

// Create file: Async method
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("File sucessfully created!");

    //IMPORTANT: This method neeeds to be called inside the write method
    // Add content in the files already created.
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "\n new line added",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("File sucessfully updated!");
      }
    );
  }
);

// Read files
fs.readFile(
  path.join(__dirname, "test", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log(data);
  }
);
