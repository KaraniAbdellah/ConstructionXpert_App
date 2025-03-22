import React from 'react';
import aos from 'aos';

export default function Features() {
  return (
    <div id='features' className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Main Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-zinc-800" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Project Management</h3>
            <p className="text-gray-600">
              Create, visualize and manage your construction projects with all the necessary details: budgets, deadlines and resources.
              </p>
          </div>

          {/* Feature 2 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-zinc-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Task Management</h3>
            <p className="text-gray-600">
              Plan and track tasks associated with each project with details on dates, resources and assignees.
            </p>
          </div>

          {/* Feature 3 */}
          <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-zinc-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Resource Management</h3>
            <p className="text-gray-600">
            Efficiently manage your material and human resources with detailed information on suppliers and availability.
              </p>
          </div>
        </div>
      </div>
  )
}
