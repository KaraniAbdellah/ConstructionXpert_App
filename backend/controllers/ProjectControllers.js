import ProjectModel from "../models/Project.js";
import TaskModel from "../models/Task.js";
import ResourceModel from "../models/Resource.js";


const createProject = async (req, res) => {
    try {
        const project = await ProjectModel.create(req.body);
        res.status(200).send(project);
        console.log("✅ Project Added Succefully");
    } catch (error) {
        console.log("❌ Failed Adding Project " + error);
        res.status(400).send({message: "❌ Failed Adding Project" + error});
    }
}

const GetProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find();
        res.status(200).send(projects);
        console.log("✅ Getting Projects Succefully");
    } catch (error) {
        console.log("❌ Failed Getting Project" + error);
        res.status(400).send({message: "❌ Failed Getting Project" + error});
    }
}

const UpdateProject = async (req, res) => {
    try {
        const ProjectId = req.params.id;
        const project = await ProjectModel.findByIdAndUpdate(ProjectId, req.body);
        res.status(200).send(project);
        console.log("✅ Updatting Projects Succefully");
    } catch (error) {
        console.log("❌ Failed Updatting Project");
        res.status(400).send({message: "❌ Failed Updatting Project" + error});
    }
}

const DeleteProject = async (req, res) => {
    try {
        const ProjectId = req.params.id;
        console.log(ProjectId);
        // Delete The Project
        const project = await ProjectModel.findByIdAndDelete(ProjectId, req.body);

        // Delete the resources corresponding to this project
        const resources = await ResourceModel.find({Project: ProjectId});
        resources.map(async (resource) => {
            await ResourceModel.findByIdAndDelete(resource._id);
        });

        // Delete the task corresponding to this project
        const tasks = await TaskModel.find({Project: ProjectId});
        tasks.map(async (resource) => {
            await TaskModel.findByIdAndDelete(resource._id);
        });

        res.status(200).send(project);
        console.log("✅ Deletting Projects Succefully");
    } catch (error) {
        console.log("❌ Failed Deletting Project");
        res.status(400).send({message: "❌ Failed Deletting Project" + error});
    }
}


export {createProject, GetProjects, UpdateProject, DeleteProject};
