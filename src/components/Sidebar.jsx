
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/class">Class</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/finance">Finance</NavLink>
        <NavLink to="/staff">Staff</NavLink>
        <NavLink to="/registration">Registration</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
