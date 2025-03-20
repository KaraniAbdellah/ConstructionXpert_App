import Home from "./components/Home_Com/Home";
import { Navigate, Route, Routes } from "react-router";
import ProctedRoutes from "./components/ProctedRoutes";
import Main from "./components/main_com/Main";
import Auth from "./components/auth/Auth";
import Task from "./components/main_com/Task";
import { LogOut } from "lucide-react";
import {Toaster} from "react-hot-toast";

// Import Css Filies
import "./css_styles/bg.css";

function App() {
  const user = true; // user is login
  const handleLogout = () => {};

  return (
    <div className="w-full relative min-h-screen">
      <div>
        <Routes>
          <Route
            path="/auth"
            element={user ? <Navigate to="/"></Navigate> : <Auth></Auth>}
          ></Route>

          <Route path="/" element={<Home></Home>}></Route>
          <Route element={<ProctedRoutes user={user}></ProctedRoutes>}>
            <Route path="/main" element={<Main></Main>}></Route>
          </Route>
          <Route path="/projectDetails/:id" element={<Task></Task>}></Route>
        </Routes>

        {/* Log Out Button */}
        <button
          onClick={() => handleLogout()}
          type="button"
          class="text-white absolute bottom-5 left-10 bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-md text-sm p-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          <LogOut />
        </button>
      </div>
    </div>
  );
}

export default App;
