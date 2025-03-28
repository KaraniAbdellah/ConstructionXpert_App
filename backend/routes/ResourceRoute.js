// Start ResourceRoute
import express from "express";
import {createResource, GetResources, UpdateResource, DeleteResource, GetResourceById} from "../controllers/ResourceControllers.js";

const ResourceRoute = express.Router();

ResourceRoute.post("/AddResource", createResource);
ResourceRoute.get("/GetResource/:TaskId", GetResources);
ResourceRoute.get("/GetResourceById/:ResourceId", GetResourceById);
ResourceRoute.put("/UpdateResource/:id", UpdateResource);
ResourceRoute.delete("/DeleteResource/:id", DeleteResource);


export default ResourceRoute;
