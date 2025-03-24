import Home from "./components/Home_Com/Home";
import { Navigate, Route, Routes } from "react-router";
import ProctedRoutes from "./components/Common/ProctedRoutes";
import Main from "./components/main_com/Main";
import Auth from "./components/auth/Auth";
import Task from "./components/main_com/Task";
import Resource from "./components/main_com/Resource";
import Loading from "./components/Common/Loading";
import FAQ from "./components/Common/FAQ";
import Pricing from "./components/Common/Pricing";
import { Toaster } from "react-hot-toast";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Cookie from "js-cookie";



// Import Css Filies
import "./css_styles/bg.css";
import "./css_styles/loading.css";
import { Heading1 } from "lucide-react";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const token = Cookie.get("token");
    if (!token) {
      setIsLoading(false);
      // console.log("token does not found!!!");
      return;
    }

    // Verfiy The Token
    async function VerifyTheUserToken() {
      try {
        await axios
          .get("http://127.0.0.1:3000/user/GetMe", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            setIsLogin(true);
          })
          .finally(() => setIsLoading(false));
      } catch (error) {
        // console.log("Authentication error:", error);
        if (token) console.log("Please Login {Expired Login}" + error);
      }
    }
    VerifyTheUserToken();
  }, []);

  if (isLoading) {
    return <Loading></Loading>
  }


  return (
    <div className="app w-full relative min-h-screen">
      <Toaster
      position="top-center"
      toastOptions={
        {
          duration: 2000,
        }
      }
      />

      <div>
        <Routes>
          <Route
            path="/auth"
            element={
              isLogin ? (
                <Navigate to="/main"></Navigate>
              ) : (
                <Auth isLogin={isLogin}  setIsLogin={setIsLogin} />
              )
            }
          ></Route>

          <Route
            path="/"
            element={<Home  isLogin={isLogin} setIsLogin={setIsLogin} />}
          ></Route>

          <Route element={<ProctedRoutes isLogin={isLogin} />}>
            <Route path="/main" element={<Main setIsLogin={setIsLogin} />}></Route>
          </Route>

          <Route path="/tasks/:ProjectId" element={<Task />}></Route>
          <Route
            path="/resources/:TaskId/:ProjectId"
            element={<Resource />}
          ></Route>

          <Route path="/faq" element={<FAQ>Hello FAQ</FAQ>}></Route>
          <Route path="/pricing" element={<Pricing>Hello Pricing</Pricing>}></Route>
        </Routes>
        <div>
      </div>
      </div>
    </div>
  );
}

export default App;
