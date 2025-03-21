import Home from "./components/Home_Com/Home";
import { Navigate, Route, Routes } from "react-router";
import ProctedRoutes from "./components/ProctedRoutes";
import Main from "./components/main_com/Main";
import Auth from "./components/auth/Auth";
import Task from "./components/main_com/Task";
import Resource from "./components/main_com/Resource";

// Import Css Filies
import "./css_styles/bg.css";

function App() {
  const user = true; // user is login

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
          <Route path="/tasks/:ProjectId" element={<Task></Task>}></Route>
          <Route path="/resources/:TaskId/:ProjectId" element={<Resource></Resource>}></Route>
        </Routes>


        {/* Log Out Button */}
      </div>
    </div>
  );
}

export default App;
