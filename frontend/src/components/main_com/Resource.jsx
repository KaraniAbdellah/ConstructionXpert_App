import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ResourceForm from "./ResourceForm";
import { Link } from "react-router";
import {
  Clock,
  CirclePlus,
  Timer,
  Trash2,
  Info,
  FilePenLine,
} from "lucide-react";
import axios from "axios";

export default function Resource() {
  const { id } = useParams();
  const [RenderResourceFrom, setRenderResourceFrom] = useState(false);
  const [ResourceData, setResourceData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentResource, setCurrentResource] = useState({
    Suppliers: [],
    Quantity: "",
    Type: "",
    Name: "",
  });
  const [Task, setTask] = useState({});

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/task/GetTaskById/${id}`).then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, []);

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
          // onClick={() => handleResourceFrom()}
          className={`title bg-zinc-600 mr-3 flex justify-end items-center text-sm p-3 rounded-full text-white font-semibold `}
        >
          <CirclePlus className="mr-1" />
          Create Resource
        </button>
      </div>

      {/* Resource From */}
      {/* {RenderResourceFrom ? (
        <ResourceForm
          ResourceData={ResourceData}
          setResourceData={setResourceData}
          setRenderResourceFrom={setRenderResourceFrom}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          currentResource={currentResource}
          Project={Project}
        ></ResourceForm>
      ) : (
        ""
      )} */}
      <ResourceForm></ResourceForm>
    </div>
  );
}
