import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc Register new user
// @route Register POST /user/Register
// @access Public
const Register = async (req, res) => {
  console.log("User Registration");
  try {
    const { email, username, password } = req.body;
    console.log(email, password, username);
    if (!username || !email || !password) {
      return res.status(400).send({ message: "All Inputs Required" });
    }

    // Check if The User Exit
    const userExists = await UserModel.findOne({ email: email });
    if (userExists) {
      return res.status(400).send({ message: "User Already Exists" });
    }

    // Hash The Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await UserModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).send(user);
    }
    return res.status(400).send({ message: "can not save the user data" });
  } catch (error) {
    return res.status(400).send({ message: "Error" + error });
  }
};

const Login = async (req, res) => {
  try {
    // check for User Email
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).send({
        email: user.email,
        password: user.password,
        token: generateToken(user._id),
      });
    }
    return res.status(400).send({ message: "Invalid Credentials" });
  } catch (error) {
    return res.status(400).send({ message: "Error" + error });
  }
};

const getMe = (req, res) => {
  console.log(req.user);
  return res.status(200).send(req.user);
};

// Generate Token [JWT]
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { Register, Login, getMe };
