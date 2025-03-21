import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TaskForm from "./TaskForm";
import {
  Clock,
  CirclePlus,
  Timer,
  Trash2,
  Info,
  FilePenLine,
} from "lucide-react";
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
  };

  useEffect(() => {
    // get The Project
    async function GetProject() {
      await axios
        .get(`http://127.0.0.1:3000/project/GetProjectById/${id}`)
        .then((res) => {
          setProject(res.data);
        });
    }
    GetProject();

    // Get Tasks
    async function GetTasks() {
      await axios
        .get(`http://127.0.0.1:3000/task/GetTasks/${id}`)
        .then((res) => {
          console.log(res.data);
          setTaskData(res.data);
        });
    }
    GetTasks();
  }, []);

  return (
    <div className="p-4">
      <header className="flex p-2 mb-3 justify-between items-center md:items-center rounded-full bg-gray-50 shadow-sm border border-gray-100">
        <div className="info">
          <h1 className="text-xl ml-4 font-bold text-gray-800">
            {Project.Name}
          </h1>
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

      <div className="flex justify-end items-center">
        <button
          onClick={() => handleTaskFrom()}
          className={`title bg-zinc-600 mr-3 flex justify-end items-center text-sm p-3 rounded-full text-white font-semibold `}
        >
          <CirclePlus className="mr-1" />
          Create Task
        </button>
      </div>

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

      {/* Tasks Details */}
      <div className="tasks mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TaskData.length > 0 &&
          TaskData.map((task, index) => (
            <div
              key={index}
              id={task._id}
              className={`task bg-zinc-100 px-3 pt-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300
          ${RenderTaskFrom ? "z-[-1]" : "z-50"}`}
            >
              <div className="bg-gray-200 p-3 rounded-t-md flex justify-between items-center">
                <p className="text-zinc-700 text-lg font-bold truncate">
                  {task.Name}
                </p>
                <p
                  className={`task_stage px-3 py-1 rounded-full text-sm font-medium ${
                    task.TaskStage === "In Progress"
                      ? "text-yellow-700 bg-yellow-100"
                      : task.TaskStage === "Review"
                      ? "text-blue-700 bg-blue-100"
                      : task.TaskStage === "Completed"
                      ? "text-green-700 bg-green-100"
                      : "text-gray-700 bg-gray-200"
                  }`}
                >
                  {task.TaskStage}
                </p>
              </div>

              <div className="p-4 space-y-4">
                <p className="text-gray-600 text-sm">{task.Description}</p>

                <div className="flex items-center gap-2 mb-3 text-gray-700">
                  <Timer size={18} />
                  <div>
                    <p className="text-sm font-medium">Task Duration</p>
                    <p className="text-xs">
                      {task.StartDate} - {task.EndDate}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-4">
                  <div className="flex gap-3">
                    <button
                      // onClick={() => handleDelete && handleDelete(task._id)}
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-700 w-10 h-10 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full text-sm"
                    >
                      <Trash2 size={16} />
                    </button>

                    <button
                      // onClick={() => handleEdit && handleEdit(task._id)}
                      type="button"
                      className="text-white bg-yellow-500 hover:bg-yellow-600 w-10 h-10 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full text-sm"
                    >
                      <FilePenLine size={16} />
                    </button>

                    {/* <Link to={`/projectDetails/${task._id}`}> */}
                    <button
                      type="button"
                      className="text-white bg-zinc-500 hover:bg-zinc-600 w-10 h-10 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-zinc-300 rounded-full text-sm"
                    >
                      <Info size={16} />
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
}
