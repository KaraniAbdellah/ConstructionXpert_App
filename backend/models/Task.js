// Start Resource
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
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
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});

const TaskModel = mongoose.model("Task", TaskSchema);
export default TaskModel;
