import Home from "./components/Home_Com/Home";
import { Navigate, Route, Routes } from "react-router";
import ProctedRoutes from "./components/ProctedRoutes";
import Main from "./components/main_com/Main";
import Auth from "./components/auth/Auth";
import Task from "./components/main_com/Task";
import Resource from "./components/main_com/Resource";
import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import axios from "axios";
import Cookie from "js-cookie";

// Import Css Filies
import "./css_styles/bg.css";


function App() {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    AOS.init();

    // Verfiy The Token
    axios.get("http://127.0.0.1:3000/user/GetMe", {
      headers: {
        authorization: `Bearer ${Cookie.get("token")}`
      }
    }).then((res) => {
      try {
        if (res.data) {
          setIsLogin(true);
        }
      } catch (error) {
        setIsLogin(false);
        console.log("Error Here " + error);
      }
       
    });
  }, []);
  return (
    <div className="w-full relative min-h-screen">
      <div>
        <Routes>
          <Route
            path="/auth"
            element={isLogin ? <Navigate to="/"></Navigate> : <Auth isLogin={isLogin} setIsLogin={setIsLogin}></Auth>}
          ></Route>

          <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin}></Home>}></Route>
          <Route element={<ProctedRoutes isLogin={isLogin}></ProctedRoutes>}>
            <Route path="/main" element={<Main></Main>}></Route>
          </Route>
          <Route path="/tasks/:ProjectId" element={<Task></Task>}></Route>
          <Route path="/resources/:TaskId/:ProjectId" element={<Resource></Resource>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
