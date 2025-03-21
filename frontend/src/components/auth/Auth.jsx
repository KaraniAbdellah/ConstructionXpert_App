import React, { useState } from "react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const handleLogin = () => {
    setActiveTab("login");
  }
  const handleRegistration = () => {

  }
  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-zinc-500">
              ConstructionXpert Services
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex mb-6 border rounded-md overflow-hidden">
            <button
              className={`flex-1 py-3 text-center font-semibold ${
                activeTab === "login" ? "bg-white" : "bg-gray-100"
              }`}
              onClick={() => handleLogin()}
            >
              Login
            </button>
            <button
              className={`flex-1 py-3 text-center font-semibold ${
                activeTab === "registration" ? "bg-white" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("registration")}
            >
              Registration
            </button>
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <div>
              <h2 className="text-xl font-medium text-zinc-800 mb-1">Login</h2>
              <p className="text-zinc-500 mb-6">
                Enter your credentials to access your account
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email-login"
                    className="block text-sm text-zinc-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email-login"
                    className="w-full p-2 bg-zinc-50 border border-zinc-300 rounded-md"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <label
                      htmlFor="password-login"
                      className="block text-sm text-zinc-700"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    id="password-login"
                    className="w-full p-2 bg-zinc-50 border border-zinc-300 rounded-md"
                    placeholder="••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-zinc-500 hover:bg-zinc-600 text-white font-medium rounded-md"
                >
                  Login
                </button>
              </form>
            </div>
          )}

          {/* Registration Form */}
          {activeTab === "registration" && (
            <div>
              <h2 className="text-xl font-medium text-zinc-800 mb-1">
                Create an account
              </h2>
              <p className="text-zinc-500 mb-6">
                Fill out the form below to register
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fname"
                      className="block text-sm text-zinc-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      className="w-full p-2 border border-zinc-300 rounded-md"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lname"
                      className="block text-sm text-zinc-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      className="w-full p-2 border border-zinc-300 rounded-md"
                      placeholder="Deo"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-zinc-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 bg-zinc-50 border border-zinc-300 rounded-md"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm text-zinc-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 bg-zinc-50 border border-zinc-300 rounded-md"
                    placeholder="••••"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block text-sm text-zinc-700 mb-1"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="w-full p-2 border border-zinc-300 rounded-md"
                    placeholder="••••••••"
                  />
                </div>

                <button
                onClick={() => handleRegistration()}
                  type="submit"
                  className="w-full py-2 px-4 bg-zinc-500 hover:bg-zinc-600 text-white font-medium rounded-md"
                >
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-b from-gray-400 to-gray-600">
        <div className="h-full flex flex-col justify-center p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            ConstructionXpert Services
          </h2>
          <p className="text-lg mb-8">
            The complete solution for managing your construction projects.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-600 hover:bg-zinc-700 transition-all p-4 rounded-lg">
              <h3 className="text-lg font-medium">Project Management</h3>
              <p className="mt-1 text-sm">
                Create, visualize and manage your projects with budgets,
                deadlines, and resources.
              </p>
            </div>

            <div className="bg-zinc-600 hover:bg-zinc-700 p-4 transition-all rounded-lg">
              <h3 className="text-lg font-medium">Task Management</h3>
              <p className="mt-1 text-sm">
                Plan and track tasks with details on dates, resources, and
                assignees.
              </p>
            </div>

            <div className="bg-zinc-600 hover:bg-zinc-700 p-4 transition-all rounded-lg">
              <h3 className="text-lg font-medium">Resource Management</h3>
              <p className="mt-1 text-sm">
                Manage material and human resources with supplier and
                availability details.
              </p>
            </div>
            <div class=" bg-linear-to-r/srgb from-indigo-500 to-teal-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
