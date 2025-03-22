import React from 'react'
import task from "../../assets/task.png"
import project from "../../assets/project.png"
import resource from "../../assets/resource.png"

export default function Works() {
  return (
    <div id='works' className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="max-w-4xl mx-auto">

            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="bg-zinc-800 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Create your project</h3>
                <p className="text-gray-600">Define your project details, including name, description, dates, and estimated budget.</p>
              </div>
              <div className="md:w-1/2 w-full bg-white p-4 rounded-lg shadow-md">
                <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
                <img className='h-[100px] w-[100px]' src={project} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-start md:items-center mb-12">
              <div className="md:w-1/2  mb-6 md:mb-0 md:pl-8">
                <div className="bg-zinc-800 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Add tasks</h3>
                <p className="text-gray-600">Create specific tasks for your project and assign them to your team members.</p>
              </div>
              <div className="md:w-1/2 w-full bg-white p-4 rounded-lg shadow-md">
                <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
                  <img className='h-[100px] w-[100px]' src={task} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="bg-zinc-800 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Manage your resources</h3>
                <p className="text-gray-600">Assign resources to your tasks and track their usage throughout the project.</p>
              </div>
              <div className="md:w-1/2 w-full bg-white p-4 rounded-lg shadow-md">
                <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
                  <div className="h-48 bg-gray-200 rounded flex items-center justify-center">
                    <img className='h-[100px] w-[100px]' src={resource} alt="" />
                  </div>                 
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}
