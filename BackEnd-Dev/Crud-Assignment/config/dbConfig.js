import mongoose from "mongoose";

// Function to connect to mongoDB database
const mongoDbConnect = async () => {
  try {
    // Connect to the mongoDb using the connection string from enviroment variable
    const connect = await mongoose.connect(process.env.MONGO_DATABASE);

    // Log a  success message if connection is successful
    console.log(`Database connected successfully: ${connect.connection.host}`);
  } catch (error) {
    // Log the Error message and Throw the error  if there is any error during the connection
    console.log(error.message);
    throw error;
  }
};

// Export the function to be used in other modules
export default mongoDbConnect;
