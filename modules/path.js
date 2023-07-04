const path = require("path");

// current fileName
console.log(path.basename(__filename));

// current folderName
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// Create Object Path
console.log(path.parse(__filename));

// Join the path of the folders
console.log(path.join(__dirname, "test"));
