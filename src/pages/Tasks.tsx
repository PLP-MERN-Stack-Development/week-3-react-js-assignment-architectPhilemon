import React, { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: input, completed: false }
      ]);
      setInput("");
    }
  }

  function toggleTask(id: number) {
    setTasks(tasks =>
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTask(id: number) {
    setTasks(tasks => tasks.filter(t => t.id !== id));
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-extrabold text-pink-600 dark:text-pink-300 mb-6 text-center drop-shadow">
        🎯 Task Manager
      </h2>
      <div className="flex gap-2 mb-6">
        <input
          className="flex-1 border-2 border-pink-300 dark:border-pink-700 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a colorful task..."
        />
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-5 py-2 rounded-r shadow hover:from-pink-600 hover:to-yellow-500 transition"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="space-y-3">
        {tasks.length === 0 && (
          <li className="text-gray-400 text-center">No tasks yet. Add one!</li>
        )}
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow transition
              ${task.completed
                ? "bg-gradient-to-r from-green-200 to-green-400 dark:from-green-700 dark:to-green-900"
                : "bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-gray-800 dark:to-pink-900"
              }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="accent-pink-500 w-5 h-5"
              />
              <span
                className={`text-lg font-medium transition ${
                  task.completed
                    ? "line-through text-green-700 dark:text-green-200"
                    : "text-pink-700 dark:text-pink-200"
                }`}
              >
                {task.text}
              </span>
            </div>
            <button
              className="ml-4 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition"
              onClick={() => deleteTask(task.id)}
              title="Delete"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}