import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Homepage";
import Admin from "./pages/admin/Admin";
import AboutUs from "./pages/AboutUs";
import Containers from "./pages/Containers";
import Services from "./pages/Services";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="gradientGreen"></div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/containers" element={<Containers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
