
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Class from "./pages/Class";
import Students from "./pages/Students";
import Finance from "./pages/Finance";
import Staff from "./pages/Staff";
import Registration from "./pages/Registration";

import "./App.css";

function App() {
  return (
    <div className="dashboard">

      <Sidebar/>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/students" element={<Students />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
