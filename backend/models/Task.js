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
    }
});

const TaskModel = mongoose.model("Task", TaskSchema);
export default TaskModel;
