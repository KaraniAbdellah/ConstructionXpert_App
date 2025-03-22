import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ResourceForm from "./ResourceForm";
import { Link } from "react-router";
import {
  Wrench,
  Building2,
  CircleDashed,
  Trash2,
  WashingMachine,
  HardHat,
  FilePenLine,
  Laptop,
  Package,
  Users,
  Clock,
  CirclePlus,
} from "lucide-react";
import axios from "axios";

export default function Resource() {
  const { TaskId, ProjectId } = useParams();
  const [RenderResourceFrom, setRenderResourceForm] = useState(false);
  const [ResourceData, setResourceData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentResource, setCurrentResource] = useState({
    Suppliers: [],
    Quantity: "",
    Type: "",
    Name: "",
  });
  const [Task, setTask] = useState({});

  const handleResourceFrom = () => {
    setRenderResourceForm(true);
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case "Material":
        return <Package size={14} />;
      case "Equipment":
        return <Wrench size={14} />;
      case "Tool":
        return <WashingMachine size={14} />;
      case "Labor":
        return <HardHat size={14} />;
      case "Software":
        return <Laptop size={14} />;
      case "Service":
        return <Wrench size={14} />;
      case "Infrastructure":
        return <Building2 size={14} />;
      default:
        return <CircleDashed size={14} />;
    }
  };

  useEffect(() => {
    async function GetTaskAndResource() {
      await axios
        .get(`http://127.0.0.1:3000/task/GetTaskById/${TaskId}`)
        .then((res) => {
          setTask(res.data);
        });

      await axios
        .get(`http://127.0.0.1:3000/resource/GetResource/${TaskId}`)
        .then((res) => {
          setResourceData(res.data);
        });
    }
    GetTaskAndResource();
  }, []);

  const handleDelete = async (resourceId) => {
    await axios
      .delete(`http://127.0.0.1:3000/resource/DeleteResource/${resourceId}`)
      .then((res) => {
        console.log(res.data);
      });
    
    setResourceData(ResourceData.filter((resource) => resourceId != resource._id));
  };

  const handleEdit = (resourceId) => {

    // axios.get(`http://127.0.0.1:3000/resource/GetResourceById/${resourceId}`).then((res) => {
    //   console.log(res.data);
    //   setCurrentResource(res.data);
    // });

    console.log(ResourceData.filter((resource) => resource._id == resourceId)[0]);
    setCurrentResource(ResourceData.filter((resource) => resource._id == resourceId)[0]);
    setIsEdit(true);
    setRenderResourceForm(true);
  };

  return (
    <div className="p-4">
      <header className="flex p-2 mb-3 justify-between items-center md:items-center rounded-full bg-gray-50 shadow-sm border border-gray-100">
        <div className="info">
          <h1 className="text-xl ml-4 font-bold text-gray-800">{Task.Name}</h1>
        </div>

        <div className="duration rounded-full bg-zinc-600 px-4 py-3 shadow-md self-start">
          <div className="flex items-center gap-2">
            <Clock className="text-white" size={16} />
            <p className="text-sm md:text-base text-white">
              {Task.StartDate} - {Task.EndDate}
            </p>
          </div>
        </div>
      </header>

      <div className="flex justify-end items-center">
        <button
          onClick={() => handleResourceFrom()}
          className={`title bg-zinc-600 mr-3 flex justify-end items-center text-sm p-3 rounded-full text-white font-semibold `}
        >
          <CirclePlus className="mr-1" />
          Create Resource
        </button>
      </div>

      {/* Resource From */}
      {RenderResourceFrom ? (
        <ResourceForm
          ResourceData={ResourceData}
          setResourceData={setResourceData}
          setRenderResourceForm={setRenderResourceForm}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          currentResource={currentResource}
          TaskId={TaskId}
          ProjectId={ProjectId}
        ></ResourceForm>
      ) : (
        ""
      )}

      <div
        className={`mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
          RenderResourceFrom
            ? "before:absolute before:bg-zinc-700/50 before:inset-0 before:w-full before:h-full"
            : ""
        }`}
      >
        {ResourceData.length > 0 ? (
          ResourceData.map((resource, index) => (
            <div
              key={index}
              id={resource._id}
              className={`bg-zinc-100 rounded-lg hover:shadow-md transition-all duration-300 overflow-hidden ${
                RenderResourceFrom ? "opacity-50" : "opacity-100"
              }`}
            >
              <div className="p-3">
                <div className="flex bg-zinc-200 p-3 rounded-md justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg text-gray-800 truncate">
                    {resource.Name}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    <div className="flex items-center gap-1">
                      {getResourceIcon(resource.Type)}
                      <span>{resource.Type}</span>
                    </div>
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2 text-gray-700">
                    <Package size={16} className="mr-2 text-gray-500" />
                    <span className="font-medium mr-2">Quantity:</span>
                    <span>{resource.Quantity}</span>
                  </div>

                  <div className="flex items-start">
                    <Users size={16} className="mr-2 mt-1 text-gray-500" />
                    <div className="flex items-center justify-center">
                      <span className="font-medium text-gray-700 mr-2">
                        Suppliers:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {resource.Suppliers.map((supplier, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                          >
                            {supplier}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 p-3 flex justify-end">
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDelete(resource._id)}
                    type="button"
                    className="text-white bg-red-500 hover:bg-red-600 w-9 h-9 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full text-sm"
                    aria-label="Delete"
                  >
                    <Trash2 size={16} />
                  </button>

                  <button
                    onClick={() => handleEdit(resource._id)}
                    type="button"
                    className="text-white bg-amber-500 hover:bg-amber-600 w-9 h-9 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-full text-sm"
                    aria-label="Edit"
                  >
                    <FilePenLine size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No resources found
          </div>
        )}
      </div>
    </div>
  );
}
