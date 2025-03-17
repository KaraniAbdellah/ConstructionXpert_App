// Start Make REST API
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import UserRoute from "./routes/UserRoute.js";
import TaskRoute from "./routes/TaskRoute.js";
import ProjectRoute from "./routes/ProjectRoute.js";
import ResourceRoute from "./routes/ResourceRoute.js";


// Create Rest API
const rest_api = express();
rest_api.use(express.json());
rest_api.use(cors());
rest_api.use("/project", ProjectRoute);
rest_api.use("/task", TaskRoute);
rest_api.use("/user", UserRoute);
rest_api.use("/resource", ResourceRoute);




// Connect To DataBase
mongoose.connect(process.env.URI_DB).then(() => {
    console.log("✅ Connect Succefully to Database");
}).catch(() => {
    console.log("❌ Can not Connect Succefully to Database");
});


// Make REST API Active
rest_api.listen((process.env.PORT), () => {
    console.log(`✅ Server Is Listening to PORT ${process.env.PORT}`);
});

