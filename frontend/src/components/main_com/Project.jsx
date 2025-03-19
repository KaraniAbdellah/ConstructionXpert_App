import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import { CirclePlus } from "lucide-react";

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
  const RenderProjectFromFun = () =>  {
    setRenderProjectFrom(true);
  }


  return (
    <div className={`p-5 relative ${RenderProjectFrom ? "before:absolute before:bg-zinc-700 before:opacity-50 before:top-0 before:left-0 before:w-full before:min-h-screen": ""}`}>
      <header className="bg-gray-100 p-2 rounded-full flex justify-between items-center">
        <p className="title font-semibold text-lg ml-3">Projects</p>
        <button onClick={() => RenderProjectFromFun()} className={`title bg-zinc-600 flex justify-center items-center mr-3 text-sm p-3 rounded-full text-white font-semibold 
          ${RenderProjectFrom ? "z-[-1]": ""}`}>
          <CirclePlus className="mr-1" />
          Create Project
        </button>
      </header>

      {/* Project From */}
      {RenderProjectFrom ? <ProjectForm projectData={projectData} setProjectData={setProjectData} setRenderProjectFrom={setRenderProjectFrom}></ProjectForm>: ""}

      {/* Project Details */}
      <div>
        
      </div>
    </div>
  );
}
