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
        type: String,
        required: [true, "Start Date Required"]
    },
    EndDate: {
        type: String,
        required: [true, "End Date Required"]
    },
    Budget: {
        type: Number, 
        required: [true, "Budget Required"]
    }
});

const ProjectModel = mongoose.model("Project", ProjectSchema);
export default ProjectModel;