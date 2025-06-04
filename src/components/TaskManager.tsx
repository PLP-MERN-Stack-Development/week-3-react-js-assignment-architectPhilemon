import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((t) =>
          filter === "completed" ? t.completed : !t.completed
        );

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const toggleTask = (id: number) =>
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  const deleteTask = (id: number) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const clearCompleted = () =>
    setTasks(tasks.filter((t) => !t.completed));

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 px-3 py-2 rounded border focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-white"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </form>
      <div className="flex items-center gap-3 mb-4">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant="danger"
          onClick={clearCompleted}
          className="ml-auto"
          disabled={tasks.every((t) => !t.completed)}
        >
          Clear Completed
        </Button>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {filteredTasks.length === 0 && (
          <li className="py-3 text-gray-500 dark:text-gray-400 text-center">
            No tasks found.
          </li>
        )}
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex items-center py-3 group fade-in">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-2 accent-blue-600"
            />
            <span
              className={
                "flex-1 " +
                (task.completed
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "")
              }
            >
              {task.text}
            </span>
            <Button
              variant="danger"
              className="ml-3 opacity-0 group-hover:opacity-100 transition"
              onClick={() => deleteTask(task.id)}
              aria-label="Delete task"
              title="Delete"
            >
              🗑️
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}