import React, { useState, useEffect } from "react";
import axios from "axios";
import Resource from "./Resource";

function ResourceForm({
  ResourceData,
  setResourceData,
  setRenderResourceForm,
  isEdit,
  setIsEdit,
  currentResource,
  TaskId,
  ProjectId,
}) {
  // Initialize state with currentResource values or defaults for new resources
  const [name, setName] = useState(currentResource.Name || "");
  const [type, setType] = useState(currentResource.Type || "Material");
  const [quantity, setQuantity] = useState(currentResource.Quantity || "0");
  const [suppliers, setSuppliers] = useState(currentResource.Suppliers || []);
  const [newSupplier, setNewSupplier] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log(currentResource);
  }, []);

  // Resource type options
  const resourceTypes = [
    "Material",
    "Equipment",
    "Tool",
    "Labor",
    "Software",
    "Service",
    "Infrastructure",
    "Other",
  ];

  // useEffect(() => {
  //   if (isEdit && currentResource) {
  //     setName(currentResource.Name || "");
  //     setType(currentResource.Type || "Material");
  //     setQuantity(currentResource.Quantity || "");
  //     setSuppliers(currentResource.Suppliers || []);
  //   }
  // }, [isEdit, currentResource]);

  const addSupplier = () => {
    if (newSupplier.trim() !== "") {
      setSuppliers([...suppliers, newSupplier.trim()]);
      setNewSupplier("");
    }
  };

  const removeSupplier = (index) => {
    setSuppliers(suppliers.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resource = {
      Name: name,
      Type: type,
      Quantity: quantity,
      Suppliers: suppliers,
      Task: TaskId,
      Project: ProjectId,
    };

    console.log(resource);
    if (isEdit) {
      axios.put(`http://127.0.0.1:3000/resource/UpdateResource/${currentResource._id}`, resource).then((res) => {
        console.log(res.data);
      });
      setResourceData(ResourceData.map((rsc) => (rsc._id === currentResource._id ? resource: rsc)));
    } else {
      axios
        .post("http://127.0.0.1:3000/resource/AddResource", resource)
        .then((res) => {
          console.log(res.data);
        });

      setResourceData((resources) => [...resources, resource]);
    }
    setIsEdit(false);
    setRenderResourceForm(false);
  };

  const handleCancel = () => {
    console.log("setRenderResourceForm");
    setRenderResourceForm(false);
    if (isEdit) setIsEdit(false);
  };

  return (
    <div className="bg-gray-50 z-50 px-8 py-6 top-[50px] md:w-[60%] w-[90%] absolute -translate-x-1/2 transform left-1/2 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {isEdit ? "Update Resource" : "Create New Resource"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Resource Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="Type"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Resource Type
          </label>
          <select
            id="Type"
            name="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          >
            {resourceTypes.map((resourceType) => (
              <option key={resourceType} value={resourceType}>
                {resourceType}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Quantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity
          </label>
          <input
            type="text"
            id="Quantity"
            name="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Suppliers
          </label>
          <div className="flex mb-1">
            <input
              type="text"
              value={newSupplier}
              onChange={(e) => setNewSupplier(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="Enter supplier name"
            />
            <button
              type="button"
              onClick={addSupplier}
              className="px-4 py-2 bg-zinc-600 text-white rounded-r-md hover:bg-zinc-700"
            >
              Add
            </button>
          </div>

          <div className="mt-2">
            {suppliers.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {suppliers.map((suplier, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-zinc-100 px-3 py-1 rounded-full"
                  >
                    <span className="text-zinc-800 text-sm">{suplier}</span>
                    <button
                      type="button"
                      onClick={() => removeSupplier(index)}
                      className="ml-2 text-zinc-800 hover:text-zinc-900"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No admins added yet</p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-700 disabled:bg-zinc-400"
          >
            {isSubmitting
              ? isEdit
                ? "Updating..."
                : "Creating..."
              : isEdit
              ? "Update Resource"
              : "Create Resource"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResourceForm;
