import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import { CirclePlus } from "lucide-react";

export default function Project() {
  const [RenderProjectFrom, setRenderProjectFrom] = useState(false);
  const RenderProjectFromFun = () =>  {
    setRenderProjectFrom(true);
  }
  
  return (
    <div className="p-5">
      <header className="bg-gray-100 p-2 rounded-full flex justify-between items-center">
        <p className="title font-semibold text-lg ml-3">Projects</p>
        <button onClick={() => RenderProjectFromFun()} className="title bg-zinc-500 flex justify-center items-center mr-3 text-sm p-3 rounded-full text-white font-semibold">
          <CirclePlus className="mr-1" />
          Create Project
        </button>
      </header>

      {/* Project From */}
      {RenderProjectFrom ? <ProjectForm></ProjectForm>: ""}
    </div>
  );
}
