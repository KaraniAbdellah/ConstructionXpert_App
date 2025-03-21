import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

function TaskForm({
  TaskData,
  setTaskData,
  setRenderTaskFrom,
  isEdit,
  setIsEdit,
  currentTask,
  Project,
}) {
  // Initialize state with currentTask values or defaults for new tasks
  const [name, setName] = useState(isEdit ? currentTask.Name : "");
  const [description, setDescription] = useState(isEdit ? currentTask.Description : "");
  const [taskStage, setTaskStage] = useState(isEdit ? currentTask.TaskStage : "In Progress");
  const [startDate, setStartDate] = useState(isEdit ? currentTask.StartDate : "");
  const [endDate, setEndDate] = useState(isEdit ? currentTask.EndDate : "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form fields when currentTask changes (for edit mode)
  useEffect(() => {
    if (isEdit && currentTask) {
      setName(currentTask.Name || "");
      setDescription(currentTask.Description || "");
      setTaskStage(currentTask.TaskStage || "In Progress");
      setStartDate(currentTask.StartDate || "");
      setEndDate(currentTask.EndDate || "");
    }
  }, [isEdit, currentTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const task = {
      Project: Project._id,
      Name: name,
      Description: description,
      TaskStage: taskStage,
      StartDate: startDate,
      EndDate: endDate,
    };

    try {
      if (isEdit && currentTask._id) {
        await axios.put(
          `http://127.0.0.1:3000/task/UpdateTask/${currentTask._id}`,
          task
        );
        
        setTaskData(prevTasks => 
          prevTasks.map(item => 
            item._id === currentTask._id ? { ...task, _id: currentTask._id } : item
          )
        );
      } else {
        const response = await axios.post(
          "http://127.0.0.1:3000/task/AddTask", 
          task
        );
        const newTask = { ...task, _id: response.data._id };
        setTaskData(prevTasks => [...prevTasks, newTask]);
      }
      
      setRenderTaskFrom(false);
      setIsEdit(!isEdit);
    } catch (error) {
      console.error("Error saving task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setRenderTaskFrom(false);
    setIsEdit(false);
  };

  return (
    <div className="bg-gray-50 z-50 px-8 py-6 top-[50px] md:w-[60%] w-[90%] absolute -translate-x-1/2 transform left-1/2 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {isEdit ? "Update Task" : "Create New Task"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task Name
          </label>
          <input
            type="text"
            id="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="Description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="Description"
            name="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="TaskStage"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task Stage
          </label>
          <select
            id="TaskStage"
            name="TaskStage"
            value={taskStage}
            onChange={(e) => setTaskStage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          >
            <option value="In Progress">In Progress</option>
            <option value="Review">Review</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="StartDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Start Date
            </label>
            <input
              type="date"
              id="StartDate"
              name="StartDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="EndDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              End Date
            </label>
            <input
              type="date"
              id="EndDate"
              name="EndDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700 disabled:bg-zinc-400"
          >
            {isSubmitting 
              ? (isEdit ? "Updating..." : "Creating...") 
              : (isEdit ? "Update Task" : "Create Task")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;