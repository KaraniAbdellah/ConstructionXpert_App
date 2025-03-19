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
      <div className="projects mt-5 space-y-4">
        <div className="project bg-zinc-100 p-4 rounded-xl shadow-md">
          <p className="project_name bg-zinc-700 p-2 rounded-t-md text-white text-xl font-semibold">
            Project Name
          </p>
          <div className="p-2">
            <p className="description text-gray-600 mt-2">Description</p>

            <div className="duration flex items-center gap-2 mt-4 text-gray-700">
              <Timer size={20} />
              <div className="info">
                <p className="text-sm font-medium">Project Duration</p>
                <p className="text-xs">01/03/2025 - 01/03/2025</p>
              </div>
            </div>

            <div className="budget flex items-center gap-2 mt-3 text-gray-700">
              <HandCoins size={20} />
              <div className="info">
                <p className="text-sm font-medium">Budget</p>
                <p className="text-xs">2,90</p>
              </div>
            </div>

            <div className="btns flex justify-between items-center mt-5">
              <button className="bg-yellow-200 text-yellow-800 font-semibold transition-all px-4 py-2 rounded-lg shadow hover:bg-yellow-300 flex items-center">
                <FilePenLine className="mr-2" size={20} /> Edit
              </button>
              <button className="bg-red-200 text-red-800 font-semibold transition-all px-4 py-2 rounded-lg shadow hover:bg-red-300 flex items-center">
                <Trash2 className="mr-2" size={20} /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
