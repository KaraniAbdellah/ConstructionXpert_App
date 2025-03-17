// Start ProjectRoute
import express from "express";
import {createProject, GetProjects, UpdateProject, DeleteProject} from "../controllers/ProjectControllers.js";

const ProjectRoute = express.Router();

ProjectRoute.post("/AddProject", createProject);
ProjectRoute.get("/GetProjects", GetProjects);
ProjectRoute.put("/UpdateProject/:id", UpdateProject);
ProjectRoute.delete("/DeleteProject/:id", DeleteProject);


export default ProjectRoute;
