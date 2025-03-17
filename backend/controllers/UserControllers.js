import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// @desc Register new user
// @route Register POST /user/Register
// @access Public
const Register = async (req, res) => {
    console.log("User Registration");
    try {
        const {email, name, password} = req.body;
        if (!name || !email || !password) {
            res.status(400).send({ message: "All Inputs Required" });
        }

        // Check if The User Exit
        const userExists = await UserModel.fondOne({email: email});
        if (userExists) {
            res.status(400).send({ message: "User Already Exists" });
        }

        // Hash The Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        if (user) {
            res.status(201).send({
                
            });
        }
        

        res.status(200).send({})
    } catch (error) {
        
    }
}

const Login = (req, res) => {
    
}

const getMe = (req, res) => {
    
}


export {Register, Login, getMe};