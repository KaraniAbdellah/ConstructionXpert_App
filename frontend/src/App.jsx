import Home from "./components/Home";

// Import Css Filies
import "./css_styles/bg.css";

function App() {
  return (
    <div className='w-full relative min-h-screen'>
      <div className="bg absolute top-0 left-0"></div>
      <Home></Home>
    </div>
  );
}

export default App;

