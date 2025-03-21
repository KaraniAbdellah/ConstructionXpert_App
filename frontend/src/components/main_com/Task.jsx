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
      <header className="flex p-3 mb-4 flex-col md:flex-row justify-between mt-2 items-start md:items-center gap-4 bg-white rounded-full shadow-md ">
        <div className="info flex-1 ml-2">
          <h1 className="text-md font-bold text-gray-800">{Project.Name}</h1>
          <p className="text-gray-600 mt-1 line-clamp-2">
          {Project.Description}
          </p>
        </div>

        <div className="duration rounded-full bg-zinc-100  p-3 shadow-sm">
          <p className="text-sm font-medium text-zinc-700 mb-1">
            Project Duration
          </p>
          <div className="flex items-center gap-2">
            <Clock className="text-zinc-600" size={16} />
            <p className="text-zinc-800">
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
