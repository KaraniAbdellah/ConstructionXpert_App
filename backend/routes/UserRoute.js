// Start UserRoute
import express from "express";
import { Register, Login, getMe } from "../controllers/UserControllers.js";
import protect from "../middlwares/AuthUser.js";

const UserRoute = express.Router();
UserRoute.post("/Register", Register);
UserRoute.post("/Login", Login);
UserRoute.get("/GetMe", protect, getMe);


export default UserRoute;
