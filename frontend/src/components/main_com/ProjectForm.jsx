import React, { useEffect, useState } from "react";

export default function ProjectForm({ setRenderProjectFrom, setProjectData, projectData, isEdit, setIsEdit}) {
  const [newAdmin, setNewAdmin] = useState("");
  const [Admins, setAdmins] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [task_stage, setTask_Stage] = useState("");
  const [start_Date, setStart_Date] = useState(new Date());
  const [end_Date, setEnd_Date] = useState(new Date());
  const [budget, setBudget] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // setRenderProjectFrom(false);
    console.log(Admins); console.log(name); console.log(description); console.log(task_stage);
    console.log(start_Date); console.log(end_Date); console.log(budget);

    setProjectData((projectData) => [...projectData, {
      id: new Date().getTime(),
      Name: name,
      Description: description,
      TaskStage: task_stage,
      Admins: Admins,
      StartDate: start_Date,
      EndDate: end_Date,
      Budget: budget,
    }]);
    console.log(projectData);
  };

  const handleCancel = () => {
    setRenderProjectFrom(false);
  };

  const removeAdmin = () => {
    setAdmins(Admins.filter((admin) => admin != newAdmin));
  }

  useEffect(() => {

  });

  return (
    <div className="bg-gray-50 z-50 px-8 py-6 top-[50px] md:w-[60%] w-[90%] absolute -translate-x-1/2 transform left-1/2  rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {isEdit ? "Update Project" : "Create New Project"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="block md:flex justify-between items-start md:mb-4">
          <div className="md:w-[48%] w-[100%] mb-3">
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Name
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

          <div className="md:w-[48%] w-[100%] mb-4 md:mb-0">
            <label
              htmlFor="TaskStage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Task Stage
            </label>
            <select
              id="TaskStage"
              name="TaskStage"
              value={task_stage}
              onChange={(e) => setTask_Stage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            >
              <option value="In Progress">In Progress</option>
              <option value="Review">Review</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="block md:flex justify-between items-start mb-6">
          <div className="md:w-[48%] w-[100%]">
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
          <div className="md:w-[48%] w-[100%]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Admins
            </label>
            <div className="flex mb-1">
              <input
                type="text"
                required
                onChange={(e) => setNewAdmin(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Enter admin name or email"
              />
              <button
                type="button"
                onClick={() => setAdmins((Admins) => [...Admins, newAdmin])}
                className="px-4 py-2 bg-zinc-600 text-white rounded-r-md hover:bg-zinc-700"
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {Admins.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {Admins.map((admin, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-zinc-100 px-3 py-1 rounded-full"
                    >
                      <span className="text-zinc-800 text-sm">{admin}</span>
                      <button
                        type="button"
                        onClick={(e) => removeAdmin(e)}
                        className="ml-2 text-zinc-800 hover:text-zinc-900"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No admins added yet</p>
              )}
            </div>
          </div>
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
              value={start_Date}
              onChange={(e) => setStart_Date(e.target.value)}
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
              value={end_Date}
              onChange={(e) => setEnd_Date(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Budget"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Budget
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="Budget"
              name="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => handleCancel()}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700"
          >
            Create Project
          </button>
        </div>
      </form>

    </div>
  );
}
