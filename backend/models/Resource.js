// Start Resource
import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
    Name: {
        type: String, 
        required: [true, "Name Required"]
    },
    Type: {
        type: String,
        required: [true, "Type Required"]
    },
    Quantity: {
        type: String,
        required: [true, "Type Required"]
    },
    Supplier: {
        type: String,
        required: [true, "Supplier Required"]
    },
    Task: { 
        type: String,
        required: [true, "Task Required"]
    },
    Project: {
        type: String,
        required: [true, "Project Required"]
    }
});

const ResourceModel = mongoose.model("Resource", ResourceSchema);
export default ResourceModel;
