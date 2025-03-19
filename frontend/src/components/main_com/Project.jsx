import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import {
  CirclePlus,
  Calendar,
  Trash2,
  FilePenLine,
  Timer,
  HandCoins,
} from "lucide-react";

export default function Project() {
  const [RenderProjectFrom, setRenderProjectFrom] = useState(false);
  const [projectData, setProjectData] = useState({
    Name: "",
    Description: "",
    TaskStage: "Planning",
    Admins: [],
    StartDate: "",
    EndDate: "",
    Budget: "",
  });
  const RenderProjectFromFun = () => {
    setRenderProjectFrom(true);
  };

  const handleDelete = () => {

  }
  const handleEdit = () => {
    setRenderProjectFrom(true); 
  }

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
        ></ProjectForm>
      ) : (
        ""
      )}

      {/* Project Details */}
      <div className="projects mt-5 grid md:grid-cols-6 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="project z-[-1] bg-zinc-100 p-4 rounded-xl col-span-2 shadow-lg"
          >
            <div className="bg-zinc-700 p-3 rounded-t-md flex justify-between items-center">
              <p className=" text-white text-lg font-bold">
                Project Name
              </p>
              <p className="task_stage bg-red-100 p-2 rounded-full">In Progress</p>
            </div>
            <div className="p-3 space-y-4">
              <p className="text-gray-600">Description</p>

              <div className="flex items-center gap-2 text-gray-700">
                <Timer size={20} />
                <div>
                  <p className="text-sm font-medium">Project Duration</p>
                  <p className="text-xs">01/03/2025 - 01/03/2025</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <HandCoins size={20} />
                <div>
                  <p className="text-sm font-medium">Budget</p>
                  <p className="text-xs">2,90</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button onClick={() => handleEdit()} className="bg-yellow-300 w-[45%] text-yellow-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 flex justify-center items-center transition">
                  <FilePenLine className="mr-2" size={18} /> Edit
                </button>
                <button onClick={() => handleDelete()} className="bg-red-300 w-[45%]  text-red-900 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-red-400 flex items-center justify-center transition">
                  <Trash2 className="mr-2" size={18} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
