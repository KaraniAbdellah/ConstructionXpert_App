import ProjectModel from "../models/Project.js";

const createProject = async (req, res) => {
    try {
        const project = await ProjectModel.create(req.body);
        res.status(200).send(project);
        console.log("✅ Project Added Succefully");
    } catch (error) {
        console.log("❌ Failed Adding Project ");
        res.status(400).send({message: "❌ Failed Adding Project" + error});
    }
}

const GetProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find().populate('tasks').populate('resources');
        res.status(200).send(projects);
        console.log("✅ Getting Projects Succefully");
    } catch (error) {
        console.log("❌ Failed Getting Project");
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
        const project = await ProjectModel.findByIdAndDelete(ProjectId, req.body);
        res.status(200).send(project);
        console.log("✅ Deletting Projects Succefully");
    } catch (error) {
        console.log("❌ Failed Deletting Project");
        res.status(400).send({message: "❌ Failed Deletting Project" + error});
    }
}


export {createProject, GetProjects, UpdateProject, DeleteProject};
