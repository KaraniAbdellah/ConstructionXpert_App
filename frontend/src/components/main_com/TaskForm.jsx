import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

function TaskForm ({TaskData, setTaskData, setRenderTaskFrom, isEdit, setIsEdit, currentTask, Project }) {

  // const [name, setName] = useState(currentTask.Name || '');
  // const [description, setDescription] = useState(currentTask.Description || '');
  // const [taskStage, setTaskStage] = useState(currentTask.TaskStage || 'In Progress');
  // const [startDate, setStartDate] = useState(currentTask.StartDate ? new Date(currentTask.StartDate).toISOString().split('T')[0] : '');
  // const [endDate, setEndDate] = useState(currentTask.EndDate ? new Date(currentTask.EndDate).toISOString().split('T')[0] : '');

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [taskStage, setTaskStage] = useState('In Progress');
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const taskData = {
      Project: Project.Name,
      Name: name,
      Description: description,
      TaskStage: taskStage,
      StartDate: startDate,
      EndDate: endDate
    };
    console.log(taskData);
    
  };

  const handleCancel = () => {
    setRenderTaskFrom(false);
  };

  useEffect(() => {
    // Get The Project

  });

  return (
    <div className="bg-gray-50 z-50 px-8 py-6 top-[50px] md:w-[60%] w-[90%] absolute -translate-x-1/2 transform left-1/2 rounded-lg shadow-md">
      <Toaster position="top-center" reverseOrder={true} />
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
            rows="4"
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
            className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700"
          >
            {isEdit ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;