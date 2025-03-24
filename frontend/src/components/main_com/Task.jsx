import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TaskForm from "./TaskForm";
import { Link } from "react-router";
import {
  Clock,
  CirclePlus,
  Timer,
  Trash2,
  Info,
  FilePenLine,
  ArrowLeft 
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Task() {
  const { ProjectId } = useParams();
  const [RenderTaskFrom, setRenderTaskFrom] = useState(false);
  const [TaskData, setTaskData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    Description: "",
    EndDate: "",
    Name: "",
    Project: "",
    StartDate: "",
    TaskStage: "in Progress",
  });
  const [Project, setProject] = useState({});

  useEffect(() => {});
  const handleTaskFrom = () => {
    setCurrentTask({
      Description: "",
      EndDate: "",
      Name: "",
      Project: "",
      StartDate: "",
      TaskStage: "in Progress",
    });
    setIsEdit(false);
    setRenderTaskFrom(true);
  };

  const handleDelete = (id) => {
    console.log(id);
    // Delete Task
    console.log(TaskData);
    setTaskData(() => TaskData.filter((task) => task._id != id));

    axios.delete(`http://127.0.0.1:3000/task/DeleteTask/${id}`).then((res) => {
      console.log(res.data);
    });

    toast.success("Task Deleted Successfully");
  };

  const handleEdit = (id) => {
    setIsEdit(true);
    setCurrentTask(TaskData.find((task) => task._id == id));
    setRenderTaskFrom(true);
  };

  useEffect(() => {
    // get The Project
    async function GetProject() {
      await axios
        .get(`http://127.0.0.1:3000/project/GetProjectById/${ProjectId}`)
        .then((res) => {
          setProject(res.data);
        });
    }
    GetProject();

    // Get Tasks
    async function GetTasks() {
      await axios
        .get(`http://127.0.0.1:3000/task/GetTasks/${ProjectId}`)
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
        <div className="info ml-4 flex justify-between items-center">
          <button className="bg-zinc-600 p-2 rounded-full mr-3 hover:bg-zinc-700" onClick={() => window.history.back()}><ArrowLeft className="text-white"></ArrowLeft></button>
          <h1 className="text-xl font-bold text-gray-800">
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
      <div
        className={`tasks md:mx-6 mx-2 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
          RenderTaskFrom
            ? "before:absolute before:bg-zinc-700 before:opacity-50 before:top-0 before:left-0 before:w-full before:min-h-screen"
            : ""
        }`}
      >
        {TaskData.length > 0 ? (
          TaskData.map((task, index) => (
            <div
              key={index}
              id={task._id}
              className={`task bg-zinc-100 px-3 pt-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300
    ${RenderTaskFrom ? "z-[-1]" : "z-50"}`}
            >
              <div className="bg-gray-200 p-3 rounded-t-md flex justify-between items-center">
                <p className="text-zinc-700 text-lg font-semibold truncate">
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
                      onClick={() => handleDelete(task._id)}
                      type="button"
                      className="text-white bg-red-500 hover:bg-red-600 w-9 h-9 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full text-sm"
                    >
                      <Trash2 size={16} />
                    </button>

                    <button
                      onClick={() => handleEdit(task._id)}
                      type="button"
                      className="text-white bg-yellow-500 hover:bg-yellow-600 w-9 h-9 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full text-sm"
                    >
                      <FilePenLine size={16} />
                    </button>

                    <Link to={`/resources/${task._id}/${Project._id}`}>
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
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No tasks found
          </div>
        )}
      </div>
    </div>
  );
}
