// Start ProjectRoute
import express from "express";
import {createTask, GetTasks, UpdateTask, DeleteTask} from "../controllers/TaskControllers.js";

const TaskRoute = express.Router();

TaskRoute.post("/AddTask", createTask);
TaskRoute.get("/GetTasks/:id", GetTasks);
TaskRoute.put("/UpdateTask/:id", UpdateTask);
TaskRoute.delete("/DeleteTask/:id", DeleteTask);



export default TaskRoute;
