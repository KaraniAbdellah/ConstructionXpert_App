import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TaskForm from "./TaskForm";
import { Clock, CirclePlus } from "lucide-react";
import axios from "axios";

export default function Task() {
  const { id } = useParams();
  const [RenderTaskFrom, setRenderTaskFrom] = useState(false);
  const [TaskData, setTaskData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [Project, setProject] = useState({});

  useEffect(() => {});
  const handleTaskFrom = () => {
    setRenderTaskFrom(true);
  }

  useEffect(() => {
    // get The Project
    async function GetProject() {
      await axios.get(`http://127.0.0.1:3000/project/GetProjectById/${id}`).then((res) => {
        setProject(res.data);
        console.log(res.data);
      });
    }
    GetProject();
  }, []);

  return (
    <div className="p-4">
      <header className="flex p-2 mb-3 justify-between items-center md:items-center rounded-full bg-gray-50 shadow-sm border border-gray-100">
      <div className="info">
        <h1 className="text-xl ml-4 font-bold text-gray-800">{Project.Name}</h1>
      </div>

      <div className="duration rounded-full bg-zinc-600 px-4 py-3 shadow-md self-start">
        <div className="flex items-center gap-2">
          <Clock className="text-white" size={16} />
          <p className="text-sm md:text-base text-white">
            {Project.StartDate} - {Project.EndDate}
          </p>
        </div>
      </div>
    </header>
      <div className="tasks flex justify-end items-center">
        <button
          onClick={() => handleTaskFrom()}
          className={`title bg-zinc-600 flex justify-center items-center mr-3 text-sm p-3 rounded-full text-white font-semibold `}
        >
          <CirclePlus className="mr-1" />
          Create Task
        </button>

        {/* Task From */}
        {RenderTaskFrom ? (
          <TaskForm
            TaskData={TaskData}
            setTaskData={setTaskData}
            setRenderTaskFrom={setRenderTaskFrom}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            currentTask={currentTask}
            Project={Project}
          ></TaskForm>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
