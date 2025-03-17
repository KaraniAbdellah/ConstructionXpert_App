import ResourceModel from "../models/Resource.js";

const createResource = async (req, res) => {
    try {
        const Resource = await ResourceModel.create(req.body);
        res.status(200).send(Resource);
        console.log("✅ Resource Added Succefully");
    } catch (error) {
        console.log("❌ Failed Adding Resource ");
        res.status(400).send({message: "❌ Failed Adding Resource" + error});
    }
}

const GetResources = async (req, res) => {
    try {
        const Resources = await ResourceModel.findOne({project: req.params.ProjectId});
        res.status(200).send(Resources);
        console.log("✅ Getting Resources Succefully");
    } catch (error) {
        console.log("❌ Failed Getting Resource");
        res.status(400).send({message: "❌ Failed Getting Resource" + error});
    }
}

const UpdateResource = async (req, res) => {
    try {
        const ResourceId = req.params.id;
        const Resource = await ResourceModel.findByIdAndUpdate(ResourceId, req.body);
        res.status(200).send(Resource);
        console.log("✅ Updatting Resources Succefully");
    } catch (error) {
        console.log("❌ Failed Updatting Resource");
        res.status(400).send({message: "❌ Failed Updatting Resource" + error});
    }
}

const DeleteResource = async (req, res) => {
    try {
        const ResourceId = req.params.id;
        const Resource = await ResourceModel.findByIdAndDelete(ResourceId, req.body);
        res.status(200).send(Resource);
        console.log("✅ Deletting Resources Succefully");
    } catch (error) {
        console.log("❌ Failed Deletting Resource");
        res.status(400).send({message: "❌ Failed Deletting Resource" + error});
    }
}


export {createResource, GetResources, UpdateResource, DeleteResource};
