import { NavLink } from "react-router-dom";

function Link({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "px-3 py-2 rounded transition-colors " +
        (isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/nasa">NASA APOD</NavLink>
      <NavLink to="/crypto">Crypto</NavLink>
    </nav>
  );
}
