// Start Resource
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    Project: {
        type: String,
        required: true
    },
    Name: {
        type: String, 
        required: [true, "Name Required"]
    },
    Description: {
        type: String,
        required: [true, "Description Required"]
    },
    TaskStage: {
        type: String,
        required: [true, "Task Stage Required"]
    },
    StartDate: {
        type: Date,
        required: [true, "Start Date Required"]
    },
    EndDate: {
        type: Date,
        required: [true, "End Date Required"]
    },
});

const TaskModel = mongoose.model("Task", TaskSchema);
export default TaskModel;
