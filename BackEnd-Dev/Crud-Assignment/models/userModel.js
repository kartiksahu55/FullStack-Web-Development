import mongoose from "mongoose";

//Define Schema(structure of the document) of the Database
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
    },

    userId: {
      type: String,
      required: [true, "User Id is required"],
      unique: [true, "User id already exist"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email id already exist"],
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Please enter a unique password"],
    },
  },
  { timestamps: true }
);

// Export created schema model
export default mongoose.model("User", userSchema);
