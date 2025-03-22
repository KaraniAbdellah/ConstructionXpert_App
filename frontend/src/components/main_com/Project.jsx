import React, { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";
import axios from "axios";
import { Link } from "react-router";

import {
  CirclePlus,
  Trash2,
  FilePenLine,
  Timer,
  HandCoins,
  User,
  Info,
} from "lucide-react";

export default function Project() {
  const [RenderProjectFrom, setRenderProjectFrom] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const RenderProjectFromFun = () => {
    setRenderProjectFrom(true);
    setIsEdit(false);
    setCurrentProject(null);
  };

  const handleDelete = (projectId) => {
    axios
      .delete(`http://127.0.0.1:3000/project/DeleteProject/${projectId}`)
      .then((res) => {
        console.log(res.data);
      });

    setProjectData(projectData.filter((project) => project._id !== projectId));
  };

  const handleEdit = (projectId) => {
    setRenderProjectFrom(true);
    setIsEdit(true);
    const projectToEdit = projectData.find(
      (project) => project._id === projectId
    );
    setCurrentProject(projectToEdit);
  };

  useEffect(() => {
    async function getProjects() {
      await axios
        .get("http://127.0.0.1:3000/project/GetProjects")
        .then((res) => {
          console.log(res.data);
          setProjectData(res.data);
        });
    }
    getProjects();
  }, []);

  return (
    <div
      className={`p-5 ${
        RenderProjectFrom
          ? "before:absolute before:bg-zinc-700 before:opacity-50 before:top-0 before:left-0 before:w-full before:min-h-screen"
          : ""
      }`}
    >
      <header className="bg-gray-100 p-2 rounded-full flex justify-between items-center">
        <p className="title font-semibold text-lg ml-3">Projects</p>
        <button
          onClick={() => RenderProjectFromFun()}
          className={`title bg-zinc-600 flex justify-center items-center mr-3 text-sm p-3 rounded-full text-white font-semibold 
          ${RenderProjectFrom ? "z-[-1]" : ""}`}
        >
          <CirclePlus className="mr-1" />
          Create Project
        </button>
      </header>

      {/* Project From */}
      {RenderProjectFrom ? (
        <ProjectForm
          projectData={projectData}
          setProjectData={setProjectData}
          setRenderProjectFrom={setRenderProjectFrom}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          currentProject={currentProject}
        ></ProjectForm>
      ) : (
        ""
      )}

      {/* Project Details */}

      <div className="projects mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.length > 0 ? (
          projectData.map((project, index) => (
            <div
              key={index}
              id={project._id}
              className={`project bg-zinc-100 px-3 pt-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300
        ${RenderProjectFrom ? "z-[-1]" : "z-50"}`}
            >
              <div className="bg-gray-200 p-3 rounded-t-md flex justify-between items-center">
                <p className="text-zinc-700 text-lg font-bold truncate">
                  {project.Name}
                </p>
                <p
                  className={`task_stage px-3 py-1 rounded-full text-sm font-medium ${
                    project.TaskStage === "In Progress"
                      ? "text-yellow-700 bg-yellow-100"
                      : project.TaskStage === "Review"
                      ? "text-blue-700 bg-blue-100"
                      : project.TaskStage === "Completed"
                      ? "text-green-700 bg-green-100"
                      : ""
                  }`}
                >
                  {project.TaskStage}
                </p>
              </div>

              <div className="p-4 space-y-4">
                <p className="text-gray-600 text-sm">{project.Description}</p>

                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-gray-700">
                      <Timer size={18} />
                      <div>
                        <p className="text-sm font-medium">Project Duration</p>
                        <p className="text-xs">
                          {project.StartDate} - {project.EndDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <HandCoins size={18} />
                      <div>
                        <p className="text-sm font-medium">Budget</p>
                        <p className="text-xs">{project.Budget}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-zinc-700 items-center">
                    <User size={18} className="mr-2" />
                    <div className="admins flex flex-wrap items-center gap-2">
                      {project.Admins.map((admin, index) => (
                        <p
                          className="bg-slate-300 px-2 py-1 rounded-full text-xs"
                          key={index}
                        >
                          {admin}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4 gap-3">
                  <button
                    onClick={() => handleDelete(project._id)}
                    type="button"
                    className="text-white bg-red-500 hover:bg-red-600 w-9 h-9 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full text-sm"
                  >
                    <Trash2 size={16} />
                  </button>

                  <button
                    onClick={() => handleEdit(project._id)}
                    type="button"
                    className="text-white bg-yellow-500 hover:bg-yellow-600 w-9 h-9 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full text-sm"
                  >
                    <FilePenLine size={16} />
                  </button>
                  <Link to={`/tasks/${project._id}`}>
                    <button
                      type="button"
                      className="text-white bg-zinc-500 hover:bg-zinc-600 w-9 h-9 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-zinc-300 rounded-full text-sm"
                    >
                      <Info size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No projects found
          </div>
        )}
      </div>
    </div>
  );
}
