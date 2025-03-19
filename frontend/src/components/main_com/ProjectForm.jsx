import React, { useState } from "react";

export default function ProjectForm({ setRenderProjectFrom, setProjectData, projectData }) {


  const [newAdmin, setNewAdmin] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({...projectData,[name]: value,});
  };

  const handleAdminAdd = () => {
    if (newAdmin.trim()) {
      setProjectData({
        ...projectData,
        Admins: [...projectData.Admins, newAdmin.trim()],
      });
      setNewAdmin("");
    }
  };

  const removeAdmin = (adminToRemove) => {
    setProjectData({
      ...projectData,
      Admins: projectData.Admins.filter((admin) => admin !== adminToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project data to submit:", projectData);
    setRenderProjectFrom(false);
    console.log(projectData);
  };

  const handleCancel = () => {
    setRenderProjectFrom(false);
  };

  return (
    <div className="bg-gray-50 z-50 px-8 py-6 top-[50px] md:w-[60%] w-[90%] absolute -translate-x-1/2 transform left-1/2  rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Create New Project
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
              name="Name"
              value={projectData.Name}
              onChange={handleChange}
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
              value={projectData.TaskStage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            >
              <option value="Planning">Planning</option>
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
              value={projectData.Description}
              onChange={handleChange}
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
                value={newAdmin}
                onChange={(e) => setNewAdmin(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Enter admin name or email"
              />
              <button
                type="button"
                onClick={handleAdminAdd}
                className="px-4 py-2 bg-zinc-600 text-white rounded-r-md hover:bg-zinc-700"
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {projectData.Admins.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {projectData.Admins.map((admin, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-zinc-100 px-3 py-1 rounded-full"
                    >
                      <span className="text-zinc-800 text-sm">{admin}</span>
                      <button
                        type="button"
                        onClick={() => removeAdmin(admin)}
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
              value={projectData.StartDate}
              onChange={handleChange}
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
              value={projectData.EndDate}
              onChange={handleChange}
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
              value={projectData.Budget}
              onChange={handleChange}
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
