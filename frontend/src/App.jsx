import Home from "./components/Home_Com/Home";
import Login from "./components/reg_login/Login";
import Register from "./components//reg_login/Register";
import {Route, Routes} from "react-router";
import ProctedRoutes from "./components/ProctedRoutes";
import Main from "./components/main_com/Main";


// Import Css Filies
import "./css_styles/bg.css";

function App() {
  const user = false;
  return (
    <div className='w-full relative min-h-screen'>
      <div>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/" /> : <Home />}></Route>
            <Route element={<ProctedRoutes user={user}></ProctedRoutes>}>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/register" element={<Register></Register>}></Route>
              <Route path="/main" element={<Main></Main>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
            </Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;

