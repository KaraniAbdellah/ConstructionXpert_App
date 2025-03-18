import Home from "./components/Home_Com/Home";
import {Route, Routes} from "react-router";

// Import Css Filies
import "./css_styles/bg.css";

function App() {
  return (
    <div className='w-full relative min-h-screen'>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Home></Home>}></Route>
        <Route path="/register" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;

