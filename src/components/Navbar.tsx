import { Link, NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow mb-6">
      <div className="container mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-blue-600 dark:text-blue-400">
          TaskManager
        </Link>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700 ${
                isActive ? "text-blue-600 dark:text-blue-300 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700 ${
                isActive ? "text-blue-600 dark:text-blue-300 font-semibold" : ""
              }`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/api-demo"
            className={({ isActive }) =>
              `px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700 ${
                isActive ? "text-blue-600 dark:text-blue-300 font-semibold" : ""
              }`
            }
          >
            API Demo
          </NavLink>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}