import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

function ResourceForm({
  ResourceData,
  setResourceData,
  setRenderResourceForm,
  isEdit,
  setIsEdit,
  currentResource,
  Task,
  Project,
}) {
  // Initialize state with currentResource values or defaults for new resources
  const [name, setName] = useState(isEdit ? currentResource.Name : "");
  const [type, setType] = useState(isEdit ? currentResource.Type : "Material");
  const [quantity, setQuantity] = useState(isEdit ? currentResource.Quantity : "");
  const [suppliers, setSuppliers] = useState(isEdit ? currentResource.Suppliers : []);
  const [newSupplier, setNewSupplier] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Resource type options
  const resourceTypes = [
    "Material",
    "Equipment",
    "Tool",
    "Labor",
    "Software",
    "Service",
    "Infrastructure",
    "Other"
  ];

  // Update form fields when currentResource changes (for edit mode)
  useEffect(() => {
    if (isEdit && currentResource) {
      setName(currentResource.Name || "");
      setType(currentResource.Type || "Material");
      setQuantity(currentResource.Quantity || "");
      setSuppliers(currentResource.Suppliers || []);
    }
  }, [isEdit, currentResource]);

  const addSupplier = () => {
    if (newSupplier.trim() !== "") {
      setSuppliers([...suppliers, newSupplier.trim()]);
      setNewSupplier("");
    } else {
      toast.error("Supplier name cannot be empty");
    }
  };

  const removeSupplier = (index) => {
    setSuppliers(suppliers.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newSupplier.trim() !== "") {
      e.preventDefault();
      addSupplier();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (suppliers.length === 0) {
      toast.error("At least one supplier is required");
      return;
    }
    
    setIsSubmitting(true);

    const resource = {
      Name: name,
      Type: type,
      Quantity: quantity,
      Suppliers: suppliers,
      Task: Task?._id,
      Project: Project?._id,
    };

    try {
      if (isEdit && currentResource._id) {
        await axios.put(
          `http://127.0.0.1:3000/resource/UpdateResource/${currentResource._id}`,
          resource
        );
        
        setResourceData(prevResources => 
          prevResources.map(item => 
            item._id === currentResource._id ? { ...resource, _id: currentResource._id } : item
          )
        );
        toast.success("Resource updated successfully!");
      } else {
        const response = await axios.post(
          "http://127.0.0.1:3000/resource/AddResource", 
          resource
        );
        const newResource = { ...resource, _id: response.data._id };
        setResourceData(prevResources => [...prevResources, newResource]);
        toast.success("Resource created successfully!");
      }
      
      setRenderResourceForm(false);
      if (isEdit) setIsEdit(false);
    } catch (error) {
      console.error("Error saving resource:", error);
      toast.error(error.response?.data?.message || "Error saving resource");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setRenderResourceForm(false);
    if (isEdit) setIsEdit(false);
  };

  return (
    <div className="bg-gray-50 z-50 px-8 py-6 top-[50px] md:w-[60%] w-[90%] absolute -translate-x-1/2 transform left-1/2 rounded-lg shadow-md">
      <Toaster position="top-center" reverseOrder={false} />
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
              onKeyPress={handleKeyPress}
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
          
          {suppliers.length > 0 ? (
            <div className="mt-2 border border-gray-200 rounded-md p-2 max-h-40 overflow-y-auto">
              <ul>
                {suppliers.map((supplier, index) => (
                  <li key={index} className="flex justify-between items-center py-1 px-2 hover:bg-gray-100 rounded">
                    <span>{supplier}</span>
                    <button
                      type="button"
                      onClick={() => removeSupplier(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-gray-500 mt-1">No suppliers added yet</p>
          )}
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
              ? (isEdit ? "Updating..." : "Creating...") 
              : (isEdit ? "Update Resource" : "Create Resource")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResourceForm;