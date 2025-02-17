import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-2 flex justify-between items-center rounded-md ${
              todo.completed ? "bg-green-200 line-through" : "bg-white"
            } dark:bg-gray-700 dark:text-white`}
          >
            <span
              onClick={() => toggleComplete(todo.id)}
              className="cursor-pointer"
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 font-bold"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
