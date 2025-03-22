import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
    let token;
    console.log(req.headers.authorization);

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            console.log("Valid Request");
            token = req.headers.authorization.split(" ")[1];
            // Verfiy The token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await UserModel.findById(decoded.id);
            next();
        } catch (error) {
            res.status(401).send({message: "Not Authorized" + error});
        }
    }

    if (!token) {
        res.status(401).send({message: "Not Authorized [No Token]"});
    }
}


export default protect;

