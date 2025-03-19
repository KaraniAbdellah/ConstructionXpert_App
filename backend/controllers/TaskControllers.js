import TaskModel from "../models/Task.js";
import ResourceModel from "../models/Resource.js";

const createTask = async (req, res) => {
  try {
    const Task = await TaskModel.create(req.body);
    res.status(200).send(Task);
    console.log("✅ Task Added Succefully");
  } catch (error) {
    console.log("❌ Failed Adding Task ");
    res.status(400).send({ message: "❌ Failed Adding Task" + error });
  }
};

const GetTasks = async (req, res) => {
  try {
    const Tasks = await TaskModel.findOne({ project: req.params.ProjectId });
    res.status(200).send(Tasks);
    console.log("✅ Getting Tasks Succefully");
  } catch (error) {
    console.log("❌ Failed Getting Task");
    res.status(400).send({ message: "❌ Failed Getting Task" + error });
  }
};

const UpdateTask = async (req, res) => {
  try {
    const TaskId = req.params.id;
    const Task = await TaskModel.findByIdAndUpdate(TaskId, req.body);
    res.status(200).send(Task);
    console.log("✅ Updatting Tasks Succefully");
  } catch (error) {
    console.log("❌ Failed Updatting Task");
    res.status(400).send({ message: "❌ Failed Updatting Task" + error });
  }
};

const DeleteTask = async (req, res) => {
  try {
    const TaskId = req.params.id;
    const Task = await TaskModel.findByIdAndDelete(TaskId, req.body);

    // Delete the Resources corresponding to this task
    const resources = await ResourceModel.find({ Task: TaskId });
    resources.map(async (resource) => {
      await ResourceModel.findByIdAndDelete(resource._id);
    });

    res.status(200).send(Task);
    console.log("✅ Deletting Tasks Succefully");
    
  } catch (error) {
    console.log("❌ Failed Deletting Task");
    res.status(400).send({ message: "❌ Failed Deletting Task" + error });
  }
};

export { createTask, GetTasks, UpdateTask, DeleteTask };
