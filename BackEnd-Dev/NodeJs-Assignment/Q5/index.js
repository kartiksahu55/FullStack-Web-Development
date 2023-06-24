const fs = require("fs");

fs.unlink("nodejs_architecture.txt", (err) => {
  if (err) {
    console.log("Error in File Deletion");
  } else {
    console.log("File Deleted SuccessFully");
  }
});
