import app from "./app.js";
import mongoDbConnect from "../config/dbConfig.js";

const PORT = process.env.PORT;
const hostname = process.env.HOSTNAME;

//Connect to the Database then start the server
(async () => {
  await mongoDbConnect() //Connecting to Database
    .then(() => {
      app.on("error", (err) => {
        throw err; // Handle server error
      });

      app.listen(PORT, () => {
        console.log(`Server running at ${hostname}:${PORT}`);
      });
    })
    .catch((err) => {
      console.log(err.message); // Log Database connection error
    });
})();
