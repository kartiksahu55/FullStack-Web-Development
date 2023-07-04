import Users from "../models/userModel.js";

//Implementing User Register functionality
const registerUser = async (req, res) => {
  try {
    //Extract user data's from the body of the request
    const { name, userId, email, password } = req.body;

    // Check if user already exist in database
    const checkUserInDB = await Users.findOne({ email });
    if (checkUserInDB) {
      throw new Error("User already exist");
    }

    //Check all mandatory fields
    if (name && userId && email && password) {
      // Create a new user in the database
      const user = await Users.create({ name, userId, email, password });
      res.status(201).json({
        Success: true,
        message: "User Registered Successfully",
      });
    } else {
      // Throw an error if any mandatory field is missing
      throw new Error("All input fields are required");
    }
  } catch (error) {
    res.status(400).json({
      Success: false,
      message: error.message,
    });
  }
};

//Implementing User Login functionality
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user provided the mandatory fields (email and password) for login
    if (!email || !password) {
      res.status(400).json({
        Success: false,
        message: "All input fields are required",
      });
      return;
    }

    // Check if a user account exists with the provided email in the database
    const checkUser = await Users.findOne({ email });

    if (checkUser) {
      if (checkUser.password === password) {
        res.status(202).json({
          success: true,
          message: "User Login Successfully",
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Password is wrong",
        });
      }
    } else {
      res.status(401).json({
        success: false,
        message: "No account associate with this email",
      });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//Export user functionalities to user Router
export default { registerUser, loginUser };
