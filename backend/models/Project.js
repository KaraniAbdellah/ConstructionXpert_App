import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    Name: {
        type: String, 
        required: [true, "Project Name Required"]
    },
    Description: {
        type: String,
        required: [true, "Project Description Required"]
    },
    TaskStage: {
        type: String,
        required: [true, "Task Stage Required"]
    },
    Admins: {
        type: Array,
        required: [true, "Admins Required"]
    },
    StartDate: {
        type: Date,
        required: [true, "Start Date Required"]
    },
    EndDate: {
        type: Date,
        required: [true, "End Date Required"]
    },
    Budget: {
        type: Number, 
        required: [true, "Budget Required"]
    },
    // These arrays store only the IDs
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }]
});

const ProjectModel = mongoose.model("Project", ProjectSchema);
export default ProjectModel;

