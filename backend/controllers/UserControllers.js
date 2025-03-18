import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// @desc Register new user
// @route Register POST /user/Register
// @access Public
const Register = async (req, res) => {
    console.log("User Registration");
    try {
        const {email, username, password} = req.body;
        console.log(email, password, username);
        if (!username || !email || !password) {
            res.status(400).send({ message: "All Inputs Required" });
        }

        // Check if The User Exit
        const userExists = await UserModel.findOne({email: email});
        if (userExists) {
            res.status(400).send({ message: "User Already Exists" });
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
            res.status(201).send(user);
        }
        res.status(400).send({message: "can not save the user data"});
    } catch (error) {
        
    }
}

const Login = async (req, res) => {
    try {
        // check for User Email
        const { email, password, username } = req.body;
        const user = await UserModel.findOne({ email: email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          res.status(200).send({
            username: username,
            email: email,
            password: password,
            token: generateToken(user._id),
          });
        }
        res.status(400).send({ message: "Invalid Credentials" });
      } catch (error) {
        res.status(400).send({ message: "Error" + error });
      }
}

const getMe = (req, res) => {
    console.log(req.user);
    res.status(200).send(req.user);
}

// Generate Token [JWT]
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };
  


export {Register, Login, getMe};