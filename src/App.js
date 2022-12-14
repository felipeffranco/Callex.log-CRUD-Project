import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Homepage";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className=""> 
      <div className="gradientGreen"></div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
