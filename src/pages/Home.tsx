import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] gap-10 py-12 px-4 text-center bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 dark:from-fuchsia-900 dark:via-indigo-900 dark:to-blue-900 transition-colors">
      <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
        Welcome to{" "}
        <span className="underline decoration-wavy decoration-pink-400">
          TaskManager!
        </span>
      </h1>
      <p className="text-xl font-medium text-pink-700 dark:text-yellow-200 max-w-2xl mx-auto bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-100 dark:from-indigo-800 dark:via-fuchsia-800 dark:to-blue-800 rounded-lg py-4 px-6 shadow">
        Organize your day, manage your tasks, and explore live API data—all in a
        beautiful, responsive, and colorful interface!
      </p>
      <div className="flex flex-col sm:flex-row gap-6 mt-4">
        <Link to="/tasks">
          <Button
            variant="primary"
            className="w-44 bg-gradient-to-r from-pink-500 to-yellow-400 shadow-lg hover:from-pink-600 hover:to-yellow-500"
          >
            My Tasks
          </Button>
        </Link>
        <Link to="/api-demo">
          <Button
            variant="secondary"
            className="w-44 bg-gradient-to-r from-blue-400 to-pink-300 shadow-lg hover:from-blue-500 hover:to-pink-400"
          >
            Explore API
          </Button>
        </Link>
      </div>
      <Card className="mt-10 w-full max-w-2xl shadow-2xl border-2 border-pink-200 dark:border-fuchsia-700 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 dark:from-indigo-900 dark:via-fuchsia-900 dark:to-blue-900">
        <ul className="list-disc list-inside text-lg text-blue-800 dark:text-yellow-100 text-left space-y-3">
          <li>
            🛠️{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-300">
              Built with React, Vite, and Tailwind CSS
            </span>
          </li>
          <li>
            ✨{" "}
            <span className="font-semibold text-yellow-600 dark:text-yellow-300">
              Light/Dark theme switcher
            </span>
          </li>
          <li>
            🔌{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              Live API integration (JSONPlaceholder)
            </span>
          </li>
          <li>
            📱{" "}
            <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-300">
              Fully responsive design
            </span>
          </li>
          <li>
            🧑‍💻{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-300">
              Modern, modular components
            </span>
          </li>
        </ul>
      </Card>
    </section>
  );
}