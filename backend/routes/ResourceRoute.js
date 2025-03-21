// Start ResourceRoute
import express from "express";
import {createResource, GetResources, UpdateResource, DeleteResource} from "../controllers/ResourceControllers.js";

const ResourceRoute = express.Router();

ResourceRoute.post("/AddResource", createResource);
ResourceRoute.get("/GetResource/:id", GetResources);
ResourceRoute.put("/UpdateResource/:id", UpdateResource);
ResourceRoute.delete("/DeleteResource/:id", DeleteResource);


export default ResourceRoute;
